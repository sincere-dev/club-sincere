import React from 'react';

export const PhoneFallback = () => (
  <div
    style={{
      height: '100vh',
      background: '#070a06',
    }}
    className="hide-on-desktop"
  >
    <img
      style={{ paddingTop: '24px' }}
      src="/img/head.gif"
      alt="head"
    />
    <p
      style={{
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
        textAlign: 'initial',
        padding: '40px',
      }}
    >
      the inside of club sincere cannot
      be viewed using your phone.
      <br />
      <br />
      please use a computer to access.
      <br />
      <br />
      thank you.
    </p>
  </div>
);
