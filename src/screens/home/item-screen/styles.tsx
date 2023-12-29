import {StyleSheet} from 'react-native';
import {HEIGHT, WIDTH} from '../../../themes';

const styles = StyleSheet.create({
  bottomButtoned: {
    position: 'relative',
    height: HEIGHT,
    width: WIDTH,
  },
  image: {
    // width: WIDTH * 0.6,
    width: WIDTH,

    height: HEIGHT * 0.35,
    objectFit: 'cover',
    alignSelf: 'center',
  },
});

export default styles;
