import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Explore, VideoScreen, Questions, Liked, Courses, Home, CoursePage, SignUp, LogIn, Settings} from './pages';
// import { Footer, Header } from './components'

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Course Page" component={CoursePage} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Liked" component={Liked} />

        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Settings" component={Settings} />

        <Stack.Screen name="Video" component={VideoScreen}/>
        <Stack.Screen name="Questions" component={Questions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
