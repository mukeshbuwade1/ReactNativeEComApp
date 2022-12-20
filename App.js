import React from "react";
import { NativeBaseProvider, Box, StatusBar } from "native-base";
import LoginScreen from "./src/screens/LoginScreen";
import RagisterScreen from "./src/screens/RagisterScreen";
import NotVerify from "./src/screens/NotVerify";
import Home from "./src/screens/Home";
import { COLORS } from "./src/assets/Colors";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CartScreen from "./src/screens/CartScreen";
import AddressScreen from "./src/screens/AddressScreen";
import AddNewAddress from "./src/components/AddNewAddress";
import RootNavigation from "./src/screens/RootNavigation";


export default function App() {
  return (   
    <NativeBaseProvider>
      <StatusBar backgroundColor={COLORS.primary} />
      <RootNavigation/>
    </NativeBaseProvider>
  );
}