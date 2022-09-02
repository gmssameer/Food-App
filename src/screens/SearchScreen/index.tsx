import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TextInput} from 'react-native';
import {CustomPicker} from 'react-native-custom-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../../components/searchBar';
import StoreItem from '../../components/storeItems';
import stores from '../../data/stores';

const SearchScreen = ({navgation}) => {
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const renderOption = settings => {
    const {item, getLabel} = settings;
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          <View style={[styles.box, {backgroundColor: item.color}]} />
          <Text style={{color: item.color, alignSelf: 'flex-start'}}>
            {getLabel(item)}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <SearchBar />

      <View style={styles.pickerView}>
        <View style={styles.pickerView}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedOption(itemValue);
            }}
            mode="dropdown"
            style={styles.picker}>
            <Picker.Item style={styles.pickerItem} label={'delivery'} />
            <Picker.Item style={styles.pickerItem} label={'drive in'} />
          </Picker>
        </View>

        <View style={styles.pickerView}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedOption(itemValue);
            }}
            mode="dropdown"
            style={styles.picker}>
            <Picker.Item style={styles.pickerItem} label={'Price Range'} />
            <Picker.Item style={styles.pickerItem} label={'0 - 100'} />
            <Picker.Item style={styles.pickerItem} label={'100 - 500'} />
            <Picker.Item style={styles.pickerItem} label={'500 - 1000'} />
          </Picker>
        </View>

        <View style={styles.pickerView}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedOption(itemValue);
            }}
            mode="dropdown"
            style={styles.picker}>
            <Picker.Item style={styles.pickerItem} label={'Sort By'} />
            <Picker.Item style={styles.pickerItem} label={'Rating'} />
            <Picker.Item style={styles.pickerItem} label={'Popularity'} />
            <Picker.Item style={styles.pickerItem} label={'Distance'} />
          </Picker>
        </View>
      </View>

      <FlatList
        data={stores}
        renderItem={({item}) => <StoreItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#FFE44A',
  },
  picker: {
    width: 130,
    // backgroundColor: 'blue',
    fontSize: 10,
  },
  pickerView: {
    flexDirection: 'row',
  },
  pickerItem: {
    width: 100,
    fontSize: 12,
    backgroundColor: 'blue',
  },
  optionContainer: {
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});

export default SearchScreen;
