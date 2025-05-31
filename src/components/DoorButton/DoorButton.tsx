import React, { useEffect, useState } from 'react';

import { useNavigateToRandomPage } from '../../hooks';

const closedImg = '/img/door-closed.gif';
const openedImg = '/img/door.gif';

const DOOR_TIMEOUT = 2700;

export const DoorButton = () => {
  const navigate = useNavigateToRandomPage();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isOpen) {
      timeoutId = setTimeout(() => {
        navigate();
      }, DOOR_TIMEOUT);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen, navigate]);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
    >
      <img src={isOpen ? openedImg : closedImg } alt="door" />
    </div>
  );
};
