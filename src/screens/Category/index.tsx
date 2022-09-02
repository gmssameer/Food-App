import {View, Text, Image, TextInput, Pressable, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import category from '../../data/category';
import GridItem from '../../components/grid';
import SearchBar from '../../components/searchBar';

const CategoryScreen = () => {
  return (
    <View style={styles.page}>
      <SearchBar />
      <View
        style={{
          paddingVertical: 10,
          marginHorizontal: 40,
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />
      <Text style={styles.title2}>Top Categories</Text>
      <View style={{alignItems: 'center'}}>
        <FlatList
          numColumns={2}
          data={category}
          renderItem={({item}) => <GridItem item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default CategoryScreen;
