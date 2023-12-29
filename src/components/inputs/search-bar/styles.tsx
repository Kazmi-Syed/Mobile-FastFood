import {StyleSheet} from 'react-native';
import {primaryFont, secondaryColor} from '../../../utils';
import {HEIGHT, WIDTH} from '../../../themes';

const styles = StyleSheet.create({
  wrapper: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  searchIcon: {
    paddingLeft: 40,
    position: 'absolute',
  },
  filterIcon: {
    position: 'absolute',
    right: 20,
  },

  list: {
    paddingVertical: HEIGHT * 0.03,
    borderBottomColor: 'rgba(100,100,200,0.1)',
    borderBottomWidth: 0.3,
  },
  chips: {
    backgroundColor: secondaryColor,
    color: 'white',
    includeFontPadding: false,
    paddingHorizontal: WIDTH * 0.02,
    paddingVertical: WIDTH * 0.01,
    fontSize: 16,
    shadowColor: 'rgba(0,0,0,0.9)',
    elevation: 3,
    fontFamily: primaryFont,
    borderRadius: 10,
  },
});

export {styles};
