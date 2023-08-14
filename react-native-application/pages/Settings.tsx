import React from "react";
import {View, TouchableOpacity, StyleSheet, Dimensions, Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type SettingsProps =
{
  navigation: any
}

const Settings = (props: SettingsProps) => {

    const closeHandler = () => {
        props.navigation.navigate('Home')
    }

    return(
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerIcon} onPress={closeHandler}>
            <AntDesign name="close" size={windowWidth * 0.1} color="black" />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Settings</Text>
          </View>
          <View style={styles.filler}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    header: {
      height: windowHeight * 0.15,
      flexDirection: 'row',
      paddingHorizontal: windowWidth * 20/390,
      paddingTop: windowHeight * 0.04,
      alignItems: 'center',
  },

  headerIcon: {
    flex: 2,
    alignItems: 'flex-start',
    
  },

  headerTextContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: 'black',
    fontSize: windowWidth * 0.09,
    fontWeight: 'bold',    
  },

  filler: {
    flex: 2,
    backgroundColor: 'green'
  },
})

export default Settings;
