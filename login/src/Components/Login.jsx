import React from "react";
import { Signup } from "./SignUp";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
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
} from '@chakra-ui/react'


export function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const initialvalues = {email:"", password :""};
    const[inputValues, setInputValues] = useState(initialvalues);
    const[error, setError] = useState({});
    const[isSubmit, setIsSubmit] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isCheck, setIscheck] = useState(false);







    const handleChange =(inp)=>{
      const {name,value} = inp.target;
      setInputValues({...inputValues, [name] : value});
      console.log(inputValues);
    }
    
    const handlelogin = (inputValues) => {
      fetch(`http://localhost:4000/Userdetails`)
        .then((res) => res.json()).then((res)=>{
          res.map((el)=>{
            if(el.email==inputValues.email && el.password==inputValues.password){
              if(inputValues){
                setIsAuth(true);
              }
             
            }
          
          })
        })
    };
  
  
    useEffect(()=>{
     
      handlelogin(inputValues);
      if(Object.keys(error).length===0 && isSubmit){
         

      }

    },[error])


    const handleSubmit =(e)=>{
        e.preventDefault();
        setError(validate(inputValues));
        setIsSubmit(true);
    
    }

    const validate =(values)=>{
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(values.email==""){
        errors.email = "email is required";
      }
      else if(!regex.test(values.email)){
        errors.email = "Enter a valid email";
      }
      if(values.password==""){
        errors.password = "password is required";
      }
      else if(values.password.length<6){
        errors.password = "password must not be less than 6 character";
      }
      return errors;
    }

    return (
      <>



        <Button bg="white"  textAlign="center" onClick={onOpen}>login</Button>
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
               <Box height="32rem" bg="#2874f0" width="16rem" padding="35px">
                <Text fontWeight="500" color="white" fontSize='3xl'>Login</Text>
                 <Text fontWeight="500"  marginTop="15px" color="#Dbdbdb" fontSize='1xl'>Get access to your <br /> Orders, Wishlist and Recommendations</Text>
                 <Image marginTop="10rem" src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png' aend='image' />
               </Box>
               <Box  height="32rem"  padding="35" width="24rem" color="#878787">
                   
               <FormControl>
              {
                (isAuth ? (<Alert width={150} marginBottom={2}  height={6} status='success'>
                <AlertIcon height={4} />
                <AlertTitle>Logged in</AlertTitle>
              </Alert>) :  ""
              )}
              
               
                <FormLabel>Email address</FormLabel>
               <Input color="black" marginTop="-3" name="email"  variant="flushed"  placeholder="Enter Email"  value={inputValues.email} onChange={handleChange}  />
               <Text color="red" fontSize='xs'>{error.email}</Text>
               <FormLabel marginTop="5">Password</FormLabel>
              <Input color="black" marginTop="-3" name="password" type="password"  variant="flushed" placeholder="Enter Password" value={inputValues.password} onChange={handleChange} />
              <Text  color="red" fontSize='xs'>{error.password}</Text>
              <Text marginTop="5" fontSize='xs'>By continuing, you agree to Flipkart's <Link color="#2f74f0" href="">Terms of Use </Link>and <Link color="#2f74f0" href="">Privacy Policy.</Link></Text>
              
              <Button onClick={handleSubmit} borderRadius="0.5"  marginTop="4" padding="6" color="white" bg="#fb641b" width="19.7rem">Login</Button>
              <Text marginTop="2" marginBottom="2" textAlign="center">OR</Text>
              <Button boxShadow='md' p='6' rounded='md' borderRadius="0.5" padding="6" color="#2f74f0" bg="white" width="19.7rem">Request OTP</Button>
              <Link><Text marginTop="2" textAlign="center" color="#2f74f0">New to Flipkart? {<Signup/>} </Text> </Link>
              </FormControl>

               </Box>
                </div> 

           
           
            </ModalBody>
  
           
          </ModalContent>
        </Modal>


      </>
    )
  }


