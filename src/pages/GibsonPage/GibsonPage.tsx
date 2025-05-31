import React, { useEffect, useState } from 'react';

import { VideoContainer } from '../../components/VideoContainer';
import { useNavigateToRandomPage } from '../../hooks';

export const GibsonPage = () => {
  const navigate = useNavigateToRandomPage();

  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/text/gibson.txt')
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <VideoContainer srcPath="/vid/gibson.mp4" typeString="video/mp4" audioSrc="/audio/rc.mp3" isFullPage>
      <p
        style={{
          position: 'absolute',
          top: 0,
          fontSize: '16px',
          color: 'white',
          fontFamily: 'Arial',
          fontWeight: 'bold',
          fontStyle: 'italic',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 1.0)',
        }}
        onClick={navigate}
      >
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
          {content}
        </pre>
      </p>
    </VideoContainer>
  );
};
