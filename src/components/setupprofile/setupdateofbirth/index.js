import React, { useState } from 'react'
import { Form, Container, Row, Col, Button, Toast } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { Icon, Title } from '../../login/Index'


const SetupDateofBirth = (props) => {
    const navigate= useNavigate()
    const location= useLocation()
    const [showA, setShowA]= useState(false)
    const toggleShowA= ()=> setShowA(!showA)
    const [dateofbirth, setdateofbirth]= useState({
        date: "",
        month: "",
        year: ""
    })
    const isNext= ()=> {
        if(dateofbirth.date=== '' || dateofbirth.month=== '' || dateofbirth.year=== '') {
            setShowA(!showA)
            return
        }
        if(dateofbirth.date!== '' && dateofbirth.month!== '' && dateofbirth.year!== '' ) {
            navigate('/setup/gender', {state: {...location.state, date: dateofbirth.date, month: dateofbirth.month, year: dateofbirth.year}})
            return
        }
    }
    const setDate= (e)=> {
        setdateofbirth((prev)=> ({...prev, date: e.target.value}))
    }
    const setMonth= (e)=> {
        setdateofbirth((prev)=> ({...prev, month: e.target.value}))
    }
    const setYear= (e)=> {
        setdateofbirth((prev)=> ({...prev, year: e.target.value}))
    }
    const isNextIgnore= ()=> {
        navigate("/setup/gender", {state: location.state})
        return
    }
    return (
        <div className={props.className}>
            <div className={props.className2}>
                <Icon className="_5300" className1="_34kw"/>
                <Title className="_1245" className1="_6316" title={`Hello ${location.state.firstname}, What's your date of birth ?`} />
                <Container className='d-flex justify-content-center flex-column align-items-center'>
                <Toast show={showA} onClose={toggleShowA} className="mb-3">
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
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Date</Form.Label>
                                <Form.Control value={dateofbirth.date} type="text" placeholder="Enter your date" onChange={(e)=> setDate(e)}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Month</Form.Label>
                                <Form.Control value={dateofbirth.month} type="text" placeholder="Enter your month" onChange={(e)=> setMonth(e)}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Year</Form.Label>
                                <Form.Control value={dateofbirth.year} type="text" placeholder="Enter your year" onChange={(e)=> setYear(e)}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant='outline-primary' onClick={()=> isNextIgnore()}>Skip</Button>
                        </Col>
                        <Col>
                            <Button variant='primary' onClick={()=> isNext()}>Next</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default SetupDateofBirth
