import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { Icon, Title } from '../../login/Index'


const SetAvatar = (props) => {
    const location= useLocation()
    return (
        <div className={props.className}>
            <div className={props.className2}>
                <Icon className="_5300" className1="_34kw"/>
                <Title className="_1245" className1="_6316" title={`Hey ${location.state.firstname}, Pick for self an avatar , to show everyone easily know who you are ?`} />
                <Container>
                    <Row>
                        <input type="file"  />
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default SetAvatar
