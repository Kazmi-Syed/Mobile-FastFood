import { ScrollView, Image } from 'react-native'
import React , {useState } from 'react'
import { globalStyles } from '../../../themes/global-styles'
import { splashImage } from '../../../utils'
import { CustomButton } from '../../../components/buttons/custom-button'
import { CustomInput } from '../../../components/inputs/custom-input/custom-input'
import { CustomPasswordInput } from '../../../components/inputs/custom-password-input'
import { CustomYellowLabel } from '../../../components/labels/custom-yellow-label'

const SignupScreen : React.FC = () => {
    const [Email, setEmail] = useState<string>('')
    const [Password, setPassword] = useState<string>('')
    const [ConfirmPassword, setConfirmPassword] = useState<string>('')
  return (
    <ScrollView style={globalStyles.wholeAuthScreen}>
        <Image source={splashImage} style={globalStyles.authLogo}/>
        <CustomYellowLabel 
            text='Email Address'
            />
        <CustomInput 
            placeholder='SomeOne@domain.com'
            state={Email}
            setState={setEmail}
            style={{backgroundColor : "white"}}
            />
        <CustomYellowLabel 
            text='Password'
            />
        <CustomPasswordInput 
            placeholder='XYZ2121'
            state={Password}
            setState={setPassword}
            style={{backgroundColor : "white"}}
            />

        <CustomYellowLabel 
            text='Confirm Password'
            />
        <CustomPasswordInput 
            placeholder='XYZ2121'
            state={ConfirmPassword}
            setState={setConfirmPassword}
            style={{backgroundColor : "white"}}
            />
        <CustomButton 
            text='Register Account'
            onPress={(e,cb)=> {console.log("Shah");cb(null) }}
            loaderColor='white'
            />
    </ScrollView>
  )
}

export  {SignupScreen}