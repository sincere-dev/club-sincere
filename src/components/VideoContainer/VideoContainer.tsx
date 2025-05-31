import React, { useRef, ReactNode } from 'react';

import { PhoneFallback } from '../PhoneFallback';

interface OwnProps {
  srcPath: string;
  typeString: string;
  children?: ReactNode;
}

export const VideoContainer = ({ srcPath, typeString, children }: OwnProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <>
      <div style={{ position: 'relative' }} className="hide-on-mobile">
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
          <source src={srcPath} type={typeString} />
        </video>
        {children}
      </div>
      <PhoneFallback />
    </>
  );
}
