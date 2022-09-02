import {View, Text, Image, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

interface gridItemProps {
  item: {
    name: string;
    image: string;
  };
}

const GridItem = (props: gridItemProps) => {
  const cnavigation = useNavigation();
  const item = props.item;

  return (
    <Pressable
      style={styles.mainContainer}
      onPress={() => {
        cnavigation.navigate('Search');
      }}>
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.image} source={{uri: item.image}} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.imageText}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

export default GridItem;
