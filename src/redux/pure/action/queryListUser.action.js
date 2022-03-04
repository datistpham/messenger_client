import { getalllistuserconstant, getIdMessage, getListUserconstant } from "../constant"

const getListUser= (userObj)=> {
    return {
        type: getListUserconstant,
        payload: userObj
    }
}
const getListIdMessage= (userObj)=> {
    return {
        type: getIdMessage,
        payload: userObj
    }
}
const getAllListUserAction= (userObj)=> {
    return {
        type: getalllistuserconstant,
        payload: userObj
    }
}
export { getListIdMessage, getAllListUserAction }
export default getListUser