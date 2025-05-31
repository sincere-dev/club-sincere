import React from 'react';

import { TempNavButton } from '../../components/TempNavButton';
import { VideoContainer } from '../../components/VideoContainer';

export const MemoryPage = () => (
  <VideoContainer srcPath="/vid/memory.mp4" typeString="video/mp4" isFullPage>
    <TempNavButton />
  </VideoContainer>
);
