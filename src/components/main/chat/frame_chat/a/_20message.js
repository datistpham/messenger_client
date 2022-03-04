import React from 'react'
import Framechatmain from '../utilities/framechatmain'
import { v4 as uuidv4 } from 'uuid'

const T20Message = (props) => {
    if(props.message === undefined) {
        return (
            <div>
                Hello world
            </div>
        )
    }
    else {
        return (
            <>
                {
                    props.item.map((item, key)=> <Framechatmain theme={props.theme} key={uuidv4()} item={props.message[key]}  />
                    )
                }
            </>
        )
    }
}

export default T20Message
