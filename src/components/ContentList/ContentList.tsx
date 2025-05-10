import React from 'react';

import {TITLE} from '../../constants/words';
import {ContentItem} from '../ContentItem';

export const ContentList = () => (
  <div>
    <div style={{ position: 'sticky', top: 0, marginTop: '30px' }}>
      <h1>{TITLE}</h1>
      <div style={{
        height: '100px',
        background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0))',
      }} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {Array.from({ length: 10 }, (_, i) => (
        <ContentItem key={i} style={{ marginBottom: '28px' }} />
      ))}
    </div>
  </div>
);
