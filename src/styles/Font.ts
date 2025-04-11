import { StyleSheet } from 'react-native';

import { Colors } from 'styles';

export const black = {
  fontFamily: 'Satoshi-Black',
  includeFontPadding: false,
};
export const bold = {
  fontFamily: 'Satoshi-Bold',
  includeFontPadding: false,
};
export const light = {
  fontFamily: 'Satoshi-Light',
  includeFontPadding: false,
};
export const medium = {
  fontFamily: 'Satoshi-Medium',
  includeFontPadding: false,
};
export const regular = {
  fontFamily: 'Satoshi-Regular',
  includeFontPadding: false,
};

export const Fonts = StyleSheet.create({
  headerTitle: {
    ...regular,
    fontSize: 24,
    fontWeight: 300,
    letterSpacing: -0.24,
    color: Colors.black02,
  },
  imageTitle: {
    ...regular,
    fontSize: 32,
    fontWeight: 300,
    letterSpacing: -0.24,
    color: Colors.white,
  },
  imageDescription: {
    ...regular,
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 24,
    letterSpacing: 0.16,
    color: Colors.white,
  },
  buttonText: {
    ...regular,
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 19,
    letterSpacing: 0,
    color: Colors.black02,
  },
});
