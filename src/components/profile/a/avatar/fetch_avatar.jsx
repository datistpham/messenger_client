import React from 'react'
import { Placeholder } from 'react-bootstrap'

const FetchAvatar = (props) => {

    if(props.avatarS=== undefined || props.avatarS=== "") {
        return (
            <Placeholder as="div" animation="glow">
                <Placeholder className="rq0escxv n7fi1qx3 datstx6m pmk7jnqg j9ispegn kr520xx4 k4urcfbm" style={{width: 168, height: 168, userSelect: 'none'}} />
            </Placeholder>
        )
    }
    else {
        return (
            <img src={props.avatarUpdate==="" ? props.avatarS: props.avatarUpdate} draggable={false} data-imgperflogname="profileCoverPhoto" alt="" className="rq0escxv n7fi1qx3 datstx6m pmk7jnqg j9ispegn kr520xx4 k4urcfbm" referrerPolicy="origin-when-cross-origin" style={{width: 168, height: 168, userSelect: 'none'}} />
        )
    }
}

export default FetchAvatar
