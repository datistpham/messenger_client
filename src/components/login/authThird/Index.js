import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"
import { app } from '../../../firebase/index'
import { iconGoogle, iconFacebook } from '../../../icon'
const auth= getAuth()
const provider= new GoogleAuthProvider()
const providerF= new FacebookAuthProvider()
provider.addScope("https://www.googleapis.com/auth/userinfo.email")
provider.setCustomParameters({
    "display": "popup"
})
providerF.setCustomParameters({
    "display": "popup"
})
providerF.addScope("user_birthday")
export const WithThirdGoogle= (props)=> {
    const handleSigninGoogle= ()=> {
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
    return (
        <div className={props.className}>
            <button className={props.className1} onClick={()=> handleSigninGoogle()}>
                <Icon className="_3242" icon={iconGoogle}/>
                <Title 
                    className="_2145"  
                    className1="_3243" 
                    title="Log in with Google"
                /> 
            </button>
        </div>
    )
}
export const WithThirdFacebook= (props)=> {
    const handleSigninFacebook= ()=> {
        signInWithPopup(auth, providerF)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
        });
    }
    return (
        <div className={props.className}>
            <button className={props.className1} onClick={()=> handleSigninFacebook()}>
                <Icon className="_3242" icon={iconFacebook} />
                <Title 
                    className="_2145"
                    className1="_3243"
                    title="Log in with Facebook"
                />
            </button>
        </div>
    )
}

const Icon= (props)=> {
    return (
        <div className={props.className}>
            {props.icon}
        </div>
    )
}
const Title= (props)=> {
    return (
        <div className={props.className}>
            <span className={props.className1}>{props.title}</span>
        </div>
    )
}