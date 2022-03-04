import { thememessage, thememessageBgImconstant, themepost_constant } from "../constant"

const themeformessage= (userObj)=> {
    return {
        type: thememessage,
        payload: userObj
    }
}

export { themeformessage }
export const themeformessageBgIm= (userObj)=> {
    return {
        type: thememessageBgImconstant,
        payload: userObj
    }
}

export const themepost_active= (userObj)=> {
    return {
        type: themepost_constant,
        payload: userObj
    }
}