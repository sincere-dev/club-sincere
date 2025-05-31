import React from 'react';

import { VideoContainer } from '../../components/VideoContainer';
import { useNavigateToRandomPage } from '../../hooks';

export const FreePage = () => {
  const navigate = useNavigateToRandomPage();

  return (
    <VideoContainer srcPath="/vid/free.mp4" typeString="video/mp4" audioSrc="/audio/free.mp3" isFullPage>
      <p
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          paddingRight: '80px',
          paddingBottom: '60px',
          color: 'white',
          fontFamily: 'Arial',
          fontSize: '60px',
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}
        onClick={navigate}
      >
        :)
      </p>
    </VideoContainer>
  );
};
