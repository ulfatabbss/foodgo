import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
        Heloo Mano Welecom
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
