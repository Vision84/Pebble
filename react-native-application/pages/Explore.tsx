import React, { Component } from 'react';
import { Header, VideoStuff, Footer, Search } from '../components' 
import { View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import data from '../latest.json';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const API_URL = 'http://vision84.pythonanywhere.com/api/v1/resources/content/latest';

type ExploreProps ={
  navigation?: any
};
type ExploreState = {
  search: string;
  videoData: any;
};

class Explore extends Component<ExploreProps, ExploreState> {
    constructor(props: ExploreProps) {
      super(props);
  
      this.state = {
        search: '',
        videoData: data.frameworks,
      };
    }
  
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
  
    searchChange(text: string) {
      this.setState({
        search: text,
      });
    }
  
    render() {
      const { search, videoData } = this.state;
  
      // Filter the frameworks based on the search term
      const filteredFrameworks = videoData.filter(  
        (framework: { title: string; }) => framework.title.toLowerCase().includes(search.toLowerCase())
      );
      
      return (
        <View style={styles.container}>
          <Header navigation={this.props.navigation} />
          <Search onChange={(text: string) => this.searchChange(text)}/>

          <ScrollView style={styles.scroll}>
            <View style={styles.videoList}>
            {filteredFrameworks.length === 0 ? (
              <View style={styles.noResults}>
                <Text style={styles.noResultsText}>No Results Found</Text>
              </View>
            ) : (
              filteredFrameworks.map((framework: any) => (
                <VideoStuff
                  key={framework.id}
                  navigation={this.props.navigation}
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

          <Footer selected="explore" navigation={this.props.navigation}/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
  
    gradient: {
      ...StyleSheet.absoluteFillObject, // This makes the LinearGradient fill the entire screen
    },
    
    scroll: {
      marginBottom: '22%'
    },
  
    videoList: {
      // Remove padding to fill the whole screen
      paddingHorizontal: windowWidth * 20/390,
      justifyContent: 'center',
    },
  
    noResults: {
      width: windowWidth,
      height: windowHeight * 0.05,
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      marginLeft: windowWidth * -0.05
    },
  
    noResultsText: {
      fontSize: windowWidth * 0.05,
    }
  });
  
  export default Explore;
  
