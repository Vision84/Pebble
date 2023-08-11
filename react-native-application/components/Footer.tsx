import React from 'react';
import { View, StyleSheet, Dimensions, Text,  TouchableOpacity } from 'react-native';
import ImageButton from './ImageButton';
import { Feather, MaterialIcons, AntDesign  } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type FooterProps =
{
  selected: string | undefined,
  navigation: any
}

// let pressed: number = 0

const Footer = (props: FooterProps) => {

  const iconHandler = (page: string) => {
    props.navigation.navigate(page)
  };

  // const buttonPress = (iconNumber: number) => {
  //   pressed = iconNumber
  // };

  const iconsSize: number = windowWidth * 0.1
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => iconHandler("Home")} style={styles.buttonContainer}>
        {props.selected == "home" ?
        <Feather name="home" size={iconsSize} color="blue" /> :
        <Feather name="home" size={iconsSize} color="black" />}
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => iconHandler("Courses")} style={styles.buttonContainer}>
        {props.selected == "courses" ?       
        <MaterialIcons name="library-books" size={iconsSize} color="blue" />:
        <MaterialIcons name="library-books" size={iconsSize} color="black" />}
        <Text style={styles.buttonText}>Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => iconHandler("Explore")} style={styles.buttonContainer}>
        {props.selected == "explore" ? 
        <AntDesign name="search1" size={iconsSize} color="blue" />:
        <AntDesign name="search1" size={iconsSize} color="black" />}
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => iconHandler("Liked")} style={styles.buttonContainer}>
        {props.selected == "liked" ?
        <AntDesign name="hearto" size={iconsSize} color="blue" />:
        <AntDesign name="hearto" size={iconsSize} color="black" />}
        <Text style={styles.buttonText}>Liked</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    height: '10%',
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
    alignSelf: 'center',
    position: 'absolute', // Position the footer absolutely
    bottom: 0, // Align it to the bottom of the screen
    width: '98%', // Take up the entire width
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    flexDirection: 'row',
    paddingHorizontal: windowWidth * 45/390,
    gap: windowWidth * 0.025,
  },

  text: {
    color: 'white',
    fontSize: 16,
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    zIndex: 5,
    height: '80%',
    minWidth: windowWidth * 33/390,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    
  },

  buttonText: {
    fontSize: windowWidth * 0.03
  },

  // press: {
  //   borderWidth: windowWidth * 0.003,
  //   borderRadius: 6,
  // }
});

export default Footer;
