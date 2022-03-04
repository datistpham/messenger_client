import React from 'react'
import DropReact, { IconEmoji } from './component/drop_react'
import SubMoreMessage, { MoreMessage1 } from './component/more_message'
import ReplyMessage from './component/reply_message'

const MoreMessage = (props) => {
    return (
        <div className={`_jikdmsda _w9irskopds ${props.className}`} style={{ alignSelf: 'center', position: 'absolute', zIndex: 1, margin: 10, left: '-50%', color: '#000', top: '50%', transform: 'translate(-50%, -90%)'}}>
            {
                props.open && 
                <IconEmoji addoutside={props.addoutside} outside={props.outside} className="_0302o32d _3950i3perok" isShowMessageFalse={props.isShowMessageFalse} />
            }

            <div onClick={()=> {props.dropReact();props.isShowMoreMessageTrue();props.isQwe()}} className='_329iweopk _49riepkfd'>
                <DropReact className="_34iwedskmlsd" />
            </div>

            <div className='_329iweopk _49riepkfd' >
                <ReplyMessage />
            </div>

            {
                props.open2 &&
                <MoreMessage1 id_collection={props.id_collection} info_message={props.info_message} isOpen2={props.isOpen2} addoutside={props.addoutside} outside={props.outside} isShowMessageFalse={props.isShowMessageFalse} />
            }

            <div onClick={()=> {props.isShowMoreMessageTrue();props.isQwe()}} className='_329iweopk _49riepkfd' >
                <SubMoreMessage isOpen2={props.isOpen2}  />
            </div>
        </div>
    )
}

export default MoreMessage
