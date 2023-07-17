import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Text } from 'react-native';

function VideoStuff(props) {
  return (
    <View style={styles.container}>

      <View style={styles.video}>
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

      <br></br>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
    gap: 8
  },

  video: {
    flex: 150,
    paddingVertical: 5
  },

  info: {
    flex: 160,
    padding: 5,
    paddingVertical: 10,
    paddingHorizontal: 3
  },

  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    paddingRight: 3,
    maxWidth: 150
  }
});

export default VideoStuff;
