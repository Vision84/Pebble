import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const ImageButton = ({ onPress, imageSource, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={style} source={imageSource}/>
    </TouchableOpacity>
  );
};

export default ImageButton;
