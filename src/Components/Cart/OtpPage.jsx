import { InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, HStack, PinInput, PinInputField, Text, useToast } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function OtpPgae() {

  const [realOtp, setRealOtp] = useState('');
  const [state, setState] = useState();
  const [forwardCongo, setForwardCongo] = useState(false);

  const { cartData, SetCartData, getData, setOrderpageData, orderpageData } = useContext(CartContext);

  const toast = useToast()
  const navigate=useNavigate();
  let value = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

  useEffect(() => {
    window.scrollTo(0, 0)

    setState(value);
    toast({
      position: 'top',
      render: () => (
        <Box color='white' p={3} bg='blue.500' mt="100px">
          Your OTP is {value}
        </Box>
      ),
    })
  }, []);

  const orderPageProducts = () => {
    // for(var i=0; i<cartData.length;i++){
    //   fetch(`https://flipkart-data-h5tg.onrender.com/orderedProducts`, {
    //     method: "POST",
    //     body: JSON.stringify({...cartData[i]}),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //   .then((res)=>res.json())
    //   .then((res)=>{
    //     console.log(res,  " orderpage page products" );
    //   })
    // }

    setOrderpageData([...orderpageData, ...cartData,])

    for (let i = 0; i < cartData.length; i++) {
      fetch(`https://flipkart-data-h5tg.onrender.com/products/${cartData[i].id}`, {
        method: "DELETE"
      })
        .then(response => {
          return response.json()
        })
        .then(data => {
          getData()
        })
    }
  }




  const handelgetOtp = (e) => {

    setRealOtp(realOtp + e.target.value);
  }



  const handelSubmitOtp = () => {
  
    if (realOtp == state) {
      navigate('/congo')
      setForwardCongo(true);
      orderPageProducts()
      // alert("yes true did it");
    } else {
      // alert("Wr");
      setRealOtp("");
      toast({
        position: 'top',
        render: () => (
          <Box color='white' rounded={'10'} p={3} bg='red' display={'flex'} alignItems='center' >
            <InfoIcon />
            <Text ml='2' fontWeight={'bold'} color='white'  > Wrong Otp please refresh again the page</Text>
          </Box>
        ),
      })

    }

  }

  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      w="100%"
      h={["70vh", "100vh", "100vh"]}
      bg="#f1f3f6"
    >
      <Box h="40vh" w={["70%", "25%", "25%"]} bg="white" display='grid' justifyContent={'center'} alignItems='center' shadow={"sm"} borderRadius={"4"}>
        <Heading>ENTER OTP</Heading>
        <HStack mt='-10'   >
          <PinInput placeholder="-"  >
            <PinInputField onChange={handelgetOtp} />
            <PinInputField onChange={handelgetOtp} />
            <PinInputField onChange={handelgetOtp} />
            <PinInputField onChange={handelgetOtp} />
          </PinInput>
        </HStack>
       
          <Button mt='-10' onClick={handelSubmitOtp} >
          Submit
        </Button>
       
      </Box>
    </Box>
  );
}

export default OtpPgae;
