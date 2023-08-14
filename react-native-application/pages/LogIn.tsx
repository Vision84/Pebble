import React from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type LogInProps =
{
  navigation: any
}

const Login = (props: LogInProps) => {
  
  const closeHandler = () => {
    props.navigation.navigate('Home')
  }

  const switchHandler = () => {
    props.navigation.navigate('SignUp')
  }

  const enterHandler = () => {
    props.navigation.navigate('Home')
  }

  const passwordHandler = () => {

  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerIcon} onPress={closeHandler}>
            <AntDesign name="close" size={windowWidth * 0.1} color="black" />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Log In</Text>
          </View>
          <View style={styles.filler}></View>
        </View>

        <View style={styles.inputs}>
          <TextInput style={styles.infoInput} placeholder="Email">

          </TextInput>
          <TextInput style={styles.infoInput} placeholder="Password">

          </TextInput>
        </View>

        <TouchableOpacity style={styles.switchTextContainer} onPress={switchHandler}>
          <Text style={styles.switchText}>Don’t have an account? Sign up!</Text>
        </TouchableOpacity>

        <View style={styles.bottom}>
          <TouchableOpacity style={styles.enterButton} onPress={enterHandler}>
            <Text style={styles.enterButtonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={passwordHandler} style={styles.enterTextContainer}>
            <Text style={styles.enterText}>Forgot your password?</Text>
          </TouchableOpacity>
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
    height: windowHeight * 0.27 * 2/3,
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

  enterText: {
    fontSize: windowWidth * 0.034,
    color: "#0069FB", 
  }
})

export default Login;
