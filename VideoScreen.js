import React, { Component } from 'react';
import ImageButton from './ImageButton';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Header from './Header';
import NextButton from './NextButton';

class VideoScreen extends Component {
  constructor(props) {
    super(props);

    this.toggleTranscript = this.toggleTranscript.bind(this);

    this.state = {
      showTranscript: false,
    };
  }

  getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  toggleTranscript = () => {
    this.setState((prevState) => ({
      showTranscript: !prevState.showTranscript,
    }));
  };

  render() {

    // Access the title and subject parameters from the route object
    const { title, subject } = this.props.route.params;

    return (
      <View style={styles.screen}>
        <Header goBack={true} navigation={this.props.navigation}/>

        <View style={styles.videoContainer}>
          {/* <Image style={styles.video} source={require('./assets/placeholderthumbnail.jpg')} /> */}
        </View>

        <View style={styles.info}>
          <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subject}>{subject}</Text>
          </View>
          <View style={styles.transcriptButtonContainer}>
            <ImageButton
              style={[styles.transcriptButton, { width: windowWidth * 0.13, height: windowWidth * 0.13 }]}
              onPress={this.toggleTranscript}
              imageSource={require('./assets/transcript.png')}
            />
          </View>
        </View>

        {this.state.showTranscript && (
          <View style={styles.transcriptContainer}>
            <ScrollView>
              <Text style={styles.transcriptText}>
                {this.props.children}
              </Text>
            </ScrollView>
          </View>
        )}

        <NextButton />
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,
  },

  videoContainer: {
    height: windowHeight * 0.3,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  video: {
    height: windowHeight * 0.28,
    width: windowWidth * 0.8,
    resizeMode: 'contain',
  },

  info: {
    flexDirection: 'row',
    paddingVertical: windowHeight * 0.015,
    paddingHorizontal: windowWidth * 0.08,
    marginTop: windowHeight * 0.015,
    height: windowHeight * 0.1,
  },

  text: {
    flex: 1,
    justifyContent: 'center'
  },

  title: {
    fontSize: windowWidth * 0.058,
    fontWeight: 'bold',
    
  },

  subject: {
    fontSize: windowWidth * 0.043,
  },

  transcriptButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    
  },

  transcriptButton: {
    flex: 1,
    alignItems: 'flex-end',
    flexShrink: 0,
    resizeMode: 'contain',
  },

  transcriptContainer: {
    backgroundColor: '#F2F2F2',
    maxHeight: windowHeight * 0.4,
    paddingVertical: windowHeight * 0.015,
    paddingHorizontal: windowWidth * 0.05,
    margin: windowWidth * 0.03,

    borderColor: 'black',
    borderRadius: windowWidth * 0.02,
    borderWidth: 1,
  },

  transcriptText: {
    lineHeight: windowHeight * 0.035,
    fontSize: windowWidth * 0.03,
  },

  nextButton: {
    width: windowWidth * 0.3,
  },
});

export default VideoScreen;
