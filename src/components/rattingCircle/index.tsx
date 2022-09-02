import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface rating {
  rating: number;
}

const RatingCircle = (data: rating) => {
  return <Text style={styles.ratingCircle}>{data.rating}</Text>;
};

const styles = StyleSheet.create({
  ratingCircle: {
    height: 40,
    width: 40,
    borderRadius: 100,
    color: 'white',
    borderColor: 'black',
    backgroundColor: '#C4C4C4',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
});

export default RatingCircle;
