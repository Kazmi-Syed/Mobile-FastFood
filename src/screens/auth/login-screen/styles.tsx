import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../../../themes";
import { metalBlack } from "../../../utils";
const styles = StyleSheet.create({
    
    inputsWrapper : {
        paddingHorizontal : WIDTH*0.06,
    },


    bottomImageWrapper : {
        position : "relative",
        padding : 10,
        width : WIDTH,
        // backgroundColor: "green",
        display : "flex",
        flexGrow : 2,
        marginLeft : -20,
        justifyContent : "center"
    },
    bottomImage :{
        width : WIDTH,

        position : "absolute",
        zIndex : 0,
        height : HEIGHT*0.26,
        objectFit : "contain",
        transform : [{scale : 1.8},{translateY : 25}],
    },

    registerButton :{
        marginLeft : 20+WIDTH*0.06,
        backgroundColor : metalBlack,
        borderColor : metalBlack,
        position : "absolute",
        bottom : HEIGHT*0.1,
        width : WIDTH - (40+WIDTH*0.12),
    }

}) 

export {
    styles 
}