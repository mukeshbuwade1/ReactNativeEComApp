import { Box, Button, Center, Container, FlatList, Flex, FormControl, Heading, HStack, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React from 'react'
import { COLORS } from '../assets/Colors'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ButtonComp from './ButtonComp';
import { useNavigation } from '@react-navigation/native';

const profileData = [
    {
        Label: "Display Name",
        type: "text"
    },
    {
        Label: "Email",
        type: "text"
    },
    {
        Label: "Password",
        type: "password"
    },
]

const ProfileTab = (props) => {
    const navigation =useNavigation()
    return (

        <Box w={"full"}>
            <ScrollView>
                <VStack mt={5} px={3}>
                    {
                        profileData.map((e, i) => (
                            <FormControl key={i} my={3}>
                                <FormControl.Label
                                    _text={{
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        color: COLORS.primary
                                    }}>
                                    {e.Label}
                                </FormControl.Label>
                                <Input
                                    borderWidth={0}
                                    bg={COLORS.ultraLightPrimary}
                                    color={COLORS.primary}
                                    type={e.type}
                                    fontSize={15}
                                    fontWeight={"600"}
                                    py={3}
                                    _focus={{
                                        bg: COLORS.ultraLightPrimary,
                                        color: COLORS.primary,
                                        borderWidth: "1",
                                        borderColor: COLORS.primary
                                    }}

                                />
                            </FormControl>
                        ))
                    }

                    <ButtonComp
                        title="UPDATE PROFILE"
                        icon_name="person"
                    />
                    <ButtonComp
                        title="PAYMENT MODES"
                        icon_name="card"
                    />
                    <ButtonComp
                        title="MANAGE ADDRESS"
                        icon_name="location"
                        onPress={()=>navigation.navigate("AddressScreen")}
                    />
                </VStack>
            </ScrollView>
        </Box>
    )
}

export default ProfileTab