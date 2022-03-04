import React, { useState, useMemo } from 'react'
import { CSSTransition } from 'react-transition-group'
import Signup from './verifyLayer1/Index'
import VerifySendEmail from './verifyLayer2/Index'
import axios from 'axios'
import { useSelector } from 'react-redux'

const RootSignup = (props) => {
    const account= useSelector(state=> state.userReducer.account)
    const url= useMemo(()=> "http://localhost:4000", [])
    const [showButton, setShowButton]= useState(true)
    const [showMessage, setShowMessage]= useState(false)
    const inversion= ()=> {
        setShowButton(true)
        setShowMessage(false)
    }
    const verifyLayer1=  ()=> {
        setShowMessage(true)
            axios({
            headers: '',
            url: `${url}/verify/code`,
            method: 'POST',
            responseType: 'json',
            maxBodyLength: 10,
            data: {
                email: account
            }
        })
        
    }
    return (
        <div className={props.className}>
            {
                showButton && 
                <CSSTransition
                    in={showButton}
                    timeout={100}
                    classNames="alert"
                    unmountOnExit
                    onEnter={()=> setShowMessage(false)}
                    onExited={()=> setShowMessage(true)}
                >
                        
                    <Signup 
                        className="_w_100" 
                        className2="_c_100" 
                        className3="_3400"
                        verifyLayer1={verifyLayer1}
                    />
                </CSSTransition>
            }
            <CSSTransition
                in={showMessage}
                timeout={300}
                classNames="alert"
                unmountOnExit
                onEnter={()=> setShowButton(false)}
                onExited={()=> setShowButton(true)}
            >
                    <VerifySendEmail 
                        className="_w_100" 
                        className2="_c_100" 
                        className3="_3400"
                        click={inversion}
                    />
            </CSSTransition>
        </div> 
    )
}

export default RootSignup
