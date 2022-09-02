import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  Button,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

const QuantitySelector = ({
  quantity,
  setQuantity,
}: {
  quantity: any;
  setQuantity: any;
}) => {
  const onMinus = () => {
    const quant = Math.max(0, quantity - 1);
    if (quant == 0) {
      setCust(false);
    }
    setQuantity(quant);
  };

  const onPlus = () => {
    if (!cust) {
      setCust(true);
    }
    setQuantity(quantity + 1);
  };

  const [cust, setCust] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  if (cust) {
    return (
      <View style={styles.root}>
        <Pressable style={styles.button} onPress={onMinus}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text style={styles.quantity}>{quantity}</Text>
        <Pressable style={styles.button} onPress={onPlus}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={styles.root}>
        <Pressable style={styles.addBtn} onPress={onPlus}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    width: 150,
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingVertical: 5,
  },
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
  quantity: {
    color: '#007eb9',
  },
  addBtn: {
    width: 150,
    height: 35,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A65FF',
    borderRadius: 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default QuantitySelector;
