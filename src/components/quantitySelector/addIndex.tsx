import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const AddMe = ({quantity, setQuantity}: {quantity: any; setQuantity: any}) => {
  const onAdd = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View>
      <Pressable style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>Add {quantity}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1',
  },
  buttonText: {
    fontSize: 18,
  },
});

export default AddMe;
