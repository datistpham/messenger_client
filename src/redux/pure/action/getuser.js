import { getaccount, getpassword } from "../constant"

const handleAccount= (userObj)=> {
    return {
        type: getaccount,
        payload: userObj
    }
}

const handlePassword= (userObj)=> {
    return {
        type: getpassword,
        payload: userObj
    }
}

const handleUser= {
    handleAccount, 
    handlePassword,
}

export default handleUser