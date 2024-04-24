import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Splash from '../Screens/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
