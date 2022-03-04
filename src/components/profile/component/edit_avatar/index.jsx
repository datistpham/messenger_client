import axios from 'axios'
import React from 'react'
import ReactAvatarEditor from 'react-avatar-editor'
import { CloseIcon2 } from '../../../../icon'
import Spinner from '../../a/spinner'
import CanCelAction from './cancel'
import EditAvatar1 from './edit_avatar1'
import EditAvatar2 from './edit_avatar2'
import EditAvatar3 from './edit_avatar_3'

class EditAvatar extends React.Component {  

    state = {
      image: 'avatar.jpg',
      allowZoomOut: false,
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      rotate: 0,
      borderRadius: 1000,
      preview: null,
      width: 300,
      height: 300,
      test: false   
    }
    
    componentDidMount() {
        document.querySelector("body").style.overflow= "hidden"
    }
    componentWillUnmount() {
        document.querySelector("body").style.overflow= "auto"
        this.setState({test: false})
    }
    
    handleScale = e => {
      const scale = parseFloat(e.target.value)
      this.setState({ scale })
    }
  
    handlePositionChange = position => {
      this.setState({ position })
    }
    setEditorRef = (editor) => (this.editor = editor)
    submitAvatar= async (e)=> {
        this.setState({test: true})
        const img= this.editor.getImageScaledToCanvas().toDataURL()
            await axios({
            url: 'http://localhost:4000/upload/avatar',
            method: 'post',
            data: {
                base64image: img
            },
            responseType: 'json'
        })
        .then(async res=> {
            const uploadCoverPhotoToDatabase=  new Promise(resolve=> {
                resolve(
                    axios({
                        url: 'http://localhost:4000/upload/avatar/db',
                        method: 'post',
                        data: { avatar: res.data, idUser: this.props.idUser },
                        responseType: 'json'
                    })
                )
            })

        this.props.isOpenEditFalse()
        this.props.isSetIsCheck()
        return await uploadCoverPhotoToDatabase
        })
    }
    render() {
      return (
        <div className="_49i32oeww" style={{position: 'fixed', zIndex: 999,width: '100%',height: '100%', top: 0, left: 0,display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,.5)', flexDirection: 'column', cursor: 'default', overflow: 'auto', borderRadius: 6}}>
            <div className="_9034ewpds" style={{width: 700, display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', borderRadius: 6, backgroundColor: '#242526', position: 'absolute', top: 60}}>
                <div className="_9i3293wiekpr" style={{width: '100%', padding: '0 60px', height: 60, borderBottom: "1px solid #ffffff0d", display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                    <EditAvatar1 />
                    <div onClick={()=> this.props.isOpenEditFalse()} className="_90weksdpewwee" style={{position: 'absolute', top: '50%', right: 0, transform: 'translate(-50%,-50%)'}}>
                        <CloseIcon2 filter="invert(94%) sepia(8%) saturate(99%) hue-rotate(185deg) brightness(94%) contrast(100%)" backgroundColor="rgb(58, 59, 60)" />
                    </div>
                </div>
                <EditAvatar2 />
                <div style={{width: '100%', height: 420, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{width: 640, height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{width: 480, height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <ReactAvatarEditor
                                ref={this.setEditorRef}
                                scale={parseFloat(this.state.scale)}
                                width={this.state.width}
                                height={this.state.height}
                                position={this.state.position}
                                onPositionChange={this.handlePositionChange}
                                rotate={parseFloat(this.state.rotate)}
                                borderRadius={this.state.borderRadius}
                                image={this.props.avatar}
                                className="editor-canvas"   
                            />
                        </div>
                    </div>
                </div>
                <div className="_09reokpdffdklm" style={{height: 25, margin: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 7}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1" style={{backgroundImage: "url(https://www.facebook.com/rsrc.php/v3/y2/r/IDfl9BhsoOx.png)", backgroundPosition: "0px -52px", backgroundSize: "26px 74px", width: 20, height: 20, backgroundRepeat: "no-repeat", display: "inline-block",filter: "invert(93%) sepia(15%) saturate(56%) hue-rotate(185deg) brightness(99%) contrast(89%)"}}></i>
                    </div>
                    <div style={{width: 400, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <input
                            name="scale"
                            type="range"
                            onChange={this.handleScale}
                            min={this.state.allowZoomOut ? '0.1' : '1'}
                            max="2"
                            step="0.01"
                            defaultValue="1"
                            className="slider" id="myRange"
                        />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1" style={{backgroundImage: "url(https://www.facebook.com/rsrc.php/v3/yk/r/4Izm5VuGeMx.png)", backgroundPosition: "0px -228px", backgroundSize: "26px 480px", width: 20, height: 20, backgroundRepeat: "no-repeat", display: "inline-block",filter: "invert(93%) sepia(15%) saturate(56%) hue-rotate(185deg) brightness(99%) contrast(89%)"}}></i>
                    </div>
                </div>
                <EditAvatar3 />
                <div className="_0ew9ijdskmcx" style={{width: '100%', padding: 16, borderTop: '1px solid #3e4042', height: 69, display: 'flex', flexDirection: 'row-reverse', alignItems: 'center'}}>
                    <div onClick={(e)=> this.submitAvatar(e)} role="button" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div className="_409wdsweetw" style={{padding: "0 40px", height: 36, backgroundColor: '#2374e1', borderRadius: 6,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <span style={{fontSize: 14,fontWeight: 600,whiteSpace: 'nowrap',color: '#fff'}}>Save</span>
                        </div>
                    </div>
                    <CanCelAction isOpenEditFalse={this.props.isOpenEditFalse} />
                </div>
            </div>
            <div>
                {
                    this.state.test=== true &&
                    <Spinner />
                }
            </div>
        </div>
      )
    }
  }
export default EditAvatar
