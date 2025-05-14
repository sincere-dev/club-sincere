import React, { useRef } from 'react';

export const RudePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <div>
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
        <source src="/vid/rude.webm" type="video/webm" />
      </video>
    </div>
  );
};
