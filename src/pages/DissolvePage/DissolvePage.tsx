import React from 'react';

import { VideoContainer } from '../../components/VideoContainer';

export const DissolvePage = () => (
  <VideoContainer srcPath="/vid/dissolve.mp4" typeString="video/mp4" isFullPage>
    <p
      style={{
        position: 'absolute',
        top: '44%',
        right: 0,
        paddingRight: '40px',
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '60px',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
      }}>
        let your identity dissolve.
    </p>
  </VideoContainer>
);
