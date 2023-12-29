import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const BottomCircularButton = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.label}>Add to Cart</Text>
    </View>
  );
};

export {BottomCircularButton};
