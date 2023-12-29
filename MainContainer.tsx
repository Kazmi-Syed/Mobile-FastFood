import { Text } from 'react-native'
import React , {useState ,  useEffect} from 'react'
import { SplashScreen } from './src/screens/splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { LOGIN_INITIALS_TYPES, ROOT_REDUCER_TYPE } from './src/utils/custom';
import { loginInitialState } from './src/store/auth_reducer';

const MainContainer:any = () => {
  const [Loading, setLoading] = useState(true);
  const [UserData, setUserData] = useState<LOGIN_INITIALS_TYPES>(loginInitialState);

  const user  = useSelector<ROOT_REDUCER_TYPE , LOGIN_INITIALS_TYPES> (state  => state? state.authReducer  : loginInitialState)

  const checkUser = async ()=>{
    const userData : string |null = await AsyncStorage.getItem('_userData');
    let data : LOGIN_INITIALS_TYPES;
    userData ?  setUserData(await JSON.parse(userData)) : setUserData(loginInitialState); 
    setLoading(false)    
  }

  useEffect(() => {
    
    setTimeout (async ()=>{await AsyncStorage.removeItem('_userData'); checkUser()}, 5000);
  }, [])
  
  return (

    Loading ? <SplashScreen />
      : 
            UserData.status === 1 ? <Text>Auth Screens</Text> 
              : 
                UserData.status===2 ? <Text> Home Screens</Text>  
                  : <Text>OnboardingScreens</Text>
    
    )
}

export default MainContainer