import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import PreViewCoverPhoto from '../../component/preview_cover_photo'
import EditCoverPhoto from '../edit_cover_photo'

const CoverPhoto= (props)=> {
    const [photoUpload, setPhotoUpload]= useState(()=> "")
    const [toggleEdit, setToggleEdit]= useState(()=> "" )
    const [file, setFile]= useState(()=> "")
    const [change, setChange]= useState(()=> false)
    const isSetToggleEdit= ()=> {
        setToggleEdit(prev=> !prev)
    }
    const isSetToggleEditFalse= ()=> {
        setToggleEdit(false)
    }
    const revUpload= (e)=> {
        if(e.target.files.length>= 1) {
            setToggleEdit(()=> false)
            const imageBlob= URL.createObjectURL(e.target.files[0])
            setPhotoUpload(imageBlob)
            setFile(e.target.files[0])
            setChange(()=> true)
        }
        else {
            setToggleEdit(()=> false)
        }
        
    }   
    const cancelUpdateCoverPhoto= ()=> {
        setPhotoUpload(()=> "")
        setChange(()=> false)
    }
    const upLoadSuccess= async ()=> {
        let data= new FormData()
        data.append('cover_photo', file, file.name)
        await axios({
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data`,
            },
            url: 'http://localhost:4000/upload/coverphoto/',
            method: 'post',
            responseType: 'json',
            data: data
        })
        .then(async res=> {
            const uploadCoverPhotoToDatabase=  new Promise(resolve=> {
                    resolve(
                        axios({
                            url: 'http://localhost:4000/upload/coverphoto/db',
                            method: 'post',
                            data: { cover_photo: res.data, idUser: props.idUser },
                            responseType: 'json'
                        })
                    )
                })
            setChange(false)
            return await uploadCoverPhotoToDatabase
            
        })
        
        .catch(err=> console.log(err))
    }
    return (
        <>
            <div className={props.className} style={{position: 'relative'}}>
                <div className={props.className1}>
                    <PreViewCoverPhoto coverPhoto={props.coverPhoto} photoUpload={photoUpload} />
                    {/* <img src={photoUpload==="" ? props.coverPhoto : photoUpload} style={{userSelect: 'none'}} draggable={false} data-imgperflogname="profileCoverPhoto" alt="" className="i09qtzwb rq0escxv n7fi1qx3 datstx6m pmk7jnqg j9ispegn kr520xx4 k4urcfbm" referrerPolicy="origin-when-cross-origin" /> */}
                {
                    change=== true &&
                    <div style={{color: '#e4e6eb', position: 'absolute', top: 0, left: 0, width: '100%',padding: '12px 16px', height: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#00000066'}}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12}}>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <i data-visualcompletion="css-img" className="hu5pjgll eb18blue" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/ZNXE_f63bCZ.png)", backgroundPosition: "0px -452px", backgroundSize: "26px 920px", width: 20, height: 20, backgroundRepeat: "no-repeat", display: "inline-block",filter: "invert(93%) sepia(15%) saturate(56%) hue-rotate(185deg) brightness(99%) contrast(89%)"}}></i>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <span style={{color: '#e4e6eb', fontWeight: 500, fontSize: 14}}>Your cover photo is public.</span>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12}}>
                            <Button className="_3we0idsew _w904ieew" backgroundColor="#ffffff1a" title="Cancel" padding={40} onClick={cancelUpdateCoverPhoto} />
                            <Button className="_3we0idsew _w904ieew" backgroundColor="#2374e1" title="Save Changes" padding={40} onClick={upLoadSuccess} /> 
                        </div>
                    </div>
                }
            </div>
                {
                    props.isUser &&
                    <div className="l9j0dhe7" >
                        <EditCoverPhoto isSetToggleEdit={isSetToggleEdit} isSetToggleEditFalse={isSetToggleEditFalse} revUpload={revUpload} toggleEdit={toggleEdit} />
                    </div>
                }
            </div>
        </>
    )
}

export default CoverPhoto