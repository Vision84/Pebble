import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const NextButton = ({ onPress, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: windowWidth,
    bottom: windowHeight * 0.05, // 2% from the bottom of the screen
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Increase the zIndex to ensure the button is above other elements
  },
  button: {
    backgroundColor: 'green',
    paddingHorizontal: windowWidth * 0.05, // 5% horizontal padding
    paddingVertical: windowHeight * 0.015, // 1.5% vertical padding
    borderRadius: windowWidth * 0.02, // 2% border radius
  },
  buttonText: {
    color: 'white',
    fontSize: windowWidth * 0.04, // 4% font size
    fontWeight: 'bold',
  },
});

export default NextButton;
