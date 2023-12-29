import { StyleSheet } from "react-native";
import { primaryFontBold, secondaryColor } from "../../../utils";

const styles = StyleSheet.create({
    label :{
        color : secondaryColor,
        // textShadowColor : "rgba(255,255,255,0.6)",
        // textShadowOffset : {width:1 , height:1},
        // textShadowRadius : 3,
        
        fontSize : 16,
        fontFamily : primaryFontBold,
    }
}) 

export { styles} 