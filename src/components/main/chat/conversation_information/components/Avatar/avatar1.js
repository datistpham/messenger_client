import React from 'react'

const Avatar1 = (props) => {
    return (
        <div className={props.className}>
            <img draggable={false} className={props.className1} src={props.avatar} alt="Can't display" />
        </div>
    )
}

export default React.memo(Avatar1)
