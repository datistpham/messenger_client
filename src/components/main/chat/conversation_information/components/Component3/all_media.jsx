import React, { useContext, useState } from 'react'
import { MyContext } from '../../../frame_chat'
import SpecificImage from './specific_image'
import { v4 as uuidv4 } from 'uuid'
import SkeletonMedia from './skeleton_media'

const AllMediaComponent = (props) => {
  const rContext= useContext(MyContext)
  return (
    <div className={props.className}>
      {
        props.item.map((item, key)=> 
          <SpecificImage key={uuidv4()} className="_84u8ioejr" media={rContext.media[key]}/>
        )
      }
      {
        (props.hasMore=== true && props.item.length>4) &&
        
        <SkeletonMedia />
      }
      
    </div>
  )
}

export default React.memo(AllMediaComponent)
