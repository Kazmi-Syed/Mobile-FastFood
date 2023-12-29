import { StyleSheet } from "react-native";
import { ICONS_SIZE, primaryFont, secondaryColor } from "../../../utils";
import { WIDTH , HEIGHT } from "../../../themes";

const styles = StyleSheet.create({
    iconButton:{        
        position : "absolute",
        right : WIDTH*0.04,
        display : "flex",
        justifyContent : "center",
        height : "100%",
        marginTop : HEIGHT*0.018 ,
        paddingBottom : HEIGHT*0.04+ICONS_SIZE.large*0.5,
    },
}) 

export {
    styles 
}