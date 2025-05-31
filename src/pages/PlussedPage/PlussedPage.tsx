import React from 'react';

import { TempNavButton } from '../../components/TempNavButton';
import { VideoContainer } from '../../components/VideoContainer';

export const PlussedPage = () => (
  <VideoContainer srcPath="/vid/plussed.mp4" typeString="video/mp4" isFullPage>
    <TempNavButton />
  </VideoContainer>
);
