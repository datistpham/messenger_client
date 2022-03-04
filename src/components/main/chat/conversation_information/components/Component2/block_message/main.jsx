import { getDatabase, ref, update } from 'firebase/database'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const BlockMainMessage = (props) => {
    const location= useLocation()
    const { idm }= useParams()
    const { firstname, surname }= location.state
    function writePersonBlockMessage(idMessage, iduser) {
        const db = getDatabase()
        const postData = {
          blockBy: iduser
        }
        const updates = {}
        updates['all_message/block_message/' + idMessage + '/'] = postData    
        return update(ref(db), updates)
    }
    const unBlock= ()=> {
        writePersonBlockMessage(idm, "noone")
    }
    return (
        <div className="_whejks_woiedn" style={{height: props.height, padding: '14px 13px 11px 13px', marginTop: 12, borderTop: '1px solid #0000001a', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div className="_490wrokdfp" style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <span style={{fontSize: 12, fontWeight: 600, textAlign: 'center'}}>
                    You blocked messages and calls from <span style={{textTransform: 'capitalize'}}>{firstname}</span>  <span style={{textTransform: 'capitalize'}}>{surname}</span>'s Messenger account  
                </span>
                <span style={{fontSize: 12,textAlign: 'center'}}>
                    You can't message or call them in this chat, and you won't receive their messages of calls
                </span>
            </div>  
            <div role="button" onClick={()=> unBlock()} style={{width: '100%', marginTop: 16, height: 36, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '100%', height: 36, backgroundColor: '#f5f5f5', borderRadius: 6, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{width: '100%', padding: '0 12px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <span style={{ textAlign: 'center', fontSize: 14, fontWeight: 600}}>
                            Unblock
                        </span>
                    </div>
                </div>
            </div>
            <div role="button" style={{width: '100%', marginTop: 8, height: 36, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '100%', height: 36, backgroundColor: '#f5f5f5', borderRadius: 6, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{width: '100%', padding: '0 12px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <span style={{ textAlign: 'center', fontSize: 14, fontWeight: 600}}>
                            Something's wrong
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlockMainMessage
