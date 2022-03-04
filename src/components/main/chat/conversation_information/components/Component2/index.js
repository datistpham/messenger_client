import React, { useState } from 'react'
import { arrowtopicon, ignoremessage, mutenotification, somethingwrong } from '../../../../../../icon'
import { openIcon } from '../Component1'
import TitleComponent1 from '../Component1/title'
import Title2Component1 from '../Component1/title2'
import BlockMessage from './block_message'

const Component2 = (props) => {
    
    const [open, setOpen]= useState(()=> (JSON.parse(localStorage.getItem("s_A_S_S"))) || false)

    const isOpen= ()=> {
        setOpen((prev)=> !prev)
        localStorage.setItem("s_A_S_S", !open)
    }

    return (
        <div className={props.className}>
            <TitleComponent1 
                className="_3i29q4"
                className1="_93jrw"
                className2="_82105"
                className3="_923i2"
                className4="_23i11"
                className5="_93i22 _043uj"
                className6="_3942k"
                title1="Privacy & support"
                title2={arrowtopicon}
                style={open ? openIcon.style1 : openIcon.style2}
                onClick={isOpen}
            />
            {
                open && <div className="_934jkd _92ujew">
                    {
                        props.block=== "noone" &&
                        <Title2Component1
                            className="_302ik _32i03"
                            className1="_32i02 _02293 _49w04iw"
                            className2="_023i0 _392i2 _49w04iw"
                            title1={mutenotification}
                            title2="Mute notifications"
                        />
                    }
                    <Title2Component1
                        className="_302ik _32i03"
                        className1="_32i02 _02293 _49w04iw"
                        className2="_023i0 _392i2 _49w04iw"
                        title1={ignoremessage}
                        title2="Ignore messages"
                    />
                    <BlockMessage />
                    <Title2Component1
                        className="_302ik _32i03"
                        className1="_32i02 _02293 _49w04iw"
                        className2="_023i0 _392i2 _49w04iw"
                        title1={somethingwrong}
                        title2="Something's Wrong"
                    />
                </div>
            }
        </div>
    )
}

export default Component2
