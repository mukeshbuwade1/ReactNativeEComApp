import { Box, Button, Heading, Image, Input, Pressable, Text, View, VStack } from 'native-base'
import React from 'react';
import img from "../assets/image/login-bg.png"
import Icon from 'react-native-vector-icons/dist/Ionicons';
import HomeSearch from '../components/HomeSearch';
import Product from '../components/Product';
import { COLORS } from '../assets/Colors';

const Home = () => {
    return (
        <Box flex={1} bg={COLORS.ultraLightPrimary} >
          <HomeSearch/>
          <Product/>
        </Box>
    )
}

export default Home