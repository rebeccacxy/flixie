import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import Routes from './src/routes';

import LinkingConfiguration from './src/navigation/LinkingConfiguration';
import Login from './src/screens/Login'
import Start from './src/screens/Start';
import Register from './src/screens/Register';
import Dashboard1 from './src/screens/Dashboard1';
import CreateGroup1 from './src/screens/CreateGroup1';
import Preferences from './src/screens/Preferences';
import CreateGroup2 from './src/screens/CreateGroup2';
import Dashboard2 from './src/screens/Dashboard2';
import AddMembers from './src/screens/AddMembers';
import Info from './src/screens/Info';

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
          <Stack.Screen name="Dashboard1" component={Dashboard1} />
          <Stack.Screen name="CreateGroup1" component={CreateGroup1} />
          <Stack.Screen name="AddMembers" component={AddMembers} />
          <Stack.Screen name="CreateGroup2" component={CreateGroup2} />
          <Stack.Screen name="Dashboard2" component={Dashboard2} />
          <Stack.Screen name="Preferences" component={Preferences} />
          <Stack.Screen name="Root" component={Routes} />
          <Stack.Screen name="Info" component={Info} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    fontFamily: 'JosefinSans_400Regular'
  }
})

export default App;
