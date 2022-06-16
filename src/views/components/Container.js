import {View} from 'react-native';
import React from 'react';
import {R} from '../../helpers';

const Container = ({
  style,
  height,
  width,
  hp,
  wp,
  m,
  mt,
  mb,
  ml,
  mr,
  mh,
  mv,
  p,
  pt,
  pb,
  pl,
  pr,
  ph,
  pv,
  backgroundColor,
  alignItems,
  justifyContent,
  children,
}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        height: hp ? R.percentHeight(hp) : height,
        width: wp ? R.percentWidth(wp) : width,
        alignItems: alignItems ?? 'center',
        justifyContent: justifyContent ?? 'center',
        margin: R.spacer[m] ?? m,
        marginBottom: R.spacer[mb] ?? mb,
        marginLeft: R.spacer[ml] ?? ml,
        marginRight: R.spacer[mr] ?? mr,
        marginTop: R.spacer[mt] ?? mt,
        marginHorizontal: R.spacer[mh] ?? mh,
        marginVertical: R.spacer[mv] ?? mv,

        padding: R.spacer[p] ?? p,
        paddingBottom: R.spacer[pb] ?? pb,
        paddingLeft: R.spacer[pl] ?? pl,
        paddingRight: R.spacer[pr] ?? pr,
        paddingTop: R.spacer[pt] ?? pt,
        paddingHorizontal: R.spacer[ph] ?? ph,
        paddingVertical: R.spacer[pv] ?? pv,

        ...style,
      }}>
      {children}
    </View>
  );
};

export default Container;
