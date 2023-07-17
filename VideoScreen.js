import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, ScrollView, Button, Dimensions } from 'react-native'
import Header from './Header'
import ImageButton from './ImageButton'
import NextButton from './NextButton'


class VideoScreen extends Component {

    constructor(props) {
        super(props)

        this.toggleTranscript = this.toggleTranscript.bind(this)

        this.state = {
            showTranscript: false    
        }
    }

  	getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}

    toggleTranscript = () => {
        this.setState((prevState) => ({
            showTranscript: !prevState.showTranscript
        }))
    }

    render() {
        return (
        <View>
            <Header/>

            <View style={styles.videoContainer}>
                {/* <Image style={styles.video} source={require('./assets/placeholderthumbnail.jpg')}/> */}                
            </View>

            <View style={styles.info}>
                <View style={styles.text}>
                    <Text style={styles.title}>Title</Text>
                    <Text style={styles.description}>Subject</Text>
                </View>
                <View style={styles.transcriptButtonContainer}>
                    <ImageButton style={styles.transcriptButton} onPress={this.toggleTranscript} imageSource={require('./assets/transcript.png')} />
                </View>
            </View>

            {this.state.showTranscript && (
            <View style={styles.transcriptContainer}>
                <ScrollView>
                    <Text style={styles.transcriptText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate, augue ac porttitor commodo, nisi mauris cursus nibh, 
                        in accumsan ante sapien vitae diam. Ut fringilla, massa in accumsan fringilla, sem leo condimentum libero, sit amet pellentesque 
                        leo tellus et urna. Pellentesque vehicula diam dui, vel aliquam dolor vestibulum in. Vestibulum gravida, augue et cursus porttitor,
                        nulla libero lacinia purus, et aliquam nisi lacus ac dui. Nullam nunc nibh, lacinia gravida enim vitae, bibendum lacinia nunc. Duis 
                        vitae mollis elit. Sed eget vehicula nibh, ut fermentum sapien. Ut ut mi non magna pharetra lacinia a vitae ligula. Donec finibus 
                        purus vel sem congue fringilla. Pellentesque orci ex, tincidunt eget euismod eget, semper ac lorem.
                        Quisque egestas eros sit amet mollis mollis. Proin malesuada vestibulum nulla, a cursus neque. Quisque fringilla viverra ullamcorper.
                        Etiam sit amet ante ullamcorper, condimentum quam ut, vestibulum eros. Nunc ipsum velit, volutpat id dui eget, dignissim pulvinar 
                        tortor. Integer molestie, sem eget ullamcorper commodo, lorem risus auctor nunc, et fringilla justo nunc nec risus. Proin ut pretium 
                        ipsum, elementum porta nibh. Pellentesque ac nulla at ipsum aliquet tincidunt ornare fermentum nulla. Donec nec lacinia risus. 
                        Vestibulum justo metus, iaculis sed ante in, maximus tincidunt ante. Sed eu arcu ac turpis maximus rhoncus.
                    </Text>
                </ScrollView>
            </View>)}

            <NextButton/>            
        </View>
        )
    }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    screen: {
        width: width,
        height: height,
    },  

    videoContainer: {
        height: 230,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    
      video: {
        
        height: 220,
        width: 384,
        resizeMode: 'contain'
        
      },  
    
      info: {
        // Your other styles for the info container here
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 20,  
        marginTop: 5,
      },
    
      text: {
        flex: 1,
      },

      title: {
        fontSize: 28,
        fontWeight: 'bold'

      },

      description: {
        fontSize: 17
      },

      transcriptButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },

      transcriptButton: {
        width: 50,
        height: 50,
        // Your other styles for the button here
      },

      transcriptContainer: {
        backgroundColor: '#F2F2F2',
        maxHeight: 370,
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 10,

        borderColor: 'black',
        borderRadius: 8,
        borderWidth: 1,

      },

      transcriptText: {
        lineHeight: 35
      },

      nextButton: {
        width: 80,


      },
})

export default VideoScreen