// import { Flex, Spacer, Box, Icon, Center } from "@chakra-ui/react";
// import { Image, Link } from "@chakra-ui/react";
import {
  
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { HiUserCircle } from "react-icons/hi";
import "../App.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
// import { FaShoppingCart } from "react-icons/fa";
import { InputRightElement } from "@chakra-ui/react";
// import { IoSearchSharp } from "react-icons/io5";
import { useMediaQuery } from '@chakra-ui/react'
import vikas from '../Icon/icon1.svg';
import url1 from "../Icon/coin1.webp";
import coin2 from "../Icon/coin2.webp";
import icon3 from "../Icon/icon3.webp";
import icon4 from "../Icon/icon4.webp";
import icon5 from "../Icon/icon5.webp";
import icon6 from "../Icon/icon6.webp";
import icon7 from "../Icon/icon7.webp";
import icon8 from "../Icon/icon8.webp";
import icon9 from "../Icon/icon9.webp";
import icon10 from "../Icon/icon10.webp";
import icon11 from "../Icon/icon11.webp";
import icon12 from "../Icon/icon12.webp";
import icon13 from "../Icon/icon13.webp";
import icon14 from "../Icon/icon14.webp";
import icon15 from "../Icon/icon15.png";

import { Flex,Box, Center ,Link,Image, Spacer,InputGroup,Input,InputLeftElement,Icon} from "@chakra-ui/react";
import {HamburgerIcon,SearchIcon } from "@chakra-ui/icons"
import {BsFillFilePlusFill,BsFillCreditCard2BackFill,BsBellFill,BsQuestionSquareFill} from "react-icons/bs";
import { FaShoppingCart,FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import {RiInboxUnarchiveFill,RiCoupon3Fill} from "react-icons/ri"
import {AiFillHeart} from "react-icons/ai"
import {BiTrendingUp} from "react-icons/bi"
import {HiDownload} from "react-icons/hi"
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






const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  
  const [isLargerThan670] = useMediaQuery('(min-width: 730px)')

if(isLargerThan670){
  return (
    <div>
      <Flex bg="#2874f0" h="56px" align="center">
        <Spacer />

        <Box>
          <Box mr="10px" >
            <Image
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipkart"
              h="20px"
              marginBottom="-5px"
            />
            <Flex alignItems='center' >

            <Link className="explore" color="white">
              Explore
            </Link>
            <Link className="explore1" color="yellow.400">
              Plus
            </Link>
            <Image src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="plus" w='10px' h='10px'/>
            </Flex>
           

          </Box>
        </Box>
        {/* =======search======== */}
        <Box w="28%">
          <InputGroup>
            <Input
              placeholder="Search for products,brands and more"
              bg="white"
              w="100%"
              borderRadius="2px"
              h="36px"
              fontSize="14px"
            />
            <InputRightElement
              children={
                <IoSearchSharp
                  color="#2874f0"
                  cursor="pointer"
                  fontSize="23px"
                  fontWeight="bold"
                />
              }
            />
          </InputGroup>
        </Box>
        {/* ======================================search end======================================= */}
        <Popover trigger="hover" >
          <PopoverTrigger>
            <Box
              bg="white"
              h="31px"
              w="9.5%"
              textAlign="center"
              fontWeight="600"
              color="#2874f0"
              ml="19px"
              pt="2px"
              borderRadius="1px"
              cursor="pointer"
            >
              Login
            </Box>
          </PopoverTrigger>
          <PopoverContent
            zIndex={4}
            bg="white"
            color="white"
            w="250px"
            borderRadius="2px"
            mt="5px"
          >
            <PopoverArrow bg="white" hasArrow arrowSize={15} />

            <PopoverBody color="black" className='shade' >
              <Flex h="56px"  justifyContent="space-between">
                <Center fontWeight="600" fontSize='14px'>New Customer?</Center>
               <Center><Link color="#2874f0" fontSize='14px'>Sign Up</Link></Center> 
              </Flex>
              <hr margin="0px" />
              <Flex h="49px" fontSize='14px' className="pop1">
              <Center ml='10px'><HiUserCircle color="#2874f0" size="18px" /></Center> <Center ml='16px'>Flipkart Plus Zone</Center>
              </Flex>
              <hr />
              <Flex  className="pop1" h='49px' fontSize='14px'><Center ml='10px'><Image src={vikas}  alt="vikas"/></Center> <Center ml='16px'>Flipkart Plus Zone</Center></Flex>
              <hr />
              <Flex h="49px" fontSize='14px' className="pop1"  > <Center ml='10px'><RiInboxUnarchiveFill color="#2874f0" size="18px"  /></Center> <Center ml='16px'>Orders</Center></Flex><hr/>
              <Flex h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><AiFillHeart color="#2874f0" size="18px" /></Center> <Center ml='16px'> Wishlist</Center></Flex><hr/>
              <Flex h="49px"fontSize='14px'className="pop1">  <Center ml='10px'><RiCoupon3Fill color="#2874f0" size="18px" /></Center><Center ml='16px'>Rewards</Center></Flex><hr/>
              <Flex h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><BsFillCreditCard2BackFill color="#2874f0" size="18px" /></Center> <Center ml='16px'>Gift cards</Center></Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        {/* {=============login end====================} */}
        <Box
          fontSize="16px"
          textAlign="center"
          w="14%"
          color="white"
          fontWeight="600"
        >
          Become a Seller
        </Box>

        {/* ==================================more============= */}
        <Popover trigger="hover" >
          <PopoverTrigger>
            <Box
              fontSize="16px"
              textAlign="center"
              w="7%"
              color="white"
              fontWeight="600"
            >
              More
              <ChevronDownIcon 
              _hover={{ transform: "rotate(180deg)" }}
              />
            </Box>
          </PopoverTrigger>
          <PopoverContent
            zIndex={4}
            bg="white"
            color="white"
            w="250px"
            borderRadius="2px"
            mt="5px"
            h='auto'
          >
            <PopoverArrow bg="white" />

            <PopoverBody color="black" className='shade'>
            <Flex h="49px" fontSize='14px' className="pop1"  > <Center ml='10px'><BsBellFill color="#2874f0" size="18px" /></Center> <Center ml='16px'>Notification Prefernces</Center></Flex> <hr/>
              <Flex h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><BsQuestionSquareFill color="#2874f0" size="18px" /></Center> <Center ml='16px'>24x7 Customer care</Center></Flex> <hr/>
              <Flex h="49px"fontSize='14px' className="pop1">  <Center ml='10px'><BiTrendingUp color="#2874f0" size="18px" /></Center><Center ml='16px'>Advertize</Center></Flex><hr/>
              <Flex h="49px" fontSize='14px' className="pop1"> <Center ml='10px'><HiDownload color="#2874f0" size="18px" /></Center> <Center ml='16px'>Download app</Center></Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        {/* ===============================more end============= */}

        <Icon as={FaShoppingCart} w={5} h={5} color="white" ml="2%" mr="-5px" />
        <Box
          fontSize="17px"
          ml="10px"
          textAlign="center"
          color="white"
          fontWeight="600"
        >
          Cart
        </Box>

        <Spacer />
      </Flex>
    </div>
  );
 }

 else{
  
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
            <DrawerContent
            className="drawercontent">
             
              <DrawerHeader bg='#2874f0' color='white' h='40px' className="head"> <Center><FaUser pr='10px' fontSize='15px'/> &nbsp; Login & Signup</Center> <Center><Image src={icon15} w='20px' h='20px'/></Center></DrawerHeader>
    
              <DrawerBody ml='-5px'>
              <Flex h="38px" fontSize='14px'   > <Center ><Image src={coin2}  alt="c" w='15px'/></Center> <Center className="drawer" ml='16px'>SuperCoin Zone</Center></Flex>
                <Flex h="38px" fontSize='14px'   > <Center ><Image src={icon3} w="15px" /></Center> <Center className="drawer" ml='16px'>Flipkart Plus Zone</Center></Flex><hr/>
                  <Flex h="38px" fontSize='14px' > <Center ><Image src={url1} w='15px'/></Center> <Center className="drawer" ml='16px'> All Categories</Center></Flex>
                  <Flex h="38px"fontSize='14px'>  <Center ><Image src={icon4} w='15px' /></Center><Center className="drawer" ml='16px'>Trending Stores</Center></Flex>
                  <Flex h="38px" fontSize='14px' > <Center ><Image src={icon5} w='15px' /></Center> <Center className="drawer" ml='16px'>More on Flipkart</Center></Flex><hr/>
                  <Flex h="38px" fontSize='14px'   > <Center ><Image src={icon6} w='15px'  /></Center> <Center className="drawer" ml='16px'>Choose Language</Center></Flex><hr/>
                  <Flex h="38px" fontSize='14px' > <Center ><Image src={icon7} w='15px' /></Center> <Center className="drawer" ml='16px'> Offer Zone</Center></Flex>
                  <Flex h="38px"fontSize='14px'>  <Center ><Image src={icon8} w='15px' /></Center><Center className="drawer" ml='16px'>Sell on Flipkart</Center></Flex>
                  <Flex h="38px" fontSize='14px' > <Center ><Image src={icon9} w='15px' /></Center> <Center className="drawer" ml='16px'>My Orders</Center></Flex>
                  <Flex h="38px" fontSize='14px'   > <Center ><Image src={icon10} w='15px'  /></Center> <Center className="drawer" ml='16px'>Coupons</Center></Flex>
                  <Flex h="38px" fontSize='14px' > <Center ><Image src={icon11} w='15px' /></Center> <Center className="drawer" ml='16px'> My Cart</Center></Flex>
                  <Flex h="38px"fontSize='14px'>  <Center ><Image src={icon12} w='15px' /></Center><Center className="drawer" ml='16px'>My Wishlist</Center></Flex>
                  <Flex h="38px" fontSize='14px' > <Center ><Image src={icon13} w='15px' /></Center> <Center className="drawer" ml='16px'>My Account</Center></Flex>
                  <Flex h="38px" fontSize='14px' > <Center ><Image src={icon14} w='15px' /></Center> <Center className="drawer" ml='16px'>My Notification</Center></Flex><hr/>
                  <Flex h="38px" fontSize='14px' > <Center className="drawer">Notification Preferences</Center></Flex>
                  <Flex h="38px" fontSize='14px' >  <Center className="drawer" >Help Center</Center></Flex>
                  <Flex h="38px" fontSize='14px' >  <Center className="drawer" >Legal</Center></Flex>
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

 



};
export default Navbar;
