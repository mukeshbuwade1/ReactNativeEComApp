import { Box, Button, Center, FlatList, Flex, FormControl, Heading, HStack, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React from 'react'
import { COLORS } from '../assets/Colors'

let orderData = [
    {
        recept_number: "45631654851DS465",
        status: "PAID",
        date: "Dec 12 2022",
        amount: "$199"
    },
    {
        recept_number: "45631654851DS465",
        status: "PAID",
        date: "Dec 12 2022",
        amount: "$199"
    },
    {
        recept_number: "45631654851DS465",
        status: "PAID",
        date: "Dec 12 2022",
        amount: "$199"
    },
    {
        recept_number: "45631654851DS465",
        status: "PAID",
        date: "Dec 12 2022",
        amount: "$199"
    },
    {
        recept_number: "45631654851DS465",
        status: "PAID",
        date: "Dec 12 2022",
        amount: "$199"
    },
]

const OrderTab = () => {
    return (
        <Box>
            <ScrollView>
                {/* <VStack> */}
                {
                    orderData.map((e, i) => (
                        <HStack bg={COLORS.ultraLightPrimary} my={4} px={2} py={2} justifyContent={"space-between"} alignItems="center" space={4} >
                            <Text fontSize={9} color={"#00f"} isTruncated>{e.recept_number}</Text>
                            <Text fontSize={12} bold color={"#252525"} isTruncated>{e.status}</Text>
                            <Text fontSize={11} italic color={"#252525"} isTruncated>{e.date}</Text>
                            <Button
                                px={7}
                                py={1.5}
                                bg={COLORS.primary}
                                rounded={50}
                                _text={{
                                    color: COLORS.white
                                }}
                                _pressed={{
                                    bg:COLORS.primary
                                }}
                            >
                                {e.amount}
                            </Button>
                        </HStack>
                    ))
                }

                {/* </VStack> */}
            </ScrollView>
        </Box>
    )
}

export default OrderTab