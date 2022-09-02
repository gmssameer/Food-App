import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CategoryScreen from '../screens/Category';
import CheckoutScreen from '../screens/Checkout';
import HomeScreen from '../screens/Home';
import MainPage from '../screens/Main';
import MenuScreen from '../screens/Menu';
import OrderScreen from '../screens/Order';
import OrderStatusScreen from '../screens/OrderStatus';
import SearchScreen from '../screens/SearchScreen';
import StoreScreen from '../screens/Store';
import TipsScreen from '../screens/Tips';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={MainPage}
        name="Main"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={CategoryScreen}
        name="Category"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={SearchScreen}
        name="Search"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={StoreScreen}
        name="Store"
        options={({route}) => ({title: route.params.title})}
      />
      <Stack.Screen
        component={MenuScreen}
        name="Menu"
        // options={({route}) => ({title: route.params.title})}
      />

      <Stack.Screen
        component={OrderScreen}
        name="Order"
        // options={({route}) => ({title: route.params.title})}
      />

      <Stack.Screen
        component={CheckoutScreen}
        name="Checkout"
        // options={({route}) => ({title: route.params.title})}
      />
      <Stack.Screen
        component={TipsScreen}
        name="Tips"
        // options={({route}) => ({title: route.params.title})}
      />
      <Stack.Screen
        component={OrderStatusScreen}
        name="OrderStatus"
        // options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};

export default Router;
