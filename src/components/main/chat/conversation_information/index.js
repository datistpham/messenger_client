import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AvatarConversation from './components/Avatar/avatar'
import ChangeThemeIcon from './components/changetheme/index.js'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import SetNickName from './components/Component2/set_nick_name'
import Component3 from './components/Component3/main'
import NameConversation from './components/Name'


const D = (props) => {
    const myRef= useRef()
    const location= useLocation()
    const { id, firstname, surname, avatar }= location.state
    const [open, setOpen]= useState({
        theme: false,
    })
    const [hasMore, setHasMore]= useState(()=> true)
    const [item, setItem]= useState(()=> Array.from({ length: 4 }))
    const [openSetNickNames, setOpenSetNickNames]= useState(()=> false)
    const element= document.querySelector("._84jwe")
    const check= ()=> {
        
        if(parseInt(element.scrollHeight)- parseInt(element.scrollTop)=== parseInt(element.clientHeight)) {
            if(item.length >= props.countMedia) {
                setHasMore(()=> false)
                return
            }
            else {
                setItem(prev=> prev.concat(Array.from({ length: 4 })))
            }
        }
    }
    const isOpenTheme= ()=> {
        setOpen((prev)=> ({...prev, theme: !open.theme}))
    }
    const isSetOpenSetNickNamesTrue= ()=> {
        setOpenSetNickNames(()=> true)
    }
    const isSetOpenSetNickNamesFalse= ()=> {
        setOpenSetNickNames(()=> false)
    }
    
    return (
        <div ref={myRef} className={props.className} onScroll={()=> check()} style={{overflow: 'auto'}}>
            <AvatarConversation block={props.block} avatar={avatar} linkProfile={id} active={props.active} className="_302dk _934jw" />
            <NameConversation block={props.block} className="_3wek _932ek" firstname={firstname} surname={surname} active={props.active} />
            {
                <Component1 block={props.block} isSetOpenSetNickNamesTrue={isSetOpenSetNickNamesTrue} openForTheme={isOpenTheme} className="_4iwwk _934dk _4289k" />
            }
            <Component2 block={props.block} className="_4iwwk _934dk _4289k" />
            <Component3 hasMore={hasMore} item={item} className="_4iwwk _934dk _4289k" />
            {
              open.theme && <ChangeThemeIcon openForTheme={isOpenTheme} className="_934iww _4itekod" className1="_9034j _934krds" className2="_09qw3 _940wje" className3="_3905j _293wuj" /> 
            }
            {
                openSetNickNames=== true && <SetNickName isSetOpenSetNickNamesFalse={isSetOpenSetNickNamesFalse} isSetOpenSetNickNamesTrue={isSetOpenSetNickNamesTrue} />
            }

        </div>
    )
}

export default React.memo(D)