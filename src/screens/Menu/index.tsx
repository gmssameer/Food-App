import {
  View,
  Text,
  Image,
  FlatList,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Modal,
  Pressable,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import React, {useState} from 'react';
import styles from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import menu from '../../data/menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

interface menuItemProps {
  id: number;
  name: string;
  descption: string;
  price: number;
  ingredients: string[];
  userRating: number;
  image: string;
  toppings: {
    id: number;
    name: string;
    price: number;
  }[];
}

const MenuScreen = () => {
  const [checkboxState, setCheckboxState] = React.useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const menuItem: menuItemProps = menu;
  const menuTopping = menuItem.toppings;
  const [data, setData] = useState(menuTopping);
  const [checked, setChecked] = useState([]);
  const cnavigation = useNavigation();
  // setData(menuItem.toppings);

  const renderItem = (item, index) => {
    const deciPrice = parseFloat(item.price).toFixed(2);

    const onpress = () => {
      console.log('pressed');
      var newIds = [...checked];
      const index = newIds.indexOf(item.id);
      console.log(checked);
      if (index > -1) {
        console.log(index);
        newIds.slice(index, 1);
      } else {
        newIds.push(item.id);
      }
      setChecked(newIds);
      console.log(checked);
    };

    return (
      <View style={styles.checkboxContainer} key={index}>
        <BouncyCheckbox
          textComponent={
            <View style={styles.checkboxContainer}>
              <Text style={styles.toppingName}>{item.name}</Text>
              <Text style={styles.toppingPrice}>+ {deciPrice} $</Text>
            </View>
          }
        />
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: menuItem.image}} />
      </View>

      <View style={styles.descContainer}>
        <Text style={styles.title}>{menuItem.name}</Text>
        <Text style={styles.desc}>{menuItem.descption}</Text>
        <Text style={styles.ingredients}>
          Ingridents: {menuItem.ingredients}
        </Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          style={styles.modalContainer}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalHeaderCloseText}>X</Text>
              </TouchableOpacity>
              <Text style={styles.modalText}>Hello World!</Text>
            </View>
          </View>
        </Modal>

        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={styles.tapMore}>Tap more</Text>
        </Pressable>
      </View>

      <View
        style={{
          paddingVertical: 10,
          marginHorizontal: 40,
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />
      <Text style={styles.choice}>Choice</Text>
      <ScrollView style={styles.toppingsContainer}>
        {data.map((item, index) => renderItem(item, index))}
        {/* <FlatList scrollEnabled={true} data={data} renderItem={renderItem} /> */}
      </ScrollView>
      {/* <Button title="Add To Order" /> */}
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            // borderWidth: 1,
            elevation: 3,
            alignItems: 'center',
            justifyContent: 'center',
            width: 350,
            position: 'absolute',
            bottom: 30,
            // right: 0,
            height: 50,
            alignContent: 'center',
            backgroundColor: '#000000',
            borderRadius: 5,
          }}
          onPress={() => {
            cnavigation.goBack();
          }}>
          <Text style={styles.buttonText}>Add me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuScreen;
