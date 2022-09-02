import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import store from '../../data/store';
import RatingCircle from '../../components/rattingCircle';
import menu from '../../data/menu';
import {Picker} from '@react-native-picker/picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useNavigation} from '@react-navigation/native';

const checkoutItem = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.title3}>{menu.name}</Text>
        <Text style={styles.desc}>{menu.descption}</Text>
      </View>

      <View style={styles.middleContainer}>
        <Text>{menu.price}</Text>
        <Text>x1</Text>
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.totalPrice}>
          <Text>$ 14.34</Text>
        </View>
      </View>
    </View>
  );
};

const CheckoutScreen = () => {
  const cnavigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: store.image}} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{store.title}</Text>
          <Text style={styles.location}>{store.location}</Text>
          <RatingCircle rating={store.avgRating} />
        </View>
        <View
          style={{
            paddingVertical: 10,
            marginHorizontal: 40,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.title2}>Your Items</Text>
        {checkoutItem()}
        {checkoutItem()}
        {checkoutItem()}
        {checkoutItem()}

        <Text style={styles.title2}>Delivery Options</Text>
        <View style={styles.pickerView}>
          <BouncyCheckbox
            textComponent={
              <View style={styles.pickerItem}>
                <View style={styles.chechboxLeft}>
                  <Text style={styles.title3}>Standard Delivery </Text>
                  <Text style={styles.desc2}>
                    Fast Delivery you can trust at a resonable time
                  </Text>
                  <Text style={styles.desc2}>EST: 30-49 min</Text>
                </View>
                <View style={styles.checkboxRight}>
                  <Text>$ 0</Text>
                </View>
              </View>
            }
          />
          <BouncyCheckbox
            textComponent={
              <View style={styles.pickerItem}>
                <View style={styles.chechboxLeft}>
                  <Text style={styles.title3}>Fast Delivery </Text>
                  <Text style={styles.desc2}>
                    Fast Delivery you can trust at a resonable time
                  </Text>
                  <Text style={styles.desc2}>EST: 30-49 min</Text>
                </View>
                <View style={styles.checkboxRight}>
                  <Text>$ 5.99</Text>
                </View>
              </View>
            }
          />
        </View>

        <View
          style={{
            paddingVertical: 10,
            marginHorizontal: 40,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}
        />
        <View style={styles.total}>
          <View style={styles.subTotal}>
            <Text style={styles.subTotal1}>Subtotal</Text>
            <Text style={styles.subTotal2}>$ 17.99</Text>
          </View>
          <View style={styles.subTotal}>
            <Text style={styles.subTotal1}>Taxes and fees</Text>
            <Text style={styles.subTotal2}>$ 1.02</Text>
          </View>
          <View style={styles.subTotal}>
            <Text style={styles.subTotal1}>Delivery Fee</Text>
            <Text style={styles.subTotal2}>$ 0.00</Text>
          </View>
          <View style={styles.subTotal}>
            <Text style={[styles.subTotal1, styles.title4]}>Total</Text>
            <Text style={[styles.subTotal2, styles.title4]}>$ 19.19</Text>
          </View>
        </View>
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
              cnavigation.navigate('Tips');
            }}>
            <Text style={styles.buttonText}>Purchase</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;
