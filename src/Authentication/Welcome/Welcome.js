import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Button} from '../../Components';
import Theme, {Box, Text} from '../../Components/Theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  picture: {
    width: width - Theme.borderRadii.xl,
    height: ((width - Theme.borderRadii.xl) * 5074) / 3383,
  },
});

const Welcome = () => {
  const picture = {
    src: require('../../Authentication/assets/5.png'),
  };
  return (
    <>
      <Box flex={1} backgroundColor="white">
        <Box
          flex={1}
          backgroundColor="grey"
          borderBottomRightRadius="xl"
          justifyContent="center"
          alignItems="center">
          <Image source={picture.src} style={styles.picture} />
        </Box>
        <Box flex={1} borderTopLeftRadius="xl">
          <Box
            backgroundColor="grey"
            position="absolute"
            top={0}
            bottom={0}
            right={0}
            left={0}></Box>
          <Box
            backgroundColor="white"
            flex={1}
            borderTopLeftRadius="xl"
            justifyContent="space-evenly"
            alignItems="center"
            padding="l">
            <Text variant="titleSmall">Lets's get started</Text>
            <Text variant="body" textAlign="center">
              Login to your account below or signup for an amazing experience
            </Text>
            <Button variant="primary" label="Have an account? Login" />
            <Button label="Join us, it's Free" />
            <Button variant="transparent" label="Forgot Password?" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Welcome;
