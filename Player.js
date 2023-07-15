import React, { Component } from 'react'
import Header from './Header'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import VideoStuff from './VideoStuff'

class Player extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        search: ''
      }
    }

    searchChange(text) {
        this.setState({
            search: text
        })
    }

    render() {
        return (
            <View>
                <Header/>
                <View style={styles.container}>
                    <TextInput style={styles.input} placeholder='Search . . . ' onChangeText={(text) => this.searchChange(text)}></TextInput>
                    <VideoStuff source={require('./assets/placeholderthumbnail.jpg')} title='Episode 2'>In this video we make a windmil to get more energy and be better at the game lmao omg asdfasdfasd</VideoStuff>
                    <VideoStuff source={require('./assets/placeholderthumbnail.jpg')} title='Episode 2'>In this video we make a windmil to get more energy and be better at the game lmao omg asdfasdfasd</VideoStuff>
                    <VideoStuff source={require('./assets/placeholderthumbnail.jpg')} title='Episode 2'>In this video we make a windmil to get more energy and be better at the game lmao omg asdfasdfasd</VideoStuff>
                    <VideoStuff source={require('./assets/placeholderthumbnail.jpg')} title='Episode 2'>In this video we make a windmil to get more energy and be better at the game lmao omg asdfasdfasd</VideoStuff>
                    <VideoStuff source={require('./assets/placeholderthumbnail.jpg')} title='Episode 2'>In this video we make a windmil to get more energy and be better at the game lmao omg asdfasdfasd</VideoStuff>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      justifyContent: 'center'
    },

    input: {
      backgroundColor: '#ffffff',
      borderWidth: 0.5,
      borderColor: 'black',
      borderRadius: 51,
      paddingHorizontal: 12,
      paddingLeft: 50,
      fontSize: 18,
      height: 40,
      marginBottom: 40,
    },
  });
export default Player