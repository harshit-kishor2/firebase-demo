import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Column = ({style, children}) => {
  return <View style={{...styles.col, ...style}}>{children}</View>;
};

export default Column;

const styles = StyleSheet.create({
  col: {
    margin: 5,
    flexDirection: 'column',
  },
});
