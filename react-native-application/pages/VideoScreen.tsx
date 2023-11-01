import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Header, NextButton, ImageButton } from '../components';
import { ResizeMode, Video } from 'expo-av';

type VideoScreenProps =
{
    route: any;
    navigation: any;    
}

const VideoScreen = (props: VideoScreenProps) => {
  const { title, transcript, video } = props.route.params;

  const [showTranscript, setShowTranscript] = useState(false);
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});

  const toggleTranscript = () => {
    setShowTranscript((prevState) => !prevState);
  };

  const onPress = () => {
    props.navigation.navigate("Questions", {
      questions: props.route.params.questions,
      answers: props.route.params.answers,
      correctAnswers: props.route.params.correctAnswers,
    });
  };

  return (
    <View style={styles.screen}>
      <Header goBack={true} navigation={props.navigation} />

      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          style={styles.video}
          useNativeControls
          source={video}
          isLooping={false}
          onPlaybackStatusUpdate={setStatus}
          resizeMode={ResizeMode.CONTAIN}
        />
      </View>

      <View style={styles.info}>
        <View style={styles.text}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
        </View>
        <View style={styles.transcriptButtonContainer}>
          <ImageButton
            style={[styles.transcriptButton, { width: windowWidth * 0.13, height: windowWidth * 0.13 }]}
            onPress={toggleTranscript}
            imageSource={require('../assets/transcript.png')}
          />
        </View>
      </View>

      {showTranscript && (
        <View style={styles.transcriptContainer}>
          <ScrollView>
            <Text style={styles.transcriptText}>{transcript}</Text>
          </ScrollView>
        </View>
      )}

      <NextButton onPress={onPress} text='Next' />
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,
    flex: 1
  },

  videoContainer: {
    height: windowHeight * 0.29,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },

  video: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    height: windowHeight * 0.261
  },

  info: {
    flexDirection: 'row',
    paddingHorizontal: windowWidth * 20/390,
    paddingTop: windowWidth * 10/390,
    height: windowHeight * 0.08,
  },

  text: {
    flex: 6,
    justifyContent: 'flex-start',
    // backgroundColor: 'red'
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
    // backgroundColor: 'red'
    
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
    marginHorizontal: windowWidth * 0.03,

    borderColor: 'black',
    borderRadius: windowWidth * 0.02,
    borderWidth: 1,
  },

  transcriptText: {
    lineHeight: windowHeight * 0.035,
    fontSize: windowWidth * 0.034,
  },
});

export default VideoScreen;
