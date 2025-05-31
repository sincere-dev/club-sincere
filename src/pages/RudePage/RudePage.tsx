import React from 'react';

import { VideoContainer } from '../../components/VideoContainer';

export const RudePage = () => (
  <VideoContainer srcPath="/vid/rude.webm" typeString="video/webm" isFullPage>
    <p
      style={{
        position: 'absolute',
        top: '44%',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '60px',
        fontWeight: 'bold',
      }}
    >
      RUDE
    </p>
  </VideoContainer>
);
