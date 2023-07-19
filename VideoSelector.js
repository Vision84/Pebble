import React, { Component } from 'react';
import Header from './Header';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, View, TextInput, StyleSheet, Dimensions, ScrollView } from 'react-native';
import VideoStuff from './VideoStuff';

let descPlaceholder =
  'In this video, we make a windmill to get more energy and be better at the game lmao omg asdfasdfasd';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class VideoSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      filter: false,
    };
  }

  searchChange(text) {
    this.setState({
      search: text,
    });
  }

  filterHandler() {
    this.setState({
      filter: false,
    });
  }

  render() {
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
            <Image
              onPress={() => this.filterHandler()}
              source={require('./assets/filter.png')}
              style={styles.filterImage}
            />
          </View>
          <ScrollView>
            <View style={styles.videoList}>
              <VideoStuff
                source={require('./assets/placeholderthumbnail.jpg')}
                title="Episode 2"
                generationCode={null}
                subject="Entertainment"
                navigation={this.props.navigation}
              >
                {descPlaceholder}
              </VideoStuff>

              <VideoStuff
                source={require('./assets/placeholderthumbnail.jpg')}
                title="Episode 2"
                generationCode={null}
                subject="Entertainment"
                navigation={this.props.navigation}
              >
                {descPlaceholder}
              </VideoStuff>

              <VideoStuff
                source={require('./assets/placeholderthumbnail.jpg')}
                title="Episode 2"
                generationCode={null}
                subject="Entertainment"
                navigation={this.props.navigation}
              >
                {descPlaceholder}
              </VideoStuff>

              <VideoStuff
                source={require('./assets/placeholderthumbnail.jpg')}
                title="Episode 2"
                generationCode={null}
                subject="Entertainment"
                navigation={this.props.navigation}
              >
                {descPlaceholder}
              </VideoStuff>

              <VideoStuff
                source={require('./assets/placeholderthumbnail.jpg')}
                title="Episode 2"
                generationCode={null}
                subject="Entertainment"
                navigation={this.props.navigation}
              >
                {descPlaceholder}
              </VideoStuff>

              <VideoStuff
                source={require('./assets/placeholderthumbnail.jpg')}
                title="Episode 2"
                generationCode={null}
                subject="Entertainment"
                navigation={this.props.navigation}
              >
                {descPlaceholder}
              </VideoStuff>

              <VideoStuff
                source={require('./assets/placeholderthumbnail.jpg')}
                title="Episode 2"
                generationCode={null}
                subject="Entertainment"
                navigation={this.props.navigation}
              >
                {descPlaceholder}
              </VideoStuff>
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
  },

  searchImage: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    marginLeft: windowWidth * 0.08,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 2,
  },

  filterImage: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    resizeMode: 'contain',
    marginLeft: 'auto',
    position: 'absolute',
    marginLeft: windowWidth * 0.86,
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
});

export default VideoSelector;
