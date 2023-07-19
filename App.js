import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VideoSelector from './VideoSelector';
import VideoScreen from './VideoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={VideoSelector}/>
        <Stack.Screen name="Video" component={VideoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


