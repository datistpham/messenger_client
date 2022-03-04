import React from 'react'

const TitleComponent1 = (props) => {
    return (
        <div role="button" className={props.className}>
            <div role="button" onClick={()=> props.onClick()} className={props.className6} style={{padding: '12px 10px'}} >
                <div className={props.className2}>
                    <span className={props.className3}>
                        {props.title1}
                    </span>
                </div>
                <div className={props.className4}>
                    <span className={props.className5} style={props.style}>
                        {props.title2}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TitleComponent1
