import {StyleSheet} from 'react-native';
import {HEIGHT, WIDTH} from '../../../themes';
import {FONT_SIZE, primaryFontBold, secondaryColor} from '../../../utils';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    height: WIDTH * 1.5,
    width: WIDTH * 1.5,
    borderRadius: WIDTH * 1.5,
    paddingTop: WIDTH * 0.09,
    alignItems: 'center',
    bottom: -WIDTH * 1.2,
    alignSelf: 'center',
    backgroundColor: secondaryColor,
  },

  label: {
    color: 'white',
    fontSize: FONT_SIZE.regular,
    fontFamily: primaryFontBold,
  },
});

export {styles};
