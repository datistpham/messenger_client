import React, { useEffect , lazy, Suspense, createContext} from 'react'
import HeaderFrameChat from './frame_chat/header'
import { useParams } from 'react-router-dom'
import FooterFrameChat from './frame_chat/footer'
import D from './conversation_information'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import SkeletonFramechat from './frame_chat/utilities/skeleton_framechat'
import { query, getDatabase, ref, onValue, orderByChild } from 'firebase/database'
import { useDispatch } from 'react-redux'
import { rootActions } from '../../../redux/pure/action/root.action'
import BlockMainMessage from './conversation_information/components/Component2/block_message/main'
import * as R from 'ramda'


const db= getDatabase()
export const MyContext= createContext()
const T = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./frame_chat/utilities/frame_chatMain")), 300)
    })
  })
// import ProFileUserRootFile from './profile_user'
const B= (props)=> {
    const { idm }= useParams()
    const [isBlock, setIsBlock]= useState(()=> "")
    const location= useLocation()
    const [stateActive, setStateActive]= useState(()=> "")
    const dispatch= useDispatch()
    const [theme, setTheme]= useState(()=> "")
    const { id }= location.state
    const [themeIg, setThemeIg]= useState(()=> "")
    const [openMoreConversation, setOpenMoreConversation]= useState(()=> JSON.parse(localStorage.getItem("s_C_S")))
    const [message, setMessage]= useState([])
    const [media, setMedia]= useState(()=> [])
    const [id_collection, setid_collection]= useState(()=> [])
    const [countMedia, setCountMedia]= useState(()=> 0)
    useEffect(()=> {
        const getData= async ()=> {
            const starCountRef = query(ref(db, `all_message/message/${idm}/`), orderByChild("/timestamp"))
                onValue(starCountRef, async (snapshot) => {
                // snapshot.forEach(useSnapshow=> {
                //     setKeyLastArray((prev)=> ([...prev, useSnapshow.key]))
                // })
                
                const data = await snapshot.val()
                try {
                    setMessage(R.sortBy(R.prop("timestamp"),Object.values(data)))
                    setid_collection(R.sortBy(R.prop("timestamp"),Object.keys(data)))
                    setMedia(R.sortBy(R.prop("timestamp"),Object.values(data).filter(res=> res.type=== "image")))
                    setCountMedia(Object.values(data).filter(res=> res.type==="image").length)
                }catch(err) {
                    console.log(err)
                }
            })
        }
        getData()

        return ()=> {
            setMessage(()=> []);
        }
    },[idm])
    const isOpenMoreConversation= ()=> {
        setOpenMoreConversation(prev=> !prev)
        localStorage.setItem("s_C_S", !openMoreConversation)
    }
    useEffect(()=> {
        const getData= ()=> {
            const starCountRef = query(ref(db, `all_message/block_message/${idm}/blockBy/`))
                onValue(starCountRef, async (snapshot) => {
                const data = await snapshot.val()
                setIsBlock(data)
                dispatch(rootActions.blockUserAction(data))
            })
        }
        getData()
        return ()=> []
    },[idm, dispatch])
    useEffect(()=> {
        const getData= ()=> {
                const starCountRef = query(ref(db, `all_message/state/${id}/active/`))
                onValue(starCountRef, async (snapshot) => {
                const data = await snapshot.val()
                setStateActive(data)
            })
        }
    getData()
    },[id, dispatch])
    useEffect(()=> {
        const getTheme= async ()=> {
            await axios({
                url: 'http://localhost:4000/id/message',
                method: 'get',
                params: {
                    idmessage: location.pathname.split("/")[2]
                },
                responseType: 'json'
            })
            .then(res=> {setTheme(res.data[0].theme);setThemeIg(res.data[0].themeIg)})
        }
        getTheme()
    },[location.pathname])
    return (
        <div className={props.className} style={props.style}>
            <style dangerouslySetInnerHTML={{
                
                __html: [
                    '._94ujmdk_i9WJEMDS  {',
                    `width: ${openMoreConversation=== true ? '66.6%' : "100% !important"}`,
                    '}',
                    '._84jwe {',
                    `width: ${openMoreConversation=== true ? '33.4%' : "0"}`,
                    '}'
                    
                    ].join('\n')
                }}>
            </style>
            <div className={props.className1} style={props.style}>
                {/* header */}
                <HeaderFrameChat active={stateActive} id={id} block={isBlock} idUser={props.idUser} openMoreConversation={openMoreConversation} theme={theme} setOpen={isOpenMoreConversation} />
                
                {/* chat frame */}
                <Suspense fallback={<SkeletonFramechat />}>
                    <T message={message} id_collection={id_collection} theme={theme}  themeIg={themeIg} height={isBlock===props.idUser ? "calc(100% - 64px - 150px - 12px)" : "calc(100% - 64px - 54px)"} />
                </Suspense>
                {/* footer frame */}
                {
                    isBlock===props.idUser ?
                    <BlockMainMessage height={150} />
                    :
                    <FooterFrameChat theme={theme} /> 
                }

            </div>
            {
                openMoreConversation===true ?
                <MyContext.Provider value={{media: media}}>
                    <D block={isBlock} countMedia={countMedia} active={stateActive} className="_84jwe _38ujqe _283uje" />
                </MyContext.Provider>
                : ""
            }
        </div>
    )
}
export const Po= React.memo((props)=> {
    const { idm }= useParams()
    return (
        <div>{idm}</div>
    )
})  
export default React.memo(B)
