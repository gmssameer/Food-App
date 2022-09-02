import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const FloatingButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          // borderWidth: 1,
          elevation: 3,
          alignItems: 'center',
          justifyContent: 'center',
          width: 35,
          position: 'absolute',
          bottom: 0,
          // right: 0,
          height: 50,
          alignContent: 'center',
          backgroundColor: '#fff',
        }}>
        <Text>Add me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'center',
    // backgroundColor: 'blue',
    height: 100,
    alignItems: 'center',
    // bottom: 10,
  },
});

export default FloatingButton;
