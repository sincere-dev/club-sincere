import React from 'react';

import { TempNavButton } from '../../components/TempNavButton';
import { VideoContainer } from '../../components/VideoContainer';

export const KarlPage = () => {
  return (
    <VideoContainer srcPath="/vid/karl.mp4" typeString="video/mp4" audioSrc="/audio/karl.mp3" isFullPage>
      <TempNavButton />
    </VideoContainer>
  );
};
