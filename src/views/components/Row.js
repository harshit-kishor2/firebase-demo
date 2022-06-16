import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Row = ({style, children}) => {
  return <View style={{...styles.row, ...style}}>{children}</View>;
};

export default Row;

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 5,
    flexDirection: 'row',
  },
});
