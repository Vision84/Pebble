import React from 'react';
import ImageButton from './ImageButton';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = ({goBack, navigation}) => {

  arrowHandler = () => {
    navigation.navigate('Home')
  };

  settingsHandler = () => {

  };

  return (
    <View style={styles.header}>
      {goBack ? (
        <ImageButton
          style={[styles.arrowImage, { width: windowWidth * 0.08, height: windowWidth * 0.08 }]}
          onPress={arrowHandler}
          imageSource={require('./assets/arrow.png')}
        />
      ) : (
        <Image
          style={[styles.arrowImage, { width: windowWidth * 0.08, height: windowWidth * 0.08 }]}
          source={require('./assets/icon.png')}
        />
      )}
      <ImageButton
        style={[styles.settingsImage, { width: windowWidth * 0.08, height: windowWidth * 0.08 }]}
        onPress={settingsHandler}
        imageSource={require('./assets/settings.png')}
      />
    </View>
  );
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
