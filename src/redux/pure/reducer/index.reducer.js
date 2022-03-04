import { combineReducers } from "redux"
import userReducer from "./user.reducer"
import getListUserReducer, {getIdMessageReducer, getAllListUser} from "./getlistuser.reducer"
import getuserbycookie_reducer from "./getUserByCooke.reducer"
import activeuserreducer, { getNumberofFile_reducer, blockuserreducer } from "./active_user.reducer"
import thememessage_reducer, {themMessageBgIm_reducer, thempost_reducer} from './theme.reducer'
import getimagereducer from "./getimage.reducer"
const rootReducer= combineReducers({
    userReducer,
    getListUserReducer,
    getIdMessageReducer,
    getuserbycookie_reducer,
    thememessage_reducer,
    activeuserreducer,
    themMessageBgIm_reducer,
    getimagereducer,getNumberofFile_reducer,thempost_reducer,
    getAllListUser,blockuserreducer
})

export default rootReducer