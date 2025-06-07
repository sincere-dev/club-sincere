import React, { useRef, useState } from 'react';

import { PhoneFallback } from '../../components/PhoneFallback';
import { useNavigateToRandomPage } from '../../hooks';

import "./minesweeper.css";

const FakeScore = () => (
  <div
    style={{
      fontFamily: 'Digital',
      fontSize: '50px',
      padding: '6px 8px 0',
      background: 'black',
      color: 'red',
      lineHeight: 0.8,
    }}
  >
    000
  </div>
);

export const MineSweeperPage = () => {
  const navigate = useNavigateToRandomPage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [showPopup, setShowPopup] = useState(false);
  const [didTrigger, setDidTrigger] = useState(false);

  const handleClick = () => {
    setShowPopup(false);
    setDidTrigger(true);
    videoRef?.current?.play();
    audioRef?.current?.play();
  };

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
      {!didTrigger && (
        <div
          style={{
            background: 'black',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="hide-on-mobile"
        >
          <div
            style={{
              background: 'lightgray',
              height: '520px',
              width: '500px',
              display: 'flex',
              flexDirection: 'column',
              padding: '8px',
            }}
            className="border"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px',
              }}
              className="border-inverse"
            >
              <FakeScore />
              <div style={{ flex: 1 }} />
              <div style={{ padding: '8px' }} className="border">
                😎
              </div>
              <div style={{ flex: 1 }} />
              <FakeScore />
            </div>
            <div
              style={{
                flex: 1,
                display: 'grid',
                gridTemplateColumns: 'repeat(30, 1fr)',
                gridTemplateRows: 'repeat(30, 1fr)',
                marginTop: '8px',
              }}
              className="border-inverse"
            >
              {Array.from({ length: 900 }).map((_, i) => (
                <div
                  key={i}
                  className="border cell"
                  onClick={handleClick}
                  onContextMenu={handleRightClick}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {showPopup && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            background: 'rgba(128, 128, 128, 0.40)',
          }}
        >
          <div className="popup border">
            <div className="top-bar" />
            <p>do you think you can trick me?</p>
            <div className="button-bar">
              <button onClick={handleClick} className="border">
                no
              </button>
              <button onClick={handleClick} className="border">
                yes
              </button>
            </div>
          </div>
        </div>
      )}
      <video
        onEnded={navigate}
        ref={videoRef}
        style={{
          display: didTrigger ? 'block' : 'none',
        }}
      >
        <source
          src="/vid/explosion.mp4"
          type="video/mp4"
        />
      </video>
      <audio ref={audioRef} src='/audio/explosion.mp3' />
      <PhoneFallback />
    </>
  );
};
