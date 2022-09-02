import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useNavigation} from '@react-navigation/native';

const TipsScreen = () => {
  const cnavigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assests/images/tips.png')}
        />
      </View>
      <Text style={styles.title}>Tipping</Text>
      <View
        style={{
          paddingVertical: 10,
          marginHorizontal: 40,
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      />
      <Text style={styles.title}>Add a Tip</Text>
      <View style={styles.total}>
        <View style={styles.left}>
          <Text style={styles.title}>Total</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>19.19 $</Text>
        </View>
      </View>

      <View style={{paddingHorizontal: 15}}>
        <BouncyCheckbox
          textComponent={
            <View style={styles.total}>
              <View style={styles.left}>
                <Text>5% Gratuity</Text>
              </View>
              <View style={styles.right}>
                <Text>0.98 $</Text>
              </View>
            </View>
          }
        />
      </View>

      <View style={{paddingHorizontal: 15}}>
        <BouncyCheckbox
          textComponent={
            <View style={styles.total}>
              <View style={styles.left}>
                <Text>8% Gratuity</Text>
              </View>
              <View style={styles.right}>
                <Text>1.54 $</Text>
              </View>
            </View>
          }
        />
      </View>

      <View style={{paddingHorizontal: 15}}>
        <BouncyCheckbox
          textComponent={
            <View style={styles.total}>
              <View style={styles.left}>
                <Text>10% Gratuity</Text>
              </View>
              <View style={styles.right}>
                <Text>1.92 $</Text>
              </View>
            </View>
          }
        />
      </View>

      <View style={{paddingHorizontal: 15}}>
        <BouncyCheckbox
          textComponent={
            <View style={styles.total}>
              <View style={styles.left}>
                <Text>12% Gratuity</Text>
              </View>
              <View style={styles.right}>
                <Text>2.32 $</Text>
              </View>
            </View>
          }
        />
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
            cnavigation.navigate('OrderStatus');
          }}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TipsScreen;
