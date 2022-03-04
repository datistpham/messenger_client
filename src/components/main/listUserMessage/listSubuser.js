import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { query, ref,getDatabase, orderByChild, limitToLast, onValue } from 'firebase/database'
import { activeIcon } from '../../../icon'
import { MinusTime } from '../../util/formatime'
import IconToOpen from '../more_message/IconToOpen'

const db= getDatabase()
const UserInListDone= (props)=> {
    const idUser= useSelector(state=> state.getuserbycookie_reducer.id)
    const numberoffile= useSelector(state=> state.getNumberofFile_reducer)
    const [lastMessage, setLastMessage]= useState(()=> "")
    const [userLastMessage, setUserLastMessage]= useState(()=> "")
    const [typeLastMessage, setTypeLastMessage]= useState(()=> "")
    const [stateActive, setStateActive]= useState(()=> "")
    const [timeLast, setTimeLast]= useState(()=> 0)
    const [order, setOrder]= useState(()=> 0)
    const [idVideoCall, setIdVideoCall]= useState("")
    const [moreMessage, setMoreMessage]= useState(false)
    const [moreMessage2, setMoreMessage2]= useState(false)
    const isMoreMessageTrue= ()=> {
        setMoreMessage(()=> true)
    }
    const isMoreMessage2True= ()=> {
        setMoreMessage2(()=> true)
    }
    const isMoreMessageFalse= ()=> {
        setMoreMessage(()=> false)
    }
    const isMoreMessage2False= ()=> {
        setMoreMessage2(()=> false)
    }
    const isMoreMessage2Toggle= ()=> {
        setMoreMessage2(prev=> !prev)
    }
    // const date= new Date()
    useEffect(()=> {        
        const getData= ()=> {
            const starCountRef = query(ref(db, `all_message/message/${props.idMessage}/`), orderByChild("/timestamp"), limitToLast(1))
            onValue(starCountRef, async (snapshot) => {
            const data = await snapshot.val()
            setLastMessage(Object.values(data)[0].message)
            setUserLastMessage(Object.values(data)[0].sendby)
            setTypeLastMessage(Object.values(data)[0].type)
            setTimeLast(Object.values(data)[0].timestamp)
            setOrder(Object.values(data)[0].order)
            });
        }
        const getData2= ()=> {
            const starCountRef= ref(db, `all_message/idVideoCall/${props.activeUser}/id/`)
            onValue(starCountRef, async (snapshot)=> {
                const data= await snapshot.val()
                setIdVideoCall(data)
            })
        }
        getData2()
        getData()
        return ()=> {
            setLastMessage(()=> "")
            setUserLastMessage(()=> "")
        }
    },[props.idMessage, props.activeUser])
    useEffect(()=> {
        const getData= ()=> {
                const starCountRef = ref(db, `all_message/state/${props.activeUser}/`)
                onValue(starCountRef, async (snapshot) => {
                const data = await snapshot.val()
                setStateActive(data)
            })
        }
        getData()
    },[props.activeUser])
    const [data1, setData1]= useState()
    useEffect(()=> {
        setData1(props.data)
        return ()=> {
            setData1(()=> "")
        }
    }, [props.data])
    
    if(data1 === undefined) {
        return (
            <div>

            </div>
        )
    }
    else {
        return (

            <div className={props.className} style={{position: 'relative', zIndex: 1}} onMouseEnter={()=> isMoreMessageTrue()} onMouseLeave={()=> isMoreMessageFalse()} >
                <div className={props.className1}>
                    <div className={props.className3} >
                        <img src={data1.avatar || "https://cf.shopee.vn/file/8ad4899c206664b451b6ad7cdde9aa12"} alt="Can't display" className="_8253" />
                        {
                            (stateActive.active==="online" && activeIcon)
                        }
                    </div>
                </div>
                <div className={props.className2}>
                    <div className={props.className4} >
                        <div className="_2416">
                            <span className='_3453'>{data1.firstname} </span>
                            <span className='_7932'>{data1.surname}</span>
                        </div>
                    </div>
                    <div className={props.className5} style={{display: 'inline-flex', gap: 5}} ><div className='_940wid _w40eik _i9122'>{userLastMessage=== idUser ? "You: " : ""}</div>
                        <div className="_20esd _0342m _9i4wk2" style={{width: 200 ,whiteSpace: 'nowrap', overflow: "hidden",textOverflow: 'ellipsis',}}> 
                        {( typeLastMessage==="" || typeLastMessage=== undefined ) ? <span>{ lastMessage }</span> :  (typeLastMessage==="icon" ? <img height="16" width="16" alt="(Y)" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/ec7/1.5/16/LIKE.png" /> : ` just send ${numberoffile} photos`)} <span className="kvgmc6g5 cgat1ltu oygrvhab kkf49tns"><span className="d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 fe6kdd0r mau55g9w c8b282yb d9wwppkn mdeji52x sq6gx45u j5wam9gi knj5qynh oo9gr5id" dir="auto"><span><span className="rfua0xdk pmk7jnqg stjgntxs ni8dbmo4 ay7djpcl q45zohi1">&nbsp;</span><span aria-hidden="true">· </span></span></span></span> {MinusTime(timeLast).split(" ")[0]}
                        </div>
                    </div>
                </div>
                {
                   ((moreMessage=== true) || (moreMessage2=== true)) &&
                    <IconToOpen isMoreMessage2Toggle={isMoreMessage2Toggle}  />
                }
            </div>
        )

    }
}
export default React.memo(UserInListDone)