import { getUserbyCookieconstant } from "../constant"

const getUserbyCookie= (userObj)=> {
    return {
        type: getUserbyCookieconstant,
        payload: userObj
    }
}

export default getUserbyCookie