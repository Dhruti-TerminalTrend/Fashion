import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {Button, Text} from '../../Components';

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
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 40,
    color: '#0C0D34',
  },
});
const SubSlide = ({subTitle, description, last, onPress}) => {
  return (
    <>
      <View style={styles.container}>
        <Text variant="titleSmall" style={styles.subTitle}>
          {subTitle}
        </Text>
        <Text variant="body" style={styles.description}>
          {description}
        </Text>
        <Button
          label={last ? "Let's get started" : 'Next'}
          variant={last ? 'primary' : 'default'}
          {...{onPress}}></Button>
      </View>
    </>
  );
};

export default SubSlide;
