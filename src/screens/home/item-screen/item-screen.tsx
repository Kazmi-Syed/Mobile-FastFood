import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BottomCircularButton} from '../../../components/buttons/bottom-circular-button';
import styles from './styles';
import {HomeNavigatorScreenProps} from '../../../utils/custom';
import {burger1, burgerbg, isAndroid} from '../../../utils';

const ItemScreen = (props: HomeNavigatorScreenProps<'Item'>) => {
  const {route} = props;

  const {id, name, price} = route?.params;
  return (
    <>
      {isAndroid ? <StatusBar translucent backgroundColor="transparent" /> : ''}
      <View style={styles.bottomButtoned}>
        <Image source={burgerbg} style={styles.image} />
        <Text>{id}</Text>
        <Text>{name}</Text>
        <Text>{price} $</Text>
        <Text>Quick Order</Text>

        <TouchableOpacity>
          <Text>Bilal</Text>
        </TouchableOpacity>
        <View></View>
        <BottomCircularButton />
      </View>
    </>
  );
};

export {ItemScreen};
