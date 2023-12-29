import {StyleSheet} from 'react-native';
import {
  metalBlack,
  primaryFontBold,
  primaryFontSuperBold,
  secondaryColor,
} from '../../../utils';
import {HEIGHT, WIDTH} from '../../../themes';

const styles = StyleSheet.create({
  dashText: {
    includeFontPadding: false,
    color: metalBlack,
    fontSize: 32,
    fontFamily: primaryFontBold,
  },
  headerWrapper: {
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  list: {
    flexDirection: 'row',
    gap: WIDTH * 0.06,
    rowGap: 0,
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingBottom: HEIGHT * 0.01,
  },
  dashTextBold: {
    fontFamily: primaryFontSuperBold,
    color: secondaryColor,
  },
});

export {styles};
