import React from 'react'
import ActiveUser from './active'

const NameConversation = (props) => {
    return (
        <div className={props.className}>
            <div className="_93q1d _904uje">
                <span className='_290ewjkm _23jwsd'>{props.firstname} </span>
                <span className='_293kqw'>&nbsp;</span>
                <span className='_290ewjkm _904wje'>{props.surname}</span>
            </div>
            {
                props.block === "noone" &&
                <ActiveUser active={props.active} />
            }
        </div>  
    )
}

export default NameConversation
