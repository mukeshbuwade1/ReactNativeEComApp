import { Box, Button, Center, FlatList, Flex, FormControl, Heading, HStack, Image, Input, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React from 'react'
import { COLORS } from '../assets/Colors'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ButtonComp from './ButtonComp';


const InputeComp = (props) => {
  const { Label, placeHolder } = props
  return (
    <FormControl my={2}>
      <FormControl.Label
        _text={{
          fontSize: "14px",
          fontWeight: "600",
          color: COLORS.primary
        }}>
        {Label}
      </FormControl.Label>
      <Input
        placeholder={placeHolder ?? Label}
        borderWidth={1}
        borderColor={ COLORS.ultraLightPrimary}
        bg={COLORS.ultraLightPrimary}
        color={COLORS.primary}
        type={"text"}
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
      {/* <FormControl.HelperText _text={{
        fontSize: 'xs'
      }}>
        Name should contain atleast 3 character.
      </FormControl.HelperText> */}
      <FormControl.ErrorMessage _text={{
        fontSize: 'xs'
      }}>
        Error Name
      </FormControl.ErrorMessage>
    </FormControl>
  )
}

const AddNewAddress = () => {

  return (
    <Box w={"full"} px={3}>
      <HStack justifyContent={"space-between"} alignItems={"center"} mt={3} >
        <Pressable
        borderWidth={2}
        borderColor={COLORS.primary}
        //  bg={COLORS.primary}
          w={25} h={25}
          rounded={45} zIndex={10} justifyContent={"center"} alignItems={"center"} >
          <Icon name={"chevron-back-sharp"} color={COLORS.primary} size={20} />
        </Pressable>
        <Heading fontSize={17} color={COLORS.primary}>Add New Address</Heading>
        <View></View>
      </HStack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack mt={1} >
          <InputeComp
            Label="Full Name"
            placeHolder="Mukesh Buwade"
          />
          <InputeComp
            Label="Mobile Number"
            placeHolder="0000000000"
          />
          <InputeComp
            Label="Address line 1"
          // placeHolder="First Name & Last Name"
          />

          <InputeComp
            Label="Address line 2"
          // placeHolder="First Name & Last Name"
          />
          <InputeComp
            Label="Landmark"
          // placeHolder="000 000"
          />
          <InputeComp
            Label="Pin Code"
            placeHolder="000 000"
          />
          <InputeComp
            Label="City"
            placeHolder="city"
          />

          <InputeComp
            Label="state"
            placeHolder="state"
          />

          <ButtonComp
            title="UPDATE PROFILE"
            icon_name="person"
          />

        </VStack>
      </ScrollView>
    </Box>
  )
}

export default AddNewAddress