import React from 'react'
import { View,TextInput, StyleSheet, Dimensions, Text } from 'react-native';
import { AntDesign  } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type SearchProps = 
{
    onChange: any;
}

const iconsSize: number = windowWidth * 0.06

const Search = (props: SearchProps) => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
                <AntDesign style={styles.searchImage} name="search1" size={iconsSize} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder=""
                    onChangeText={(text) => props.onChange(text)}
                >

                </TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: windowWidth * 0.05,
        width: windowWidth,
      },

      searchBar: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: windowWidth * 0.13,
        paddingBottom: 0,
        fontSize: windowWidth * 0.05,
        height: windowHeight * 0.05,
        marginHorizontal: windowWidth * 20/390,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: windowWidth * 0.05
      },

      searchImage: {
        position: 'relative',
        marginLeft: windowWidth * 0.03,
        marginRight: windowWidth * 0.02,
      },

      input: {
        fontSize: windowWidth * 0.05,
        height: '100%',
        flex: 1,
        alignSelf: 'flex-end',
        padding: windowWidth * 0.005
      },
})
 
export default Search;
