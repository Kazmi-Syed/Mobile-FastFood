import {StyleSheet} from 'react-native';
import {HEIGHT, WIDTH} from '../../../themes';
import {
  FONT_SIZE,
  boxColor,
  primaryFontBold,
  primaryFontItalic,
} from '../../../utils';

const styles = StyleSheet.create({
  box: {
    paddingTop: HEIGHT * 0.0008,
    backgroundColor: boxColor,
    borderRadius: WIDTH * 0.04,
    height: HEIGHT * 0.28,
    width: WIDTH * 0.5 - 40,
    marginBottom: HEIGHT * 0.04,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: 'red',
    shadowOffset: {
      width: 8,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 0.6,

    // shadowColor : "red",
    // shadowOpacity : 0.6,
    // shadowOffset : {height : 4 , width : 4},
    // shadowRadius : 25,
    // elevation : 30,
    // paddingTop : 10,
  },

  favButton: {
    position: 'absolute',
    top: HEIGHT * 0.01,
    right: WIDTH * 0.04,
  },

  productImage: {
    display: 'flex',
    alignSelf: 'center',
    objectFit: 'contain',
    width: '60%',
    height: '60%',
  },

  productTitle: {
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: primaryFontBold,
    fontSize: FONT_SIZE.regular,
    maxWidth: '80%',
    includeFontPadding: false,
  },

  productPrice: {
    textAlign: 'center',
    fontFamily: primaryFontItalic,
    fontSize: FONT_SIZE.small,
  },
});

export {styles};
