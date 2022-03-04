import React, { useContext } from 'react';
import { SocketContext } from '../Context';


const VideoPlayer = () => {
  const { callAccepted, myVideo, userVideo, callEnded, stream } = useContext(SocketContext);

  return (
    <div style={{width: '100%', height: '100%', position: 'relative'}}> 
      {stream && (
          <div style={{width: 290, height: 220, position: 'absolute', right: 0, bottom: 0, borderRadius: 10, overflow: 'hidden',marginRight: 10, zIndex: 2}}>
            <video style={{transform: 'rotateY(180deg)',width: '100%', height: '100%',}} playsInline muted ref={myVideo} autoPlay />
          </div>
      )}
      {callAccepted && !callEnded && (
          <div style={{width: '100%', height: '100%', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: 1}}>
            <video style={{transform: 'rotateY(180deg)', width: '100%',height: '100%'}} playsInline ref={userVideo} autoPlay />
          </div>
      )}
    </div>
  );
};

export default VideoPlayer