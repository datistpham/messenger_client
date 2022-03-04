import axios from 'axios'
import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Icon, Input, Submit, Title } from '../../login/Index'

const title= <div>
                <span>We've just sent to your email/phone number a verify include 6 digits</span>
                    <br />
                <span>please check your email and type code to form below here</span>
            </div>
const VerifySendEmail = (props) => {
    const account= useSelector(state=> state.userReducer.account)
    const password= useSelector(state=> state.userReducer.password)
    const url= useMemo(()=> "http://localhost:4000/",[])
    const [info, setInfo]= useState(()=> "")
    const [x, setX]= useState()
    const [sendAgain, setSendAgain]= useState(()=> false)
    const navigate= useNavigate()
    const getInfo= (e)=> {
        setInfo(e.target.value)
    }
    const verifyEmail= async ()=> {
        await axios({
            url: `${url}authentication/verify/confirm`,
            method: 'POST',
            data: {
                code: info
            }
        })
        .then(res=> {
            if(res.data=== 'timeout') {
                setX("Code have expired, Please send again to receive code.")
                setSendAgain(true)
                return 
            }
            if(res.data=== 'failed') {
                setX("Your code is incorrect, Please try again.")
                setSendAgain(false)
                return
            }
            else {
                setX("")
                setSendAgain(false)
                navigate("/setup/name", {state: {account: account, password: password}})
                return
            }
        })
    }
    const sendCodeAgain= ()=> {
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
            <div className={props.className2}>
                <Icon className="_5300" className1="_34kw"/>
                <Title className="_1245 _6453" className1="_6316" title={title} />
                <div className={props.className3}>
                    <Input 
                        className="_2590" 
                        className1="_3753" 
                        className2="_1352" 
                        type="text" 
                        placeholder="Enter code you just received"
                        getInfo={getInfo}
                        checkDisabled={()=> console.log()}

                    />
                    <DecisionStatement className="_9746" className1="7845" title={x} />
                    { sendAgain && <Submit 
                        className="_5321" 
                        className1="_9432" 
                        title="Send again" 
                        button={sendCodeAgain}
                        disabled={false}
                    />     }
                    <Submit 
                        className="_5321" 
                        className1="_9432" 
                        title="Verify" 
                        button={verifyEmail}
                        disabled={false}
                    />     
                    <div className='_e_021'>or</div>
                    <Submit 
                        className="_5321" 
                        className1="_9432" 
                        title="Return sign up" 
                        button={props.click} 
                        disabled={false}
                    />    
                </div>
            </div>
        </div>
    )
}
const DecisionStatement= (props)=> {
    return (
        <div className={props.className}>
            <span className={props.className1}>{props.title}</span>
        </div>
    )
}
export default VerifySendEmail
