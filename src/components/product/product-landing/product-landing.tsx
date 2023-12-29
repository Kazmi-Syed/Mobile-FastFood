import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {ICONS_SIZE, secondaryColor, splashImage} from '../../../utils';
import {HeartIcon as LoveFilledIcon} from 'react-native-heroicons/solid';
import {HeartIcon as TemporaryLikeIcon} from 'react-native-heroicons/outline';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeStackParamsList} from '../../../utils/custom';

interface Props {
  id: string;
  name: string;
  price: number;
}

const ProductLanding = (props: Props) => {
  const {id, name, price} = props;
  const navigation: NavigationProp<HomeStackParamsList> = useNavigation();
  const [Liked, setLiked] = useState<boolean>(false);

  return (
    <Pressable
      style={styles.box}
      onPress={e => navigation.navigate('Item', {id, name, price})}>
      <Image source={splashImage} style={styles.productImage} />
      {Liked ? (
        <TouchableOpacity
          style={styles.favButton}
          onPress={e => setLiked(false)}>
          <LoveFilledIcon color={secondaryColor} size={ICONS_SIZE.large - 5} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.favButton}
          onPress={e => {
            setLiked(true);
          }}>
          <TemporaryLikeIcon
            stroke={secondaryColor}
            size={ICONS_SIZE.large - 5}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.productTitle}>{name}</Text>
      <Text style={styles.productPrice}>{price} $</Text>
    </Pressable>
  );
};

export {ProductLanding};
