import React, { useState } from 'react'
import { Form, Container, Button, Toast, Row, Col } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { Icon, Title } from '../../login/Index'


const SetGender = (props) => {
    const navigate= useNavigate()
    const location= useLocation()
    const [showA, setShowA]= useState(false)
    const toggleShowA= ()=> setShowA(!showA)
    const [gender, setgender]= useState(()=> "")
    const isNext= ()=> {
        if(gender=== "") {
            setShowA(!showA)
            return
        }
        if(gender !== '' ) {
            navigate('/setup/avatar', {state: {...location.state, gender} })
            return
        }
    }
    const getGender= (e)=> {
        setgender(e.target.value)
    }
    const isNextIgnore= ()=> {
        navigate("/setup/avatar")
    }
    
    return (
        <div className={props.className}>
            <div className={props.className2}>
                <Icon className="_5300" className1="_34kw"/>
                <Title className="_1245" className1="_6316" title={`Hello ${location.state.firstname}, You are ?`} />
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
                    <Toast.Body className='m-3'>Oops, Please don't empty any fields, This very necessary</Toast.Body>
                </Toast>
                <Form onChange={(e)=> getGender(e)}>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Male"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                            value="Male"
                        />
                        <Form.Check
                            inline
                            label="Female"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                            value="Female"
                        />
                        <Form.Check
                            inline
                            label="Other"
                            name="group1"
                            type={type}
                            id={`inline-${type}-3`}
                            value="Other"
                        />
                        </div>
                    ))}
                </Form>
                <Row>
                    <Col>
                        <Button variant='outline-primary' onClick={()=> isNextIgnore()}>Skip</Button>    
                    </Col>
                    <Col>
                    <Button variant='primary' onClick={()=> isNext()}>Next</Button>
                    </Col>
                </Row>
                <button onClick={()=> (console.log(location.state))}>Click</button>

                </Container>
            </div>
        </div>
    )
}

export default SetGender
