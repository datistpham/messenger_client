import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import ContentPost from './content_post'

const IntroStory = (props) => {
    return (
        <div className="_erijklmsdklm _lkmdffkmlsdk"> 
            <div className="_spdsdlads _dsksdsweew" style={{marginTop: 10}}>
                <div className="_8ujiewods _9qwepdfosw" style={{width: 400, minWidth: 300}}>
                    <Intro1 idUser={props.avatar.id} isUser={props.isUser} bio={props.avatar.bio} />
                    <PhotoSelf />
                    <PhotoSelf2 />
                </div>
                {
                    props.isUser=== true &&
                    <Intro2 avatar={props.avatar} isUser={props.isUser} />
                }
            </div>
        </div>
    )
}

const Intro1= (props)=> {
    const [bio, setBio]= useState(()=> "")
    const isSetBio= ()=> {
        setBio(()=> valueEditBio)
        axios({
            url: 'http://localhost:4000/update/bio',
            method: "put",
            data: {
                bio: valueEditBio,
                idUser: props.idUser
            },
            responseType: 'json'
        })
        .then(res=> res.data)
    }
    const isNotSetBio= ()=> {
        setBio(()=> "")
    }
    const [valueEditBio, setValueEditBio]= useState(()=> "")
    const [valueRemaining, setValueRemaining]= useState(()=> 100)
    const [openEditBio, setOpenEditBio]= useState(()=> true)
    const isSetValueEditBio= (e)=> {
        setValueEditBio(e.target.value)
        setValueRemaining(()=> (100- e.target.value.length))
    }
    const isSetOpenEditBio= ()=> {
        setOpenEditBio(false)
    }
    const isSetCloseEditBio= ()=> {
        setOpenEditBio(true)
    }
    return (
        <div className="_dgjkdsfsd _sdksdsd" style={{borderRadius: 6, minWidth: 300, marginBottom: 12}}>
            <div style={{padding: '8px 12px'}}>
                <div style={{fontSize: 20, fontWeight: 700, paddingBottom: 2, marginBottom: 10}}>Intro</div>
                <>
                    {
                    openEditBio=== true ? 
                        (<React.Fragment>

                            <div className="_sdijsdsd _kdsposdds" style={{width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center', padding: 5}}>
                                <span className="_30924kwor">
                                    {bio==="" ? props.bio : bio}
                                </span>
                            </div>  
                            {
                                props.isUser=== true &&
                                <div onClick={()=> isSetOpenEditBio()} role="button" className="_ewiwiewe _385reifd" style={{padding: "0 6px", width: '100%', color: "#e4e6eb", fontWeight: 600, fontSize: 14, backgroundColor: '#3a3b3c', borderRadius: 6, height: 36, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10, userSelect: 'none'}}>
                                    <span>Edit Bio</span>
                                </div>
                            }
                        </React.Fragment>)
                    :
                        <React.Fragment>
                            <textarea maxLength={100} onChange={(e)=> isSetValueEditBio(e)} value={valueEditBio} placeholder="Describe who you are" rows={3} className="_w9eokpdsfd _we08iw43" style={{width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center', padding: '8px 12px', borderRadius: 6, backgroundColor: "#3a3b3c", resize: 'none', outline: 'none', border: 'none ', height: 76, color: "#e4e6eb", fontWeight: 600, textAlign: 'center'}}>
                            
                            </textarea>
                            <div className="_90qeijkds _weiojklnew" style={{width: '100%', display: 'flex', flexDirection: 'row-reverse'}}>
                                <span style={{color: "#b0b3b8", fontSize: 12}}>&nbsp;charaters remaining</span>
                                <span style={{color: "#b0b3b8", fontSize: 12}}>{valueRemaining}</span>
                            </div>
                            <div className="_dspokds _90w4eisds" style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 5}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1" style={{backgroundImage: "url(https://www.facebook.com/rsrc.php/v3/yy/r/FFJlY6jO_92.png)", backgroundPosition: "0px -22px", backgroundSize: "22px 198px", width: 20, height: 20, backgroundRepeat: "no-repeat", display: "inline-block",filter: "invert(94%) sepia(6%) saturate(119%) hue-rotate(181deg) brightness(101%) contrast(86%)"}}></i>
                                    </div>
                                    <div style={{fontSize: 12, fontWeight: 400, color: "#e4e6eb"}}>
                                        Public
                                    </div>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                                    <Button className="_3we0idsew _w904ieew" backgroundColor="#3a3b3c" title="Cancel" onClick1={isNotSetBio} onClick={isSetCloseEditBio} padding={12} />
                                    <Button className="_3we0idsew _9e302jwd" backgroundColor="#2374e1" title="Save" onClick1={isSetBio} onClick={isSetCloseEditBio} padding={12} />
                                </div>
                            </div>
                        </React.Fragment>
                    }
                    <Bio />
                    {
                        props.isUser=== true &&    
                        <div role="button" className="_ewiwiewe _385reifd" style={{padding: "0 6px", width: '100%', color: "#e4e6eb", fontWeight: 600, fontSize: 14, backgroundColor: '#3a3b3c', borderRadius: 6, height: 36, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10, userSelect: 'none'}}>
                            <span>Edit Details</span>
                        </div>
                    }
                </>

            </div>
        </div>
    )
}

const Intro2= React.memo((props)=> {
    return (
        <div className="_sdijsdsa _weiweje">
            <ContentPost avatar={props.avatar} />
        </div>
    )
})
export const Button= (props)=> {
    return (
        <div onClick={()=> {props.onClick();props.onClick1()}} role="button" className={props.className} style={{height: 36,padding: `0 ${props.padding}px`, display: 'flex', justifyContent: 'center', alignItems: "center", backgroundColor: `${props.backgroundColor}`, color: '#e4e6eb', fontWeight: 600, fontSize: 14,borderRadius: 6}}>
            <span>{props.title}</span>
        </div>
    )
}

const Bio= (props)=> {
    return (
        <div className="_309i3w9 _9ew9ekw" style={{width: '100%', height: 40, margin: '10px 0'}}>
            <InfoBio />
        </div>
    )
}

const InfoBio= (props)=> {
    return (
        <div className="_e095rifk _904wdfse" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img className="hu5pjgll cwsop09l" src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/N5FAHg4IVxD.png" alt="" height="20" width="20" style={{filter: "invert(94%) sepia(6%) saturate(119%) hue-rotate(181deg) brightness(101%) contrast(86%)"}} />
            </div>
            <div>
                <span style={{color:'#e4e6eb', fontSize: 14,fontWeight: 500}}>Cause edit  poor so work as developer at Google</span>
            </div>
        </div>
    )
}

const PhotoSelf= (props)=> {
    return (
        <div className="_w9eosd _rekmwsewew" style={{width: '100%', borderRadius: 6, backgroundColor: "#242526", margin: '12    px 0', padding: '8px 12px'}}>
            <div className="_qwkeosddv _medw3q3dw">
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginBottom: 10}}>
                    <div style={{color: "#e4e6eb", fontSize: 20,fontWeight: 700}} className="_0mwekwewe _w4jkesdk">Photo</div>
                    <div>
                        <span style={{color: "#4599ff", textTransform: "capitalize"}}>See all photos</span>
                    </div>
                </div>
                <>
                    <PhotoSelf1 />
                </>
               
            </div>    
        </div>
    )
}
const PhotoSelf1= (props)=> {
    return (
        <div className="_03weip _4w-eiorkpfs" style={{width: '100%',height: 'auto', borderRadius: 6, backgroundColor: '#242526', margin: '10px 0'}}>
            <div className="_fdmsoeswe _90wesdkpos" style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 6, backgroundColor: '#242526'}}>
                <div className='_ew9sdkop _w9rokspd' style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', overflow: 'hidden', borderRadius: 10}}>
                    <div role="button" className="_90243pwie _0935irepkfsd" style={{height: '100%', margin: 2}}>
                        <img style={{width: '100%'}} src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg" alt="Open" />
                    </div>

                    <div role="button" className="_90243pwie _0935irepkfsd" style={{height: '100%', margin: 2}}>
                        <img style={{width: '100%'}} src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg" alt="Open" />
                    </div>
                    <div role="button" className="_90243pwie _0935irepkfsd" style={{height: '100%', margin: 2}}>
                        <img style={{width: '100%'}} src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg" alt="Open" />
                    </div>
                    <div role="button" className="_90243pwie _0935irepkfsd" style={{height: '100%', margin: 2}}>
                        <img style={{width: '100%'}} src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg" alt="Open" />
                    </div>
                    <div role="button" className="_90243pwie _0935irepkfsd" style={{height: '100%', margin: 2}}>
                        <img style={{width: '100%'}} src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg" alt="Open" />
                    </div>
                    <div role="button" className="_90243pwie _0935irepkfsd" style={{height: '100%', margin: 2}}>
                        <img style={{width: '100%'}} src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg" alt="Open" />
                    </div>
                </div>
            </div>
        </div>
    )
}
const PhotoSelf2= React.memo((props)=> {
    return (
        <div className="_w9eosd _rekmwsewew" style={{width: '100%', borderRadius: 6, backgroundColor: "#242526", margin: '10px 0', padding: '8px 12px'}}>
            <div className="_qwkeosddv _medw3q3dw">
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
                    <div style={{color: "#e4e6eb", fontSize: 20,fontWeight: 700}} className="_0mwekwewe _w4jkesdk">Friends</div>
                    <div>
                        <span style={{color: "#4599ff", textTransform: "capitalize"}}>See all friends</span>
                    </div>
                </div>
                <>
                
                </>
               
            </div>    
        </div>
    )
})

export default IntroStory