import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BoxContainer = ({style, children}) => {
  return <View style={{...styles.boxContainer, ...style}}>{children}</View>;
};

export default BoxContainer;

const styles = StyleSheet.create({
  boxContainer: {
    height: 200,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
});
