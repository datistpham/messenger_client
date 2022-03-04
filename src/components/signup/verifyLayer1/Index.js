import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon, Title, Input,Submit, TitleSignup } from '../../login/Index'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import { rootActions } from '../../../redux/pure/action/root.action'

const Signup = (props) => {
    const dispatch= useDispatch()
    const reg1= /[ ]/
    const regpassword= /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/ 
    const regemail= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regphone= /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    const navigate= useNavigate()
    const [user, setUser]= useState({
        account: '',
        password: '',
        confirmpassword: ''
    })
    const [disabled, setDisabled]= useState(()=> true)
    const [state, setState]= useState(()=> false)
    const toSignup= ()=> {
        navigate("/Login")
    }
    const showpassword= ()=> {
        setState(!state)
    }
    const getAccount= (e)=> {
        setUser((prev)=> ({...prev, account: e.target.value}))
        dispatch(rootActions.handleUser.handleAccount(e.target.value))
    }
    const getPassword= (e)=> {  
        setUser((prev)=> ({...prev, password: e.target.value}))
        dispatch(rootActions.handleUser.handlePassword(e.target.value))
    }
    const getConfirmPassword= (e)=> {
        setUser((prev)=> ({...prev, confirmpassword: e.target.value}))
    }
    const isDisabled= ()=> {
        if(user.account=== "" || user.password=== "" || user.confirmpassword=== "" ) {
            setDisabled(true)
        }
        else if(regpassword.test(user.password)=== true) {
            setDisabled(true)
        }
        else if(regemail.test(user.account)=== false && regphone.test(user.account)=== false) {
            setDisabled(true)
        }
        else if(user.password !== user.confirmpassword) {
            setDisabled(true)
        }
        else if(reg1.test(user.account)=== true || reg1.test(user.password)=== true || reg1.test(user.confirmpassword)=== true) {
            setDisabled(true)
        } 
        else {
            setDisabled(false)
        }
    }
    return (
        <div className={props.className}>
            <div className={props.className2}>
                <Icon className="_5300" className1="_34kw"/>
                <Title className="_1245" className1="_6316" title="Create account messenger to connect every time, every where" />
                <div className={props.className3}>
                    <Input 
                        className="_2590" 
                        className1="_3753" 
                        className2="_1352" 
                        type="text" 
                        placeholder="Enter your email or phone number"
                        getInfo={_.debounce((e)=> getAccount(e), 500)}
                        checkDisabled={isDisabled}
                    />
                    <Input 
                        className="_2590" 
                        className1="_3753" 
                        className2="_1352" 
                        type={state ? "text" : "password"}
                        placeholder="Enter your password"
                        getInfo={_.debounce((e)=> getPassword(e),300)}
                        checkDisabled={isDisabled}
                    />
                    <Input 
                        className="_2590" 
                        className1="_3753" 
                        className2="_1352" 
                        type={state ? "text" : "password"}
                        placeholder="Confirm your password"
                        getInfo={_.debounce((e)=> getConfirmPassword(e),300)}
                        checkDisabled={isDisabled}

                    />
                    <ShowPassword
                        className="_2352 _1235"
                        className1="_1234"
                        className2="_6453"
                        className3="_9353"
                        className4="_3112"
                        type="checkbox"
                        title="Show password"
                        showpassword={showpassword}
                    />
                    <ShowPassword
                        className="_2352 _1235 _8409"
                        className1="_1234"
                        className2="_6453"
                        className3="_9353"
                        className4="_3112"
                        type="checkbox"
                        title="I agree with policy privacy and terms of service "
                        showpassword={()=> console.log()}
                    />
                    <Submit 
                        className="_5321" 
                        className1="_9432" 
                        title="Continue" 
                        button={props.verifyLayer1} 
                        disabled={disabled}
                    />
                    <div className='_e_021'>or</div>
                    
                    <TitleSignup 
                        className="_5342" 
                        className1="8450" 
                        title="You have account ?"
                        title2="Log in"
                        toSignup={toSignup}
                    />
                </div>
            </div>
        </div>
    )
}

const ShowPassword= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <input type={props.type} className={props.className4} onChange={()=> props.showpassword()} />
            </div>
            <div className={props.className2}>
                <span className={props.className3}>{props.title}</span>
            </div>
        </div>
    )
}

export default Signup