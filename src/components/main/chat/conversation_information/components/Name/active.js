import React from 'react'
import { Placeholder } from 'react-bootstrap'
import { MinusTime } from '../../../../../util/formatime'

const ActiveUser = (props) => {
    if(props.active==="") {
        return (
            <Placeholder animation="glow">
                <Placeholder className='_923je' />
            </Placeholder>
        )
    }
    else {
        return (
            <div className="_284uj _w9ejsd" >
                <span className={`_29jewd ${props.className}`} style={{fontSize: 12, fontWeight: 400, height: 'max-content', color: '#000'}}>
                    {
                        (MinusTime(props.active)=== true) ? "" : `Active ${(props.active !== "online" ? MinusTime(props.active) : "now")}`
                    } 
                </span>
            </div>
        )
    }
}

export default ActiveUser
