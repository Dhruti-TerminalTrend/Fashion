import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Button} from '../../Components';

const {height} = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.61;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subTitle: {
    fontFamily: 'SF-Pro-Text-Semibold',
    fontSize: 23,
    color: '#0C0D34',
    lineHeight: 30,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 14,
    color: '#0C0D34',
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
});
const SubSlide = ({subTitle, description, last, onPress}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button
          label={last ? "Let's get started" : 'Next'}
          variant={last ? 'primary' : 'default'}
          {...{onPress}}></Button>
      </View>
    </>
  );
};

export default SubSlide;
