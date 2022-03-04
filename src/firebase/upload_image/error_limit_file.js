import React from 'react'
import { Alert, Fade } from "react-bootstrap";
// import { CSSTransition } from 'react-transition-group'
import '../../style/transition.css'

function AlertDismissibleExample(props) {

      return (
        <Alert show={props.show} transition={Fade} style={{position: 'fixed', zIndex: 9999, top: '50%',left: '50%', transform: 'translate(-50%, -50%)'}} variant="danger" onClose={() => props.setShow()} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                You just chose more than 20 image , the limit is 20 images , Please choose 20 images or less than.
            </p>
        </Alert>
      )
    }
export default AlertDismissibleExample