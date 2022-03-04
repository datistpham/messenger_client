import { getimageconstant } from "../constant"

const getimagereducer= (state= {}, action)=> {
    switch(action.type) {
        case getimageconstant:
            return state= action.payload
        default: 
            return state
    }

}

export default getimagereducer