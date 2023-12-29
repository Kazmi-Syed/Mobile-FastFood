import { View, Image, Text, StatusBar, GestureResponderEvent } from 'react-native';
import React, { useState  } from 'react';
import { globalStyles } from '../../../themes/global-styles';
import { styles } from './';
import { CustomButton } from '../../../components/buttons/custom-button';
import { dealImage, splashImage } from '../../../utils/images';
import { metalBlack } from '../../../utils';
import { BUTTON_ERROR } from '../../../utils/custom';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { CustomInput } from '../../../components/inputs/custom-input';
import { CustomPasswordInput } from '../../../components/inputs/custom-password-input';
import { CustomYellowLabel } from '../../../components/labels/custom-yellow-label';
// import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [Email, setEmail] = useState<string>('');
    const [Password, setPassword] = useState<string>('');
    

    // const navigation = useNavigation()
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.authReducer)
    console.log("USer in redux store " , user)
    // const
    const login=async (e : GestureResponderEvent ,cb : (err : BUTTON_ERROR)=>void)=>{
      console.log("Logging In")
      console.log("Email Addr :", Email)
      console.log("Password : ", Password)

      // AsyncStorage.setItem('_userLogged' , JSON.stringify(true))
      //   .then(g=>{
      //   });
        
        dispatch({type : "LOGIN" , payload :{firstName : "Bilal", lastName :"Shah" , token : "TOKEN+SE+BACH+K" }})
        console.log("AFTER DISPATCH", user)
    
      cb(null)

      
    }

    return (
    <View style={globalStyles.wholeAuthScreen}>
      <StatusBar 
        barStyle={'dark-content'}
        backgroundColor={metalBlack} 
        translucent={false} />
     <Image source={splashImage} style={globalStyles.authLogo}/>
     
     <View style={styles.inputsWrapper}>
      <CustomYellowLabel 
        text='Email Address'
        />
      <CustomInput 
        state={Email}
        setState={setEmail}
        
        />
      <CustomYellowLabel 
        text='Password'
        />
        <CustomPasswordInput 
            state={Password}
            setState={setPassword}
        />
        <CustomButton 
            loaderColor='white'
            text="Login"
            // onPress = {(e , cb)=>{setTimeout(()=>{console.log("Pressed"); cb(null)}, 5000)}}
            onPress = {login}
            textStyle={{textAlign:"center"}}
            />
          </View>
        <Text style={{textAlign : "center" , color : "gray", fontSize : 20}} >SignUp</Text>
        <View>

        <Text style={{textAlign : "center" , color : "gray", fontSize : 20}} >Register As New USer</Text>
        </View>

        <View style={styles.bottomImageWrapper}>
          <Image source={dealImage} style={styles.bottomImage}/>
          
          <CustomButton
              viewStyle={styles.registerButton} 
              textStyle={{textAlign:"center"}}
              loaderColor='white'
              text="Register New USer"
              onPress = {login}
              />
        </View>

    </View>
  )
}

export { LoginScreen }