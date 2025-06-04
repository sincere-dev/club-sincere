import React, { useCallback, useRef, useState, ReactNode, CSSProperties } from 'react';

import { PhoneFallback } from '../PhoneFallback';

interface OwnProps {
  srcPath: string;
  typeString: string;
  audioSrc?: string;
  isFullPage?: boolean;
  childrenTop?: boolean;
  children?: ReactNode;
}

export const VideoContainer = ({
  srcPath,
  typeString,
  audioSrc,
  isFullPage,
  childrenTop,
  children,
}: OwnProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const videoStyle: CSSProperties = isFullPage ? {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  } : {};

  const handlePlay = () => {
    videoRef.current?.play();
    audioRef.current?.play();
  };

  const handleClick = useCallback(() => {
    if (!hasInteracted) {
      handlePlay();
      setHasInteracted(true);
    }
  }, [hasInteracted]);

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
          alignItems: 'center',
          cursor: hasInteracted ? '' : 'pointer',
        }}
        className="hide-on-mobile"
        onClick={handleClick}
      >
        {childrenTop && children}
        <video
          style={videoStyle}
          ref={videoRef}
          loop
        >
          <source src={srcPath} type={typeString} />
        </video>
        {audioSrc && (
          <audio ref={audioRef} src={audioSrc} loop />
        )}
        {!hasInteracted && (
          <div
            onClick={handleClick}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 9999,
              background: 'transparent',
              pointerEvents: 'auto',
            }}
          />
        )}
        {!childrenTop && children}
      </div>
      <PhoneFallback />
    </>
  );
};
