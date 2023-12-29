import { TextInput, StyleProp, ViewStyle } from 'react-native'
import { stringSetter } from '../../../utils/custom'
import { globalStyles } from '../../../themes/global-styles';

interface props{
    placeholder? : string,
    placeholderTextColor? : string,
    state : string,
    setState : stringSetter,
    style? : StyleProp<ViewStyle>,
}

const CustomInput : React.FC<props> = (props) => {
    
    const {state , setState , style , placeholder, placeholderTextColor} = props;

    const changeInput =(e : string)=>{
        setState(e)
  }

    return (
    <TextInput 
        placeholder={placeholder}
        value={state}
        onChangeText={changeInput}
        placeholderTextColor={placeholderTextColor}
        style={[globalStyles.input , style]}
        />
  )
}

export { CustomInput}