import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Text} from './Theme';
import {Theme} from '.';

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    fontFamily: 'SF-Pro-Display-Semibold',
    textAlign: 'center',
  },
});

const Button = ({label, variant, onPress}) => {
  const theme = useTheme();
  const backgroundColor =
    variant === 'primary' ? theme.colors.primary : theme.colors.grey;

  const color = variant === 'primary' ? theme.colors.white : theme.colors.title;
  return (
    <>
      <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
        <Text variant="button" style={{color}}>
          {label}
        </Text>
      </RectButton>
    </>
  );
};

export default Button;
