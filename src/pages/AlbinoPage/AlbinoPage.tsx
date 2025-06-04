import React from 'react';

import { VideoContainer } from '../../components/VideoContainer';

import { AlbinoPopups } from './AlbinoPopups';

export const AlbinoPage = () => {
  return (
    <VideoContainer srcPath="/vid/albino.mp4" typeString="video/mp4" childrenTop>
      <p
        style={{
          color: 'white',
          fontFamily: 'Aptos',
          fontSize: '50px',
        }}
        className="clickable-text"
      >
        this came to me in a dream
      </p>
      <AlbinoPopups />
    </VideoContainer>
  );
};
