import React, { useEffect, useRef, useState, lazy, Suspense } from "react"
import { Placeholder } from "react-bootstrap"
import EditAvatar from "../../component/edit_avatar"
const FetchAvatar= lazy(()=> import("./fetch_avatar"))

const Avatar= (props)=> {
    const [avatarS, setAvatarS]= useState(()=> "")
    useEffect(()=> {
        fetch(props.avatar)
        .then(res=> res.blob())
        .then(blob=> {
            const imageBlob= URL.createObjectURL(blob)
            setAvatarS(()=> imageBlob)
        })
    }, [props.avatar])
    const myRef= useRef(null)
    const [toggleEdit, setToggleEdit]= useState(()=> false)
    const [avatar, setAvatar]= useState(()=> "")
    const [avatarUpdate, setAvatarUpdate]= useState(()=> "")
    const [openEdit, setOpenEdit]= useState(()=> false)
    const isSetAvatar= (e)=> {
        if(e.target.files.length>=1) {
            setAvatar(()=> e.target.files[0])
            setToggleEdit(()=> false)
            setOpenEdit(()=> true)
        }
    }
    const isOpenEditFalse= ()=> {
        setOpenEdit(()=> false)
        const imageBlob= URL.createObjectURL(avatar)
        setAvatarUpdate(()=> imageBlob)
    }
    const isSetToggleEdit= ()=> {
        setToggleEdit(prev=> !prev)
    }
    // const isSetToggleEditFalse= ()=> {
    //     setToggleEdit(()=> false)
    // }
    useEffect(()=> {
        document.addEventListener("mousedown", handleClickOutSide)
        return ()=> document.removeEventListener("mousedown", handleClickOutSide)
    },[])
    const handleClickOutSide= (e)=> {
        if(myRef.current && !myRef.current.contains(e.target)) {
            setToggleEdit(()=> false)   
        }
    }
    return (
        <div className={props.className}>
            <div className={props.className1} style={{display: 'flex', flexDirection :'column', justifyContent: 'flex-start', alignItems: 'flex-end', padding: '0 10%'}}>
                <div className="i09qtzwb">
                    <div style={{position: 'relative'}}>
                        <Suspense 
                        fallback={<Placeholder as="div" animation="glow">
                                    <Placeholder className="rq0escxv n7fi1qx3 datstx6m pmk7jnqg j9ispegn kr520xx4 k4urcfbm" style={{width: 168, height: 168, userSelect: 'none'}} />
                                </Placeholder>}
                        >
                            <FetchAvatar avatarUpdate={avatarUpdate} avatarS={avatarS} />
                        </Suspense>
                        {
                            props.isUser=== true &&
                                <div onClick={()=> isSetToggleEdit()} role="button" style={{position: 'absolute', color: "#FFF",bottom : 20,right: "0%", width: 36, height: 36, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#3a3b3c', userSelect: 'none'}} className="_slknskd _iojfdksdkm">
                                    <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1" style={{backgroundImage: "url(https://www.facebook.com/rsrc.php/v3/yM/r/dCIG3mJT3md.png)", backgroundPosition: "0px -438px", backgroundSize: "26px 1666px", width: 20, height: 20, backgroundRepeat: "no-repeat", display: "inline-block",filter: "invert(94%) sepia(6%) saturate(119%) hue-rotate(181deg) brightness(101%) contrast(86%)"}}></i>
                                </div>
                        }
                        {
                            toggleEdit=== true &&
                            <div ref={myRef} className="_30iejw _ew09ew4w" style={{width: 344, position: 'absolute',zIndex: 200, left: '80%',top: '90%', borderRadius: 6, backgroundColor: '#242526', marginTop: 5, boxShadow: '0 12px 28px 0 #00000033, 0 2px 4px 0 #0000001a, inset 0 0 0 1px #ffffff0d', padding: '8px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', userSelect: 'none'}}>
                                <label>
                                    <div role="button" className="_904wiw4 _9w4i-w33" style={{width: 328,cursor: 'pointer', margin: '0 8px', height: 36, padding: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1" style={{backgroundImage: "url(https://www.facebook.com/rsrc.php/v3/y8/r/kEihFiTDw7E.png)", backgroundPosition: "0px -66px", backgroundSize: "22px 196px", width: 20, height: 20, backgroundRepeat: "no-repeat", display: "inline-block",filter: "invert(93%) sepia(15%) saturate(56%) hue-rotate(185deg) brightness(99%) contrast(89%)"}}></i>
                                        </div>
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <span style={{fontSize: 14, fontWeight: 500, color: "#e4e6eb"}}>Select Photo</span>   
                                        </div>
                                        <input type="file" style={{width: 0, height: 0}}  title="" />
                                    </div>
                                </label>


                                <label>
                                    <div role="button" className="_904wiw4 _9w4i-w33" style={{width: 328,cursor: 'pointer', margin: '0 8px', height: 36, padding: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/kEihFiTDw7E.png)", backgroundPosition: "0px -110px", backgroundSize: "22px 196px", width: 20, height: 20, backgroundRepeat: "no-repeat", display: "inline-block",filter: "invert(93%) sepia(15%) saturate(56%) hue-rotate(185deg) brightness(99%) contrast(89%)"}}></i>
                                        </div>
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <span style={{fontSize: 14, fontWeight: 500, color: "#e4e6eb"}}>Upload Photo</span>   
                                        </div>
                                        <input type="file" style={{width: 0, height: 0}} title="" onChange={(e)=> isSetAvatar(e)} />
                                    </div>
                                </label>
                                <div style={{width: 312, borderTop: '1px solid #3e4042', margin: '4px 0'}}>
                                    
                                </div>
                                <div role="button" className="_904wiw4 _9w4i-w33" style={{width: 328,cursor: 'pointer', margin: '0 8px', height: 36, padding: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/qFcxbCpmePF.png)", backgroundPosition: "0px -1018px",backgroundSize: "34px 1152px", width: 20, height: 20, backgroundRepeat: "no-repeat", display: "inline-block",filter: "invert(93%) sepia(15%) saturate(56%) hue-rotate(185deg) brightness(99%) contrast(89%)"}}></i>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <span style={{fontSize: 14, fontWeight: 500, color: "#e4e6eb"}}>Remove</span>   
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="_jdsskdlmdskml _9853092oeds">
                        <h1 className="_fkdkfdkdml _fnjjslkdsd" style={{margin: 0, whiteSpace: 'nowrap'}}>{props.user}</h1>
                        <h6 className="_fkdkfdkdml _w4iiwseks _peikmsdkml">1 Friends</h6>
                    </div>
                </div>
                    {
                        props.isUser===false &&
                        <div style={{color: '#fff',  alignItems: 'center', textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: 10, padding: 10}}>
                            <div role="button" style={{height: 36, padding: '0 12px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 6,backgroundColor: '#2374e1'}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img className="hu5pjgll eb18blue" src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/YIxFfN5ecJG.png" alt="" height="16" width="16"  style={{filter: "brightness(0) invert(1)"}} />
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <span style={{color: '#fff', fontSize: 14, fontWeight: 500}}>Message</span>
                                </div>
                            </div>
                            <div role="button" style={{height: 36, padding: '0 12px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 6,backgroundColor: '#3a3b3c'}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img className="hu5pjgll eb18blue" src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/33EToHSZ94f.png" alt="" height="16" width="16"  style={{filter: "brightness(0) invert(1)"}} />
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <span style={{color: '#fff', fontSize: 14, fontWeight: 500, textTransform: 'capitalize'}}>add friend</span>
                                </div>
                            </div>
                        </div>
                    }
            </div>
            {
                openEdit=== true &&
                <EditAvatar idUser={props.idUser} isOpenEditFalse={isOpenEditFalse} avatar={avatar} />
            }
        </div>
    )
}

export default Avatar