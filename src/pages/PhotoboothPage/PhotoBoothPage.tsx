import React from 'react';

import { WebcamUpload } from './WebcamUpload';

export const PhotoBoothPage = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <WebcamUpload />
    </div>
  );
};
