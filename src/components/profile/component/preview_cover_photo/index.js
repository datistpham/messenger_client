import React, { useEffect, useState } from 'react'

const PreViewCoverPhoto = (props) => {
    const [coverPhoto, setCoverPhoto]= useState(()=> "")
    useEffect(()=> {
        fetch(props.coverPhoto)
        .then(res=> res.blob())
        .then(blob=> {
            const imageBlob= URL.createObjectURL(blob)
            setCoverPhoto(imageBlob)
        })
        .catch(err=> console.log(err))
    },[props.coverPhoto])
    if(coverPhoto=== "" || coverPhoto=== undefined) {
        return (
            <div style={{width: '100%', height: 250, display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
                <div className="balls">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
    else {
        return (
            <img src={props.photoUpload==="" ? coverPhoto : props.photoUpload} style={{userSelect: 'none'}} draggable={false} data-imgperflogname="profileCoverPhoto" alt="" className="i09qtzwb rq0escxv n7fi1qx3 datstx6m pmk7jnqg j9ispegn kr520xx4 k4urcfbm" referrerPolicy="origin-when-cross-origin" />
        )
    }
}

export default PreViewCoverPhoto
