import { Box, Button, Center, FlatList, Flex, Heading, HStack, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React, { useEffect, useState } from 'react';
import img from "../assets/image/login-bg.png"
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { COLORS } from '../assets/Colors';
import { Dimensions } from 'react-native';

export function retingView(rating, iconSize = 15) {
    // {"count": 120, "rate": 3.9}
    // rating.rate
    if (!rating?.rate) {
        return
    }
    let arr = [],
        is_half = false
    for (let i = rating.rate; i > 0; i--) {
        if (i < 1) is_half = true
        else arr.push(i)
    }
    return (
        <HStack >
            {
                arr.map((e) => (
                    <Icon key={e} name="star" size={iconSize} color={COLORS.rating_color} />
                ))
            }
            {
                is_half
                    ? <Icon name="star-half-sharp" size={iconSize} color={COLORS.rating_color} />
                    : null
            }
        </HStack>
    )
}
const Product = () => {
    const [products, setProducts] = useState([])
    function getProducts() {
        let res = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json)
            })
            .catch((e) => console.log("ERROR", e))

    }
    useEffect(() => (getProducts()), [])


    const renderItem = ({ item, index }) => {
        return (
            <VStack
                bg={COLORS.white}
                w={Dimensions.get("window").width * 0.45}
                my={2}
                rounded={'sm'}
                py={3}
            >
                <Center >
                    <Image
                        alt={item?.title ?? "product_image"}
                        resizeMode={"contain"}
                        source={{ uri: item?.image }}
                        w={Dimensions.get("window").width * 0.25}
                        h={Dimensions.get("window").width * 0.25}
                        py={2}
                    />
                </Center>
                <View px={2} py={1}>
                    <Text fontWeight={"black"} fontSize={17}  >&#x20B9;{item?.price}</Text>
                    <Text numberOfLines={2} fontWeight={"medium"} fontSize={12} color={"#444"}>{item?.title}</Text>

                    {retingView(item?.rating)}
                </View>
            </VStack>
        )
    }
    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(e, i) => i}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-evenly" }}
        />
    )
}
export default Product