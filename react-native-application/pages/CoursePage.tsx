import React from 'react';
import { VideoStuff, Footer, Titles } from '../components' 
import { View, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import data from '../latest.json';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const API_URL = 'http://vision84.pythonanywhere.com/api/v1/resources/content/latest';

type CoursePageProps ={
  navigation: any,
  route: any,
  
};

const CoursePage = (props: CoursePageProps) => {
  
    // componentDidMount() {
    //   // Fetch data from the API and update the state with the fetched data
    //   fetch(API_URL)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       this.setState({ videoData: data.frameworks });
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data:', error);
    //     });
    // }

    const eventHandler = () => {
        props.navigation.navigate(props.route.params.current)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerIcon} onPress={eventHandler}>
                    <FontAwesome name="angle-left" size={windowWidth * 0.12} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>{props.route.params.title}</Text>
            </View>

            <ScrollView style={styles.scroll}>
            <Titles text="Section 1"/>

            <View style={styles.videoList}>
            {(
                data.frameworks.map((framework: any) => (
                <VideoStuff
                    key={framework.id}
                    navigation={props.navigation}
                    source={{ uri: framework.value.thumb }} // Assuming 'thumb' holds the thumbnail URL
                    title={framework.title}
                    transcript={framework.value.summary} // Assuming 'summary' holds the transcript
                    questions={framework.value.questions.map((q: any) => q.question)} // Extracting questions from the 'questions' array
                    answers={framework.value.questions.map((q: any) => q.answers)} // Extracting answers from the 'questions' array
                    correctAnswers={framework.value.questions.map((q: any) => q.correct)} // Extracting correct answers from the 'questions' array
                    video={{uri: framework.url}}
                />
                ))
            )}             
            </View>
            </ScrollView>

            {/* <Footer selected={undefined} navigation={props.navigation}/> */}
        </View>
    );
}
  
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'white'
},

header: {
    height: windowHeight * 0.15,
    backgroundColor: '#0069fb',
    flexDirection: 'row',
    paddingHorizontal: windowWidth * 20/390,
    alignItems: 'center',
    marginBottom: windowHeight * 0.023,
},

headerIcon: {
    flex: 1
},

headerText: {
    flex: 9,
    color: 'white',
    fontSize: windowWidth * 0.09,
    fontWeight: 'bold'
},

scroll: {
    marginBottom: '22%',
},

videoList: {
    // Remove padding to fill the whole screen
    paddingHorizontal: windowWidth * 20/390,
    justifyContent: 'center',
},
});

export default CoursePage;
  
