import React from 'react'

const SpecificImage = (props) => {
  if(props.media=== undefined || props.media=== "") {
    return (
      <></>
    )
  }
  else {
    return (
        <div className={props.className} style={{width: "calc(100% / 3)", paddingTop: "calc(100% / 3)", position: 'relative'}}>
          <img src={props.media.message} alt="open" className="_ewikpds _9wi4wikre" style={{width: '100%',height: '100%', objectFit: 'cover', objectPosition: 'center', position: 'absolute', top: 0, left: 0, padding: 2}} />
        </div>
    )
  }
}

export default SpecificImage
