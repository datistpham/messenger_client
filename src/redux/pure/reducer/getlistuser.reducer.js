import { getalllistuserconstant, getIdMessage, getListUserconstant } from "../constant";

const getListUserReducer= (state= [1,2,3], action)=> {
    switch (action.type) {
        case getListUserconstant:
            return state= action.payload
        default:
            return state
    }
}
const getIdMessageReducer= (state= [1,2,3], action)=> {
    switch (action.type) {
        case getIdMessage:
            return state= action.payload
        default: 
            return state
    }
}
const getAllListUser= (state= [], action)=> {
    switch (action.type) {
        case getalllistuserconstant:
            return state= action.payload
        default: 
            return state
    }
}
export { getIdMessageReducer, getAllListUser }
export default getListUserReducer