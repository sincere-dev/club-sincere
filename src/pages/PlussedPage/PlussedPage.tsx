import React from 'react';

import { VideoContainer } from '../../components/VideoContainer';
import { TempNavButton } from '../../components/TempNavButton';

export const PlussedPage = () => (
  <VideoContainer srcPath="/vid/plussed.mp4" typeString="video/mp4" isFullPage>
    <TempNavButton />
  </VideoContainer>
);
