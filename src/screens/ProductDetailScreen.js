import { Box, Button, Center, FlatList, Flex, Heading, HStack, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { COLORS } from '../assets/Colors';
import { Dimensions } from 'react-native';
import { retingView } from '../components/Product';
import NumericInput from 'react-native-numeric-input';

const w = Dimensions.get("window").width
const ProductDetailScreen = (props) => {
    const [product, setProduct] = useState({})
    const [productCount, setProductCount] = useState(1)

    function getProduct() {
        let res = fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then(json => {
                setProduct(json)
            })
            .catch((e) => console.log("ERROR", e))

    }
    useEffect(() => (getProduct()), [])
    // {"category": "men's clothing", 
    // "description": "Your perfect pack for everyday use and walks in the  forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //  "id": 1, "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
    //  "price": 109.95, "rating": {"count": 120, "rate": 3.9}, 
    //  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}
    function getCurruntDate() {
        let date = new Date()
        return `${date.getDate()}-${(date.getMonth()) + 1}-${date.getFullYear()}`
    }
    return (
        <Box px={3} bg={COLORS.white} flex={1}>
            <Pressable bg={COLORS.primary} w={35} h={35}
                rounded={45} zIndex={10} justifyContent={"center"} alignItems={"center"}
                position={"absolute"}
                top={5}
                left={3}
                onPress={()=>props.navigation.pop()} >
                <Icon name={"chevron-back-sharp"} color={COLORS.white} size={25} />
            </Pressable>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Center p={5} >
                        <Image
                            alt='product image'
                            source={{ uri: product.image }}
                            resizeMode={"contain"}
                            w={w * 0.7}
                            h={w * 0.7}
                            borderWidth={1}
                        />
                </Center>
                <Heading mb={2} fontSize={16}>{product.title}</Heading>
                {
                    retingView(product.rating, 17)
                }
                <HStack my={2} justifyContent={"space-between"} alignItems={"center"} >
                    <NumericInput
                        value={productCount}
                        onChange={value => setProductCount(value)}
                        onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                        totalWidth={150}
                        totalHeight={40}
                        iconSize={25}
                        step={1}
                        minValue={1}
                        maxValue={10}
                        valueType='real'
                        rounded
                        textColor={COLORS.black}
                        iconStyle={{ color: 'white' }}
                        rightButtonBackgroundColor={COLORS.primary}
                        leftButtonBackgroundColor='#E56B70' />
                    <Heading>
                        &#x20B9;{product.price}
                    </Heading>
                </HStack>
                <Text>
                    {product.description}  {product.description} {product.description} {product.description}
                </Text>
                <Button
                    rounded={50}
                    my={5}
                    bg={COLORS.primary}
                    onPress={() => props.navigation.navigate("CartScreen")}
                    _pressed={{
                        bg: COLORS.lightPrimary
                    }}
                >
                    <HStack space={2}>
                        <Heading color={COLORS.white} fontSize={15}>
                            ADD TO CART
                        </Heading>
                        <Icon name={"cart"} color={COLORS.white} size={17} />
                    </HStack>
                </Button>

                {/* review section */}

                <Heading fontSize={20} mb={1}>Reviews</Heading>
                {
                    (Math.round(Math.random() * 10)) % 2 == 0
                        ? <Center
                            bg={COLORS.ultraLightPrimary}
                            p={3} mb={3}
                            rounded={5}>
                            <Heading fontSize={15}>No Reviews Available 😞</Heading>
                        </Center>
                        : <Box
                            bg={COLORS.ultraLightPrimary}
                            p={3} mb={3}
                            rounded={5}
                        >
                            <HStack justifyContent={"space-between"} mb={1}>
                                <VStack >
                                    <Heading fontSize={15}>John Deo</Heading>
                                    <Text fontSize={10}>{getCurruntDate()}</Text>
                                </VStack>
                                {retingView(product.rating)}
                            </HStack>
                            <Box
                                bg={COLORS.white}
                                p={3}
                                rounded={5}
                            >
                                <Text fontSize={12} fontWeight={"500"}>{product.description} </Text>
                            </Box>
                        </Box>
                }
            </ScrollView>
        </Box>
    )
}

export default ProductDetailScreen
