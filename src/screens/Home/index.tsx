import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  Pressable,
} from 'react-native';
import {CustomPicker} from 'react-native-custom-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import StoreItem from '../../components/storeItems';
import stores from '../../data/stores';

const HomeScreen = ({navgation}) => {
  const cnavigation = useNavigation();
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
      <View style={styles.mainContainer}>
        <Image
          source={require('../../assests/icons/google_maps.png')}
          style={styles.ImageIconStyle}
        />
        <TextInput
          placeholder="Brookyln,NYC 11201"
          underlineColorAndroid="transparent"
          style={styles.textInputStyleClass}
        />
      </View>
      <View
        style={{
          paddingVertical: 10,
          marginHorizontal: 10,
          borderBottomColor: '#000',
          borderBottomWidth: 1,
        }}
      />
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
            cnavigation.navigate('Category');
          }}>
          <Image
            source={require('../../assests/icons/filter.png')}
            style={styles.ImageIconStyle}
          />
        </Pressable>
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
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 60,
    width: '90%',
    // justifyContent: 'center',
    backgroundColor: '#fff',
    // flex: 1,
    borderRadius: 20,
    margin: 10,
  },
  textInputStyleClass: {
    flex: 1,
    borderRadius: 20,
    fontSize: 20,
    fontWeight: '100',
    fontFamily: 'Roboto',
    backgroundColor: '#FFFFFF',
  },
  ImageIconStyle: {
    marginVertical: 12,
    marginHorizontal: 10,
    // width: 25,
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

export default HomeScreen;
