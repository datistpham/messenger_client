import React from 'react'
import { IconApp, IconGoback } from '../../../icon/icon2'

const HeaderProfile = (props) => {
    return (
        <div className={props.className}>
            <>
                <HeaderFix className="_epwkdsaswaq _24eowddsko _w4skmfmkdsds" />
                <HeaderFixFake />
            </>
        </div>
    )
}

const HeaderFix= (props)=> {
    return (
        <div className={props.className}>
            <div className='_3q09eqp3 _09ewwe33'>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                    <div style={{position: 'relative', zIndex: 10000}} onClick={()=> {window.history.back()}}>
                        <IconGoback className="_9043irkps" />
                    </div>
                    <div role="button" style={{position: 'relative', zIndex: 10000}}>
                        <IconApp className="_09wi0w3q3 _w9eiw3eqa" />
                    </div>
                </div>
            </div>
        </div>
    )
}
const HeaderFixFake= (props)=> {
    return (
        <div className="_w09eiqwa _09ewiwpkoek" style={{width: '100%', height: 60}}>

        </div>
    )
}
export default HeaderProfile
