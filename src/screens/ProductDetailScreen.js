import { Box, Button, Center, FlatList, Flex, Heading, HStack, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { COLORS } from '../assets/Colors';
import { Dimensions } from 'react-native';
import { retingView } from '../components/Product';
import NumericInput from 'react-native-numeric-input';
import { useDispatch, useSelector } from 'react-redux';
import { currentProduct } from '../redux/productslice';
import { addItemToCart } from '../redux/cartSlice';
import SimpleLoader from '../components/SimpleLoader';

const w = Dimensions.get("window").width
const ProductDetailScreen = (props) => {
    const routeParam = props.route.params || {}

    // redux hooks
    const dispatch = useDispatch()
    const { currentProduct: product } = useSelector((state => state.allProducts))
    const { cart } = useSelector((state => state.cart))

    // react hooks
    // const [product, setProduct] = useState({})
    const [productCount, setProductCount] = useState(1)
    const [productInCart, setProductInCart] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    function getProduct() {
        setIsLoading(true)
        let res = fetch('https://fakestoreapi.com/products/' + routeParam.id)
            .then(res => res.json())
            .then(json => {
                // let index = cart.findIndex(e => e.id == product.id)
                // if (index >= 0) {
                //     setProductInCart(true)
                // } else setProductInCart(false)
                dispatch(currentProduct(json))
                setIsLoading(false)
            })
            .catch((e) => { setIsLoading(false); console.log("ERROR", e) })
    }
    useEffect(() => {
        let index = cart.find(e => e.id == routeParam.id)
        if(index){
            setProductInCart(true)
            dispatch(currentProduct(index))
            setIsLoading(false)
        }else{
            getProduct()
        }
    }, [])
    // useEffect(() => {
    //     let index = cart.findIndex(e => e.id == product.id)
    //     alert(index)
    //     if (index >= 0) {            
    //         setProductInCart(true)
    //     } else setProductInCart(false)
    // }, [cart])

    function getCurruntDate() {
        let date = new Date()
        return `${date.getDate()}-${(date.getMonth()) + 1}-${date.getFullYear()}`
    }
    if (isLoading) return <SimpleLoader />
    return (
        <Box px={3} bg={COLORS.white} flex={1}>
            <Pressable bg={COLORS.primary} w={35} h={35}
                rounded={45} zIndex={10} justifyContent={"center"} alignItems={"center"}
                position={"absolute"}
                top={5}
                left={3}
                onPress={() => props.navigation.pop()} >
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
                    {product.description}
                </Text>
                <Button
                    rounded={50}
                    my={5}
                    borderWidth={2}
                    borderColor={COLORS.primary}
                    bg={productInCart ? COLORS.ultraLightPrimary : COLORS.primary}
                    _pressed={{
                        bg: productInCart ? COLORS.white : COLORS.lightPrimary
                    }}
                    onPress={() => {
                        if (productInCart) {
                            props.navigation.navigate("CartScreen")
                        } else {
                            setProductInCart(true)
                            dispatch(addItemToCart(product))
                        }
                    }}
                >
                    <HStack space={2}>
                        <Heading color={productInCart ? COLORS.primary : COLORS.white} fontSize={15}>
                            {productInCart ? "GO TO CART" : "ADD TO CART"}
                        </Heading>
                        <Icon name={"cart"} color={productInCart ? COLORS.primary : COLORS.white} size={17} />
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
