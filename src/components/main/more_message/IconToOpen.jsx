import React from 'react'

const IconToOpen = (props) => {
  const openPopup= (e)=> {
    e.preventDefault()
    props.isMoreMessage2Toggle()
  }
  return (
    <div onClick={(e)=> openPopup(e)} className={props.className} style={{width: 36, height: 36, position: 'absolute', top: '50%', right: 0, transform: 'translate(-50%,-50%)', zIndex: 999}}>
        <div style={{width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #343536', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <i data-visualcompletion="css-img" className="hu5pjgll m6k467ps sp_Q4QeUIqlBJG_1_5x sx_d24885" style={{ backgroundColor: "#fff"}}></i>
        </div>
    </div>
  )
}

export default IconToOpen
