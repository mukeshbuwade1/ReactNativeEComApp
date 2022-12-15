import { Box, Button, Center, FlatList, Flex, Heading, HStack, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { COLORS } from '../assets/Colors';
import { Dimensions } from 'react-native';
import { retingView } from '../components/Product';
import NumericInput from 'react-native-numeric-input';

const ProductDetailScreen = () => {
    const [product, setProduct] = useState({})
    const [productCount, setProductCount] = useState(1)

    console.log(product)
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
    return (
        <Box p={3}>
            <Image
                alt='product image'
                source={{ uri: product.image }}
                resizeMode={"contain"}
                w={"100%"}
                h={300}
            />
            <Heading fontSize={16}>{product.title}</Heading>
            {
                retingView(product.rating, 20)
            }
            <HStack justifyContent={"space-between"} alignItems={"center"} >
                <NumericInput
                    value={productCount}
                    onChange={value => setProductCount(value)}
                    onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                    totalWidth={150}
                    totalHeight={50}
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
                <Heading 
                
                >
                &#x20B9;{product.price}
                </Heading>
            </HStack>
            <Text>
                {product.description}
            </Text>
        </Box>
    )
}

export default ProductDetailScreen