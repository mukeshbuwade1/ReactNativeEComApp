import { Box, Button, Heading, Image, Input, Pressable, Text, View, VStack } from 'native-base'
import React from 'react';
import img from "../assets/image/login-bg.png"
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { COLORS } from '../assets/Colors';

const LoginScreen = (props) => {
    return (
        <Box flex={1} bg="red.100" >
            <Image
                w={"100%"}
                h={"100%"}
                alt={"imageforbg"}
                resizeMode={"cover"}
                source={require("../assets/image/login-bg1.png")}
            />
            <Box
                w={"full"} h={"full"}
                position={"absolute"}
                justifyContent={"center"}
                px={5}
            >
                <Heading mt={20} color={COLORS.primary}>LOGIN</Heading>
                <VStack pt={6} space={5} w={"80%"}>
                    <Input
                        placeholder='mukesh@gmail.com'
                        variant={"underlined"} borderBottomColor={COLORS.primary}
                        color={COLORS.primary}
                        InputLeftElement={
                            <Icon name="mail" size={20} color={COLORS.primary} />
                        }
                        pl={3}
                    />
                    <Input
                        type='password'
                        InputLeftElement={
                            <Icon name="ios-lock-open" size={20} color={COLORS.primary} />
                        }
                        placeholder='********' variant={"underlined"} borderBottomColor={COLORS.primary} color={COLORS.primary}
                        pl={3}
                    />
                </VStack>
                <Button mt={5} w={'40%'} bg={COLORS.primary} 
                _pressed={{
                    bg:COLORS.lightPrimary
                }} 
                onPress={()=>props.navigation.navigate("MyTabs")}
                >
                    <Text color={"white"}>LOGIN</Text>
                </Button>
                <Pressable mt={3} 
                 onPress={()=>props.navigation.navigate("RagisterScreen")}>
                    <Text color={"green.600"}>New user? SignUp</Text>
                </Pressable>
                <Pressable 
                 onPress={()=>alert("screen is under construction")}>
                    <Text color={"gray.600"}>Forgot Password</Text>
                </Pressable>
            </Box>
        </Box>
    )
}

export default LoginScreen