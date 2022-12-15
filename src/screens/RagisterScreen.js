import { Box, Button, Heading, Image, Input, Pressable, Text, View, VStack } from 'native-base'
import React from 'react';
import img from "../assets/image/login-bg.png"
import Icon from 'react-native-vector-icons/dist/Ionicons';

const RagisterScreen = () => {
    return (
        <Box flex={1} bg="red.100" >
            <Image
                flex={1}
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
                <Heading mt={20} color={"green.700"}>SignUp</Heading>
                <VStack pt={6} space={5} w={"80%"}>
                <Input
                        placeholder='mukesh@gmail.com'
                        variant={"underlined"} borderBottomColor={"green.600"}
                        color={"green"}
                        InputLeftElement={
                            <Icon name="person" size={20} color={"green"} />
                        } 
                        pl={3}
                        />
                    <Input
                        placeholder='mukesh@gmail.com'
                        variant={"underlined"} borderBottomColor={"green.600"}
                        color={"green"}
                        InputLeftElement={
                            <Icon name="mail" size={20} color={"green"} />
                        } 
                        pl={3}
                        />
                    <Input
                    type='password'
                        InputLeftElement={
                            <Icon name="ios-lock-open" size={20} color={"green"} />
                        }
                        placeholder='********' variant={"underlined"} borderBottomColor={"green.600"} color={"green600"} 
                        pl={3}
                         />
                </VStack>
                <Button mt={5} w={'40%'} bg={"green.700"}>
                    <Text color={"white"}>SignUp</Text>
                </Button>
                <Pressable mt={3}>
                    <Text color={"green.600"}>Rasistered User? LogIn</Text>
                </Pressable>
               
            </Box>
        </Box>
    )
}

export default RagisterScreen