import React, { useRef, ReactNode, CSSProperties } from 'react';

import { PhoneFallback } from '../PhoneFallback';

interface OwnProps {
  srcPath: string;
  typeString: string;
  isFullPage?: boolean;
  children?: ReactNode;
}

export const VideoContainer = ({ srcPath, typeString, isFullPage, children }: OwnProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoStyle: CSSProperties = isFullPage ? {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  } : {};

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <>
      <div
        style={{
          position: 'relative',
          height: '100vh',
          background: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        className="hide-on-mobile"
      >
        <video
          style={videoStyle}
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
