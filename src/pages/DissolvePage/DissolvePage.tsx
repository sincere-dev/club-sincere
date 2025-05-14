import React, { useRef } from 'react';

export const DissolvePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <video
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
        }}
        onClick={handlePlay}
        ref={videoRef}
        loop
      >
        <source src="/vid/dissolve.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
