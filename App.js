import { StyleSheet, Text, View, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import VideoSelector from './VideoSelector';
import VideoScreen from './VideoScreen';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <LinearGradient
        colors={['#E3B9DC', '#B3C1E3', '#7BCAEA', '#38D5F3', '#01DEFB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <VideoSelector/>
      </LinearGradient> */}
      
      {/* <VideoScreen/> */} 

      <Image style={styles.image} source={require('./assets/pebbleshort.jpg')}/>
      <Text color = '#808080' style={styles.text}>&copy; 2023 Pebble </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  gradient: {
    flex: 1,
  },

  splashContainer: {
    flex: 1,
    backgroundColor: '#fdfdfd', //dont change this
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    justifyContent: 'center',
    height:300,
    width:300,
  },

  text: {
    width: '100%',
    height: 75,
    justifyContent: 'center',
    textAlign: 'right',
    margin: 50,
    padding:25,
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  }
});

