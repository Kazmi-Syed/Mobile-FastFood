import { TextInput, TouchableOpacity, StyleProp, ViewStyle, View } from 'react-native'
import { stringSetter } from '../../../utils/custom'
import { styles } from '.';
import { useState } from 'react';
import {EyeIcon as EyeIcon } from 'react-native-heroicons/outline'
import {EyeSlashIcon as EyeSlashIcon } from 'react-native-heroicons/outline'
import { ICONS_SIZE, secondaryColor } from '../../../utils';
import { globalStyles } from '../../../themes/global-styles';

interface props{
    placeholder? :string,
    placeholderTextColor? : string,
    state : string,
    setState : stringSetter,
    style? : StyleProp<ViewStyle>,
}

const CustomPasswordInput : React.FC<props> = (props) => {
    const {state , setState , style , placeholder , placeholderTextColor} = props;

    const [Hide, setHide] = useState(true);

    const changeInput =(e : string)=>{
        setState(e)
    }

    
    return (
    <View>
        <TextInput 
            placeholder={placeholder}
            value={state}
            secureTextEntry={Hide}
            onChangeText={changeInput}
            placeholderTextColor={placeholderTextColor}
            style={[globalStyles.input , style]}
            />
        {
            Hide ? 
            <TouchableOpacity style={styles.iconButton} onPress={e=>setHide(!Hide)}>
                <EyeIcon color={secondaryColor} size={ICONS_SIZE.large}/>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.iconButton} onPress={e=>setHide(!Hide)}>
                <EyeSlashIcon color={secondaryColor} size={ICONS_SIZE.large}/>
            </TouchableOpacity>
        }
    </View>
  )
}

export  {CustomPasswordInput}