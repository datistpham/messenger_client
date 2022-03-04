import React, {useState, Suspense, useCallback, useMemo } from 'react'
import { Placeholder } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
// eslint-disable-next-line
import { app } from '../../../firebase'
import {getDatabase, ref, onValue, update } from 'firebase/database'
import { useEffect } from 'react'
// import { GetListMessage } from '../../../api/getlistuser'
import { useDispatch, useSelector } from 'react-redux'
import { rootActions } from '../../../redux/pure/action/root.action'
import { lazy } from 'react'
import { style } from '../../../style/style-js'
import { s1, s2, s3 } from '../../../icon'
import B from "./frame_chat"
import Cookies from 'js-cookie'
import { socket } from '../../chat_video_call/Context'
import axios from 'axios'
// import ConCacVipPro from '../../chat_video_call/components/Notification'

const ListMessageUser = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("../listUserMessage")))
    })
  })
const db= getDatabase()
let nowTime= new Date()
export function writeNewSocket(uid, state) {
    const db = getDatabase()
    const postData = {
      id: state
    }
    const updates = {}
    updates['all_message/idVideoCall/' + uid + '/'] = postData    
    return update(ref(db), updates)
}
export default function F(props) {
    let timeOff= useMemo(()=> nowTime,[]) 
    const [userOnl, setUserOnl]= useState(()=> Cookies.get("_s_U_ID"))
    const handleTabClosing = useCallback(() => writeNewPost(userOnl, timeOff.getTime()),[userOnl,timeOff])
    
    useEffect(()=> {
        window.addEventListener("beforeunload", alertUser)
        window.addEventListener("unload", handleTabClosing)
        writeNewPost(userOnl,"online")
        return ()=> {
            window.removeEventListener("beforeunload", alertUser)
            window.removeEventListener("unload", handleTabClosing)
            setUserOnl(()=> "")
        }

    },[handleTabClosing,userOnl]) 
    useEffect(()=> {
        socket.on("me", id=> {
            writeNewSocket(userOnl, id)
        })

        return ()=> {
            writeNewSocket(userOnl, "off")
        }
    },[userOnl])
    function writeNewPost(uid, state) {
        const db = getDatabase()
        const postData = {
          active: state
        }
        const updates = {}
        updates['all_message/state/' + uid + '/'] = postData    
        return update(ref(db), updates)
    }

    const alertUser = (event) => {
        event.preventDefault()
        event.returnValue = ''
        
    }
   
    return (
        <div className='_3_a8w4ujks_483hes'>
            {/* more conversation */}
            {/* list message */}
            <C className='_4uijds_9203ujio _93ujewid_irwoej' style={style.styleComponent3} />
            <A className='_4uijds_9203ujio _i9waekxw_CKSOD' style={style.styleComponent1} />
            {/* frame chat */}
            <Routes>
                <Route path="/:idm" element={<B idUser={userOnl} className="_942ikw _203kwe" className1='_4uijds_9203ujio _94ujmdk_i9WJEMDS' style={style.styleComponent2} />} />
            </Routes>
        </div>
    )
}

