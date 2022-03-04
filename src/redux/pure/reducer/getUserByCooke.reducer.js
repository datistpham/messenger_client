import { getUserbyCookieconstant } from "../constant";

const getuserbycookie_reducer= (state= [], action)=> {
    switch (action.type) {
        case getUserbyCookieconstant:
            return state= action.payload
        default: 
            return state
    }
}

export default getuserbycookie_reducer