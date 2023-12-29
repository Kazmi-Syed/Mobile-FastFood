import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardScreen} from '../screens/home/dashboard-screen';

import {NavigationContainer} from '@react-navigation/native';
import {ItemScreen} from '../screens/home/item-screen';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Home" component={DashboardScreen} />
        <HomeStack.Screen name="Item" component={ItemScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export {HomeNavigator};
