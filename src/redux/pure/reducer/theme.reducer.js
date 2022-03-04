import { thememessage, thememessageBgImconstant, themepost_constant } from "../constant"

const thememessage_reducer= (state= "", action)=> {
    switch(action.type) {
        case thememessage:
            return state= action.payload
        default: 
            return state
    }
}

export default thememessage_reducer

export const themMessageBgIm_reducer= (state= "", action)=> {
    switch(action.type) {
        case thememessageBgImconstant:
            return state= action.payload
        default:
            return state
    }
}
export const thempost_reducer= (state="", action)=> {
    switch(action.type) {
        case themepost_constant:
            return state= action.payload
        default:
            return state
    }
}