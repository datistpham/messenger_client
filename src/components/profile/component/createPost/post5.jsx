import React from 'react'

const Post5 = (props) => {
    return (
        <div role="button" className="_94iwekopwe _95eroerkop" style={{width: '100%', padding: '16px 16px 0 16px', height: 52}}>
            <div style={{width: '100%',height: 36, borderRadius: 8, display: 'flex', justifyContent: 'center',alignItems: 'center', backgroundColor: `${props.enablePost=== true ? "#2374e1" : "#5d5f61" }`, cursor: `${props.enablePost===true ? "pointer" : "not-allowed"}`}}>
                <span role="textbox" style={{fontSize: 14, fontWeight: 500,borderRadius: 6, color: `${props.enablePost=== true ? "#fff" : "#8f9091"}`}}>Post</span>
            </div>
        </div>
    )
}

export default Post5
