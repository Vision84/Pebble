import React from 'react'
import { Text, StyleSheet, Dimensions, View } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type TitlesProps = {
  text: string
}

const Titles = (props: TitlesProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end', // Align items to the bottom of the container
    width: '100%',
    height: windowHeight * 0.03,
    paddingHorizontal: windowWidth * 20 / 390,
    // backgroundColor: 'red',
  },

  text: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
  }
})

export default Titles
