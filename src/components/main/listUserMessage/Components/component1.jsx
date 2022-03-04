import React from 'react'
import { MinusTime } from '../../../util/formatime'

const Component2 = (props) => {
  return (
    <div className={props.className2}>
        <div className={props.className4} >
            <div className="_2416">
                <span className='_3453'>{props.data1.firstname} </span>
                <span className='_7932'>{props.data1.surname}</span>
            </div>
        </div>
        <div className={props.className5} style={{display: 'inline-flex', gap: 5}} ><div className='_940wid _w40eik _i9122'>{props.userLastMessage=== props.idUser ? "You: " : ""}</div>
            <div className="_20esd _0342m _9i4wk2" style={{width: 200 ,whiteSpace: 'nowrap', overflow: "hidden",textOverflow: 'ellipsis',}}> 
            {( props.typeLastMessage==="" || props.typeLastMessage=== undefined ) ? <span>{ props.lastMessage }</span> :  (props.typeLastMessage==="icon" ? <img height="16" width="16" alt="(Y)" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/ec7/1.5/16/LIKE.png" /> : ` just send ${props.numberoffile} photos`)} <span className="kvgmc6g5 cgat1ltu oygrvhab kkf49tns"><span className="d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j keod5gw0 nxhoafnm aigsh9s9 fe6kdd0r mau55g9w c8b282yb d9wwppkn mdeji52x sq6gx45u j5wam9gi knj5qynh oo9gr5id" dir="auto"><span><span className="rfua0xdk pmk7jnqg stjgntxs ni8dbmo4 ay7djpcl q45zohi1">&nbsp;</span><span aria-hidden="true">· </span></span></span></span> {MinusTime(props.timeLast).split(" ")[0]}
            </div>
        </div>
    </div>
  )
}

export default Component2
