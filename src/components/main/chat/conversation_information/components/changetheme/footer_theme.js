import axios from 'axios'
import { ref, set, getDatabase } from 'firebase/database'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { rootActions } from '../../../../../../redux/pure/action/root.action'
import { v4 as uuidv4 } from 'uuid'

const db= getDatabase()
const FooterTheme = (props) => {
    const dispatch= useDispatch()
    const themeUpdate= useSelector(state=> state.thememessage_reducer)
    const themeIg= useSelector(state=> state.themMessageBgIm_reducer)
    const location= useLocation()
    const idUser= useSelector(state=> state.getuserbycookie_reducer.id)
    const settimestamp= new Date()
    const { idm }= useParams()
    const updateTheme= ()=> {
        axios({
            url: 'http://localhost:4000/update/theme/message',
            method: 'POST',
            data: {
                themeUpdate: themeUpdate,
                themeIg: themeIg,
                idMessage: location.pathname.split("/")[2]
            }
        })
    }
    const sendChangeData= async ()=> {
        await set(ref(db, `all_message/message/${idm}/`+ uuidv4()),{
            message: " changed the chat theme to Lavender.",
            sendby: `${idUser}`,
            timestamp: settimestamp.getTime(),
            spe: 'theme'
        })
        console.log("update successfully")
    }
    return (
        <div className={props.className} style={{padding: '0 8px 12px 8px', height: 44}}>
            <div className={props.className1} style={{width: '100%', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center',gap: 8}}>
                <Button 
                    className="_943iwsd _r308ue _9ewfa"
                    backgroundColor="#0099ff"
                    color="#fff"
                    title="Save"
                    openForTheme={props.openForTheme}
                    cancelTheme={()=> updateTheme()}
                    showChange={()=> sendChangeData()}
                />
                <Button
                    className="_943iwsd _r308ue _9ewfa"
                    openForTheme={props.openForTheme}
                    cancelTheme={()=>dispatch(rootActions.themeformessage(""))}
                    showChange={()=> console.log()}
                    backgroundColor="#f5f5f5"
                    color="#050505"
                    title="Cancel"
                />
            </div>
        </div>
    )
}
const Button= (props)=> {
    return (
        <div onClick={()=> {props.cancelTheme();props.openForTheme();props.showChange()}} role="button" className={props.className} style={{padding: '0 12px', height: 36,width: 'max-content', backgroundColor: `${props.backgroundColor}`, color: `${props.color}`, fontSize: 14, fontWeight: 600, borderRadius: 10, display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
            <span>{props.title}</span>
        </div>
    )
}

export default FooterTheme
