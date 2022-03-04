import React, {useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { reactMessage } from '../../../../../../../icon'
import { Angry, Haha, Heart, Like, Sad, Wow } from '../../../../../../../icon/icon2'
import { ref, set, getDatabase } from 'firebase/database'
import { v4 as uuidv4 } from 'uuid'
const db= getDatabase()
const DropReact = (props) => {
    return (
        <div className={props.className}>
            {reactMessage}
        </div>
    )
}

export const IconEmoji= React.memo((props)=> {
    useEffect(()=> {
        document.addEventListener("mousedown", handleClickOutside)
        return ()=> document.removeEventListener("mousedown",handleClickOutside)
    })
    const { idm }= useParams()
    const myRef= useRef()
    const [clickOutSide, setClickOutSide]= useState(()=> false)
    const idUser= useSelector(state=> state.getuserbycookie_reducer.id)
    const nowTime= new Date()
    const handleClickOutside= async (e)=> {
        if(!myRef.current.contains(e.target)) {
            setClickOutSide(true)
            props.outside()
            props.addoutside()
        }
        else {
            await set(ref(db, `all_message/message/${idm}/`+ uuidv4()),{
                message: e.target.getAttribute("src"),
                sendby: `${idUser}`,
                timestamp: nowTime.getTime(),
                type: 'reactEmoji'
            })
        }

    }
    const handleClickInside= ()=> setClickOutSide(false)
    
    return (
        <div ref={myRef} onClick={(e)=> handleClickInside(e)} style={{width: 262, height: 52, padding: '8px 12px', borderRadius: 80, backgroundColor: '#fff'}} className={`${props.className} _5486ejas`}>
            <IconSpecial icon={<Heart />} />
            <IconSpecial icon={<Haha />} />
            <IconSpecial icon={<Wow />} />
            <IconSpecial icon={<Sad />} />
            <IconSpecial icon={<Angry />} />
            <IconSpecial icon={<Like />} />
            
        </div>
    )
})

const IconSpecial= (props)=> {
    return (
        <div>
            {props.icon}
        </div>
    )
}
export default DropReact
