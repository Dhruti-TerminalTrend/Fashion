import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.61;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    fontFamily: 'SF-Pro-Text-Semibold',
    fontSize: 23,
    color: '#0C0D34',
  },
  description: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    color: '#0C0D34',
    lineHeight: 18,
  },
});
const SubSlide = ({subTitle, description, x, last}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </>
  );
};

export default SubSlide;
