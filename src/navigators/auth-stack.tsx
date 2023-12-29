import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from 'react-native'
import React from 'react'
import { LoginScreen } from "../screens/auth/login-screen";
import { SignupScreen } from "../screens/auth/signup-screen";
import { ForgotPasswordScreen } from "../screens/auth/forgot-password-screen";
import { CodeVerificationScreen } from "../screens/auth/code-verification-screen";

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
//Implement here the logic for checking if the user boarded 
//

return(
    
    <AuthStack.Navigator screenOptions={{headerShown : false}}>

        <AuthStack.Screen name="login" component={LoginScreen} />

        <AuthStack.Screen name="signup" component={SignupScreen} />

        <AuthStack.Screen name="forgot-password" component={ForgotPasswordScreen} />
        
        <AuthStack.Screen name="forgot-password" component={CodeVerificationScreen} />

    </AuthStack.Navigator>
)
}

export {AuthNavigator}