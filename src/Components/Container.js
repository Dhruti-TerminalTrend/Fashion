import React from 'react';
import {Dimensions, Image, StatusBar, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Theme, {Box} from './Theme';

const {width} = Dimensions.get('window');

export const assets = [require('./assets/patterns/pattern1.png')];

const aspectRatio = 750 / 1125;

const height = width * aspectRatio;
console.log(height, width, height * 0.61);

const Container = ({children, footer}) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <Box flex={1} backgroundColor="secondary">
        <StatusBar barStyle="light-content" hidden={true} />
        <Box backgroundColor="white">
          <Box
            overflow="hidden"
            height={height * 0.61}
            borderBottomLeftRadius="xl">
            <Image
              source={assets[0]}
              style={{
                width,
                height,
                borderBottomLeftRadius: Theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={assets[0]}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
            flex={1}>
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondary" paddingTop="m" paddingBottom="m">
          {footer}
          {/* <Box height={insets.bottom} /> */}
        </Box>
      </Box>
    </>
  );
};

export default Container;
