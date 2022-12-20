import { Box, Button, Center, Container, FlatList, Flex, FormControl, Heading, HStack, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React from 'react'
import { COLORS } from '../assets/Colors'
import Icon from 'react-native-vector-icons/dist/Ionicons';

const ButtonComp = (props) => {
    const { title, icon_name, my, w, rounded, bg, _pressed, small,onPress } = props
    let font_size = 15,
        icon_size = 17,
        btn_py = 2.5
    if (small) {
        font_size = 12;
        icon_size = 14;
        btn_py = 1.5;
    }

    return (
        <Button
            w={w ?? "full"}
            py={btn_py ?? 2}
            rounded={rounded ?? 50}
            my={my ?? 3}
            bg={bg ?? COLORS.primary}
            _pressed={{
                bg: COLORS.lightPrimary,
                ..._pressed
            }}
            onPress={onPress?()=>onPress():()=>{}}
        >
            <HStack space={2}>
                <Heading color={COLORS.white} fontSize={font_size}>{title ?? ""}</Heading>
                {icon_name && <Icon name={icon_name} color={COLORS.white} size={icon_size} />}
            </HStack>
        </Button>

    )
}

export default ButtonComp