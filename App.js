import { StyleSheet, Text, View } from 'react-native';
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
      
      <VideoScreen/> 
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
});

