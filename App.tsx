/**
 * @format
 */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
