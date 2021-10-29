import React from 'react';
import {createText, createTheme} from '@shopify/restyle';

const Theme = createTheme({
  colors: {
    primary: '#2CB9B0',
    title: '#0C0D34',
    text: 'rgba(12,13, 52, 0.7)',
    grey: 'rgba(12,13, 52, 0.05)',
    white: 'white',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 70,
      lineHeight: 90,
      color: 'white',
      fontFamily: 'SF-Pro-Text-Bold',
      textAlign: 'center',
    },
    titleBig: {
      fontSize: 28,
      fontFamily: 'SF-Pro-Text-Semibold',
      color: 'title',
    },
    titleSmall: {
      fontSize: 23,
      lineHeight: 30,
      fontFamily: 'SF-Pro-Text-Semibold',
      color: 'title',
    },
    body: {
      fontSize: 14,
      lineHeight: 18,
      fontFamily: 'SF-Pro-Text-Regular',
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontFamily: 'SF-Pro-Text-Semibold',
      textAlign: 'center',
    },
  },
  breakpoints: {},
});

export const Text = createText();

export default Theme;
