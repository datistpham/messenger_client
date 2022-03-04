import { getimageconstant } from "../constant"

const getimageaction= (userObj)=> {
    return {
        type: getimageconstant,
        payload: userObj
    }
}
export default getimageaction
