import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { AntDesign  } from '@expo/vector-icons'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type VideoStuffProps = 
{
    title: string,
    transcript: string,
    video: any,
    questions: [],
    answers: [],
    correctAnswers: [],
    source: ImageSourcePropType,
    navigation: any
}

function VideoStuff(props: VideoStuffProps) {

  const [likeState, setLikeState] = useState(false)

  const videoHandler = () => {
    props.navigation.navigate('Video', {title: props.title, transcript: props.transcript, video: props.video, questions: props.questions, answers: props.answers, correctAnswers: props.correctAnswers}) 
  }

  const likeHandler = () => {
    setLikeState((likeState) => (likeState = !likeState))
  }

  const iconsSize: number = windowWidth * 0.08

  return (
    <TouchableOpacity onPress={videoHandler} style={styles.container}>

      <View style={styles.video}>
        <Image
          source={props.source}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        <Text style={styles.description}>filler tbd</Text>
      </View>

      <TouchableOpacity onPress={likeHandler} style={styles.heart}>
        {likeState ?
        <AntDesign name="heart" size={iconsSize} color="blue" />
        :
        <AntDesign name="hearto" size={iconsSize} color="black" />
        }
      </TouchableOpacity>


      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: windowHeight * 0.003,
    alignItems: 'center',
  },

  video: {
    width: windowWidth * 160/390,
    height: windowHeight * 98.5/844,
    flex: 160,
    aspectRatio: 16/9,
    
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 6,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: windowWidth * 0.001,
  },

  info: {
    flex: 160,
    height: '75%',
    marginLeft: windowWidth * 0.012
  },

  title: {
    fontSize: windowWidth * 0.047,
    fontWeight: 'normal',
    paddingRight: windowWidth * 0.035
  },

  description: {
    fontSize: windowWidth * 0.03,
    paddingLeft: windowWidth * 0.005,
    maxWidth: windowWidth * 0.4,
  },

  heart: {
    flex: 33,
    height: '75%'
  }
});

export default VideoStuff;
