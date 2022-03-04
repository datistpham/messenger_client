import { activeuserconstant, blockuserconstant, getnumberoffile_constant } from "../constant"

const activeuserAction= (userObj)=> {
    return {
        type: activeuserconstant,
        payload: userObj
    }
}
const blockUserAction= (userObj)=> {
    return {
        type: blockuserconstant,
        payload: userObj
    }
}



export default activeuserAction

const getnumberoffile_action= (userObj)=> {
    return {
        type: getnumberoffile_constant,
        payload: userObj
    }
}
export { getnumberoffile_action, blockUserAction }