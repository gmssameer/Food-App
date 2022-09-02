import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Touchable, Pressable} from 'react-native';
import RatingCircle from '../rattingCircle';
import styles from './styles';

interface storeItemProps {
  item: {
    id: number;
    title: string;
    location: string;
    image: string;
    avgRating: number;
    avgPrice: number;
    est: string;
  };
}

const StoreItem = (props: storeItemProps) => {
  const item = props.item;
  const cnavigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        cnavigation.navigate('Store', {title: item.title});
      }}>
      <View style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.location} numberOfLines={1}>
              {item.location}
            </Text>
            <RatingCircle rating={item.avgRating} />
          </View>
          <View style={styles.descContainer}>
            <Text>$ {item.avgPrice} Free Minimum Delivery</Text>
            <Text style={styles.delEstimate}>est. {item.est}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default StoreItem;
