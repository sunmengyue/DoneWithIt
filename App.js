import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/components/navigation/AppNavigator';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import navigationTheme from './app/components/navigation/navigationTheme';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
