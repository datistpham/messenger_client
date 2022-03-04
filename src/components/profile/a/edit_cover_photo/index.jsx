import React, {useRef, useEffect} from 'react'


const EditCoverPhoto= (props)=> {
    const myRef= useRef()
    useEffect(()=> {
        document.addEventListener("mousedown", handleClickOutside)
        return ()=> document.removeEventListener("mousedown", handleClickOutside)
    })
    const handleClickOutside= (e)=> {
        if(myRef.current && !myRef.current.contains(e.target)) {
            props.isSetToggleEditFalse()
        }
    }
    return (
        <div className="_329djsskd _30fdklsdwqa" style={{position: 'relative',height: 16, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',gap: 10}}>
            <div style={{position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}> 
                <div onClick={()=> props.isSetToggleEdit()} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, userSelect: 'none'}}>
                    <div className="_r4kddkmlfsd _49u8jofdkf" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/dCIG3mJT3md.png)", backgroundPosition: "0px -1328px", backgroundSize: "26px 1666px", width: 16, height: 16, backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                    </div>
                    <div className="_ew90dskmsd _ekofkfqw2" style={{height: 16,display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <span className="_r98dfsjod _3490eriffdm" style={{fontSize: 14, fontWeight: 600}}>Edit Cover Photo</span>
                    </div>
                </div>
                {
                    props.toggleEdit &&
                    <div ref={myRef} className="_30iejw _ew09ew4w" style={{width: 344, height: 169, position: 'absolute',zIndex: 200, right: -11, borderRadius: 6,top: '140%', backgroundColor: '#242526', marginTop: 5, boxShadow: '0 12px 28px 0 #00000033, 0 2px 4px 0 #0000001a, inset 0 0 0 1px #ffffff0d', padding: '8px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
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
                                <input type="file" style={{width: 0, height: 0}} title="" onChange={(e)=> props.revUpload(e)} />
                            </div>
                        </label>



                        <div role="button" className="_904wiw4 _9w4i-w33" style={{width: 328,cursor: 'pointer', margin: '0 8px', height: 36, padding: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1" style={{backgroundImage: "url(https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/dgud6SkSayD.png)", backgroundPosition: "0px -190px", backgroundSize: "34px 486px", width: 20, height: 20, backgroundRepeat: "no-repeat", display: "inline-block",filter: "invert(93%) sepia(15%) saturate(56%) hue-rotate(185deg) brightness(99%) contrast(89%)"}}></i>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <span style={{fontSize: 14, fontWeight: 500, color: "#e4e6eb"}}>Reposition</span>   
                            </div>
                        </div>
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
            {/*  */}

        </div>
    )
}

export default EditCoverPhoto