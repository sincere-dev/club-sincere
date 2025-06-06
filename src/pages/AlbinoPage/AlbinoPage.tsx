import React from 'react';

import { VideoContainer } from '../../components/VideoContainer';
import { useNavigateToRandomPage } from '../../hooks';

import { AlbinoPopups } from './AlbinoPopups';

export const AlbinoPage = () => {
  const navigate = useNavigateToRandomPage();

  return (
    <VideoContainer
      srcPath="/vid/albino.mp4"
      typeString="video/mp4"
      onVideoEnd={navigate}
      shouldPlayOnce
      childrenTop
    >
      <p
        style={{
          color: 'white',
          fontFamily: 'Aptos',
          fontSize: '50px',
        }}
      >
        this came to me in a dream
      </p>
      <AlbinoPopups />
    </VideoContainer>
  );
};
