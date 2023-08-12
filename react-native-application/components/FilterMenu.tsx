import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface FilterMenuItem {
  id: number;
  label: string;
}

interface FilterMenuProps {
  items: FilterMenuItem[];
}

const FilterMenu: React.FC<FilterMenuProps> = ({ items }) => {
  const [selectedState, setSelectedState] = useState('All');

  const selectedItem = (label: string) => {
    setSelectedState(label);
  };

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollContainer}
      showsHorizontalScrollIndicator={true}
    >
      {items.map((item) => (
        <TouchableOpacity
          onPress={() => selectedItem(item.label)} // Fixed syntax here
          key={item.id}
          style={[
            styles.menuItem,
            selectedState === item.label && styles.selected,
          ]}
        >
          <Text style={[styles.text, selectedState === item.label && styles.selectedText]}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    paddingHorizontal: windowWidth * 0.05,
    paddingVertical: windowHeight * 0.01,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 36,
    marginRight: windowWidth * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selected: {
    backgroundColor: '#0069FB',
    borderWidth: 1,
  },

  text: {
    fontSize: windowWidth * 0.04
  },

  selectedText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: windowWidth * 0.045
  }
});

export default FilterMenu;
