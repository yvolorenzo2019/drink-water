import React from 'react';
import { StatusBar } from 'react-native'

import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Routes />
    </>
  );
}

export default App;