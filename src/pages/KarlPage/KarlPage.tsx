import React from 'react';

import { VideoContainer } from '../../components/VideoContainer';
import { useNavigateToRandomPage } from '../../hooks';

import { KarlEatingPills } from './KarlEatingPills';

export const KarlPage = () => {
  const navigate = useNavigateToRandomPage();

  return (
    <VideoContainer srcPath="/vid/karl.mp4" typeString="video/mp4" audioSrc="/audio/karl.mp3" isFullPage>
      <KarlEatingPills onPillsConsumed={navigate} />
    </VideoContainer>
  );
};
