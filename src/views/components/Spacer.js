import {View} from 'react-native';
import React from 'react';

const Spacer = ({height, width, style, children}) => {
  return (
    <View
      style={{
        height: height ?? 10,
        width: width,
        ...style,
      }}>
      {children}
    </View>
  );
};

export default Spacer;
