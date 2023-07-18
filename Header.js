import React, { Component } from 'react';
import ImageButton from './ImageButton';
import { View, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Not Pressed',
    };
  }

  eventHandler = () => {
    this.setState({
      text: 'Pressed',
    });
  };

  render() {
    return (
      <View style={styles.header}>
        <ImageButton
          style={[styles.arrowImage, { width: windowWidth * 0.08, height: windowWidth * 0.08 }]}
          onPress={this.eventHandler}
          imageSource={require('./assets/arrow.png')}
        />
        <ImageButton
          style={[styles.settingsImage, { width: windowWidth * 0.08, height: windowWidth * 0.08 }]}
          onPress={this.eventHandler}
          imageSource={require('./assets/settings.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: windowHeight * 0.10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.06,
    paddingTop: windowHeight * 0.06,
    resizeMode: 'center',
  },

  text: {
    flex: 9,
  },

  settingsImage: {
    alignItems: 'flex-end',
    flexShrink: 0,
    resizeMode: 'contain',
  },

  arrowImage: {
    alignItems: 'flex-end',
    flexShrink: 0,
    resizeMode: 'contain',
  },
});

export default Header;
