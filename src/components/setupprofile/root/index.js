import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound404 from '../../404'
import SetAvatar from '../setupavatar'
import SetupDateofBirth from '../setupdateofbirth'
import SetGender from '../setupgender'
import SetupName from '../setupname'

const SetupProfile = (props) => {
    return (
        <div className={props.className}>
            <Routes>
                <Route path="/name" element={<SetupName className="_w_100" className2="_c_100" />} />
                <Route path="/dateofbirth" element={<SetupDateofBirth className="_w_100" className2="_c_100" />} />
                <Route path="/gender" element={<SetGender className="_w_100" className2="_c_100"  />} />
                <Route path="/avatar" element={<SetAvatar className="_w_100" className2="_c_100"  />} />
                <Route path="*" element={<NotFound404 className="_w_100" className2="_c_100" />} />
            </Routes>
        </div>
    )
}

export default SetupProfile
