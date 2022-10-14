import React from 'react';
import { Box, Button, Checkbox, CheckboxGroup, Flex, Img, Input, Stack, Text } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa';
import { BsCircle } from 'react-icons/bs';

import { useState } from 'react';
import { useEffect } from 'react';

function OrderPage() {
    const [Order, setOrder] = useState([]);
    const getData = () => {
        fetch('http://localhost:4000/fashion').then((res) => (res.json()))
            .then((res) => {
                setOrder(res);
            })
    }
    useEffect(() => {
        getData();
    }, [])
    console.log(Order, "der");
    return (
        <Box display="flex" gap="15px" bg="#F1F3F6" pt="50px">
            <Box w="20%" h="fit-content" boxShadow="0 2px 4px 0 rgb(0 0 0 / 8%)" bg="white" >

                <Text pl="50px" fontSize={"22px"} > Filters</Text>
                <hr /><Box p="5px 0px 13px 50px">
                    <CheckboxGroup colorScheme='blue' >
                        <Text pb="10px"> ORDER STATUS</Text>
                        <Stack spacing={[1, 2]} >
                            <Checkbox value='ontheway'>On the way</Checkbox>
                            <Checkbox value='deliverd'>Deliverd</Checkbox>
                            <Checkbox value='cancelled'>Cancelled</Checkbox>
                            <Checkbox value='returned'>Returned</Checkbox>
                        </Stack>
                    </CheckboxGroup></Box>
                <hr />
                <Box p="15px 0px 60px 50px">
                    <CheckboxGroup colorScheme='blue'>
                        <Text pb="10px"> ORDER TIME</Text>
                        <Stack spacing={[1, 2]} >
                            <Checkbox value='last30days'>Last 30 days</Checkbox>
                            <Checkbox value='2022'>2022</Checkbox>
                            <Checkbox value='2021'>2021</Checkbox>
                            <Checkbox value='2020'>2020</Checkbox>
                            <Checkbox value='2019'>2019</Checkbox>
                            <Checkbox value='older'>Older</Checkbox>
                        </Stack>
                    </CheckboxGroup> </Box>
            </Box>
            <Box w="80%" h="900px">
                <Box w="88%" bg="white" boxShadow="0 2px 4px 0 rgb(0 0 0 / 8%)" display="flex">  <Input w="90%" outline={{ border: "1px solid black" }} placeholder='Search Your orders here' size='md' rounded={'0px'} /> <Button bg="#2874F0" color="white" rounded={"0px"} _hover={{ bg: "#2874F0" }}> <Text mr="6px"> <FaSearch size={"14px"} /> </Text> Search  Orders</Button></Box>
                <Box mt="15px" w="98%">


                    {Order.map((item) => (
                        <Flex h="110px" border={"1px solid silver"} rounded="5px" p="5px 0px 5px 0px" key={Math.random()} mb="9px" alignItems={"center"} justifyContent={"space-around"} gap="15px" bg="white" boxShadow="0 2px 4px 0 rgb(0 0 0 / 8%)" _hover={{boxShadow:"2xl"}}>
                            <Img maxWidth="60px" src={item.image} alt="img" />
                            <Box>  <Text fontWeight={"400"}> {item.description}</Text>

                                <Text color={"#878787"} fontSize="13px"> Color : {item.color}</Text>
                            </Box>
                            <Text>₹      {item.new_price}</Text>
                            <Text>  Delivery Expected By  Nov 20</Text>
                        </Flex>

                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default OrderPage;