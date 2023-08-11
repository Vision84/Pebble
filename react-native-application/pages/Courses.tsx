import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Header, Footer, CourseRow, Titles } from '../components'

type CoursesProps = 
{
    navigation: any
}

const Courses = (props: CoursesProps) => {
    return(
        <View style={styles.container}>
            <Header/>
            <Titles text="Courses" />
            <ScrollView style={styles.scroll}>
                <CourseRow current="Courses" text='Science' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
                <CourseRow current="Courses" text='Math' navigation={props.navigation} />
            </ScrollView>

            <Footer selected="courses" navigation={props.navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    scroll: {
        marginBottom: '23%',
    },

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
})
export default Courses
