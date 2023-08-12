import React, { useState } from 'react'
import { View,TextInput, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'
import FilterMenu from './FilterMenu';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type SearchProps = 
{
    onChange: any,
}

const iconsSize: number = windowWidth * 0.06


interface FilterMenuItem {
  id: number;
  label: string;
}

const Search = (props: SearchProps) => {

  const [filterState, setFilterState] = useState(false)
  const filterHandler = () => {
    setFilterState((filterState) => (filterState= !filterState))
  }

  const filterItems: FilterMenuItem[] = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Math' },
    { id: 3, label: 'Science' },
    { id: 4, label: 'Social Studies' },
    { id: 5, label: 'Language Arts' },
    { id: 6, label: 'Computer Science' },
    { id: 7, label: 'Art' },

    // Add more items as needed
  ];

  return (
    <View style={[styles.searchContainer, { height: filterState ? windowHeight * 0.12 : windowHeight * 0.05 },]}>
        <View style={styles.searchBar}>
            <AntDesign style={styles.searchImage} name="search1" size={iconsSize} color="black" />
            <TextInput
                style={styles.input}
                placeholder=""
                onChangeText={(text) => props.onChange(text)}
            />
            <TouchableOpacity onPress={filterHandler}>
              {filterState ? <Ionicons name="options-outline" size={iconsSize * 1.3} color="blue" /> :
              <Ionicons name="options-outline" size={iconsSize * 1.3} color="black" />}
            </TouchableOpacity>
        </View>

        {filterState && 
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 16 }}>
              <FilterMenu items={filterItems} />
            </View>
          </SafeAreaView>}
    </View>
  )
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: windowHeight * 0.023,
        width: windowWidth,
        gap: windowHeight * 0.02
      },

      searchBar: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: windowWidth * 0.13,
        paddingBottom: 0,
        fontSize: windowWidth * 0.05,
        minHeighteight: windowHeight * 0.05,
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
