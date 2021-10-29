import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome, Onboarding} from './src/Authentication';
import {ThemeProvider} from '@shopify/restyle';
import {Theme} from './src/Components';

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
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
