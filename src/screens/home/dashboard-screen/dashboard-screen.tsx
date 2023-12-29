import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Bars3BottomRightIcon as HamburgerIcon} from 'react-native-heroicons/solid';
import React from 'react';
import {styles} from './';
import {globalStyles} from '../../../themes/global-styles';
import {SearchBar} from '../../../components/inputs/search-bar';
import {secondaryColor} from '../../../utils';
import {ProductLanding} from '../../../components/product/product-landing';

import {HomeNavigatorScreenProps} from '../../../utils/custom';

const DashboardScreen = (props: HomeNavigatorScreenProps<'Home'>) => {
  return (
    <View style={globalStyles.wholeScreen}>
      <View style={styles.headerWrapper}>
        <View>
          <Text style={styles.dashText}>
            Hi, <Text style={styles.dashTextBold}>Bilal</Text>
          </Text>
          <Text style={styles.dashText}>Tummmy Muskurye</Text>
        </View>
        <TouchableOpacity>
          <HamburgerIcon color={secondaryColor} size={50} />
        </TouchableOpacity>
      </View>

      <Text style={styles.dashText}>
        Find <Text style={styles.dashTextBold}>Deals</Text>
      </Text>
      <SearchBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}>
        <ProductLanding
          id="BU0103354"
          price={14.45}
          name="Grilled Chicken Burger"
        />
        <ProductLanding
          id="BU0103355"
          price={16.5}
          name="Spicy Zinger Burger"
        />
        <ProductLanding id="BU0103356" price={30.25} name="Muttton Burger" />
        <ProductLanding id="BU0103357" price={18.25} name="Beef Burger" />
      </ScrollView>
    </View>
  );
};

export {DashboardScreen};
