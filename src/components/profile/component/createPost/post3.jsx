import React, {  useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { rootActions } from '../../../../redux/pure/action/root.action'

const Post3 = (props) => {
    const dispatch= useDispatch()
    const [openTheme, setOpenTheme]= useState(()=> false)
    const [alignWord, setAlignWord]= useState(()=> false)
    const isSetAlignWordTrue= ()=> {
        setAlignWord(true)
    }
    const isSetAlignWordFalse= ()=> {
        setAlignWord(false)
    }
    const [theme, setTheme]= useState(()=> [])  
    const isSetOpenThemeTrue= ()=> {
        setOpenTheme(true)
    }
    const isSetOpenThemeFalse= ()=> {
        console.log(1)
        setOpenTheme(false)
    }
    useEffect(()=> {
        const getTheme= async ()=> {
            await axios({
                url: 'http://localhost:4000/theme/post',
                method: 'get',
                responseType: 'json',
            })
            .then(res=> setTheme(res.data))
            
        }
        getTheme()
    },[])
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',padding: '0 16px',}}>
            {
                alignWord=== true &&
                <style dangerouslySetInnerHTML={{
                    __html: [
                        '._904wikewpe {',
                        'text-align: center',
                        '}',
                        '._904wikewpe[placeholder]:empty::before {',
                            'font-size: 35px;',
                            'content: attr(placeholder);',
                            'color: #b0b3b8;',
                            'position: relative;',
                            'font-weight: 600;',
                            'text-align: center',
                            '}',
                        ].join('\n')
                    }}>
                </style>
            }
                
            <div role="button" className="_0943kpwe _092weied" style={{width: openTheme=== true ? "auto" : 40, height: 40,  display: 'flex', justifyContent: 'center', alignItems: 'center', userSelect: 'none',gap: 3}}>
            {
                openTheme=== false ? ( <div onClick={()=> isSetOpenThemeTrue()}  style={{width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{height: 38, width: 38}} height="38" alt="" referrerPolicy="origin-when-cross-origin" src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" />
            </div>) : (<>
                <div role="button" onClick={()=> isSetOpenThemeFalse()} style={{width: 36, height: 36 ,backgroundColor: '#3e4042',display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/uYE5u9Fmdf-.png)", backgroundPosition: "-26px -326px", backgroundSize: "50px 438px", width: 16, height: 16, backgroundRepeat: "no-repeat", display: "inline-block",filter: "invert(93%) sepia(10%) saturate(81%) hue-rotate(185deg) brightness(99%) contrast(91%)"}}></i>
                </div>
                <div role="button" onClick={()=> {props.isSetCheck1False();isSetAlignWordFalse();dispatch(rootActions.themepost_active("none"))}} style={{width: 36, height: 36, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 6, backgroundColor: '#000'}}>

                </div>
                {
                    theme.map(item=> 
                        <div className="_9weikw9e _94w9weewgd" onClick={()=> {props.isSetCheck1();dispatch(rootActions.themepost_active(item.theme));isSetAlignWordTrue()}} key={uuidv4()} style={{width: 36, height: 36, display: 'flex', justifyContent: 'center', alignItems: "center", backgroundImage: `url("${item.thumbnail}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: 6}}>  

                        </div>)
                }
                    


                <div style={{width: 38, height: 38, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'rgb(62, 64, 66)', borderRadius: 6}}>
                    <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8JuwZ7TuUF3.png)", backgroundPosition: "0px -638px", backgroundSize: "26px 792px", width: 16, height: 16, backgroundRepeat: "no-repeat", display: "inline-block",filter: "invert(93%) sepia(10%) saturate(81%) hue-rotate(185deg) brightness(99%) contrast(91%)"}}></i>
                </div>
            </>)
            
            }    
            </div>
            <div role="button" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 40, height: 40}}>
                <i data-visualcompletion="css-img" className="hu5pjgll bixrwtb6" style={{height: 24, width: 24, backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/uYE5u9Fmdf-.png)", backgroundPosition: "0px -188px", backgroundSize: "50px 438px", backgroundRepeat: "no-repeat", display: "inline-block",filter: "invert(93%) sepia(10%) saturate(81%) hue-rotate(185deg) brightness(99%) contrast(91%)"}}></i>
            </div>

        </div>
    )
}

export default Post3
