import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';

const Dot = ({currentIndex, index}) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const styles = StyleSheet.create({
    dotContainer: {
      opacity,
      backgroundColor: '#2CB9B0',
      borderRadius: 4,
      height: 8,
      width: 8,
      margin: 4,
      transform: [{scale}],
    },
  });
  return (
    <>
      <Animated.View style={styles.dotContainer} />
    </>
  );
};

export default Dot;
