import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import Routes from './src/routes';

import LinkingConfiguration from './src/navigation/LinkingConfiguration';
import Login from './src/screens/Login'
import Start from './src/screens/Start';
import Register from './src/screens/Register';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}

      <NavigationContainer linking={LinkingConfiguration} style={styles.app}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Start} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Root" component={Routes} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    fontFamily : 'JosefinSans_400Regular'
  }
})


export default App;
