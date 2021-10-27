import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome, Onboarding} from './src/Authentication';

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  console.disableYellowBox = true;

  return (
    <>
      <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen
          name="Onboarding"
          component={Onboarding}></AuthenticationStack.Screen>
        <AuthenticationStack.Screen
          name="Welcome"
          component={Welcome}></AuthenticationStack.Screen>
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