const S= ()=> {
    const [animate1, setAnimate1]= useState({
        opacity: 1,
        left: 25,
        padding: 36,
        transition: 'all 0s linear'
    })
    const animate1F= ()=> {
        setAnimate1({...{opacity: 0,left: 0,padding: 12}})
    }

    const removeAnimate1= ()=> {
        setAnimate1({opacity: 1,left: 25,padding: 36,transition: 'all 0.07s linear'})

    }
    return (
        <div className='_djsidas_23qcs_dsnd' style={{paddingRight: 20,borderRadius: 80,height: 60,marginBottom: 0, display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <div style={{position: 'relative',left: `${animate1.left}px`,opacity: `${animate1.opacity}`,width: 20,display: 'flex',justifyContent: 'center', alignItems: 'center', alignContent: 'center',cursor: 'context-menu',transition: `${animate1.transition}`}} className='_ijds_suiejw_8wjedm'><svg viewBox="0 0 16 16" width="1em" height="1em" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv gl3lb2sf hhz5lgdu"><g fillRule="evenodd" transform="translate(-448 -544)"><g fillRule="nonzero"><path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path><path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path><path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path><path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path></g></g></svg></div>
            <input 
                onFocus={animate1F} 
                onBlur={removeAnimate1} 
                type="text" 
                placeholder='Search messenger' 
                style={{width: '100%',height: 36, padding: `7px 12px 9px ${animate1.padding}px`,outline: 'none',border: 'none',backgroundColor: '#f3f3f5',borderRadius: 80,fontSize: 16,color: '#000'}}
            />
        </div>
    )
}

// list message
export const L= (props)=> {
    const idUser= Cookies.get("_s_U_ID")
    const [id_message, setId_Message]= useState(()=> [])
    const [id_message_user, setId_Message_User]= useState(()=> [])
    const [item, setItem]= useState(()=> [])
    // const [idMessage, setIdMessage]= useState(()=> [])
    const dispatch= useDispatch()
    useEffect(()=> {
        const getData= async ()=> {
                const starCountRef = ref(db, `all_message/users/${idUser}/`)
                onValue(starCountRef, async (snapshot) => {
                const data = await snapshot.val()
                Object.keys(data).map(item=> (setId_Message((prev)=> [...new Set([...prev,data[item]])])))
                Object.keys(data).map(item=> (setId_Message_User((prev)=> [...new Set([...prev,data[item]["id_message"]])])))
            })
        }
        getData()
    },[idUser])
    useEffect(()=> {
        Object.keys(id_message).map(item=> {
            return setItem((prev)=> [...new Set([...prev, id_message[item]["with"].user1])])
        })
    },[id_message, dispatch])
    useEffect(()=> {
        dispatch(rootActions.getAllListUserAction(id_message))
        dispatch(rootActions.getListUser(item))
        dispatch(rootActions.getListIdMessage(id_message_user))
    },[item, dispatch,id_message_user, id_message])
    if(id_message.length<1) {
        return (
            <div className={props.className}>
                {[...Array(8)].map((element, index)=> (
                    <UserInlistSkeleton
                        key={index}
                        className="_7564"
                        className1="_5721"
                        className2="_4892"
                        className3="_3723"
                        className4="_4683"
                        className5="_7382"
                />
                ))}
            </div>
        )
    }

    else {
        return (
            <div className={props.className}>
                    {/* {console.log(id_message, data["userListMessage"])} */}

                <AggregateUserListDone list={item} />
                {/* <Placeholder animation="glow">
                    <Placeholder className='_sjdsdjs_sdsjdn_389q_Skais' spellCheck={false}  />
                </Placeholder> */}

            </div>
        )
    }
}

const UserInlistSkeleton= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <Placeholder animation='glow'>
                    <Placeholder className={props.className3} />
                </Placeholder>
            </div>
            <div className={props.className2}>
                <Placeholder animation="glow" >
                    <Placeholder className={props.className4} />
                </Placeholder>
                <Placeholder animation="glow">
                    <Placeholder className={props.className5} />
                </Placeholder>
            </div>
        </div>
    )
}

const AggregateUserListDone= (props)=> {
    
    return (
        <div className="_5764 _8924" >
            <Suspense fallback={
                    <UserInlistSkeleton
                    className="_7564"
                    className1="_5721"
                    className2="_4892"
                    className3="_3723"
                    className4="_4683"
                    className5="_7382"
                />}>
                <ListMessageUser />
            </Suspense>
        </div>
    )
}

const AvatarA= (props)=> {

    const avatarUser= useSelector(state=> state.getuserbycookie_reducer.avatar)
    const idUser= useSelector(state=> state.getuserbycookie_reducer.id)
    if(avatarUser=== undefined) {
        return (
            <SkeletonAvatar className="_4968" className1="_8431" />
        )
    }
    else {
        return (
            <Link to={`/p/${idUser}`}>
                <img draggable={false} className='_38923_ewioejmds_jiodjsd2' src={avatarUser} alt="" style={style.forImage1}/>       
            </Link>
        )
    }
}
const A= (props)=> {
    const dispatch= useDispatch()
    useEffect(()=> {
            const getData= async ()=> {
                await axios.get("http://localhost:4000/user/loginauto", {
                    params: {user: Cookies.get("_s_ID")}
                })
                .then(res=> dispatch(rootActions.getUserbyCookie(res.data[0])))
            }
            getData()
        
    },[dispatch])
    return (
        <div className={props.className} style={props.style}>
            
            <div className='_38jskmdslkd_sjdsmas'>
                <div className='_dosasa_asdj _sdjujna_89xkxxakmmx'>
                    <AvatarA  />
                    <div className='_6453'>
                        Chats
                    </div>
                </div>
                <div className='_djskdmskd _fjuirjsmewd'>
                    <T className='_dskdmdsdsdl' style={style.forSvg} svg={s1}/>
                    <T className='_dskdmdsdsdl' style={style.forSvg} svg={s2}/>
                    <T className='_dskdmdsdsdl' style={style.forSvg} svg={s3}/>
                </div>
            </div>
            <S />
            <L className='_wen83_dsjdk_328ujeisd'/>
        </div>
    )
}

const C= (props)=> {
    return (
        <div className={props.className} style={props.style}>
        </div>
        
    )
}

const T= (props)=> {
    return (
        <div className={props.className} style={props.style}>
            {props.svg}
        </div>
    )
}

const SkeletonAvatar= (props)=> {
    return (
        <div className={props.className}>
            <Placeholder  animation="glow">
                <Placeholder className={props.className1} />
            </Placeholder>
        </div>
    )
}