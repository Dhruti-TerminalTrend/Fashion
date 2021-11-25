import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {Theme} from './src/Components';
import {AuthenticationNavigator} from './src/Authentication';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
