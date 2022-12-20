import { Box, Button, Center, FlatList, Flex, Heading, HStack, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { COLORS } from '../assets/Colors';
import { Dimensions, useWindowDimensions } from 'react-native';
import { retingView } from '../components/Product';
import NumericInput from 'react-native-numeric-input';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import OrderTab from '../components/OrderTab';
import ProfileTab from '../components/ProfileTab';
import TabViewExample from '../components/TabView';
import AddNewAddress from '../components/AddNewAddress';
import AllAddress from '../components/AllAddress';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AddressScreen = () => {
    const navigation = useNavigation()
    return (
        <Box flex={1}>
            <Center bg={COLORS.primary} p={3}  >
                <Heading fontSize={18} mt={2} color={COLORS.white}>DELIVERY ADDRESS</Heading>
            </Center>

            <Pressable
            onPress={()=>navigation.navigate("AddNewAddress")}>
                <Center my={3} mx={3} borderWidth={2} borderColor={COLORS.lightPrimary} rounded={15}
                    p={3} bg={COLORS.ultraLightPrimary}
                >
                    <HStack alignItems={"center"} space={2}>
                        <Heading color={COLORS.lightPrimary} fontSize={17}>Add New Address</Heading>
                        <MaterialCommunityIcons name="home" color={COLORS.lightPrimary} size={16} />
                    </HStack>
                </Center>
            </Pressable>

            <AllAddress />

        </Box>
    )
}

export default AddressScreen