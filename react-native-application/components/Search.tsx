import React, { useState } from 'react'
import { View,TextInput, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type SearchProps = 
{
    onChange: any;
}

const iconsSize: number = windowWidth * 0.06

const Search = (props: SearchProps) => {

  const [filterState, setFilterState] = useState(false)
  const filterHandler = () => {
    setFilterState((filterState) => (filterState= !filterState))
  }

  return (
    <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
            <AntDesign style={styles.searchImage} name="search1" size={iconsSize} color="black" />
            <TextInput
                style={styles.input}
                placeholder=""
                onChangeText={(text) => props.onChange(text)}
            />
            <TouchableOpacity onPress={filterHandler}>
              {filterState ?
              <Ionicons name="options-outline" size={iconsSize * 1.3} color="blue" />:
              <Ionicons name="options-outline" size={iconsSize * 1.3} color="black" />}
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: windowHeight * 0.023,
        width: windowWidth,
      },

      searchBar: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: windowWidth * 0.13,
        paddingBottom: 0,
        fontSize: windowWidth * 0.05,
        height: windowHeight * 0.05,
        marginHorizontal: windowWidth * 20/390,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: windowWidth * 0.03
      },

      searchImage: {
        flex: 1,
        position: 'relative',
        marginLeft: windowWidth * 0.03,
        marginRight: windowWidth * 0.02,
      },

      input: {
        fontSize: windowWidth * 0.05,
        height: '100%',
        flex: 5,
        alignSelf: 'flex-end',
        paddingLeft: windowWidth * 0.005,
        paddingRight: windowWidth * 0.01,
      },
})
 
export default Search;
