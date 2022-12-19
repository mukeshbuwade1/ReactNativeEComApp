
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

const ProfileScreen = () => {
    
    return (
        <Box flex={1}>
            <Center bg={COLORS.primary}
                pt={3}
            >
                <Image
                    source={require("../assets/image/user_icon.png")}
                    alt={"profile image"}
                    w={90} h={90}
                />
                <Heading fontSize={18} mt={2} color={COLORS.white}>MUKESH BUWADE</Heading>
                <Text  fontSize={13} mb={3} color={COLORS.white}>Joining Date: 19/12/2022</Text>
            </Center>

            <TabViewExample />

        </Box>
    )
}

export default ProfileScreen