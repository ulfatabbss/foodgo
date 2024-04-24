import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet, Text, View} from 'react-native';

import React, {useEffect, useState} from 'react';

import Home from '../screens/Home';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {visible && <Stack.Screen name="Splash" component={Splash} />}
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
