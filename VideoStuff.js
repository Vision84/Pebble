import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function VideoStuff(props) {
  // Calculate dynamic dimensions based on the screen size
  const videoWidth = windowWidth * 0.4;
  const videoHeight = windowHeight * 0.13;

  return (
    <View style={styles.container}>

      <View style={[styles.video, { width: videoWidth, height: videoHeight }]}>
        <Image
          source={props.source}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">{props.children}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
    alignItems: 'center',
  },

  video: {
    paddingVertical: 5,
    borderRadius: 8,
  },

  info: {
    flex: 1,
    padding: 5,
    paddingHorizontal: 3,
    marginLeft: 8,
  },

  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },

  title: {
    fontSize: windowWidth * 0.065,
    fontWeight: 'bold',
  },

  description: {
    fontSize: windowWidth * 0.034,
    paddingRight: 3,
    maxWidth: windowWidth * 0.4,
  },
});

export default VideoStuff;
