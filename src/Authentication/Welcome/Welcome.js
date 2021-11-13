import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Box} from '../../Components/Theme';

const styles = StyleSheet.create({
  picture: {
    height: 3383,
    width: 5074,
  },
});

const Welcome = () => {
  const picture = {
    src: require('../../Authentication/Onboarding/assets/5.png'),
  };
  return (
    <>
      <Box flex={1}>
        <Box flex={1} backgroundColor="slideGrey" borderBottomRightRadius="xl">
          <Image src={picture.src} style={styles.picture} />
        </Box>
        <Box flex={1} borderTopLeftRadius="xl"></Box>
      </Box>
    </>
  );
};

export default Welcome;
