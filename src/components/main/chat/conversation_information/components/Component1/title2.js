import React from 'react'

const Title2Component1 = (props) => {
    return (
        <div role="button" className={props.className}>
            <div onClick={()=> props.openForTheme()} className="_9412f" style={{display: 'flex',flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',width: '100%', padding: '0 4px'}}>
                <div className={props.className1}>
                    {props.title1}    
                </div>
                <div className={props.className2} style={props.style}>
                    {props.title2}
                </div>
            </div>
        </div>
    )
}

export default Title2Component1
