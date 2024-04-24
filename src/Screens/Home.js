import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

import Header from '../components/Header';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <Header />
      <Text
        style={{
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Let's Start Codding .....!
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
