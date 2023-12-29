import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../../themes";
import { metalBlack } from "../../utils";

const styles = StyleSheet.create({
    screenWrapper : {
        backgroundColor : metalBlack,
    },
    splashImg :{
        marginTop : -100,
        width : WIDTH*0.4,
        height : HEIGHT * 0.2,
        objectFit : "cover",
    },
    logoText : {
        fontSize : 16,
        letterSpacing : WIDTH*0.009,
        textTransform : "uppercase",
        marginTop : WIDTH*0.01,
        color :"white",
        
    }
}) 

export { styles }