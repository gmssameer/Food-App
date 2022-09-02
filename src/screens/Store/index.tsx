import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  Alert,
  Pressable,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import styles from './styles';
import store from '../../data/store';
import menus from '../../data/menus';
import {Picker} from '@react-native-picker/picker';
import MenuItem from '../../components/menuItems';
import RatingCircle from '../../components/rattingCircle';
import {useNavigation} from '@react-navigation/native';

const StoreScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const cnavigation = useNavigation();
  // const aheight = intepolate(y, {});

  return (
    <View style={styles.page}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: store.image}} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{store.title}</Text>
          <Text style={styles.location}>{store.location}</Text>
          <RatingCircle rating={store.avgRating} />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.avgPrice}>
              $ {store.avgPrice} Free Delivery Minimum
            </Text>
            <Text style={styles.estTime}>est {store.estTime}</Text>
          </View>

          <Text>Open at {store.opentime}</Text>
          {/* <Text>Tap for more</Text> */}

          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <TouchableOpacity
                style={styles.modalContainer}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <TouchableOpacity style={styles.modal} activeOpacity={1}>
                  <View>
                    <Text>Address</Text>
                    <Text>Phone number</Text>
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
            </Modal>
            <Pressable
              style={styles.buttonOpen}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Tap for more</Text>
            </Pressable>
          </View>

          <View style={styles.pickerView}>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedOption(itemValue);
              }}
              mode="dropdown"
              style={styles.picker}>
              {store.options.map((option, i) => (
                <Picker.Item
                  style={styles.pickerItem}
                  label={option.label}
                  value={option.value}
                  key={i}
                />
              ))}
            </Picker>
          </View>
        </View>

        <View
          style={{
            paddingVertical: 10,
            marginHorizontal: 40,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />

        <Text style={styles.menuTitle}>Menu</Text>
        <Text style={styles.menuPicked}>Picked For You</Text>
        {menus.map((items, index) => {
          // console.log(items.name);
          return <MenuItem key={index} item={items} />;
        })}

        {/* <MenuItem item={menus[0]} />
        <MenuItem item={menus[1]} /> */}

        {/* <FlatList
          data={menus}
          renderItem={({item}) => <MenuItem item={item} />}
        /> */}
      </ScrollView>

      <View style={styles.buttonContainer}>
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
            cnavigation.navigate('Order');
          }}>
          <Text style={styles.buttonText}>View Order</Text>
        </TouchableOpacity>
      </View>
      {/* <MenuItem item={menu[0]} /> */}
    </View>
  );
};

export default StoreScreen;
