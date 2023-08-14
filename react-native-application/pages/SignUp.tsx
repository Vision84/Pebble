import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type SignUpProps =
{
  navigation: any
}

const SignUp = (props: SignUpProps) => {
  
    const closeHandler = () => {
    props.navigation.navigate('Home')
    }

    const switchHandler = () => {
    props.navigation.navigate('LogIn')
    }

    const enterHandler = () => {
    props.navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerIcon} onPress={closeHandler}>
                    <AntDesign name="close" size={windowWidth * 0.1} color="black" />
                </TouchableOpacity>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Sign Up</Text>
                </View>
                <View style={styles.filler}></View>
            </View>

            <View style={styles.inputs}>
                <TextInput style={styles.infoInput} placeholder="Name"/>
                <TextInput style={styles.infoInput} placeholder="Email"/>
                <TextInput style={styles.infoInput} placeholder="Password"/>
            </View>

            <TouchableOpacity style={styles.switchTextContainer} onPress={switchHandler}>
            <Text style={styles.switchText}>Already have an account? Log in!</Text>
            </TouchableOpacity>

            <View style={styles.bottom}>
            <TouchableOpacity style={styles.enterButton} onPress={enterHandler}>
                <Text style={styles.enterButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.enterTextContainer}/>
            </View>
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
      // marginBottom: windowHeight * 0.023,
  },

  headerIcon: {
    flex: 2,
    alignItems: 'flex-start'
  },

  headerTextContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerText: {
    color: 'black',
    fontSize: windowWidth * 0.09,
    fontWeight: 'bold',    
  },

  filler: {
    flex: 2
  },

  inputs: {
    flexDirection: 'column',
    padding: windowWidth * 20/390,
    height: windowHeight * 0.27,
    gap: windowHeight * 0.026
  },
  
  infoInput: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderWidth: windowWidth * 0.003,
    fontSize: windowWidth * 0.045,
    paddingHorizontal: windowWidth * 0.04
  },

  switchTextContainer: {
    width: '100%',
    alignItems: 'center',
    height: windowHeight * 0.03,
    justifyContent: 'center'
  },

  switchText: {
    fontSize: windowWidth * 0.035,
    color: "#0069FB",
    textDecorationLine: 'underline'
  },

  bottom: {
    bottom: 0,
    left: 0,
    width: '100%',
    position: 'absolute',
    height: windowHeight * 0.15,
    flexDirection: 'column',
    padding: windowWidth * 20/390,
    alignItems: 'center',
    gap: windowHeight * 0.01,
  },

  enterButton: {
    flex: 2,
    width: '100%',
    backgroundColor: '#0069FB',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  enterButtonText: {
    color: 'white',
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold'
  },

  enterTextContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

})

export default SignUp;
