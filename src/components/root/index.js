import React, { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from '../login/Index'
import F from '../main/chat'
import SetupProfile from '../setupprofile/root'
import RootSignup from '../signup/Index'
import Cookies from 'js-cookie'
import Delay from './delay'
import { Spinner } from 'react-bootstrap'
import { ContextProvider } from '../chat_video_call/Context'
const P= lazy(()=> import("../profile"))
const MainVideo= lazy(()=> import("../chat_video_call/Index"))
export default function Root(props) {
    
    return (
        <div className={props.className}>
            <Routes>
                <Route path="/" element={Cookies.get("_s_ID").length> 0? <Navigate replace to="/t" /> : <Navigate replace to="/login" /> } />
                <Route path='/login' element={<Login className="_w_100" className2="_c_100" className3="_3400"/>} />
                <Route path='/signup' element={<RootSignup className="_w_100" />} />
                <Route path='/setup/*' element={<SetupProfile className="_w_100" />} />
                <Route path='/t/*' element={Cookies.get("_s_ID").length> 0 ? <F className="_w_100" /> : <Navigate replace to="/login" />} />
                <Route path="/p/:idm" element={<Suspense fallback={<Delay />}><P className="_ewkodssd _iew30qkq20" /></Suspense>} />
                <Route path="/v" element={<Suspense fallback={<div>Loading...</div>}><MainVideo /></Suspense> } />
                <Route path="/videocall/:idm" element={<Suspense fallback={<Spinner animation="border" role="status" variant="secondary"></Spinner>}> <ContextProvider> <MainVideo /></ContextProvider></Suspense> } />
            </Routes>
        </div>
    )
}
