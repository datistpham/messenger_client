import React from 'react'
// import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Callnovideoicon, Callwithvideoicon , Moreconversation } from '../../../../icon'
import Headerframechat1 from './utilities/headerframechat1'
import TooltipHeader from './utilities/tooltip'
import { useSelector } from 'react-redux'
// import { query, ref, getDatabase, onValue } from 'firebase/database'
// import { SocketContext } from '../../../chat_video_call/Context'
// import ConCacVipPro from '../../../chat_video_call/components/Notification'

// const db= getDatabase()
// import { onValue, query, ref, getDatabase } from 'firebase/database'
// import { useContext } from 'react'
// const db= getDatabase()
const HeaderFrameChat = (props) => {
    // const { callUser }= useContext(SocketContext)
    // const [id, setId]= useState("")
    // useEffect(()=> {
    //     const getData= ()=> {
    //             const starCountRef = query(ref(db, `all_message/idVideoCall/${props.id}/id/`))
    //             onValue(starCountRef, async (snapshot) => {
    //             const data = await snapshot.val()
    //             setId(data)
    //         })
    //     }
    //     getData()
    // },[props.id])
    const themeUpdate= useSelector(state=> state.thememessage_reducer)
    
    const PopupCenter= (pageURL, title,w,h)=> {
        var left = (window.screen.width/2)-(w/2);
        var top = (window.screen.height/2)-(h/2);
        window.open (pageURL, title, 'width='+w+', height='+h+', top='+top+', left='+left)
      } 
    return (
        <div className='_dsdskd_fjufns-dsnfjsdn'>
            {/* header1 */}
        <Headerframechat1 block={props.block} active={props.active}
        />
        
        <div className='_6754 _4262'>
            {   (props.block === "noone") &&
                <>
                    <TooltipHeader
                        placement="bottom"
                        tooltip="Start a voice call"
                        delay={150}
                        className="_6420"
                        icon={<Callnovideoicon themeUpdate={themeUpdate} theme={props.theme} />}
                    />
                    {/* <ConCacVipPro /> */}
                    <TooltipHeader
                        placement="bottom"
                        tooltip="Start a video call"
                        delay={150}
                        className="_6420"
                        icon={<Callwithvideoicon themeUpdate={themeUpdate} theme={props.theme} />}
                        click={()=>PopupCenter('http://localhost:3000/videocall/1234', 'Messenger calling', 1200, 500)}
                    />
                </>
                
            }
                <TooltipHeader
                    placement="bottom"
                    tooltip="Conversation information"
                    delay={150}
                    className="_6420"
                    icon={<Moreconversation themeUpdate={themeUpdate} theme={props.theme} backgroundColor={props.openMoreConversation=== true ? props.theme: "unset"} borderRadius={props.openMoreConversation=== true ? "50%" : "0px"} scale={props.openMoreConversation=== true ? '0.65' : '1'} openMoreConversation={props.openMoreConversation} fill="#fff" />}
                    click={props.setOpen}
                />
            
        </div>
    </div>
    )
}

export default HeaderFrameChat
