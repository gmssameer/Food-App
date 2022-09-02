import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import CustomDropdown from '../../components/dropdown';
import {useNavigation} from '@react-navigation/native';

const Timedata = [
  {label: 'Now', value: '1'},
  {label: 'Later', value: '2'},
];

const deliveryOptions = [
  {label: 'Delivery', value: '1'},
  {label: 'Drive in', value: '2'},
];

const MainPage = ({navgation}) => {
  const cnavigation = useNavigation();
  const [selected, setSelected] = useState(undefined);
  return (
    <View style={styles.page}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assests/images/logo-social-sq.png')}
          />
        </View>
        <View style={styles.tagLine1}>
          <Text style={styles.tagLineText1}>Hungry ?</Text>
        </View>
        <View style={styles.tagLine2}>
          <Text style={styles.tagLineText2}>Your at the Right Place</Text>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 10,
          top: 100,
          marginHorizontal: 40,
          borderBottomColor: '#000',
          borderBottomWidth: 1,
        }}
      />

      <View style={styles.mainContainer}>
        <Image
          source={require('../../assests/icons/google_maps.png')}
          style={styles.ImageIconStyle}
        />
        <TextInput
          placeholder="Brookyln,NYC 11201"
          underlineColorAndroid="transparent"
          style={styles.textInputStyleClass}
        />
      </View>

      <View style={styles.mainContainer}>
        <Image
          source={require('../../assests/icons/food_delivery.png')}
          style={styles.ImageIconStyle}
        />
        <CustomDropdown
          label={'Select Item'}
          data={deliveryOptions}
          defaultValue={deliveryOptions[0]}
          onSelect={setSelected}
        />
      </View>
      <View style={styles.mainContainer}>
        <Image
          source={require('../../assests/icons/stopwatch.png')}
          style={styles.ImageIconStyle}
        />
        <CustomDropdown
          label={'Select Item'}
          data={Timedata}
          defaultValue={Timedata[0]}
          onSelect={setSelected}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            // borderWidth: 1,
            top: 120,
            elevation: 3,
            alignItems: 'center',
            justifyContent: 'center',
            width: 350,
            position: 'absolute',
            // bottom: 30,
            // right: 0,
            height: 50,
            alignContent: 'center',
            backgroundColor: '#000000',
            borderRadius: 20,
          }}
          onPress={() => {
            cnavigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>Find Food</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainPage;
