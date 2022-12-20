import { Box, Button, Center, FlatList, Flex, FormControl, Heading, HStack, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React from 'react'
import { COLORS } from '../assets/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ButtonComp from './ButtonComp';

let arr = [
    {
        active: 0,
        full_name: "Mukesh Buwade",
        mobile_no: "0987456321",
        address_line1: "Newrise technosys pvt ltd",
        address_line2: "463-A, Fourth Floor, Pacific Business Center",
        landmark: "behind D-Mart, Hoshangabad Rd",
        city: "Bhopal",
        pin_code: "462026",
        state: "Madhya Pradesh",
    },
    {
        active: 1,
        full_name: "Mukesh Buwade",
        mobile_no: "0987456321",
        address_line1: "Newrise technosys pvt ltd",
        address_line2: "463-A, Fourth Floor, Pacific Business Center",
        landmark: "behind D-Mart, Hoshangabad Rd",
        city: "Bhopal",
        pin_code: "462026",
        state: "Madhya Pradesh",
    },
    
]
// home-alert
const AllAddress = () => {
    const renderItem = ({ item, index }) => {
        let active_border_color = item.active == 1 ? COLORS.lightPrimary : COLORS.silver;
        let active_color = item.active == 1 ? COLORS.lightPrimary : COLORS.dimGray;

        return (
            <Box my={3} mx={3} borderWidth={2} borderColor={active_border_color} rounded={15}
                p={4}
                overflow={"hidden"}
            >
                {item.active == 1 && <Center position={"absolute"}
                    style={{ transform: [{ rotate: '45deg' }] }}
                    bg={COLORS.lightPrimary}
                    py={1} px={10}
                    right={-35}
                    top={3}
                >
                    <Text bold fontSize={14} color={COLORS.white}>Default</Text>
                </Center>}
                <HStack space={3} alignItems={"center"}>
                    <Center w={35} h={35} rounded={30} borderWidth={2} borderColor={active_color} >
                        <MaterialCommunityIcons name="home" color={active_color} size={15} />
                    </Center>
                    <Heading color={active_color} fontSize={17}>{item.full_name}</Heading>
                </HStack>
                <Text mt={2} color={COLORS.dimGray} fontWeight={"600"}>
                    {item.address_line1},  {item.address_line2},  {item.landmark}
                </Text>
                <Text mt={1} color={COLORS.dimGray} fontWeight={"600"}>
                    {item.city}, {item.state}, {item.pin_code}
                </Text >
                <Text mt={2} italic fontWeight={"600"} fontSize={14}>{item.mobile_no}</Text>
                <HStack space={3} mt={1}>
                    <Button
                        w={"100"}
                        py={1.5}
                        rounded={7}
                        borderWidth={1.5}
                        borderColor={COLORS.lightPrimary}
                        h={30}
                        bg={COLORS.ultraLightPrimary}
                        _pressed={{
                            bg: COLORS.lightPrimary,
                        }}
                    >
                        <HStack space={2}>
                            <Heading color={COLORS.primary} fontSize={12}>{"Edit" ?? ""}</Heading>
                            <Icon name={"checkmark-done-circle"} color={COLORS.primary} size={14} />
                        </HStack>
                    </Button>
                    <Button
                        w={"100"}
                        py={1.5}
                        rounded={7}
                        h={30}
                        bg={COLORS.ultraLightYellow}
                        borderWidth={1.5}
                        borderColor={COLORS.warning}
                        _pressed={{
                            bg: COLORS.lightYellow,
                        }}
                    >
                        <HStack space={2}>
                            <Heading color={COLORS.darkYellow} fontSize={12}>{"Delete" ?? ""}</Heading>
                            <Icon name={"trash"} color={COLORS.darkYellow} size={14} />
                        </HStack>
                    </Button>
                </HStack>
            </Box>
        )
    }
    return (
        <Box width={"full"} flex={1} >
            <FlatList
                data={arr}
                renderItem={renderItem}
                keyExtractor={(e, i) => i}
            />
        </Box>
    )
}

export default AllAddress