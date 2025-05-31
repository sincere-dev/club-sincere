import React from 'react';

import { VideoContainer } from '../../components/VideoContainer';
import { TempNavButton } from '../../components/TempNavButton';

export const ExchangePage = () => {
  return (
    <VideoContainer srcPath="/vid/exchange.mp4" typeString="video/mp4">
      <TempNavButton />
    </VideoContainer>
  );
}
