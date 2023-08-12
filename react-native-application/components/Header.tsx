import React from 'react';
import ImageButton from './ImageButton';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type HeaderProps = 
{
    navigation?:any;
}

const Header = (props: HeaderProps) => {
//{goBack, navigation}

  const accountHandler = () => {
    props.navigation.navigate('LogIn')
  };

  const settingsHandler = () => {

  };

  const iconSize: number = windowWidth * 0.11

  return (
    <View style={styles.header}>

      <TouchableOpacity onPress={accountHandler} style={styles.account}>
        <MaterialCommunityIcons name="account-circle-outline" size={iconSize} color="black" />
      </TouchableOpacity>

      <View style={styles.logo}>
        <Image style={styles.logoImage} source={require('../assets/pebbleFull.png')}></Image>
      </View>

      <TouchableOpacity onPress={settingsHandler} style={styles.settings}>
        <MaterialIcons name="settings" size={iconSize} color="black" />
      </TouchableOpacity >


    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: windowHeight * 0.15,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 20/390,
    alignItems: 'flex-end',
    marginBottom: windowHeight * 0.023,

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
