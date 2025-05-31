import React from 'react';

import { VideoContainer } from '../../components/VideoContainer';
import { TempNavButton } from '../../components/TempNavButton';

export const MemoryPage = () => (
  <VideoContainer srcPath="/vid/memory.mp4" typeString="video/mp4" isFullPage>
    <TempNavButton />
  </VideoContainer>
);
