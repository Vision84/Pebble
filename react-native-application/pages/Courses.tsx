import React from 'react'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { Header, Footer, CourseRow, Titles, CoursePanel } from '../components'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type CoursesProps = 
{
    navigation: any
}

const Courses = (props: CoursesProps) => {
    return(
        <View style={styles.container}>
            <Header goBack={false} navigation={props.navigation}/>
            <Titles text="Courses" />
            <ScrollView style={styles.scroll}>
                <View style={styles.panelRow}>
                    <CoursePanel current="Courses" text="Science" navigation={props.navigation} />
                    <CoursePanel current="Courses" text="Science" navigation={props.navigation} />
                </View>
                <View style={styles.panelRow}>
                    <CoursePanel current="Courses" text="Science" navigation={props.navigation} />
                    <CoursePanel current="Courses" text="Science" navigation={props.navigation} />
                </View>
                <View style={styles.panelRow}>
                    <CoursePanel current="Courses" text="Science" navigation={props.navigation} />
                    <CoursePanel current="Courses" text="Science" navigation={props.navigation} />
                </View>
                <View style={styles.panelRow}>
                    <CoursePanel current="Courses" text="Science" navigation={props.navigation} />
                    <CoursePanel current="Courses" text="Science" navigation={props.navigation} />
                </View>
                
                {/* <CourseRow current="Courses" text='Science' navigation={props.navigation} />
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
                <CourseRow current="Courses" text='Math' navigation={props.navigation} /> */}
            </ScrollView>

            <Footer selected="courses" navigation={props.navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    scroll: {
        marginBottom: '23%',
    },

    panelRow: {
        paddingHorizontal: windowWidth * 50/390,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: windowHeight * 0.015
    },
})
export default Courses
