import React from 'react'
import { useDispatch } from 'react-redux'
import { CloseIcon } from '../../../../../../icon'
import { rootActions } from '../../../../../../redux/pure/action/root.action'
import FooterTheme from './footer_theme.js'
import MainTheme from './main_theme'
import TitleChangetheme from './title'

const ChangeThemeIcon = (props) => {
    const dispatch= useDispatch()
    return (
        <div className={props.className} style={{width: "100%", height: "auto", position: "fixed", backgroundColor: "rgba(244,244,244,0.8)", top: 0, right: 0, left: 0, bottom: 0, zIndex: 999, overflow: 'auto'}}>
            <div className={props.className2} style={{width: 340, height: 'auto'}} >
                <div className={props.className1} style={{position: "relative"}}>
                    <div onClick={()=> {props.openForTheme();dispatch(rootActions.themeformessage(""))}} className='_94iweds' style={{position: "absolute", top: "50%", right: 0,transform: 'translate(-50%, -50%)'}}>
                        <CloseIcon/>
                    </div>
                    <TitleChangetheme className="_394us _238ud" style={{width: '100%'}}/>
                </div>

                <div className={props.className3} style={{width: '100%', height: 'auto', backgroundColor: '#fff'}}>
                    <MainTheme className="_9w0ds _94rikd" />
                </div>
                <div className={props.className4} style={{width: '100%', backgroundColor: "#fff", height: 60,padding: '16px 12px 0 12px' }}>
                    <FooterTheme openForTheme={props.openForTheme} className="_w80edsm _9iwekcdd" style={{height: '100%'}} />
                </div>

            </div>
        </div>
    )
}

export default ChangeThemeIcon
