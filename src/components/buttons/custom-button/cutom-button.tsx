import { View, Pressable , Text, StyleProp, ViewStyle, GestureResponderEvent, ActivityIndicator, TextStyle } from 'react-native'
import React, {useState} from 'react'
import { CustomText } from '../../writings/custom-text'
import {styles} from './';
import { secondaryColor } from '../../../utils';
import { BUTTON_ERROR } from '../../../utils/custom';

interface props{
    
    text :string,
    loaderColor? : string,
    onPress : (e : GestureResponderEvent, ...rest : any[]) => void,
    viewStyle? : StyleProp<ViewStyle>,
    textStyle? : StyleProp<TextStyle>,
}

const CustomButton : React.FC<props> = (props) => {
    const {text, loaderColor  , onPress , viewStyle , textStyle} = props;

    const [Disabled, setDisabled] = useState<Boolean>(false);

    const functionExecution = (e : GestureResponderEvent)=>{
        // console.log("Execution called")
        return new Promise((resolve , reject) =>{
            onPress(e , (err : BUTTON_ERROR)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(1);
                } 
            });
        } )
    }

    return (
    <Pressable 
        style={[ styles.buttonView , viewStyle ]}
        onPress={e=> {setDisabled(true); functionExecution(e).then(g=> setDisabled(false)).catch(t =>{console.log("Error "); setDisabled(false)} )}}
        >
            {/* <View }> */}
        {
            Disabled ? 
            <ActivityIndicator color={loaderColor ? loaderColor : secondaryColor}/>
            :    
            <CustomText text={text} style={[styles.buttonText, textStyle]}/>
        }
        {/* </View> */}
    </Pressable>
  )
}

export { 
    CustomButton 
}