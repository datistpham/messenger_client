import React from 'react';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notification'



const App = () => {

  return (
      <div style={{width: '100%', height: '100%', padding: 0, margin: 0}}>
        
        <VideoPlayer />
        <Notifications />
      </div>
  );
};

export default App;