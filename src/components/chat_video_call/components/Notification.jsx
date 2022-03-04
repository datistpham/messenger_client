import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../Context'

const ConCacVipPro = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
    
      {call.isReceivingCall && !callAccepted && 
      (
        <div style={{position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <h1>{call.name} is calling:</h1>
            <Button variant="contained" color="primary" onClick={answerCall}>
              Answer
            </Button>
          </div>
        </div>
      )
      }
    </>
    
  );
};

export default ConCacVipPro