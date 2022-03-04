import { ref, set, getDatabase, query, orderByChild, onValue, limitToLast, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Chooseimageicon, Emojiicon, Likeicon, Moreactionsicon, Senticon } from '../../../../icon'
import TooltipHeader from './utilities/tooltip'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import UploadImage from '../../../../firebase/upload_image'
import Cookies from 'js-cookie'

const db= getDatabase()

const FooterFrameChat = (props) => {
    const [differentTime, setDifferentTime] =useState(()=> 0)
    const [idLast, setIdLast]= useState(()=> "")
    const { idm }= useParams()
    const [isUser, setIsUser]= useState(()=> Cookies.get("_s_U_ID"))
    const themeUpdate= useSelector(state=> state.thememessage_reducer)
    const [sendImage, setSendImage]= useState(false)
    
    useEffect(()=> {
        const getData= async ()=> {
            const starCountRef = query(ref(db, `all_message/message/${idm}/`), orderByChild("/timestamp"), limitToLast(1))
                onValue(starCountRef, async (snapshot) => {
                const data = await snapshot.val()
                try {
                    setDifferentTime(Object.values(data)[0].timestamp)
                    setIdLast(Object.keys(data)[0])
                }catch(err) {
                    console.log(err)
                }
            })
        }    
        getData()
    },[idm])
    const settimestamp= new Date()
    const [like, setLike]= useState(()=> true)
    const [content, setContent]= useState(()=> "")
    const idUser= useSelector(state=> state.getuserbycookie_reducer.id)
    const setLikeorSent= (e)=> {
        if((e.target.value==='') || (!(e.target.value.replace(/\s/g, '').length) === true)) {
            setContent(()=> e.target.value)
            setLike(()=> true)
        }
        else {
            setContent(()=> e.target.value)
            setLike(()=> false)
        }
    }
    async function writeNewPost(uid, state) {
        const db = getDatabase()
        const postData = {
          oke: state
        }
        const updates = {}
        updates[`all_message/message/${idm}/` + uid + '/seen'] = postData
        console.log("update successfully")
        return update(ref(db), updates)
    }

    const sendMessage= async ()=> {
        if(content !== "" || content.replace(/\s/g, '').length === false) {
            if(like=== false) { 
                writeNewPost(`${idLast}`, "yep")
                await set(ref(db, `all_message/message/${idm}/`+ uuidv4()),{
                    id_message: uuidv4(),
                    message: content,
                    sendby: `${idUser}`,
                    timestamp: settimestamp.getTime(),
                    timereport: parseInt(parseInt(settimestamp.getTime())- parseInt(differentTime)),
                    order: parseInt(localStorage.getItem("_o_M_s")) + parseInt(1) 
                })
            }
            localStorage.setItem("_o_M_s", parseInt(localStorage.getItem("_o_M_s"))+ parseInt(1))
            setContent(()=> "")
            setLike(()=> true)
            updateTimeLast()
        }
    }
    const sendMessagewithEnter= async (e)=> {
        if(e.key=== 'Enter' && like=== false) {

            await set(ref(db, `all_message/message/${idm}/`+ uuidv4()),{
                id_message: uuidv4(),
                message: e.target.value,
                sendby: `${idUser}`,
                timestamp: settimestamp.getTime(),
                timereport: parseInt(parseInt(settimestamp.getTime())- parseInt(differentTime)),
                state: 'delivered',
                order: parseInt(localStorage.getItem("_o_M_s")) + parseInt(1) 
            })
            localStorage.setItem("_o_M_s", parseInt(localStorage.getItem("_o_M_s"))+ parseInt(1))
            setContent(()=> "")
            setLike(()=> true)
            updateTimeLast()
        }
    }
    
    const isSendImageTrue= ()=> {
        setSendImage(true)
    }
    const isSendImageFalse= ()=> {
        setSendImage(false)
    }
    const updateTimeLast= ()=> {
        const db = getDatabase()
        return update(ref(db, `all_message/users/${isUser}/${idm}/`),{'timestamp': settimestamp.getTime()})
    }
    const sendIcon= async ()=> {
        await set(ref(db, `all_message/message/${idm}/`+ uuidv4()),{
            id_message: uuidv4(),
            message: "like",
            sendby: `${idUser}`,
            timestamp: settimestamp.getTime(),
            timereport: parseInt(parseInt(settimestamp.getTime())- parseInt(differentTime)),
            state: 'delivered',
            type: 'icon',
            order: parseInt(localStorage.getItem("_o_M_s")) + parseInt(1) 
        })
        localStorage.setItem("_o_M_s", parseInt(localStorage.getItem("_o_M_s"))+ parseInt(1))
        updateTimeLast()

    }
    return (
        <div className='_whejks_woiedn'>
            <div className='_w89e_sdu89dyh_sdi'>
                <TooltipHeader placement="top" tooltip="On more actions" delay={150} className="_60342" icon={<Moreactionsicon themeUpdate={themeUpdate} theme={props.theme} />} />
                <div className="_20ewds _9eiwkdd">
                    <Chooseimageicon themeUpdate={themeUpdate} theme={props.theme} />
                    <UploadImage differentTime={differentTime} isSendImageTrue={isSendImageTrue}
                        isSendImageFalse={isSendImageFalse}
                    className="_8204ds _4390ws _3e9ids" />
                    <style dangerouslySetInnerHTML={{
                        __html: [
                            '._8204ds:hover {',
                            `background-image: #f2f0f5`,
                            '}'
                            ].join('\n')
                        }}>
                    </style>
                </div>
            </div>
            <div className='_sidm_Soaodms'>
                <input 
                    onChange={(e)=> (setLikeorSent(e))} 
                    onKeyUp={(e)=> sendMessagewithEnter(e)} 
                    type="text" 
                    className='_uwdns_sjkn-dsjcs' 
                    placeholder='Aa'
                    value={content} 
                />
                <TooltipHeader placement="top" tooltip="Choose an emoji" delay={150} className="_60342 _2548" icon={<Emojiicon themeUpdate={themeUpdate} theme={props.theme} />} />
            </div>
            <div className='_dsjdnskd_Dsjdksm_1dsk'>
            <OverlayTrigger
                    placement='top'
                    overlay={<Tooltip id="button-tooltip-2">{like=== true ? "Send a like": "Press enter to send"}</Tooltip>}
                    delay={100}
                >
                    {
                        sendImage=== true ? <Button className='_rejofslkm' variant='primary'>Send</Button>
                        :
                        <button onClick={()=> sendMessage()} className='_dsndj_dksldms_dkwoidksm' >
                            {like=== true ? <div style={{border: 'none', outline: 'none', backgroundColor: 'unset', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 30, height: 30}} onClick={()=> sendIcon()}><Likeicon themeUpdate={themeUpdate} theme={props.theme} /></div> : <Senticon themeUpdate={themeUpdate} theme={props.theme} />}
                        </button>
                    }
            </OverlayTrigger>
            </div>
        </div>
    )
}

export default FooterFrameChat
