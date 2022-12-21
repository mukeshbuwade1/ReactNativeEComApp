import { Box, Button, Center, FlatList, Flex, Heading, HStack, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { COLORS } from '../assets/Colors';
import { Dimensions } from 'react-native';
import { retingView } from '../components/Product';
import NumericInput from 'react-native-numeric-input';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useSelector,useDispatch } from 'react-redux';
const w = Dimensions.get("window").width

const CartScreen = () => {
// redux hooks
const dispatch = useDispatch()
const { cart :products} = useSelector((state => state.cart))

// react hooks
    // const [products, setProducts] = useState([])
    const [productCount, setProductCount] = useState(1)

    // function getProducts() {
    //     let res = fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(json => {
    //             setProducts(json)
    //         })
    //         .catch((e) => console.log("ERROR", e))

    // }
    // useEffect(() => (getProducts()), [])
    const renderItem = ({ item }) => {
        return (
            <HStack
                bg={COLORS.white}
                w={"100%"} h={90}
                mb={4}
                rounded={'sm'}
                py={1}
            >
                <Center flex={1}>
                    <Image
                        alt={item?.title ?? "product_image"}
                        resizeMode={"contain"}
                        source={{ uri: item?.image }}
                        w={70}
                        h={70}
                        py={2}
                    />
                </Center>
                <View px={2} py={1} justifyContent={"space-between"} flex={4} >
                    <Text numberOfLines={2} fontWeight={"medium"} fontSize={14} color={"#444"}>{item?.title}</Text>
                    <HStack  flexDirection={"row"} justifyContent={"space-between"}  paddingRight={1}>
                        <NumericInput                        
                            value={productCount}
                            onChange={value => setProductCount(value)}
                            onLimitReached={(isMax, msg) => console.log(isMax, msg)}
                            totalWidth={120}
                            totalHeight={30}
                            iconSize={25}
                            step={1}
                            minValue={1}
                            maxValue={10}
                            valueType='real'
                            rounded
                            textColor={COLORS.black}
                            iconStyle={{ color: 'white' }}
                            rightButtonBackgroundColor={COLORS.primary}
                            leftButtonBackgroundColor='#E56B70'
                        />
                        <Text  fontWeight={"black"} fontSize={17}  >&#x20B9;{item?.price}</Text>
                    </HStack>
                    {/* {retingView(item?.rating)} */}
                </View>
                <View>

                </View>
            </HStack>
        )
    }

    return (
        <Box p={3} bg={COLORS.ultraLightPrimary} flex={1}>
            <HStack justifyContent={"space-between"}>
                <Pressable bg={COLORS.primary} w={35} h={35}
                    rounded={45} zIndex={10} justifyContent={"center"} alignItems={"center"} >
                    <Icon name={"chevron-back-sharp"} color={COLORS.white} size={25} />
                </Pressable>
                <Heading>Cart</Heading>
                <View></View>
            </HStack>
            <SwipeListView
                data={products}
                renderItem={(data, rowMap) => renderItem(data, rowMap)
                }
                renderHiddenItem={(data, rowMap) => (
                    <Pressable bg={"#f00"}
                        w={"100%"}
                        h={90}
                        mb={4}
                        rounded={'sm'}
                        alignItems="flex-end"
                        onPress={() => alert("khush ab")}
                    >
                        <Center w={75} h={90}>
                            <Icon name="trash" color={COLORS.white} size={25} />

                        </Center>
                    </Pressable>
                )}
                // leftOpenValue={75}
                rightOpenValue={-75}
            />
        </Box>
    )
}

export default CartScreen