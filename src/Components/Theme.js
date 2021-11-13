import React from 'react';
import {createBox, createText, createTheme} from '@shopify/restyle';

const Theme = createTheme({
  colors: {
    primary: '#2CB9B0',
    title: '#0C0D34',
    text: 'rgba(12,13, 52, 0.7)',
    grey: 'rgba(12,13, 52, 0.05)',
    white: 'white',
    slideGrey: '#F4F0EF',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 70,
      lineHeight: 90,
      color: 'white',
      fontFamily: 'SF-Pro-Display-Bold',
      textAlign: 'center',
    },
    titleBig: {
      fontSize: 28,
      fontFamily: 'SF-Pro-Display-Semibold',
      color: 'title',
    },
    titleSmall: {
      fontSize: 23,
      lineHeight: 30,
      fontFamily: 'SF-Pro-Display-Semibold',
      color: 'title',
    },
    body: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: 'SF-Pro-Display-Regular',
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontFamily: 'SF-Pro-Display-Regular',
      textAlign: 'center',
    },
  },
  breakpoints: {},
});

export const Text = createText();
export const Box = createBox();

export default Theme;
