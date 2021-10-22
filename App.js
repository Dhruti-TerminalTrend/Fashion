import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './src/Authentication/Onboarding';

const AuthenticationStack = createStackNavigator();

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
};

const AuthenticationNavigator = () => {
  return (
    <>
      <AuthenticationStack.Navigator>
        <AuthenticationStack.Screen
          name="Onboarding"
          component={Onboarding}></AuthenticationStack.Screen>
      </AuthenticationStack.Navigator>
    </>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
};

export default App;
