import { StyleSheet } from "react-native";
import { primaryFontBold, secondaryColor } from "../../../utils";
import { HEIGHT, WIDTH } from "../../../themes";

const styles = StyleSheet.create({
    buttonView :{
        backgroundColor : secondaryColor,
        borderColor : secondaryColor,
        borderWidth : WIDTH*0.001,
        color : "white",
        paddingVertical : HEIGHT*0.02,
        borderRadius : WIDTH*0.04,
    },
    buttonText :{
        color: "white",
        textAlign : "center",
        fontFamily : primaryFontBold,
    }
}) 

export { styles }