import React from 'react'
import { useSelector } from 'react-redux'
import { blockicon } from '../../../../../../../icon'
import Title2Component1 from '../../Component1/title2'
import { getDatabase, ref as sRef, update } from 'firebase/database'
import { useParams } from 'react-router-dom'
const BlockMessage = (props) => {
    const idUser= useSelector(state=> state.getuserbycookie_reducer.id)
    const { idm }= useParams()
    function writePersonBlockMessage(idMessage, iduser) {
        const db = getDatabase()
        const postData = {
          blockBy: iduser
        }
        const updates = {}
        updates['all_message/block_message/' + idMessage + '/'] = postData    
        return update(sRef(db), updates)
    }
    const blockAction= ()=> {
        writePersonBlockMessage(idm, idUser)
    }
    return (
        <Title2Component1
            className="_302ik _32i03"
            className1="_32i02 _02293 _49w04iw"
            className2="_023i0 _392i2 _49w04iw"
            title1={blockicon}
            title2="Block"
            openForTheme={blockAction}
        />
    )
}

export default React.memo(BlockMessage)
