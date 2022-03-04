import React from 'react'
import Drawer from 'react-modern-drawer'


const ProFileUserRootFile = (props) => {
    return (
        <Drawer
            open={props.isOpen}
            onClose={props.toggleDrawer}
            direction='right'
            className='bla bla bla'
        >
            <div>Hello World</div>
        </Drawer>
    )
}

export default ProFileUserRootFile
