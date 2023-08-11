import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Footer } from '../components'

type HomeProps = 
{
    navigation: any
}

const Home = (props: HomeProps) => {
    return(
        <View style={styles.container}>
            <Header/>
            <Footer selected="home" navigation={props.navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
      },
})
export default Home
