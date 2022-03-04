import React, { useState } from 'react'
import { arrowtopicon, changeEmoji, changeTheme, editNickname, searchInformation } from '../../../../../../icon'
import TitleComponent1 from './title'
import Title2Component1 from './title2'

const Component1 = (props) => {
    const [open, setOpen]= useState(()=> (JSON.parse(localStorage.getItem("s_C_S_S"))) || false)
    const isOpen= ()=> {
        setOpen((prev)=> !prev)
        localStorage.setItem("s_C_S_S", !open)
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
                title1="Customise chat"
                title2={arrowtopicon}
                style={open ? openIcon.style1 : openIcon.style2}
                onClick={isOpen}
            />
            {
                open && <div className="_934jkd _92ujew">
                    {
                        props.block=== "noone" &&
                        <>
                            <Title2Component1
                                openForTheme={props.openForTheme}
                                className="_302ik _32i03"
                                className1="_32i02 _02293 _49w04iw"
                                className2="_023i0 _392i2 _49w04iw"
                                title1={changeTheme}
                                title2="Change theme"
                            />
                            <Title2Component1
                                className="_302ik _32i03"
                                className1="_32i02 _02293 _49w04iw"
                                className2="_023i0 _392i2 _49w04iw"
                                title1={changeEmoji}
                                title2="Change emoji"
                            />
                            <Title2Component1
                                openForTheme={props.isSetOpenSetNickNamesTrue}
                                className="_302ik _32i03"
                                className1="_32i02 _02293 _49w04iw"
                                className2="_023i0 _392i2 _49w04iw"
                                title1={editNickname}
                                title2="Edit nicknames"
                            />
                        </>
                    }
                    <Title2Component1
                        className="_302ik _32i03"
                        className1="_32i02 _02293 _49w04iw"
                        className2="_023i0 _392i2 _49w04iw"
                        title1={searchInformation}
                        title2="Search in information"
                    />
                </div>
            }
            
        </div>
    )
}
export const openIcon= {
    style1: {
        backgroundPosition: "-22px -218px"
    },
    style2: {
        backgroundPosition: "-24px -196px"
    }
}

export default Component1
