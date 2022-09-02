import {View, Text, Image, TextInput, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../assests/icons/search.png')}
        style={styles.ImageIconStyle}
      />
      <TextInput
        placeholder="Carving ?"
        underlineColorAndroid="transparent"
        style={styles.textInputStyleClass}
      />
      <Pressable
        onPress={() => {
          // cnavigation.navigate('Category');
        }}>
        <Image
          source={require('../../assests/icons/filter.png')}
          style={styles.ImageIconStyle}
        />
      </Pressable>
    </View>
  );
};

export default SearchBar;
