import React from 'react'
import { CloseIcon } from '../../icon'

const DemoListImage = (props) => {
    return (
        <div className='_9w0ed _rikfsd' style={{width: 160, height: 90, borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
            <div onClick={(e)=> props.removeAnElement(e)} style={{position: 'absolute', top: 0, right: 0, transform: 'scale(0.7)', marginTop: -4, marginRight: -4, border: '1px solid #d6d7de', backgroundColor: '#fff !important', borderRadius: '50%'}} className='_94wefs _93ewkd'><CloseIcon powvip={props.item2} powimage={props.item} /></div>
            <img src={props.item || "https://recmiennam.com/wp-content/uploads/2020/10/tong-hop-anh-gai-xinh-dep-nhat-tuan-qua-4.jpg"} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8}} draggable={false} alt="Can't display" />
        </div>
    )
}

export default DemoListImage
