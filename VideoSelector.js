import React, { Component } from 'react'
import Header from './Header'
import { Image, View, TextInput, StyleSheet } from 'react-native'
import VideoStuff from './VideoStuff'
import ImageButton from './ImageButton'

let descPlaceholder = 'In this video we make a windmil to get more energy and be better at the game lmao omg asdfasdfasd'

class VideoSelector extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      search: '',
      filter: false,
    }
  }

  searchChange(text) {
      this.setState({
        search: text,
      })
  }

  filterHandler(){
    this.setState({
      filter: false
    })
  }

  render() {
    return (
      <View>
        <Header/>
        <View style={styles.container}>
          <Image style={styles.search_image} source={require('./assets/search-icon.png')}/>
          <Image onPress={() => this.filterHandler()} source={require('./assets/filter.png')} style={styles.filter_image}/>
          <TextInput style={styles.input} placeholder='Search' onChangeText={(text) => this.searchChange(text)}/>
          <VideoStuff source={require('./assets/placeholderthumbnail.jpg')} title='Episode 2'>{descPlaceholder}</VideoStuff>
          <VideoStuff source={require('./assets/placeholderthumbnail.jpg')} title='Episode 2'>{descPlaceholder}</VideoStuff>
          <VideoStuff source={require('./assets/placeholderthumbnail.jpg')} title='Episode 2'>{descPlaceholder}</VideoStuff>
          <VideoStuff source={require('./assets/placeholderthumbnail.jpg')} title='Episode 2'>{descPlaceholder}</VideoStuff>
          <VideoStuff source={require('./assets/placeholderthumbnail.jpg')} title='Episode 2'>{descPlaceholder}</VideoStuff>          
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

    search_image: {
      width: 18,
      height: 19,
      resizeMode: 'center',
      position: 'relative',
      left: 14,
      top: 49,
      zIndex: 2
    },

    filter_image: {
      width: 18,
      height: 19,
      resizeMode: 'center',
      position: 'relative',
      left: 300,
      top: 30,
      zIndex: 2
    },

    input: {
      backgroundColor: '#ffffff',
      borderWidth: 0.5,
      borderColor: 'black',
      borderRadius: 51,
      paddingLeft: 40,
      paddingBottom: 0,
      fontSize: 18,
      height: 40,
      marginBottom: 40,
    },
  });
export default VideoSelector