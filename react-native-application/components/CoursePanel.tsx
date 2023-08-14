import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons' 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type CoursePanelProps = {
    text: string,
    navigation: any,
    current: string
}


const CoursePanel = (props: CoursePanelProps) => {

    const eventHandler = () => {
        props.navigation.navigate("Course Page", {title: props.text, current: props.current})
    }

    return (
        <TouchableOpacity onPress={eventHandler} style={styles.container}>
            <View style={styles.image}>
                <AntDesign name="barschart" size={windowWidth * 0.20} color="black" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.text}</Text>
            </View>        
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: windowWidth * 10/390,
        height: windowHeight * 0.19,
        width: windowWidth * 140/390,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderColor: 'rgba(0, 0, 0, 0.14)',
        borderWidth: windowWidth * 0.003,
        borderRadius: 50,
        
    },
    
    image: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        resizeMode: 'center'
    },

    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


    text: {
        fontSize: windowWidth * 0.045,
    },

})

export default CoursePanel
