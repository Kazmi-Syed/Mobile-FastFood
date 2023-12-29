import { Dimensions } from "react-native";

const {height , width} = Dimensions.get('window');
const WIDTH = height < width ? height : width;
const HEIGHT = height > width ? height : width;

export{
    WIDTH,HEIGHT
}