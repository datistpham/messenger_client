import React, { useState } from 'react'
import { arrowtopicon } from '../../../../../../icon'
import { openIcon } from '../Component1'
import TitleComponent1 from '../Component1/title'
import AllMediaComponent from './all_media'

const Component3 = (props) => {
    const [open, setOpen]= useState(()=> (JSON.parse(localStorage.getItem("s_I_S_S"))) || false)
    const isOpen= ()=> {
        setOpen((prev)=> !prev)
        localStorage.setItem("s_I_S_S", !open)
    }
  return (
      <div>
        <TitleComponent1
            className="_3i29q4"
            className1="_93jrw"
            className2="_82105"
            className3="_923i2"
            className4="_23i11"
            className5="_93i22 _043uj"
            className6="_3942k"
            title1="Shared media"
            title2={arrowtopicon}
            style={open ? openIcon.style1 : openIcon.style2}
            onClick={isOpen}
        />
        {
            open && <div className="_934jkd _92ujew">
                    <AllMediaComponent hasMore={props.hasMore} item={props.item} className="_9erjfdksawwa" />
                    {/* {
                        props.hasMore=== true &&
                        <>
                            <div className="_9erjfdksawwa" style={{overflowX: 'hidden'}}>
                                <div className="_9erkopfdsd _84u8ioejr" style={{paddingTop: 'calc(100% / 3)', position: 'relative'}}>
                                    <div className="_ewikpds _9wi4wikre" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}  ></div>
                                </div>
                            </div>
                        </>
                    } */}
                </div>
            }
      </div>
  )
}

export default Component3
