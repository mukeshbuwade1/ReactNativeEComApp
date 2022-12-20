import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './LoginScreen';
import RagisterScreen from './RagisterScreen';
import NotVerify from './NotVerify';
import Home from './Home';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { COLORS } from '../assets/Colors';
import ProductDetailScreen from './ProductDetailScreen';
import AddressScreen from './AddressScreen';
import AddNewAddress from '../components/AddNewAddress';



const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Home"} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      {/* <Stack.Screen name="NotVerify" component={NotVerify} />
      <Stack.Screen name="MyTabs" component={MyTabs} /> */}
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"ProfileScreen"} >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="AddressScreen" component={AddressScreen} />
     <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
        {/*<Stack.Screen name="MyTabs" component={MyTabs} /> */}
    </Stack.Navigator>
  )
}

function MyTabs() {
  const RenderTabBarIcons = (color, iconName) => (
    <Entypo name={iconName} color={color} size={25} />
  )

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{ headerShown: false }}
      labeled={false}
      activeColor={COLORS.primary}
      inactiveColor={COLORS.silver}
      barStyle={{
        backgroundColor: COLORS.primary,
        // position:"absolute",
        // bottom:20,
        // left:10,
        // right:10,
        // borderRadius:15,
        // borderTopLeftRadius:20,
        // borderTopRightRadius:20,
        height: 70,
        overflow: "hidden"
      }}

    >
      <Tab.Screen
        name="HomeStack" component={HomeStack}
        options={{
          tabBarLabel: <Text >Home</Text>,
          tabBarIcon: ({ color }) => {
            return RenderTabBarIcons(color, 'home')
          },
        }}
      />
      <Tab.Screen name="CartScreen" component={CartScreen}
        options={{
          tabBarLabel: <Text >cart</Text>,
          tabBarIcon: ({ color }) => {
            return RenderTabBarIcons(color, 'shopping-cart')
          },
        }}
      />
      <Tab.Screen name="ProfileStack" component={ProfileStack}
        options={{
          tabBarLabel: <Text >Profile</Text>,
          tabBarIcon: ({ color }) => {
            return RenderTabBarIcons(color, 'user')
          },
        }}
      />

    </Tab.Navigator>
  );
}

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"LoginScreen"} >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RagisterScreen" component={RagisterScreen} />
        <Stack.Screen name="NotVerify" component={NotVerify} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation