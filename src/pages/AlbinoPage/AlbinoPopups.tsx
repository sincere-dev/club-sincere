import React, { useState } from 'react';

import { useNavigateToRandomPage } from '../../hooks';

import "./popup.css";

export const AlbinoPopups = () => {
  const navigate = useNavigateToRandomPage();

  const [popups, setPopups] = useState<number>(0);

  const handleClickContainer = () => {
    if (popups === 0) {
      setPopups(1);
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        background: popups > 0 ? 'rgba(128, 128, 128, 0.25)': '',
      }}
      onClick={handleClickContainer}
    >
      {popups > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '30%',
          }}
          className="popup border"
        >
          <div className="top-bar" />
          <p>that must have been a mistake, surely you want to continue watching.</p>
          <div className="button-bar">
            <button
              onClick={() => setPopups((popups) => popups - 1)}
            >
              continue watching
            </button>
            <button
              onClick={() => setPopups((popups) => popups + 1)}
              style={{ marginLeft: '8px' }}
            >
              i meant it
            </button>
          </div>
        </div>
      )}
      {popups > 1 && (
        <div
          style={{
            position: 'absolute',
            top: '33%',
            left: '33%',
          }}
          className="popup border"
        >
          <div className="top-bar" />
          <p>what, exactly, do you mean?</p>
          <div className="button-bar">
            <button
              onClick={() => setPopups((popups) => popups - 1)}
            >
              walk it back
            </button>
            <button
              onClick={() => setPopups((popups) => popups + 1)}
              style={{ marginLeft: '8px' }}
            >
              agitate
            </button>
          </div>
        </div>
      )}
      {popups > 2 && (
        <div
          style={{
            position: 'absolute',
            top: '36%',
            left: '36%',
          }}
          className="popup border"
        >
          <div className="top-bar" />
          <p>who the fuck do you think you are?</p>
          <div className="button-bar">
            <button
              onClick={() => setPopups((popups) => popups - 1)}
            >
              not sure
            </button>
            <button
              onClick={navigate}
              style={{ marginLeft: '8px' }}
            >
              piece of shit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
