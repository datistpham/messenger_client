import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import React, { useState} from 'react'
import { ref as ref1, getDatabase, set as set1} from 'firebase/database'
import { v4 as uuidv4 } from 'uuid'
import AlertDismissibleExample from './error_limit_file'
import DemoListImage from './demo'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { rootActions } from '../../redux/pure/action/root.action'
// import { useDispatch } from 'react-redux'
// import { rootActions } from '../../redux/pure/action/root.action'
// import PreviewImage from './preview_image'
const db= getDatabase()
const storage= getStorage()
const metadata = {
    contentType: 'image/jpeg'
}

const UploadImage= (props)=> {
    const [showAlert, setShowAlert]= useState(false)
    const [image, setImage]= useState(()=> [])
    const [preview, setPreview]= useState(()=> [])
    const timeUpdate= new Date()
    const { idm }= useParams()
    const idUser= useSelector(state=> state.getuserbycookie_reducer.id)
    const dispatch= useDispatch()
    const exec= async (img)=> {

          const storageRef = ref(storage, 'images/' + img.name)
          const uploadTask = uploadBytesResumable(storageRef, img, metadata)
          uploadTask.on('state_changed',
          (snapshot) => {
        
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload is ' + progress + '% done') 
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused')
                break
              case 'running':
                console.log('Upload is running')
                break
            default: 
                return
            }
          }, 
          (error) => {
        
        
            switch (error.code) {
              case 'storage/unauthorized':
                break
              case 'storage/canceled':
                break
              case 'storage/unknown':
                break
              default: 
                break
          }
        })
    }
    const downloadFile= (img)=> {
      const starsRef= ref(storage, `images/${img.name}`)
        getDownloadURL(starsRef)
        .then(async (url) => {
          await set1(ref1(db, `all_message/message/${idm}/`+ uuidv4()), {
            id_message: uuidv4(),
            message: url,
            sendby: idUser,
            timestamp: timeUpdate.getTime(),
            timereport: parseInt(parseInt(timeUpdate.getTime())- parseInt(props.differentTime)),
            type: "image"
          })
          // fetch(url)
          // .then(res=> res.blob())
          // .then(blob=> {
          //     const imageUrl= URL.createObjectURL(blob)
          //     console.log(imageUrl)
          // })
        })
        .catch((error) => {
          switch (error.code) {
            case 'storage/object-not-found':
              break
            case 'storage/unauthorized':
              break
            case 'storage/canceled':
              break
            case 'storage/unknown':
              break
          default:
              return  
          }
        })
    }
    const getFile = (e)=> {
      console.log((e.target.files).length)
      if(Object.values(e.target.files).length>20 ) {
        setShowAlert((prev)=> true)
      }
      else if( Object.values(e.target.files).length<=0) {
        console.log("Not file chosen.")
      }
      else {
        props.isSendImageTrue()
        Object.values(e.target.files).map(item=> setImage((prev)=> ([...prev, item])))
        Object.values(e.target.files).map(item=> setPreview((prev)=> ([...prev,URL.createObjectURL(item)])))
      }
    }
    const isShowAlert= ()=> {
      setShowAlert(()=> false)
    }
    const removeAnElement= (e)=> {
      if(preview.length<=1) {
        props.isSendImageTrue()
      }
      setPreview(preview.filter(img=> img!== e.target.getAttribute("powimage")))
      setImage(image.filter(img=> (img.lastModified).toString() !== (e.target.getAttribute("powvip")).toString()))
    }
    const uploadFileSuperVipPro= ()=> {
      dispatch(rootActions.getnumberoffile_action(image.length))
      image.map((item, key)=> exec(item))  
      image.map((item,key)=> downloadFile(item))
      setImage(()=> [])
      setPreview(()=> [])
      
    }
    return (
      <>
        <AlertDismissibleExample show={showAlert} setShow={isShowAlert} />
        <div className='_29142 _4eiwkd' style={{position: 'absolute',color: 'transparent', top: 0, right: 0, left: 0}}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="button-2">Attach a file</Tooltip>}
            delay={100}
          >
            <label role="button" style={{width: 30, height: 30, position: 'absolute', opacity: 0,color: "transparent", cursor: 'pointer'}} className={`${props.className} _30uweijo`}>
              <input accept='.jpg, .png, .jpeg' style={{width: 0, height: 0, opacity: 0, cursor: 'pointer'}} title="" type="file" multiple onChange={(e)=> getFile(e)} />
            </label>
          </OverlayTrigger>
          <>
            {
              
              preview.length>0 && 
              <div className="_94iwesd _i94wrsdd" style={{width: '1550%', height: 500, backgroundColor: '#f3f3f5', position: 'absolute', zIndex: 999,top: -510, borderRadius: 10, padding: 10, overflow: 'auto'}}>
                {
                  preview.map((item, key)=> 
                    <DemoListImage key={uuidv4()} removeAnElement={removeAnElement} item2={(image[key]).lastModified} item={item} />
                  )
                }
              </div>
            }
            {
              preview.length>0 && 
              <div className='_9ewisda' style={{position: 'absolute', top: -8, left: -37, zIndex: 999}}>
                <Button variant='primary' onClick={()=> {uploadFileSuperVipPro();props.isSendImageFalse()}}>Send</Button>
              </div>
            }
          </>
        </div>
      </>
    )
  }
  export default React.memo(UploadImage)