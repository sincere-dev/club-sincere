import React, { useState } from 'react';

import { TempNavButton } from '../../components/TempNavButton';
import { useNavigateToRandomPage } from '../../hooks';

import "./popup.css";

interface PopupProps {
  text: string;
  onBackText: string;
  onForwardText: string;
  onBack: () => void;
  onForward: () => void;
}

const Popup = ({
  text,
  onBackText,
  onForwardText,
  onBack,
  onForward,
}: PopupProps) => {
  return (
    <div className="popup border">
      <div className="top-bar">
        <img src="/img/frog.gif" alt="frog" className="top-bar-corner" />
      </div>
      <p>{text}</p>
      <div className="button-bar">
        <button onClick={onBack} className="border">
          {onBackText}
        </button>
        <button onClick={onForward} className="border">
          {onForwardText}
        </button>
      </div>
    </div>
  );
};

export const AlbinoPopups = () => {
  const navigate = useNavigateToRandomPage();

  const [didClick, setDidClick] = useState<boolean>(false);
  const [popups, setPopups] = useState<number>(0);

  const showNav = didClick && popups === 0;

  const handleClickContainer = () => {
    setDidClick(true);
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
        background: popups > 0 ? 'rgba(128, 128, 128, 0.40)' : 'rgba(128, 128, 128, 0)',
        transition: 'background 0.6s ease',
      }}
      onClick={handleClickContainer}
    >
      {popups > 0 && (
        <Popup
          text="that must have been a mistake, surely you want to continue watching."
          onBackText="continue watching"
          onForwardText="i meant it"
          onBack={() => setPopups((popups) => popups - 1)}
          onForward={() => setPopups((popups) => popups + 1)}
        />
      )}
      {popups > 1 && (
        <Popup
          text="what, exactly, do you mean?"
          onBackText="walk it back"
          onForwardText="agitate"
          onBack={() => setPopups((popups) => popups - 1)}
          onForward={() => setPopups((popups) => popups + 1)}
        />
      )}
      {popups > 2 && (
        <Popup
          text="who the fuck do you think you are?"
          onBackText="not sure"
          onForwardText="piece of shit"
          onBack={() => setPopups((popups) => popups - 1)}
          onForward={navigate}
        />
      )}
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          zIndex: 11,
          cursor: 'pointer',
          width: '15%',
          opacity: showNav ? 1 : 0,
          pointerEvents: showNav ? 'auto' : 'none',
          transition: 'opacity 1s ease-in-out',
        }}
        onClick={navigate}
      >
        <img src="/img/frog.gif" alt="frog" />
      </div>
    </div>
  );
};
