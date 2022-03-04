import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonLoadMore = (props) => {
    return (
        <div className="_i43erosd _04wrolssd" style={{position: 'relative', zIndex: 1, padding: 5, top: 5}}>
            {props.atTop && <Button variant="outline-primary" onClick={()=> console.log(1234)}>Click</Button>}
        </div>
    )
}

export default ButtonLoadMore