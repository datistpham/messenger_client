import handleUser from "./getuser"
import getListUser, { getListIdMessage, getAllListUserAction } from "./queryListUser.action"
import getUserbyCookie from "./getUserByCookie"
import { themeformessage, themeformessageBgIm,themepost_active } from "./theme"
import activeuserAction, { getnumberoffile_action, blockUserAction } from "./active_user.action"
import getimageaction from "./getimage.action"

export const rootActions= {
    handleUser,
    getListUser,
    getListIdMessage,
    getUserbyCookie,
    activeuserAction,
    themeformessage,
    themeformessageBgIm,blockUserAction,
    getimageaction,getnumberoffile_action,themepost_active,getAllListUserAction
}