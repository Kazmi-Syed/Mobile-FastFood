import {Platform} from 'react-native';

const primaryColor = 'yellow';
const secondaryColor = '#e0ba23';
const boxColor = 'rgba(255,255,240,0.5)';

const metalBlack = 'rgb(30,30,30)';

const primaryFont = 'NunitoSans-Regular';
const primaryFontItalic = 'NunitoSans-Italic';
const primaryFontSemiBold = 'NunitoSans-SemiBold';
const primaryFontBold = 'NunitoSans-Bold';
const primaryFontSuperBold = 'NunitoSans-ExtraBold';

const secondaryFont = 'NunitoSans-Italic';
const secondaryFontItalic = 'NunitoSans-Italic';
const secondaryFontSemiBold = 'NunitoSans-Italic';
const secondaryFontBold = 'NunitoSans-Italic';

const isAndroid = Platform.OS === 'android';

const ICONS_SIZE = {
  regular: 24,
  large: 28,
  small: 16,
};

const FONT_SIZE = {
  large: 28,
  regular: 17,
  small: 15,
};

export {
  primaryColor,
  secondaryColor,
  boxColor,
  metalBlack,
  primaryFont,
  primaryFontItalic,
  primaryFontSemiBold,
  primaryFontBold,
  primaryFontSuperBold,
  secondaryFont,
  secondaryFontItalic,
  secondaryFontBold,
  secondaryFontSemiBold,
  ICONS_SIZE,
  FONT_SIZE,
  isAndroid,
};
