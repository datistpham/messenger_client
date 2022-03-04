import React, { useState } from 'react'
import { Icon,  Title } from '../../login/Index'
import { Button, Col, Form, Row, Toast } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

const SetupName = (props) => {
    const navigate= useNavigate()
    const location= useLocation()
    const [name, setName]= useState({
        firstname: '',
        surname: ''
    })
    const [showA, setShowA]= useState(false)
    const toggleShowA= ()=> setShowA(!showA)
    const getFirstname= (e)=> {
        setName((prev)=> ({...prev, firstname: e.target.value}))
    }
    const getSurname= (e)=> {
        setName((prev)=> ({...prev, surname: e.target.value}))
    }
    const isNext= ()=> {
        if(name.firstname=== '' || name.surname=== '') {
            setShowA(!showA)
            return
        }
        if(name.firstname!== '' && name.surname!== '') {
            navigate('/setup/dateofbirth', {state: {...location.state, firstname: name.firstname, surname: name.surname}})
            return
        }
    }
    
    return (
        <div className={props.className}>
            <div className={props.className2}>
                
                <Icon className="_5300" className1="_34kw"/>
                <Title className="_1245" className1="_6316" title="Hello, welcome to messenger, How can i call you ?" />
                <div className={props.className3}>Please enter into fields below to everyone know who you are</div>
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                        />
                        <strong className="me-auto m-2">Attention</strong>
                    </Toast.Header>
                    <Toast.Body className='m-3'>Oops, Please don't empty any fields, This's very necessary</Toast.Body>
                </Toast>
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Your firstname</Form.Label>
                    <Form.Control type="text" placeholder="Enter your firstname" onChange={(e)=> getFirstname(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your surname</Form.Label>
                    <Form.Control type="text" placeholder="Enter your surname" onChange={(e)=> getSurname(e)}/>
                </Form.Group>
                <Row>
                    <Col>
                        <Button variant='primary' onClick={()=> isNext()} >Next</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export default SetupName
