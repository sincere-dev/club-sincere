import React, { useRef } from 'react';

export const DissolvePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <div style={{ position: 'relative' }}>
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
      <p
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '44%',
          right: 0,
          paddingRight: '40px',
          color: 'white',
          fontFamily: 'Arial',
          fontSize: '60px',
          fontWeight: 'bold',
          fontStyle: 'italic',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
        }}>
          let your identity dissolve.
        </p>
    </div>
  );
};
