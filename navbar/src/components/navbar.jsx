import { Flex, Spacer, Box, Icon, Center } from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/react";
import {
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { HiUserCircle } from "react-icons/hi";
import "../App.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
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
        <Popover trigger="hover">
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

            <PopoverBody color="black">
              <Flex h="56px"  justifyContent="space-between">
                <Center fontWeight="600" fontSize='14px'>New Customer?</Center>
               <Center><Link color="#2874f0" fontSize='14px'>Sign Up</Link></Center> 
              </Flex>
              <hr margin="0px" />
              <Flex h="49px" fontSize='14px' className="pop1">
              <Center><HiUserCircle color="#2874f0" size="18px" /></Center> <Center ml='16px'>Flipkart Plus Zone</Center>
              </Flex>
              <hr />
              <Flex  className="pop1" h='49px' fontSize='14px'><Center><HiUserCircle color="#2874f0" size="18px" /></Center> <Center ml='16px'>Flipkart Plus Zone</Center></Flex>
              <hr />
              <Flex h="49px" fontSize='14px' className="pop1"  > <Center><HiUserCircle color="#2874f0" size="18px" /></Center> <Center ml='16px'>Orders</Center></Flex>
              <Flex h="49px" fontSize='14px' className="pop1"> <Center><HiUserCircle color="#2874f0" size="18px" /></Center> <Center ml='16px'> Wishlist</Center></Flex>
              <Flex h="49px"fontSize='14px'className="pop1">  <Center><HiUserCircle color="#2874f0" size="18px" /></Center><Center ml='16px'>Rewards</Center></Flex>
              <Flex h="49px" fontSize='14px' className="pop1"> <Center><HiUserCircle color="#2874f0" size="18px" /></Center> <Center ml='16px'>Gift cards</Center></Flex>
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
        <Popover trigger="hover">
          <PopoverTrigger>
            <Box
              fontSize="16px"
              textAlign="center"
              w="7%"
              color="white"
              fontWeight="600"
            >
              More
              <ChevronDownIcon />
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

            <PopoverBody color="black">
            <Flex h="49px" fontSize='14px' className="pop1"  > <Center><HiUserCircle color="#2874f0" size="18px" /></Center> <Center ml='16px'>Orders</Center></Flex>
              <Flex h="49px" fontSize='14px' className="pop1"> <Center><HiUserCircle color="#2874f0" size="18px" /></Center> <Center ml='16px'> Wishlist</Center></Flex>
              <Flex h="49px"fontSize='14px' className="pop1">  <Center><HiUserCircle color="#2874f0" size="18px" /></Center><Center ml='16px'>Rewards</Center></Flex>
              <Flex h="49px" fontSize='14px' className="pop1"> <Center><HiUserCircle color="#2874f0" size="18px" /></Center> <Center ml='16px'>Gift cards</Center></Flex>
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
};
export default Navbar;
