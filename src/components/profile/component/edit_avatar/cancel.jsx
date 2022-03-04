import React from 'react'

const CanCelAction = (props) => {
    return (
        <div onClick={()=> props.isOpenEditFalse()} role="button" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="_409wdsweetw" style={{padding: "0 12px", height: 36, borderRadius: 6,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <span style={{fontSize: 14,fontWeight: 600,whiteSpace: 'nowrap',color: '#2374e1'}}>Cancel</span>
            </div>
        </div>
    )
}

export default CanCelAction
