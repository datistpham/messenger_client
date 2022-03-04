import { activeuserconstant, blockuserconstant, getnumberoffile_constant } from "../constant";

const activeuserreducer= (state= "", action)=> {
    switch(action.type) {
        case activeuserconstant:
            return state= action.payload
        default: 
            return state
    }
    
}

const blockuserreducer= (state= "", action)=> {
    switch(action.type) {
        case blockuserconstant:
            return state= action.payload
        default:
            return state
    }
}
export default activeuserreducer

const getNumberofFile_reducer= (state=0, action)=> {
    switch(action.type) {
        case getnumberoffile_constant: 
            return state= action.payload
        default:
            return state
    }
}
export { getNumberofFile_reducer, blockuserreducer }