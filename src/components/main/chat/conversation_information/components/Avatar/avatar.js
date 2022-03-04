import React from 'react'
import { activeIcon } from '../../../../../../icon'
import Avatar1 from './avatar1'


const AvatarConversation = (props) => {
    return (
        <div className={props.className}>
            <Avatar1 avatar={props.avatar} className="_92wel" className1="_3293ids_" />
            
            {
                props.block === "noone" &&
            (props.active=== "online" && activeIcon)
            }
        </div>
    )
}

export default AvatarConversation
