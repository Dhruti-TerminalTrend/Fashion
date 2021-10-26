import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.61;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    // backgroundColor: 'red',
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    lineHeight: 80,
    color: 'white',
    fontFamily: 'SF-Pro-Text-Bold',
    textAlign: 'center',
  },
});
const Slide = ({title, right}) => {
  const transform = [
    {
      translateY: (SLIDE_HEIGHT - 100) / 2,
    },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    {
      rotate: right ? '-90deg' : '90deg',
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.titleContainer, {transform}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </>
  );
};

export default Slide;
