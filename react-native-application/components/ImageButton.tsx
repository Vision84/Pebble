import React from "react";
import { TouchableOpacity, Image } from "react-native";

type ImageButtonProps = {
  onPress: any;
  imageSource: any;
  style?: any;
};

const ImageButton = (props: ImageButtonProps) => {
  //const [onPress,imageSource,style] = props;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image style={props.style} source={props.imageSource} />
    </TouchableOpacity>
  );
};

export default ImageButton;
