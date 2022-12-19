import { Box, Button, Center, FlatList, Flex, FormControl, Heading, HStack, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React from 'react'
import { COLORS } from '../assets/Colors'

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

const ProfileTab = () => {
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
                                        fontWeight: "600"
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

                    <Pressable
                        bg={COLORS.primary}
                        py={3}
                        px={5}
                        borderRadius={50}
                        w={"100%"}
                        alignItems={"center"}
                        mt={8}>
                        <Text color={COLORS.white} fontWeight={"semibold"}>UPDATE PROFILE</Text>
                    </Pressable>
                </VStack>
            </ScrollView>
        </Box>
    )
}

export default ProfileTab