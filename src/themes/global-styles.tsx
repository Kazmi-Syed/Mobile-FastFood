import {StyleSheet} from 'react-native';
import {WIDTH, HEIGHT} from './index';
import {metalBlack, secondaryColor, primaryColor, primaryFont} from '../utils';

const globalStyles = StyleSheet.create({
  wholeScreen: {
    width: WIDTH,
    height: HEIGHT,
    paddingTop: HEIGHT * 0.02,
    paddingHorizontal: WIDTH * 0.05,
  },

  wholeAuthScreen: {
    width: WIDTH,
    height: HEIGHT,
    paddingTop: HEIGHT * 0.02,
    paddingHorizontal: WIDTH * 0.05,
    backgroundColor: metalBlack,
  },
  input: {
    borderRadius: WIDTH * 0.1,
    borderColor: secondaryColor,
    borderWidth: WIDTH * 0.002,
    color: secondaryColor,
    letterSpacing: 1,
    fontFamily: primaryFont,
    paddingHorizontal: WIDTH * 0.07,
    paddingRight: WIDTH * 0.17,
    includeFontPadding: false,
    marginBottom: HEIGHT * 0.04,
    marginTop: HEIGHT * 0.018,
  },

  centerAligned: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  centerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  spacedContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  column: {
    flexDirection: 'column',
  },

  allCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  authLogo: {
    width: 200,
    height: 100,
    display: 'flex',
    alignSelf: 'center',
    objectFit: 'contain',
    marginTop: HEIGHT * 0.03,
    marginBottom: HEIGHT * 0.06,
  },
});

export {globalStyles};
