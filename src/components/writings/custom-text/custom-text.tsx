import { View, Text, StyleProp, TextStyle } from 'react-native'
import React, { FC } from 'react'
import {styles} from './';


interface props{
  text : String,
  style?:  StyleProp<TextStyle> ,
}

const CustomText  :FC<props> = ({text , style} ) => {
  return (
      <Text style={[styles.text , style ]}>{text}</Text>
  )
}

export {CustomText}