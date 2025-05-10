import React, { CSSProperties } from 'react';

interface OwnProps {
  style?: CSSProperties;
}

export const ContentItem = ({ style }: OwnProps) => (
  <div style={{ border: '1px dotted green', width: '300px', height: '400px', ...style }}>
    item
  </div>
);
