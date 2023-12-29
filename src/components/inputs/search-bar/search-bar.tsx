import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {globalStyles} from '../../../themes/global-styles';
import React, {useState} from 'react';
import {MagnifyingGlassIcon as SearchIcon} from 'react-native-heroicons/solid';
import {AdjustmentsHorizontalIcon as FilterIcon} from 'react-native-heroicons/solid';
import {secondaryColor} from '../../../utils';
import {ICONS_SIZE} from '../../../utils';
import {styles} from './';

interface props {
  placeholder?: string;
  placeholderTextColor?: string;
}

const SearchBar: React.FC<props> = (props: props) => {
  const [state, setState] = useState<string>('');
  const {placeholder, placeholderTextColor} = props;

  const changeInput = (e: string) => {
    setState(e);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Shah "
          value={state}
          onChangeText={changeInput}
          placeholderTextColor="rgb(150,150,150)"
          style={[
            globalStyles.input,
            {
              marginBottom: 0,
              marginTop: 0,
              width: '100%',
              color: 'black',
              paddingLeft: 40,
              height: '90%',
              backgroundColor: 'rgba(0,0,30,0.03)',
            },
          ]}
        />

        <SearchIcon
          color={'gray'}
          size={ICONS_SIZE.large - 3}
          style={styles.searchIcon}
        />

        <TouchableOpacity style={styles.filterIcon}>
          <FilterIcon color={secondaryColor} size={ICONS_SIZE.large - 2} />
        </TouchableOpacity>
      </View>
      <View style={[globalStyles.spacedContent, styles.list]}>
        <Text style={[styles.chips]}>Burger</Text>
        <Text style={[styles.chips]}>Pizza</Text>
        <Text style={[styles.chips]}>Wraps</Text>
        <Text style={[styles.chips]}>Dessert</Text>
      </View>
    </>
  );
};

export {SearchBar};
