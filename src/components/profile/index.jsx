import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CoverAndAvatarProfile from './component/a_little'
import HeaderProfile from './component/header'
import IntroStory from './component/intro'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const MetaTag= (props)=> {
    return (
        <Helmet>
            <meta charSet='utf-8' />
            <title style={{textTransform: 'capitalize'}}>{props.user} | Messenger</title>
        </Helmet>
    )
}

const P = (props) => {
    const { idm }= useParams()
    const [isUser, setIsUser]= useState(false)
    const [user, setUser]= useState(()=> "")
    const [info, setInfo]= useState(()=> "")
    useEffect(()=> {
        const getInfoUser= async ()=> {
            await axios({
                url: 'http://localhost:4000/infouser',
                method: 'post',
                data: {
                    idUser: idm
                }
            })
            .then(res=> setUser(res.data))

        }
        getInfoUser()
        const getInfo2= async ()=> {
            const infoU= await axios.get("http://localhost:4000/info2", {params: { idUser: idm }})
            setInfo(infoU.data[0])
        }
        getInfo2()
    },[idm])
    useEffect(()=> {
        const checkUser= async ()=> {
            await axios({
                url: 'http://localhost:4000/checkuser/',
                method: 'post',
                data: {
                    idUser: Cookies.get("_s_U_ID"),
                    idSecret: Cookies.get("_s_ID")
                },
                responseType: 'json',
            })
            .then(res=> {
                if(res.data=== "OK" && (Cookies.get("_s_U_ID").toString()=== idm.toString())) {
                    setIsUser(true)
                    return
                }
                else {
                    setIsUser(false)
                    return
                }
            })
        }

        checkUser()
    },[idm])
    useEffect(()=> {
        document.querySelector("._2700").style.height= "auto"
        return ()=> document.querySelector("._2700").style.height= "100%"
    })
    return (
        <HelmetProvider>
            <div className={props.className}>
                <MetaTag user={user} />
                <HeaderProfile className="_94232 _49014" isUser={isUser} />
                <>
                    <CoverAndAvatarProfile user={user} idUser={info.id} avatar={info} isUser={isUser} />
                </>
                <>
                    <IntroStory avatar={info} isUser={isUser} />
                </>
            </div>
        </HelmetProvider>
    )
}

export default P
