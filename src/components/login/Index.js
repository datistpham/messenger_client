import axios from 'axios'
import React, {  createContext, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useGetUser } from '../../api/getuser/index'
import { WithThirdFacebook ,WithThirdGoogle,} from './authThird/Index'
import Cookies from 'js-cookie'
import md5 from 'md5'
const AccountContext= createContext()
export default function Login(props) {
    // const { status, data, error, isFetching }= useGetUser()
    // useEffect(()=> {
    //     const getUser= async ()=> {
    //         await axios({
    //             url: 'http://localhost:4000/auth/user',
    //             method: 'post',
    //             responseType: 'json'
    //         })
    //         .then(res=> console.log(res.data))

    //     }
    //     getUser()
    // },[])
    const navigate= useNavigate()

    useEffect(()=> {
        if(localStorage.getItem("messengerId")) {
            const user= JSON.parse(localStorage.getItem("messengerId"))
            setInfo({account: user.account, password: user.password})
        }
    },[])
    const [info, setInfo]= useState({
        account: '',
        password: ''
    })
    const getaccount= (e)=> {
        setInfo(prev=> ({...prev, account: e.target.value}))
    }
    const getpassword= (e)=> {
        setInfo(prev=> ({...prev, password: e.target.value}))
    }
    const toSignup= ()=> {
        navigate("/signup", {state: {account: info.account, password: info.password}})
    }


    const checkInfo= async ()=> {
        
        await axios({
            url: 'http://localhost:4000/checklogin',
            method: 'post',
            data: {
                account: info.account,
                password: info.password
            },
            responseType: 'json'
        })
        .then((res)=> {
            console.log(res.status)
            if(res.status=== 200) {
                Cookies.set('_s_ID', md5(`${info.account} ${info.password}`), {expires: 7})
                navigate('/t')
                return 
            }
        })
    }
    return (
        <AccountContext.Provider value={{account: info.account, password: info.password}}>
            <div className={props.className}>
                <div className={props.className2}>
                    <Icon className="_5300" className1="_34kw"/>
                    <Title className="_1245" className1="_6316" title="Connect with your favourite people" />
                    <div className={props.className3}>
                        <Input 
                            className="_2590" 
                            className1="_3753" 
                            className2="_1352" 
                            type="text" 
                            placeholder="Email address or phone number"
                            getInfo={getaccount}
                            value={info.account}
                            checkDisabled={()=> console.log()}
                        />
                        <Input 
                            className="_2590" 
                            className1="_3753" 
                            className2="_1352" 
                            type="password"
                            placeholder="Password"
                            getInfo={getpassword}
                            value={info.password}
                            checkDisabled={()=>console.log()}

                        />
                        <Submit 
                            className="_5321" 
                            className1="_9432" 
                            title="Continue" 
                            disabled={false}
                            button={checkInfo}
                        />
                        <div className='_e_021'>or</div>
                        <WithThirdGoogle className='_5331' className1="_7564" />
                        <WithThirdFacebook className="_5331" className1="_7564" />
                        <SaveInfo 
                            className="_2352"
                            className1="_1234"
                            className2="_6453"
                            className3="_9353"
                            className4="_3112"
                            type="checkbox"
                            title="Keep me signed in"
                        />
                        <TitleSignup 
                            className="_5342" 
                            className1="8450"
                            title="You don't have account ?"
                            title2="Sign up"
                            toSignup={toSignup}
                        />
                    </div>
                </div>
            </div>
        </AccountContext.Provider>
    )
}
export const Icon= (props)=> {
    return (
        <div className={props.className}>
            <img draggable={false} className={props.className1} src="https://static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg" alt="Can't display" />
        </div>
    )
}
export const Title= (props)=> {
    return (
        <div className={props.className}>
            <span className={props.className1}>{props.title}</span>
        </div>
    )
}
export const Input= (props)=> {
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <input 
                    className={props.className2} 
                    type={props.type} 
                    placeholder={props.placeholder} tabIndex={0} 
                    onChange={(e)=> props.getInfo(e)}
                    value={props.value}
                    onBlur={()=> (props.checkDisabled())}
                />
            </div>
        </div>
    )
}
export const Submit= (props)=> {
    return (
        <div className={props.className}>
            <button style={props.disabled=== true ? {backgroundColor: "#505151",color: "#858686", cursor: "not-allowed"}: {color: "#fff",cursor: "pointer", backgroundColor: "#0a7cff"}} disabled={props.disabled} tabIndex={0} onClick={()=> props.button()} className={props.className1}>{props.title}</button>
        </div>
    )
}
const SaveInfo= (props)=> {
    const ref= useRef()
    const userContext= useContext(AccountContext)
    const saveAccount= ()=> {
        if(ref.current.checked) {
            localStorage.setItem("messengerId", JSON.stringify({"account":userContext.account, "password":userContext.password}))
            return
        } 
            localStorage.removeItem("messengerId")
    }
    return (
        <div className={props.className}>
            <div className={props.className1}>
                <input type={props.type} className={props.className4} ref={ref} onChange={()=> saveAccount()} defaultChecked={localStorage.getItem("messengerId") ? true : false} />
            </div>
            <div className={props.className2}>
                <span className={props.className3}>{props.title}</span>
            </div>
        </div>
    )
}
export const TitleSignup= (props)=> {
    
    return (
        <div className={props.className}>
            <span className={props.className1}>{props.title}</span>
            <Submit 
                className="_5321" 
                className1="_9432" 
                title={props.title2}
                button={props.toSignup}
                disabled={false}
            />
        </div>
    )
}