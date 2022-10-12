import { Flex,Box, Center ,Link,Image, Spacer,InputGroup,Input,InputLeftElement,} from "@chakra-ui/react";
import {HamburgerIcon,SearchIcon } from "@chakra-ui/icons"
import {BsFillFilePlusFill} from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useDisclosure } from '@chakra-ui/react';
 import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

import "../App.css";

const Mobile=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();

   return( <Box>
  <Flex bg="#2874f0" h='52px'> 
  <Center ml='10px' ref={btnRef} colorScheme='white' onClick={onOpen}>
        <HamburgerIcon color='white' fontSize='20px' />
      </Center>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
         
          <DrawerHeader bg='#2874f0' color='white'>Login & Signup</DrawerHeader>

          <DrawerBody ml='-5px'>
          <Flex h="38px" fontSize='14px'   > <Center ><SearchIcon  /></Center> <Center className="drawer" ml='16px'>SuperCoin Zone</Center></Flex>
            <Flex h="38px" fontSize='14px'   > <Center ><SearchIcon  /></Center> <Center className="drawer" ml='16px'>Flipkart Plus Zone</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><SearchIcon /></Center> <Center className="drawer" ml='16px'> All Categories</Center></Flex>
              <Flex h="38px"fontSize='14px'>  <Center ><SearchIcon /></Center><Center className="drawer" ml='16px'>Trending Stores</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><SearchIcon /></Center> <Center className="drawer" ml='16px'>More on Flipkart</Center></Flex>
              <Flex h="38px" fontSize='14px'   > <Center ><SearchIcon  /></Center> <Center className="drawer" ml='16px'>Choose Language</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><SearchIcon /></Center> <Center className="drawer" ml='16px'> Offer Zone</Center></Flex>
              <Flex h="38px"fontSize='14px'>  <Center ><SearchIcon /></Center><Center className="drawer" ml='16px'>Sell on Flipkart</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><SearchIcon /></Center> <Center className="drawer" ml='16px'>My Orders</Center></Flex>
              <Flex h="38px" fontSize='14px'   > <Center ><SearchIcon  /></Center> <Center className="drawer" ml='16px'>Coupons</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><SearchIcon /></Center> <Center className="drawer" ml='16px'> My Cart</Center></Flex>
              <Flex h="38px"fontSize='14px'>  <Center ><SearchIcon /></Center><Center className="drawer" ml='16px'>My Wishlist</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><SearchIcon /></Center> <Center className="drawer" ml='16px'>My Account</Center></Flex>
              <Flex h="38px" fontSize='14px' > <Center ><SearchIcon /></Center> <Center className="drawer" ml='16px'>My Notification</Center></Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  <Center ml='10px' mt='5px'>
          <Box  >
            <Image
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipkart"
              h="16px"
              marginBottom="-3px"
            />
            <Flex alignItems='center' >

            <Link className="explore3" color="white">
              Explore
            </Link>
            <Link className="explore4" color="yellow.400">
              Plus
            </Link>
            <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus" w='10px' h='10px'/>
            </Flex>
           

          </Box>
        </Center>
        <Spacer/>
        <Center w='45px'><BsFillFilePlusFill color='white'/></Center>
        <Center  w='45px'><FaShoppingCart color='white'/></Center>
       <Center color='white' mr='10px'>Login</Center>
  </Flex>
  <Flex  bg="#2874f0" h='52px'>
    <Center w='100%' ml='1%' mr='1%'> <InputGroup>
            <Input
              placeholder="Search for products,brands and more"
              bg="white"
              w="100%"
              borderRadius="2px"
              h="36px"
              fontSize="14px"
            />
            <InputLeftElement
              children={
                <IoSearchSharp
                  color="#2874f0"
                  cursor="pointer"
                  fontSize="23px"
                  fontWeight="bold"
                />
              }
            />
          </InputGroup></Center>
  </Flex>
    </Box>)
  
}

export default Mobile