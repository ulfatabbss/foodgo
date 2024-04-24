import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Header = () => {
  return (
    <View style={{height: 60, backgroundColor: 'White', width: '100%'}}>
      <Text
        style={{
          color: 'Black',
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        Header .....!
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
