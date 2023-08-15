import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons' 

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
        <View style={styles.container}>
            <TouchableOpacity onPress={eventHandler}>
                <View style={styles.image}>
                    <AntDesign name="barschart" size={windowWidth * 0.20} color="black" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.text}</Text>
                </View>        
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
       container: {
        padding: windowWidth * 10/390,
        height: windowWidth * 165/390,
        width: windowWidth * 165/390,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderColor: 'rgba(0, 0, 0, 0.14)',
        borderWidth: windowWidth * 0.003,
        borderRadius: 40,
        elevation: 6,
        shadowColor: 'black',
        backgroundColor: 'white'
    },
    
    image: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        resizeMode: 'center',
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

// import React from "react"
// import {View, Text, StyleSheet} from 'react-native'

// const boxShadow = () => {
//     return(
//         <View style={[styles.card, styles.elevation]}>
//             <View>
//             <Text style={styles.heading}>
//                 React Native Box Shadow (Elevation)
//             </Text>
//             </View>
//             <Text>
//             Using the elevation style prop to apply box-shadow for Android devices
//             </Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     heading: {
//       fontSize: 18,
//       fontWeight: '600',
//       marginBottom: 13,
//     },
//     card: {
//       backgroundColor: 'white',
//       borderRadius: 8,
//       paddingVertical: 45,
//       paddingHorizontal: 25,
//       width: '100%',
//       margin: 10,
//       elevation: 20,
//       shadowColor: '#52006A',
//     },
//     elevation: {
      
//     },
//   });

// export default boxShadow;