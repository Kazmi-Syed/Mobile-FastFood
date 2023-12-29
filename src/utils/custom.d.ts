import React from 'react';
import {rootReducer} from '../store';

type LOGIN_INITIALS_TYPES = {
  status: number;
  userInfo: Object | null;
};

interface LOGIN_PAYLOAD {
  token: string;
  firstName: string;
  lastName: string;
}

interface ACTION_TYPES {
  type: string;
  payload?: LOGIN_PAYLOAD;
}

type ROOT_REDUCER_TYPE = ReturnType<typeof rootReducer>;

interface SCREEN_PROPS {}

type stringSetter = React.Dispatch<React.SetStateAction<string>>;

type booleanSetter = React.Dispatch<React.SetStateAction<boolean>>;

type SOR = String | Number;

type SOR_STATES = React.Dispatch<React.SetStateAction<SOR>>;

type BUTTON_ERROR = Error | null;

//OnBoarding Navigation

//Auth Navigator

//Home Navigator

type HomeStackParamsList = {
  Home: {};
  Item: {id: string; name: string; price: number};
};

interface HomeNavigatorScreenProps<T> {
  route: RouteProp<HomeStackParamsList, T>;
  navigation: NavigationProp<HomeStackParamsList>;
}

export {
  ACTION_TYPES,
  SCREEN_PROPS,
  ROOT_REDUCER_TYPE,
  LOGIN_INITIALS_TYPES,
  SOR,
  SOR_STATES,
  BUTTON_ERROR,
  stringSetter,
  booleanSetter,
  HomeStackParamsList,
  HomeNavigatorScreenProps,
};
