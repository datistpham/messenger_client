import React from 'react'
import { style } from '../../../../../style/style-js'
import { Link, useLocation } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { activeIcon } from '../../../../../icon'
import ActiveUser from '../../conversation_information/components/Name/active'

const Headerframechat1 = (props) => {
    const location= useLocation()
    const {id, avatar, firstname, surname }= location.state

    return (
            <Link to={`/p/${id}`} tabIndex={-1} className='_8431'>
                <div className='_4262'>
                    <div className='_5323'>
                        <img draggable={false} className='_38923_ewioejmds_jiodjsd2' src={avatar} alt="" style={style.forImage2}/>
                        
                        {props.block=== "noone" &&
                        (props.active==="online" && activeIcon)
                        }
                    </div>
                    <div className='_8372'>
                        <OverlayTrigger
                            placement='right'
                            overlay={<Tooltip id="button-tooltip-2" style={{fontSize: 14, opacity: 1}} >See {firstname}'s profile</Tooltip>}
                            delay={150}
                            style={{backgroundColor: "#f2f0f5", color: "#ccc"}}
                        >
                            <div className='_3461'>
                                <span className='_8922'>{firstname} </span>
                                <span className='_9242'>{surname}</span>
                            </div>
                        </OverlayTrigger>
                        {
                            props.block=== "noone" &&
                            <ActiveUser active={props.active} className="_845ujds _9w0u0 _4uwej" /> 
                        }
                    </div>
                </div>
            </Link>
        )
}

export default Headerframechat1
