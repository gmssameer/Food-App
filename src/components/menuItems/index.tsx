import {View, Text, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../quantitySelector';
import AddMe from '../quantitySelector/addIndex';
import {useNavigation} from '@react-navigation/native';

interface menuItemProps {
  item: {
    id: number;
    name: string;
    descption: string;
    price: number;
    userRating: number;
    image: string;
  };
}

const MenuItem = (props: menuItemProps) => {
  const item = props.item;
  const [quantity, setQuantity] = useState(1);

  const cnavigation = useNavigation();

  const onAdd = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Pressable
      onPress={() => {
        cnavigation.navigate('Menu', {title: item.name});
      }}>
      <View style={styles.root}>
        <View style={styles.rootContainer}>
          <View style={styles.leftSide}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>{item.descption}</Text>

            <Text style={styles.price}>$ {item.price}</Text>
          </View>

          <View style={styles.rightSide}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: item.image,
                }}
              />
            </View>
            {/* <QuantitySelector quantity={quantity} setQuantity={setQuantity} /> */}
            {/* <Text style={styles.cust}>customisable</Text> */}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MenuItem;
