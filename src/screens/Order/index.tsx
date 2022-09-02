import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import store from '../../data/store';
import RatingCircle from '../../components/rattingCircle';
import menu from '../../data/menu';
import QuantitySelector from '../../components/quantitySelector';
import {ScrollView} from 'react-native-gesture-handler';
import order from '../../data/order';
import {useNavigation} from '@react-navigation/native';

interface basket {
  id: number;
  name: string;
  image: string;
  descption: string;
  price: number;
}

const OrderScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const cnavigation = useNavigation();

  const onAdd = () => {
    setQuantity(quantity + 1);
  };

  const renderBasket = (item: basket) => {
    return (
      <View style={styles.rootContainer} key={item.id}>
        <View style={styles.leftSide}>
          <Text style={styles.title2}>{item.name}</Text>
          <Text style={styles.desc}>{item.descption}</Text>

          <Text style={styles.price}>$ {item.price}</Text>
        </View>

        <View style={styles.rightSide}>
          <View style={styles.imageContainer2}>
            <Image
              style={styles.image2}
              source={{
                uri: item.image,
              }}
            />
          </View>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          {/* <Text style={styles.cust}>customisable</Text> */}
        </View>
      </View>
    );
  };

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
        <Text style={styles.menuTitle}>Basket</Text>
        <Text style={styles.menuPicked}>Items</Text>
        {/* {renderBasket(menu)} */}
        {order.map((data, i) => {
          return renderBasket(data);
        })}
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
            cnavigation.navigate('Checkout');
          }}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderScreen;
