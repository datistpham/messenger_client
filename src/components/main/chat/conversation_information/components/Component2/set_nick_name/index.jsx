import axios from 'axios'
import { query, ref, getDatabase, onValue } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const db= getDatabase()
const SetNickName = (props) => {
    const { idm }= useParams()
    const [listUser, setListUser]= useState(()=> [])
    const [nickName, setNickName]= useState(true)
    useEffect(()=> {
    const LoadMoreData= ()=> {
        const starCountRef = query(ref(db, `all_message/nicknames/${idm}/`))
            onValue(starCountRef, async (snapshot) => {
            const data = await snapshot.val()
            try {
                await axios({
                    url: 'http://localhost:4000/getlistuser',
                    method: 'post',
                    data: {
                        listuser: Object.keys(data)
                    }
                })
                .then((res)=> setListUser(res.data))

            }catch(err) {
                console.log(err)
            }
        })
    }
    LoadMoreData()
    },[idm])  
  return (

    <div style={{width: '100%', height: '100%', position: 'fixed', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4cc', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999}}> 
        <div style={{width: 548, backgroundColor: "#fff", boxShadow: '0 12px 28px 0 var(--shadow-2),0 2px 4px 0 var(--shadow-1),inset 0 0 0 1px var(--shadow-inset)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 6, overflow: 'hidden'}}>
            <div style={{width: '100%',height: 60, padding: '0 60px 0 60px', borderBottom: '1px solid #0000001a', position: 'relative'}}>
                <div style={{width: '100%',padding: '0 16px 0 16px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <span style={{fontSize: 20, fontWeight: 700}}>Nicknames</span>
                </div>
                <div onClick={()=> props.isSetOpenSetNickNamesFalse()} role="button" className='_90rifdewweet' style={{width: 36, height: 36, position: 'absolute', top: '50%', right: 0, transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#f2f0f5'}}>
                    <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps sp_YAcpVvDvR5R_1_5x sx_4ab242"></i>
                </div>
            </div>
            <div style={{width: '100%',height: 'auto', padding: '8px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                {
                    listUser.map(item=> 
                        nickName=== true ?
                        (
                            <div onClick={()=> setNickName((prev)=> !prev)} key={uuidv4()} style={{width: '100%', padding: '0 8px', height: 48}}>
                                <div role="button" className="_9wiekewfszd" style={{width: '100%', paddingLeft: 8, height: '100%', display: 'flex', flexDirection: 'row',alignItems: 'center', position: 'relative'}}>
                                    <div style={{width: 36, height: 48,padding: '6px 0', marginRight: 12}}>
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                                            <img style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '50%'}} src={item.avatar} alt="" />
                                        </div>  
                                    </div>
                                    <div style={{display: 'flex', alignItems: 'normal', flexDirection: 'column', justifyContent: 'center', padding: '8px 0'}}>
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <span style={{textTransform: 'capitalize', fontSize: 14, fontWeight: 600}}>{item.firstname} </span>
                                            <span style={{textTransform: 'capitalize', fontSize: 14, fontWeight: 600}}>{item.surname}</span>
                                        </div>
                                        <div style={{display: 'flex', justifyContent: 'normal', alignItems: 'normal'}}>
                                            <span style={{fontSize: 12, color: '#65676b'}}>Set nickname</span>
                                        </div>
                                    </div>
                                    <div  style={{width: 36, height: 36, position: 'absolute', right: 0, top: '50%', transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1 sp_9r6gWxIlGQ0_1_5x sx_0c44b3"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ): <div key={uuidv4()} style={{width: '100%', padding: '8px 8px', height: 48,boxSizing: 'content-box'}} >
                            <div style={{width: '100%', height: '100%'}}>
                                <input className='_93i29rekfdwew' type="text"  style={{width: '100%', height: '100%', textIndent: 10, textTransform: 'capitalize', border: '1px solid #fff', outlineColor: '#fff'}} placeholder={`${item.firstname}`}  />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default SetNickName
