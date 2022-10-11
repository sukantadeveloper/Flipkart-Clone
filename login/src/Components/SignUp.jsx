import React from "react";
import { Login } from "./Login";
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
    FormLabel,
    Link
} from '@chakra-ui/react'
export function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button textAlign="center" onClick={onOpen}>Signup</Button>
  
        <Modal
          SignupRef={initialRef}
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
                <Text fontWeight="600" color="white" fontSize='2xl'>Looks like you're new here!</Text>
                 <Text fontWeight="600"  marginTop="15px" color="#Dbdbdb" fontSize='1xl'>Sign up with your mobile <br /> number to get started</Text>
                 <Image marginTop="10rem" src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png' alt='image' />
               </Box>
               <Box  height="30rem"  padding="35" width="24rem" color="#878787">
                   
               <FormControl>
               <FormLabel>Enter Mobile Number</FormLabel>
               <Input marginTop="-3" variant="flushed" placeholder="Enter Mobile Number" />

        
              <Text marginTop="7" fontSize='xs'>By continuing, you agree to Flipkart's <Link color="#2f74f0" href="">Terms of Use </Link>and <Link color="#2f74f0" href="">Privacy Policy.</Link></Text>
              
              <Button borderRadius="0.5"  marginTop="4" padding="6" color="white" bg="#fb641b" width="19.7rem">CONTINUE</Button>
              <Button onClick={<Login/>} marginTop="4" boxShadow='md' p='6' rounded='md' borderRadius="0.5" padding="6" color="#2f74f0" bg="white" width="19.7rem">Existing User? Log in</Button>
              </FormControl>

               </Box>
                </div>  
           
           
            </ModalBody>
  
           
          </ModalContent>
        </Modal>
      </>
    )
  }

