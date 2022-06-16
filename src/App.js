import React from 'react';
import {SplashScreen} from './views/pages';
import {AuthProvider} from './contexts/authContext';
import {NativeBaseProvider} from 'native-base';
import {ReduxProvider} from './store';

const App = () => {
  return (
    <NativeBaseProvider>
      <ReduxProvider>
        <AuthProvider>
          <SplashScreen />
        </AuthProvider>
      </ReduxProvider>
    </NativeBaseProvider>
  );
};

export default App;
