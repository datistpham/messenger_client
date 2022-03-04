import { ref, update, getDatabase } from 'firebase/database'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { moreMessage } from '../../../../../../../icon'
import { v4 as uuidv4 } from 'uuid'

const SubMoreMessage = (props) => {
    return (
        <div onClick={()=> props.isOpen2()}>

            {moreMessage}
        </div>
    )
}

export const MoreMessage1= (props)=> {
    const myRef= useRef()
    const handleClickOutSide= (e)=> {
        if(!myRef.current.contains(e.target)) {
            props.outside()
            props.addoutside()
        }
    }
    useEffect(()=> {
        document.addEventListener("mousedown", handleClickOutSide)
        return ()=> document.removeEventListener("mousedown", handleClickOutSide)
    })
    const handleClickInside= ()=> {
        console.log("Hello World")
    }
    return (
        <div ref={myRef} onClick={()=> handleClickInside()} className='_493523m'>
            <RemoveMessage id_collection={props.id_collection} info_message={props.info_message} className="_340rdssf _409weisdkop" />
            <ReplyMessage className="_340rdssf _ruefijdkas" />
        </div>
    )
}
const db = getDatabase()

const RemoveMessage= (props)=> {
    const { idm }= useParams()
    const uuid= uuidv4()
    async function writeNewPost(uid) {
        const postData = {
            id_message: uuid,
            message: 'unsent a message',
            sendby: props.info_message.sendby,
            state: props.info_message.state,
            timereport: props.info_message.timereport,
            timestamp: props.info_message.timestamp,
            type: "remove_message"
        }
        const updates = {}
        updates[`all_message/message/${idm}/` + uid + '/'] = postData    

        return await update(ref(db), updates)
    }
    const removeMessage= async ()=> {
        writeNewPost(props.id_collection)
    }
    return (
        <div onClick={()=> removeMessage()}>
            <div className={props.className}>Remove</div>
        </div>
    )
}

const ReplyMessage= (props)=> {
    return (
        <div>
            <div className={props.className}>Reply</div>
        </div>
    )
}

export default SubMoreMessage
