import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons' 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type CourseRowProps = {
    text: string,
    navigation: any,
    current: string
}


const CourseRow = (props: CourseRowProps) => {

    const eventHandler = () => {
        props.navigation.navigate("Course Page", {title: props.text, current: props.current})
    }

    return (
        <TouchableOpacity onPress={eventHandler} style={styles.container}>
            <View style={styles.image}>
                <AntDesign name="barschart" size={windowWidth * 0.075} color="black" />
            </View>
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.icon}>
                <FontAwesome name="angle-right" size={windowWidth * 0.08} color="black" />
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: windowWidth * 20/390,
        height: windowHeight * 0.065,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'rgba(0, 0, 0, 0.14)',
        borderBottomWidth: windowWidth * 0.003,
    },
    
    image: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },

    text: {
        flex: 6,
        fontSize: windowWidth * 0.045
    },

    icon: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
})

export default CourseRow
