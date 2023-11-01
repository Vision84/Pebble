import React from 'react';
import ImageButton from './ImageButton';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type HeaderProps = 
{
    goBack: boolean
    navigation:any;
}

const Header = (props: HeaderProps) => {
//{goBack, navigation}

  const accountHandler = () => {
    props.navigation.navigate('LogIn')
  };

  const settingsHandler = () => {
    props.navigation.navigate("Settings")
  };  

  const closeHandler = () => {
    props.navigation.navigate('Home')
  };

  const iconSize: number = windowWidth * 0.1

  return (
    <View style={[styles.header, !props.goBack ? {height: windowHeight * 0.15, marginBottom: windowHeight * 0.023} : {height: windowHeight * 0.12, marginBottom: 0}]}>
      {!props.goBack ?
      <TouchableOpacity onPress={accountHandler} style={styles.account}>
        <MaterialCommunityIcons name="account-circle-outline" size={iconSize} color="black" />
      </TouchableOpacity>:

      <TouchableOpacity style={styles.account} onPress={closeHandler}>
        <AntDesign name="close" size={windowWidth * 0.1} color="black" />
      </TouchableOpacity>}

      {!props.goBack && <View style={styles.logo}>
        <Image style={styles.logoImage} source={require('../assets/pebbleFull.png')}></Image>
      </View>}

      <TouchableOpacity onPress={settingsHandler} style={styles.settings}>
        <MaterialIcons name="settings" size={iconSize} color="black" />
      </TouchableOpacity >


    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingHorizontal: windowWidth * 20/390,
    alignItems: 'flex-end',
  },

  account: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: windowHeight * 0.10,
    alignItems: 'center'
  },

  logo: {
    flex: 3,
    maxHeight: windowHeight * 0.10,
    maxWidth: windowWidth * 0.5
  },

  logoImage: {
    height: undefined,
    width: undefined,
    flex: 1
  },

  settings: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: windowHeight * 0.10,
    alignItems: 'center',
  },
});

export default Header;
