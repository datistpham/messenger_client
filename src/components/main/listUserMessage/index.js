// import { FirstPageRounded } from '@material-ui/icons'
import axios from 'axios'
import React, { useState, lazy } from 'react'
// import { useMemo } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import * as R from 'ramda'
import { Button } from 'react-bootstrap'
import { ReloadIcon } from '../../../icon/icon2.jsx'
// import { rootActions } from '../../../redux/pure/action/root.action.js'

const UserInListDone = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./listSubuser.js")));
    });
});

  const ListMessageUser = (props) => {
    const [listUserSort, setListUserSort]= useState(()=> [])   
    const allListUser= useSelector(state=> state.getAllListUser)
    // R.sortWith([R.descend(R.prop("timestamp"))])
    const [allListUserSort, setAllListUserSort]= useState(()=> (R.sortWith([R.descend(R.prop("timestamp"))], allListUser)))
    const listUser= useSelector(state=> state.getListUserReducer)
    // const listIdMessage= useSelector(state=> state.getIdMessageReducer)
    // const firstListUser= useMemo(()=> localStorage.getItem("_f_id_L"), [])
    const [firstListUser, setFirstListUser]= useState(()=> "")
    // const dispatch= useDispatch()
    // const [idMessage, setIdMessage]= useState(()=> (listUser))
    // const [test, setTest]= useState(()=> [])
    // const mergeAll= (a)=> a.map((item,key)=> setData(data.push(item)))
    const [data, setData]= useState(()=> [])
    useEffect(()=> {
        Object.values(allListUserSort).map(item=> setListUserSort(prev=> ([...prev, item.with.user1])))
    },[allListUserSort])
    
    useEffect(()=> {
        if(allListUserSort[0] !== undefined) {
            localStorage.setItem("_f_id_L", allListUserSort[0]["id_message"])
            setFirstListUser(localStorage.getItem("_f_id_L"))   
        }
        axios({
            url: "http://localhost:4000/getlistuser",
            method: "post",
            data: {
                listuser: listUserSort || listUser
            }
            
        })
        .then(res=> {
            setData(res.data)
        })
        .catch(err=> console.log(err))
        
        return ()=> {
            setData(()=> [])
        }
    }, [ allListUserSort, listUserSort, listUser])
    
    // useEffect(()=> {
    //     mergeAll(listIdMessage)

    // },[listIdMessage])
    const reloadData= ()=> {
        window.location.reload()
    }
    if(allListUserSort.length >= 1) {
        return (
            <div className="_6272 _6489">
                {
                allListUserSort.map((item,key)=> 
                <div key={uuidv4()} className='_4375 _4291' style={{order: 1}} >
                    <NavLink 
                        key={key}
                        to={`/t/${item.id_message}`} 
                        className='_3152 _3842' 
                        state={ data[key] }
                        // onClick={()=> dispatch(rootActions.counteraction(1))}
                    >
                        <UserInListDone
                            data={data[key]}
                            activeUser={listUser[key]}
                            idMessage={item.id_message}
                            className="_4382 _89344"
                            className1="_5714 _48021"
                            className2="_38939"
                            className3="_3432 _82314"
                            className4="_6423 _98322"
                            className5="_5241 _43123 _29264"
                        />
                    </NavLink>
                    
                </div>
                )}
                {
                    data[0] !== undefined &&
                    <Routes>
                        <Route path='/' element={<Navigate replace to={`/t/${firstListUser}`} state={data[0]} />} />
                    </Routes>
                    }
            </div>
            
        )
    }
    else {
        return (
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <Button onClick={()=> reloadData()}><ReloadIcon /></Button>
            </div>
        )
    }
    
}

export default React.memo(ListMessageUser)
