import { View,Image, StatusBar, Text } from 'react-native'
import React ,{useState} from 'react'
import { metalBlack } from '../../../utils'
import { globalStyles } from '../../../themes/global-styles'
import { splashImage } from '../../../utils'
import { CustomInput } from '../../../components/inputs/custom-input'
import { CustomButton } from '../../../components/buttons/custom-button';
import { CustomYellowLabel } from '../../../components/labels/custom-yellow-label'
const ForgotPasswordScreen : React.FC = () => {
  const [Email, setEmail] = useState<string>('')

  //Inside the recover y navigate to the other screen

  return (
    <View style={globalStyles.wholeAuthScreen}>
    <StatusBar 
      barStyle={'dark-content'}
      backgroundColor={metalBlack} 
      translucent={false} />
     <Image source={splashImage} style={globalStyles.authLogo}/>
     <CustomYellowLabel 
      text='Email Address'
      />
     <CustomInput 
      placeholder='myemail.com'
      state={Email}
      style={{backgroundColor: "white"}}
      setState={setEmail}
      />
      <CustomButton 
        text='Recover Account'
        onPress={(e,cb)=> {console.log("Recovery in progress"); cb(null)}}
        loaderColor='white'
        />

    </View>
    )
}

export { ForgotPasswordScreen}