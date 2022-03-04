import React, { useEffect, useRef } from 'react'

const PreviewImage = (props) => {
    const ref= useRef(null)
    useEffect(()=> {
        fetch(props.image)
        .then(res=> res.blob())
        .then(blob=> {
            const imageUrl= URL.createObjectURL(blob)
            ref.current.src= imageUrl
        })
    },[props.image])
    return (
        <div className='_9w0ed _rikfsd' style={{width: 20, height: 20, borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img ref={ref} style={{width: '100%', height: '100%', objectFit: 'cover'}} draggable={false} src="" alt="Can't display" />
        </div>
    )
}

export default PreviewImage
