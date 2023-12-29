import { StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { CustomText } from '../../writings/custom-text'


interface props{
    text: String,
    style? : StyleProp<ViewStyle>
}

const CustomYellowLabel : React.FC<props> = ({text , style}) => {
  return (
      <CustomText 
        text={text}  
        style={[styles.label , style]}/>
  )
}

export { CustomYellowLabel}