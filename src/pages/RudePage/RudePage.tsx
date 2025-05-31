import React from 'react';

import { VideoContainer } from '../../components/VideoContainer';
import { useNavigateToRandomPage } from '../../hooks';

export const RudePage = () => {
  const navigate = useNavigateToRandomPage();

  return (
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
        onClick={navigate}
      >
        RUDE
      </p>
    </VideoContainer>
  );
};
