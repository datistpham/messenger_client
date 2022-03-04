import React, { useState, useEffect, useRef } from 'react'
import { CloseIcon2 } from '../../../../icon'
import { IconLiveVideo, IconPhoto, LifeEvent } from '../../../../icon/icon2'
import Post1 from '../createPost/post1'
import Post2 from '../createPost/post2'
import Post3 from '../createPost/post3'
import Post4 from '../createPost/post4'
import Post5 from '../createPost/post5'

const Post = (props) => {
    const [avatar, setAvatar]= useState(()=> "")
    useEffect(()=> {
        fetch(props.avatar.avatar)
        .then(res=> res.blob())
        .then(blob=> {
            const imgaeBlob= URL.createObjectURL(blob)
            setAvatar(imgaeBlob)
        })
    },[props.avatar.avatar])
    const myRef= useRef()
    const [openPost, setOpenPost]= useState(false)
    const [openPostExcept, setOpenPostExcept]= useState(false)
    const [enablePost, setEnablePost]= useState(()=> false)
    const [check1, setCheck1]= useState(()=> false)
    const isSetCheck1= ()=> {
        setCheck1(()=> true)
    }
    const isSetCheck1False= ()=> {
        setCheck1(()=> false)
    }
    const isSetEnablePostTrue= ()=> {
        setEnablePost(()=> true)
    }
    const isSetEnablePostFalse= ()=> {
        setEnablePost(()=> false)
    }
    const isSetOpenPost= ()=> {
        setOpenPost(()=> true)
        setOpenPostExcept(()=> true)
    }
    const isSetOpenPostFalse= ()=> {
        setOpenPostExcept(()=> false)
    }
    
    const handleOutSidePopup= (e)=> {
        if(myRef.current && !myRef.current.contains(e.target)) {
            setOpenPost(()=> false)
            setOpenPostExcept(()=> false)
        }
    }
    const handleClickInside= ()=> {
        setOpenPost(()=> true)
    }

    useEffect(()=> {
        document.addEventListener("mousedown", handleOutSidePopup)
        return ()=> {
            document.removeEventListener("mousedown", handleOutSidePopup)
        }
    },[myRef])
    return (
        <div className="_w9erkopsd _4wrokssd" style={{width: '100%', padding: '8px 12px'}}>
            <div className="_weko32 _32kreop" style={{width: '100%', display: 'flex',flexDirection: 'row', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid #ffffff1a' }}>
                <div style={{width: 40}}>
                    <img className="s45kfl79 emlxlaya bkmhp75w spb7xbtv a8c37x1j" height="40" src={avatar} width="40" alt="" />
                </div>
                <div className="_43ki-534re">
                    <div className="_095refred" onClick={()=> isSetOpenPost()} role="button" style={{width: '100%', borderRadius: 80, backgroundColor: '#3a3b3c', height: 40, textIndent: 10, color: '#e4e6eb', display: 'flex', alignItems: 'center',paddingLeft: 5}}>
                        <span style={{color: "#b3b0b8"}}>What's on you mind ?</span>
                    </div>
                    {
                    (openPost=== true && openPostExcept=== true) &&

                    <div style={{position: 'fixed', color: '#fff', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.5)', zIndex: 100,top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div ref={myRef} onClick={()=> handleClickInside()} style={{width: 500, height: check1===true ? "auto" : 428, borderRadius: 6, backgroundColor: "#242526", border: '1px solid #2f3031'}}>
                            <div style={{width: '100%',position: 'relative', height: 60, borderBottom: '1px solid #2f3031', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 101}}>
                                <div>
                                    <h4 style={{color: "#e4e6eb", fontWeight: 700, margin: 0}}>Create Post</h4>
                                </div>
                                <div onClick={()=> isSetOpenPostFalse()} style={{position: 'absolute', top: '50%', right: 0, transform: 'translate(-50%, -50%)', filter: 'constrast(100%)', zIndex: 200}}>
                                    <CloseIcon2 filter="invert(94%) sepia(8%) saturate(99%) hue-rotate(185deg) brightness(94%) contrast(100%)" backgroundColor="rgb(58, 59, 60)" />
                                </div>
                            </div>
                            <Post1 />
                            <>
                                <div style={{width: '100%', height: check1===true ? 250 : 154, display: 'flex', flexDirection: 'column',justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Post2 check1={check1} isSetEnablePostTrue={isSetEnablePostTrue} isSetEnablePostFalse={isSetEnablePostFalse}  />
                                    <>
                                        <Post3 isSetCheck1False={isSetCheck1False} isSetCheck1={isSetCheck1} />
                                    </>
                                    
                                </div>
                            </>
                            <>
                                <div style={{width: '100%'}} className="_392o323 _49weikpoes">
                                    <div style={{width: '100%', height: 142, padding: '16px 0'}} >
                                        <Post4 />
                                        <Post5 enablePost={enablePost} />
                                    </div>
                                </div>
                            </>
                        </div>
                        
                    </div>
                    }
                </div>
            </div>
            <div style={{width: '100%', padding: '10px 0'}}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}>
                    <PostSpecifiv className="_9534kweoewr" icon={<IconLiveVideo />} title="Live video" />    
                    <PostSpecifiv className="_9534kweoewr" icon={<IconPhoto />} title="Photo/Video" />    
                    <PostSpecifiv className="_9534kweoewr" icon={<LifeEvent />} title="Life event" />    
                </div>  
            </div>
            
        </div>
    )
}
const PostSpecifiv= (props)=> {
    return (
        <div role="button" style={{height: 40, padding: 8}} className={props.className}>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {props.icon}
                </div>
                <div>
                    <span style={{color: '#b3b0b8', fontSize: 14, fontWeight: 500}}>
                        {props.title}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post
