import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Footer } from '../components'

type CoursesProps = 
{
    navigation: any
}

const Courses = (props: CoursesProps) => {
    return(
        <View style={styles.container}>
            <Header/>
            <Footer selected="courses" navigation={props.navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
      },
})
export default Courses
