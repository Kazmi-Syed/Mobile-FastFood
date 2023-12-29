import { Image, StatusBar, View } from 'react-native'
import {styles} from './'
import React from 'react'
import { globalStyles } from '../../themes/global-styles'
import { CustomText } from '../../components/writings/custom-text'
import { metalBlack } from '../../utils'
import { splashImage } from '../../utils/images'

interface props{

}

const SplashScreen : React.FC<props> = () => {
  return (
    <View
        style={[globalStyles.allCenter,globalStyles.wholeScreen, globalStyles.column,styles.screenWrapper,]}
    >
      <StatusBar backgroundColor={metalBlack} />
      <Image source={splashImage} style={styles.splashImg} />
      <View style={[globalStyles.centerAligned]}>
        <CustomText text="Buds" style={styles.logoText}/>
        <CustomText text="Uncle's" style={[styles.logoText , {color : "yellow", marginLeft : 8}]}/>
      </View>
    </View>
  )
}

export {SplashScreen}