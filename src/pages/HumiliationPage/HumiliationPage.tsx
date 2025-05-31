import React from 'react';

import { VideoContainer } from '../../components/VideoContainer';
import { useNavigateToRandomPage } from '../../hooks';

export const HumiliationPage = () => {
  const navigate = useNavigateToRandomPage();

  return (
    <VideoContainer srcPath="https://morerecords.org/humiliation.mp4" typeString="video/mp4">
      <p
        style={{
          color: 'white',
          fontFamily: 'Comic Sans MS',
          fontSize: '60px',
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}
        onClick={navigate}
      >
        ushering in a century of humiliation.
      </p>
    </VideoContainer>
  );
};
