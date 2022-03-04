import React from 'react';
import { Placeholder } from 'react-bootstrap';

const SkeletonMedia = (props) => {
    return (
        <>
            <Placeholder animation="glow" className='_84u8ioejr' style={{width: 'calc(100% / 3 - 4px)', paddingTop: 'calc(100% / 3 - 4px)', position: 'relative', margin: 2}}>
                <Placeholder className='_9erkopfdsd' style={{position: 'absolute', top: 0, left: 0,right: 0, width: '100%', height: '100%'}} />
            </Placeholder>
            <Placeholder animation="glow" className='_84u8ioejr' style={{width: 'calc(100% / 3 - 4px)', paddingTop: 'calc(100% / 3 - 4px)', position: 'relative', margin: 2}}>
                <Placeholder className='_9erkopfdsd' style={{position: 'absolute', top: 0, left: 0,right: 0, width: '100%', height: '100%'}} />
            </Placeholder>
            <Placeholder animation="glow" className='_84u8ioejr' style={{width: 'calc(100% / 3 - 4px)', paddingTop: 'calc(100% / 3 - 4px)', position: 'relative', margin: 2}}>
                <Placeholder className='_9erkopfdsd' style={{position: 'absolute', top: 0, left: 0,right: 0, width: '100%', height: '100%'}} />
            </Placeholder>
        </>
    )
};

export default SkeletonMedia;
