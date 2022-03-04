import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
    
const TooltipHeader = (props) => {
    return (
        <OverlayTrigger
            placement={props.placement}
            overlay={<Tooltip style={{zIndex: 3}} id="button-tooltip-2" className={props.classTooltip}>{props.tooltip}</Tooltip>}
            delay={props.delay}
        >
            <div role="button" className={props.className} onClick={()=> {props.click();props.click2()}} > 
                {props.component}
                <div className="_q90wkf _90weds _49wikaa" style={{width: 30, height: 30}}>
                    {props.icon}
                </div>
            </div>
        </OverlayTrigger>
    )
}

export default TooltipHeader
