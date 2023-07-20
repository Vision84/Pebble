import React, { Component } from 'react';
import Header from './Header';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, View, TextInput, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import VideoStuff from './VideoStuff';
import videoData from './latest.json'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class VideoSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  searchChange(text) {
    this.setState({
      search: text,
    });
  }

  render() {
    const { search } = this.state;
    const frameworks = videoData.frameworks;

    // Filter the frameworks based on the search term
    const filteredFrameworks = frameworks.filter((framework) =>
      (framework.title.toLowerCase().includes(search.toLowerCase()))
    );
    
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#E3B9DC', '#B3C1E3', '#7BCAEA', '#38D5F3', '#01DEFB']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Header goBack={false} />
          <View style={styles.searchContainer}>
            <Image style={styles.searchImage} source={require('./assets/search-icon.png')} />
            <TextInput
              style={styles.input}
              placeholder="Search"
              onChangeText={(text) => this.searchChange(text)}
            />
          </View>
          <ScrollView>
            <View style={styles.videoList}>
            {filteredFrameworks.length === 0 ? (
              <View style={styles.noResults}>
                <Text style={styles.noResultsText}>No Results Found</Text>
              </View>
            ) : (
              filteredFrameworks.map((framework) => (
                <VideoStuff
                  key={framework.id}
                  navigation={this.props.navigation}
                  source={{ uri: framework.value.thumb }} // Assuming 'thumb' holds the thumbnail URL
                  title={framework.title}
                  transcript={framework.value.summary} // Assuming 'summary' holds the transcript
                  questions={framework.value.questions.map((q) => q.question)} // Extracting questions from the 'questions' array
                  answers={framework.value.questions.map((q) => q.answers)} // Extracting answers from the 'questions' array
                  correctAnswers={framework.value.questions.map((q) => q.correct)} // Extracting correct answers from the 'questions' array
                  video={{uri: framework.url}}
                />
              ))
            )}             
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    ...StyleSheet.absoluteFillObject, // This makes the LinearGradient fill the entire screen
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: windowWidth * 0.05,
    width: windowWidth,
    marginTop: windowHeight * 0.05
  },

  searchImage: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    marginLeft: windowWidth * 0.08,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 2,
  },

  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: windowWidth * 0.13,
    paddingLeft: windowWidth * 0.1,
    paddingBottom: 0,
    fontSize: windowWidth * 0.05,
    height: windowHeight * 0.05,
  },

  videoList: {
    // Remove padding to fill the whole screen
    padding: windowWidth * 0.05,
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

export default VideoSelector;
