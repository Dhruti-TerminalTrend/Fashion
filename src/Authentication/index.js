import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Onboarding} from './Onboarding';
import {Welcome} from './Welcome';
import {Login} from './Login';

const AuthenticationStack = createStackNavigator();

export const AuthenticationNavigator = () => {
  console.disableYellowBox = true;

  return (
    <>
      <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen name="Login" component={Login} />
        <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
        <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      </AuthenticationStack.Navigator>
    </>
  );
};
