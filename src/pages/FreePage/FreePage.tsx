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
          left: '25%',
          top: 0,
          color: 'white',
          fontFamily: 'Arial',
          fontSize: '280px',
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}
        className="clickable-text"
        onClick={navigate}
      >
        :)
      </p>
    </VideoContainer>
  );
};
