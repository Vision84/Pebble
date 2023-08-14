import React from 'react';
import { Header, VideoStuff, Footer, Titles, CourseRow } from '../components' 
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import data from '../latest.json';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const API_URL = 'http://vision84.pythonanywhere.com/api/v1/resources/content/latest';

type HomeProps ={
  navigation?: any
};


const Home = (props: HomeProps) => {
  
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
    
    const editHandler = () => {

    }

    return (
    <View style={styles.container}>
        <Header goBack={false} navigation={props.navigation} />

        <Titles text="Continue Watching"/>
        <View style={styles.videoContainer}>
            <View style={styles.videoList}>
                {
                    data.frameworks.slice(0, 1).map((framework: any) => (
                        <VideoStuff
                        key={framework.id}
                        navigation={props.navigation}
                        source={{ uri: framework.value.thumb }}
                        title={framework.title}
                        transcript={framework.value.summary}
                        questions={framework.value.questions.map((q: any) => q.question)}
                        answers={framework.value.questions.map((q: any) => q.answers)}
                        correctAnswers={framework.value.questions.map((q: any) => q.correct)}
                        video={{ uri: framework.url }}
                        />
                    ))
                }
            </View>
        </View>
        
        <View style={styles.courseText}>
            <Titles text="My Courses" />
            <TouchableOpacity style={styles.editContainer}>
                <Text onPress={editHandler} style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            
        </View>
         
        <ScrollView style={styles.scroll}>
            <CourseRow current="Home" text='Math' navigation={props.navigation} />
            <CourseRow current="Home" text='Math' navigation={props.navigation} />
            <CourseRow current="Home" text='Math' navigation={props.navigation} />
            <CourseRow current="Home" text='Math' navigation={props.navigation} />
            <CourseRow current="Home" text='Math' navigation={props.navigation} /> 
        </ScrollView>

        <Footer selected="home" navigation={props.navigation}/>
    </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    scroll: {
        marginBottom: '22%',
    },
    
    videoContainer: {
        marginBottom: windowHeight * 0.023,
        // maxHeight: '32%',
        overflow: 'hidden'
    },

    videoList: {
        // Remove padding to fill the whole screen
        paddingHorizontal: windowWidth * 20/390,
        justifyContent: 'center',
    },

    courseText: {
        width: '100%',
        flexDirection: 'row',
        paddingRight: windowWidth * 20/390
    },

    editContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },

    editText: {
        color: 'rgba(38, 38, 38, 0.4)',
        fontSize: windowWidth * 0.040,
        textDecorationLine: "underline"
    }

});
  
  export default Home;
  
