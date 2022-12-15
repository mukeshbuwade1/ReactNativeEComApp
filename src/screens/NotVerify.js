import { Box, Button, Center, Heading, Image, Input, Pressable, Text, View, VStack } from 'native-base'
import React from 'react';
import img from "../assets/image/login-bg.png"
import Icon from 'react-native-vector-icons/dist/Ionicons';

const NotVerify = () => {
    return (
        <Box flex={1} bg="#06c92b" alignItems={"center"}>

            <Center bg={"#fff"} w={120} h={120}  mb={2} mt={20}
                borderRadius={150}>
                <Image               
                    w={60} h={60}
                    alt={"imageforbg"}
                    source={require("../assets/image/shopping-bag.png")}
                />

            </Center>
            <Pressable
                bg={"black"}
                py={3}
                px={5}
                borderRadius={50}
                w={"70%"}
                alignItems={"center"}
                mt={8}>
                <Text color={"#fff"} fontWeight={"semibold"}>REGISTER</Text>
            </Pressable>
            <Pressable
                bg={"#fff"}
                py={3}
                px={5}
                borderRadius={50}
                w={"70%"}
                alignItems={"center"}
                mt={8}>
                <Text color={"black"} fontWeight={"semibold"}>LOGIN</Text>
            </Pressable>

        </Box>
    )
}

export default NotVerify