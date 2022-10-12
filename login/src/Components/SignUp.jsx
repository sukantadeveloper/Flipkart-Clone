import React from "react";
import { useState, useEffect } from "react";
import { Login } from "./Login";
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
    Link
} from '@chakra-ui/react'
export function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isAuth, setIsAuth] = useState(false);
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    
  
    
    const initialvalues = {email:"", password :""};
    const[inputValues, setInputValues] = useState(initialvalues);
    const[error, setError] = useState({});
    const[isSubmit, setIsSubmit] = useState(false);

    
 
    const handleChange =(inp)=>{
      const {name,value} = inp.target;
      setInputValues({...inputValues, [name] : value});
      console.log(inputValues);
    }
     const handleSignup = (body) => {
      fetch(`http://localhost:4000/Userdetails`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(() => setIsAuth(true))
        .catch(() => setIsAuth(false));
    };
  
    useEffect(()=>{
      if(Object.keys(error).length===0 && isSubmit){
           handleSignup(inputValues);

      }

    },[error])



    const handleSubmit =(e)=>{
        e.preventDefault();
        setError(validate(inputValues));
        setIsSubmit(true);
        setIsAuth(false)
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
        <Button fontWeight="400" marginBottom="2" bg="white" textAlign="center" onClick={onOpen}>Signup</Button>
  
        <Modal
          SignupRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size = "2xl"
          padding = "0px"
        >
          <ModalOverlay />
        
          <ModalContent>
           
            <ModalBody  padding="-1.5" >
            <div style={{display:"flex"}}>
               <Box height="32rem" bg="#2874f0" width="16rem" padding="35px">
                <Text fontWeight="600" color="white" fontSize='2xl'>Looks like you're new here!</Text>
                 <Text fontWeight="600"  marginTop="15px" color="#Dbdbdb" fontSize='1xl'>Sign up with your mobile <br /> number to get started</Text>
                 <Image marginTop="10rem" src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png' alt='image' />
               </Box>
               <Box  height="32rem"  padding="35" width="24rem" color="#878787">
                   
               <FormControl>
               {
                (isAuth ? (<Alert width={250} marginBottom={2}  height={6} status='success'>
                <AlertIcon height={4} />
                <AlertTitle>SignUp Succesfully</AlertTitle>
              </Alert>) : 
              (<Alert width={250} height={6} status='error'>
  <AlertIcon height={4} />
  <AlertTitle>Incorrect Details</AlertTitle>
</Alert>)
              )}
               <FormLabel>Email address</FormLabel>
               <Input color="black" marginTop="-3" name="email"  variant="flushed"  placeholder="Enter Email"  value={inputValues.email} onChange={handleChange}  />
               <Text color="red" fontSize='xs'>{error.email}</Text>
               <FormLabel marginTop="5">Password</FormLabel>
              <Input color="black" marginTop="-3" name="password"  variant="flushed" placeholder="Enter Password" value={inputValues.password} onChange={handleChange} />
              <Text  color="red" fontSize='xs'>{error.password}</Text>
               

        
              <Text marginTop="7" fontSize='xs'>By continuing, you agree to Flipkart's <Link color="#2f74f0" href="">Terms of Use </Link>and <Link color="#2f74f0" href="">Privacy Policy.</Link></Text>
              
              <Button onClick={handleSubmit}  borderRadius="0.5"  marginTop="4" padding="6" color="white" bg="#fb641b" width="19.7rem">CONTINUE</Button>
              <Button  marginTop="4" boxShadow='md' p='6' rounded='md' borderRadius="0.5" padding="6" color="#2f74f0" bg="white" width="19.7rem">Existing User?{<Login />}</Button>
              </FormControl>

               </Box>
                </div>  
           
           
            </ModalBody>
  
           
          </ModalContent>
        </Modal>

      </>
    )
  }

