import React from 'react';

import { TITLE } from '../../constants/words';

export const ContentList = () => (
  <div>
    <div style={{ position: 'sticky', top: 0, marginTop: '30px' }}>
      <h1>{TITLE}</h1>
      <div style={{
        height: '140px',
        background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0))',
      }} />
    </div>
    <div style={{ height: '800px' }} />
    {/*<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>*/}
    {/*  {Array.from({ length: 7 }, (_, i) => (*/}
    {/*    <ContentItem key={i} style={{ marginBottom: '28px' }} />*/}
    {/*  ))}*/}
    {/*</div>*/}
  </div>
);
