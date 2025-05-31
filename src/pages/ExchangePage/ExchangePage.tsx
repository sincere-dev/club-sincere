import React from 'react';

import { TempNavButton } from '../../components/TempNavButton';
import { VideoContainer } from '../../components/VideoContainer';

export const ExchangePage = () => {
  return (
    <VideoContainer srcPath="/vid/exchange.mp4" typeString="video/mp4">
      <TempNavButton />
    </VideoContainer>
  );
};
