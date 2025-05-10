import React from 'react';

import {AppHeading} from './components/AppHeading';
import {ContentList} from './components/ContentList';

const App = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppHeading />
      <ContentList />
    </div>
  );
}

export default App;
