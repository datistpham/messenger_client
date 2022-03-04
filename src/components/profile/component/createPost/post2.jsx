import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'

const Post2 = (props) => {
    const myRef= useRef()
    const theme= useSelector(state=> state.thempost_reducer)
    //eslint-disable-next-line
    const [content, setContent]= useState(()=> "")
    const [fontSize, setFontSize]= useState(()=> 24)
    const limitContent= ()=> {
        setContent(()=> myRef.current.innerHTML)
        if(myRef.current.innerHTML.length >= 1) {
            props.isSetEnablePostTrue()
        }
        else {
            props.isSetEnablePostFalse()
        }
        if(myRef.current.innerHTML.length > 80) {
            setFontSize(()=> 16 )
        }
        else {
            setFontSize(()=> 24)
        }
    }
    return (
        <>
            <div className="_63712sd" style={{width: '100%'}}>
                <div className="_402weiq3w" style={{width: '100%', padding: '0 16px 40px 16px', height: 80}}>
                    <div style={{width: '100%', height: 40, padding: '4px 0 8px 0'}}>
                        <div ref={myRef} onKeyPress={()=> limitContent()} onKeyUp={()=> limitContent()} data-placeholder="What's on your mind ?" placeholder="What's on your mind ?" contentEditable className="_904wikewpe" aria-placeholder="What's on your mind ?" style={{direction: 'ltr',height: props.check1=== true ? 250 : 100, color: "#fff", userSelect: 'text',fontSize: fontSize, whiteSpace: 'pre-wrap', overflowWrap: 'break-word', backgroundImage: `url(${theme || "none"})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: 6,}}>
                                
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post2
