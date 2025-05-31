import React, { useRef, ReactNode, CSSProperties } from 'react';

import { PhoneFallback } from '../PhoneFallback';

interface OwnProps {
  srcPath: string;
  typeString: string;
  audioSrc?: string;
  isFullPage?: boolean;
  children?: ReactNode;
}

export const VideoContainer = ({
  srcPath,
  typeString,
  audioSrc,
  isFullPage,
  children,
}: OwnProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const videoStyle: CSSProperties = isFullPage ? {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  } : {};

  const handlePlay = () => {
    videoRef.current?.play();
    audioRef.current?.play();
  };

  return (
    <>
      <div
        style={{
          position: 'relative',
          height: '100vh',
          background: 'black',
          display: 'flex',
          flexDirection: 'column',
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
        {audioSrc && (
          <audio ref={audioRef} src={audioSrc} loop />
        )}
        {children}
      </div>
      <PhoneFallback />
    </>
  );
};
