import React from "react";
import { Link } from "react-router-dom";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,
    Text,
    Image,
    FormControl,
    Input,
    FormLabel
} from '@chakra-ui/react'

export function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
      <>
        <Button textAlign="center" onClick={onOpen}>login</Button>
       
        
        
        <Modal
          loginRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size = "2xl"
          padding = "0px"
        >
          <ModalOverlay />
          <ModalCloseButton />

          <ModalContent>
           
            <ModalBody  padding="-1.5" >

            <div style={{display:"flex"}}>
               <Box height="30rem" bg="#2874f0" width="16rem" padding="35px">
                <Text fontWeight="500" color="white" fontSize='3xl'>Login</Text>
                 <Text fontWeight="500"  marginTop="15px" color="#Dbdbdb" fontSize='1xl'>Get access to your <br /> Orders, Wishlist and Recommendations</Text>
                 <Image marginTop="10rem" src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png' aend='image' />
               </Box>
               <Box  height="30rem"  padding="35" width="24rem" color="#878787">
                   
               <FormControl>
               <FormLabel>Email address</FormLabel>
               <Input marginTop="-3" variant="flushed" placeholder="Enter Email/Mobile Number" />
               <FormLabel marginTop="5">Password</FormLabel>
              <Input marginTop="-3" variant="flushed" placeholder="Enter Password" />
        
              <Text marginTop="7" fontSize='xs'>By continuing, you agree to Flipkart's <Link color="#2f74f0" href="">Terms of Use </Link>and <Link color="#2f74f0" href="">Privacy Policy.</Link></Text>
              
              <Button borderRadius="0.5"  marginTop="4" padding="6" color="white" bg="#fb641b" width="19.7rem">Login</Button>
              <Text marginTop="2" marginBottom="2" textAlign="center">OR</Text>
              <Button boxShadow='md' p='6' rounded='md' borderRadius="0.5" padding="6" color="#2f74f0" bg="white" width="19.7rem">Request OTP</Button>
              <Link><Text marginTop="8" textAlign="center" color="#2f74f0">New to Flipkart? Create an account</Text></Link>
              </FormControl>

               </Box>
                </div> 

           
           
            </ModalBody>
  
           
          </ModalContent>
        </Modal>


      </>
    )
  }


