import React, { useState } from 'react'
// import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { convertMilisecondstoSecond, convertToTime } from '../../../../util/formatime'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import { deliveredicon, Likeicon } from '../../../../../icon'
import OptimizeImage from './lazy_image'
import MoreMessage from './more_message'
// import TooltipHeader from './tooltip'
// const entering= (e)=> {
//     e.children[1].style.backgroundColor= 'black'
//     e.children[1].style.opacity= '0.75'
// }
const Framechatmain = (props) => {
    const idUser= useSelector(state=> state.getuserbycookie_reducer.id)
    const themeUpdate= useSelector(state=> state.thememessage_reducer)

    const [showMoreMessage, setShowMoreMessage]= useState(false)
    const [open, setOpen]= useState(false)
    const [open2, setOpen2]= useState(false)
    const [qwe, setQwe]= useState(()=> false)
    const isOpen2= ()=> {
        setOpen2(prev=> !prev)
    }
    const dropReact= ()=> {
        setOpen(prev=> !prev)
    }
    const dropReactFalse=()=> {
        setOpen(false)

    }
    const dropOpenFalse= ()=> {
        setOpen(false)
    }
    const isQwe= ()=> {
        setQwe(prev=> !prev)
    }
    const isShowMoreMessageTrue= ()=> {
        setShowMoreMessage(true)
    }
    const isShowMessageFalse= ()=> {
        if(qwe=== true) {
            setShowMoreMessage(true)
        }
        else {
            setShowMoreMessage(false)
        }
    }
    const isOutSide= ()=> {
        setShowMoreMessage(false)
        setOpen2(false)
        setOpen(false)
        setQwe(false)
    }
    return (
        <>
        {/*  */}
        {
            (props.item.timereport !== undefined) && (convertMilisecondstoSecond(props.item.timereport) && <div className="_0953i" style={{textAlign: 'center',padding: 5, margin: 5}}><span>{(convertToTime(props.item.timestamp).toString().split(" ")[0])==="Today" ? "" : convertToTime(props.item.timestamp).toString().split(" ")[0]}</span> <span className='_9024k'>{convertToTime(props.item.timestamp).toString().split(" ")[1]}</span> <span className='_94q3k'>{convertToTime(props.item.timestamp).toString().split(" ")[2]}</span></div>          )
            //   
        }
        <div className={`_6541 ${props.item.sendby=== idUser ? '_3242' : '_75k14'} ${props.item.spe !== undefined ? "_3re9ikp" : "_30u8q"}`} key={uuidv4()}>

            <div onMouseLeave={()=> isShowMessageFalse()} className={`_753jq _4umw2 ${props.item.sendby=== idUser ?"_934uj" : "_9w4ie"} ${props.item.spe !== undefined ? "_9iwek2" : "_rkdsfl2"}`}>
                <div className="_w94k2 _922ka _13i1s">

                    {/* <OverlayTrigger
                        placement="left"
                        onEntering={(e)=> entering(e)}
                        overlay={<Tooltip id="button-tooltip-2" className='_3242' style={{fontSize: 12}} >{convertToTime(props.item.timestamp)}</Tooltip>}
                        delay={150}
                        style={{backgroundColor: "#f2f0f5", color: "#ccc"}}
                    > */}
                        
                        <div onMouseEnter={(e)=> isShowMoreMessageTrue()}  className={`_2646 _5893j _uw1k3 ${props.item.type !== undefined ? "_4weidds" : "_ewksdl09"} `} > {/*style={{backgroundColor: `${props.item.sendby=== idUser ? (themeMessage==="" ? props.theme : themeMessage ) : ""}`}}*/}
                            {
                                props.item.spe !== undefined ? (props.item.sendby=== idUser ? "You " : "Giang ") : ""
                            } 
                            <div title={convertToTime(props.item.timestamp)}>
                                {  
                                props.item.type !==undefined ?
                                    (
                                            (props.item.type).toString()==="image" ? 
                                            (<OptimizeImage image={props.item.message} /> )
                                            :
                                                (
                                                    (props.item.type).toString()==="remove_message" ?
                                                    
                                                    (<div style={{width: '100%', position: 'relative', zIndex: 1, borderRadius: 18 ,color: '#bcc0c4',border: '1px solid #ced0d4',backgroundColor: '#fff',padding: '6px 12px', margin: 5, lineHeight: 1.34}} >{props.item.sendby=== idUser ? "You ": "Giang "}  {props.item.message }</div>)
                                                    :
                                                    <Likeicon position="relative" zIndex={1} width={50} height={50} theme={themeUpdate==="" ? props.theme : themeUpdate }  />
                                                )
                                    ) 
                                :
                                    (
                                        <span style={{width: '100%', height: '100%'}} > {props.item.message }</span>
                                    )
                                }
                                </div>
                            {
                                (showMoreMessage=== true && props.item.spe=== undefined ) &&
                                <MoreMessage id_collection={props.id_collection} info_message={props.item} isOpen2={isOpen2} open2={open2} addoutside={dropReactFalse} outside={isOutSide}  open={open} dropReact1={dropOpenFalse} dropReact={dropReact} isQwe={isQwe} isShowMoreMessageTrue={isShowMoreMessageTrue} isShowMessageFalse={isShowMessageFalse} className={props.item.sendby=== idUser ? "_u34riksd" : "_3rioejfkmd"} />
                            }
                        </div>  
                    {/* </OverlayTrigger> */}

                    {/* <OverlayTrigger
                        placement={props.item.sendby=== ida ? "left": "right"}
                        onEntering={(e)=> entering(e)}
                        overlay={<Tooltip id="button-tooltip-2" className='_3242' style={{fontSize: 12, opacity: 1}} >Delivered at {convertToTime(props.item.timestamp).toString().split(" ")[1]} {convertToTime(props.item.timestamp).toString().split(" ")[2].toUpperCase()}</Tooltip>}
                        delay={150}
                        style={{backgroundColor: "#f2f0f5", color: "#ccc"}}
                    > */}
                        <div className='_894kd _328jw' style={{width: 28, height: 28,marginBottom: 2, display: 'flex'}} title={`Delivered at ${convertToTime(props.item.timestamp).toString().split(" ")[1]} ${convertToTime(props.item.timestamp).toString().split(" ")[2].toUpperCase()}`}>
                            {(props.item.state === "delivered" && props.item.sendby=== idUser)  && deliveredicon}
                        </div>
                    {/* </OverlayTrigger> */}
                </div>
            </div>
        </div>
    </>
)

}
export default Framechatmain
