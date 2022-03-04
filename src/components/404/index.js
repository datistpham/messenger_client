import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { Icon } from '../login/Index'

const NotFound404 = (props) => {
    useEffect(()=> {
        document.title= "Messenger - Not found"
    },[])
    return (
        <div className={props.className}>
            <div className={props.className2}>
                <Icon className="_5300" className1="_34kw"/>
                <TextNotation 
                    className="_2374"
                    className1="_7632"
                    title="Not Found. This is error "
                    title2="404."
                />
                <TextNotation 
                    className="_2374"
                    className1="_7632"
                    title={<HightLight className="_5362" />}
                    title2=""
                />
                <Button  
                    variant='primary' 
                    title='Return to homepage' 
                    onClick={()=> {}}
                    className='mt-3'
                >
                        Back to homepage
                </Button>
            </div>
        </div>
    )
}
const HightLight= (props)=> {
    const location= useLocation()
    const navigate= useNavigate()
    return (
        <div>
            <span>Sorry, we don't know requested URL </span>
            <span onClick={()=> navigate(`${location.pathname}`)} style={{color: "#2e89ff", cursor: "pointer"}} className={props.className}>{location.pathname} </span>
            <span>.We're so sorry. </span>
        </div>
    )
}
const TextNotation= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <span>{props.title}</span>
                <span style={{fontWeight: 600, fontSize: 24}}>{props.title2}</span>
            </div>
        </div>
    )
}

export default NotFound404
