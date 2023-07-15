import React, {Component} from 'react'
import ImageButton from './ImageButton'
import { View, Text, Button, StyleSheet} from 'react-native'

class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        text: "Not Pressed"
      }
    }

    eventHandler = () => {
        this.setState({
            text: "Pressed"
        })
    }
    
    render(){
        return (
            <View style={styles.header}>
                <ImageButton style={styles.arrowImage} onPress={this.eventHandler} imageSource={require('./assets/arrow.png')}/>
                <ImageButton style={styles.settingsImage} onPress={this.eventHandler} imageSource={require('./assets/settings.png')}/>
                
            </View>
        ) 
    }  
    
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingRight: 20,
        paddingLeft: 18,
        paddingTop: 50
    },

    text: {
        flex: 9,
    }, 

    settingsImage: {
        flex: 1,
        alignItems: 'flex-end',
        width: 28,
        height: 30,
        flexShrink: 0,
    },

    arrowImage: {
        flex: 1,
        alignItems: 'flex-end',
        width: 31,
        height: 30,
        flexShrink: 0,
    },
})

export default Header
