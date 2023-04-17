import { Box, Grid, GridItem, Img, Text } from '@chakra-ui/react';
import React from 'react';

import { BsBox } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function CategoryBar() {
    var data = [
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f0b3c58d99158fc3.png?q=100",
            title: "Top Offers",
            page:"products/grocery"
           
        },
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9bb3499c8248d2ba.png?q=100",
            title: "Mobiles & Tablets",
            page:"/products/mobiles"
        },
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f8928124c04bc6e9.png?q=100",
            title: "Electronics",
            page:"/products/electronics"
        },
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d7278abbff8ba2a.png?q=100",
            title: " TVs & Appliances",
            page:"/products/appliances"
        },
        {

            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a28598a782b6b4cf.png?q=100",
            title: "Fashion",
            page:"/products/fashion"
        }, {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a84e58e11c8b10b6.png?q=100",
            title: "Beauty",
            page:"/"
        }
        ,
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47874cd4acbfaf20.png?q=100",
            title: "Home & Furniture",
            page:"/products/home"
        }
        ,
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a1140bead6bfd787.png?q=100",
            title: "FK Originals",
            page:"/products/appliances"
        },
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/705e339964226df2.png?q=100",
            title: "Flights & Hotels",
            page:"/"
        },
        {
            image: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5b09c4d0a60ecad7.png?q=100",
            title: "Grocery",
            page:"products/grocery"
        }
    ]
    return (
        <Box bg="white" boxShadow="2xl">
            <Box display={{ base: "none", md: "grid", lg: "grid" }}  >
                <Grid pb="20px" textAlign={"center"} templateColumns='repeat(10, 1fr)' m="auto" gap="20px" mt='1rem' pl="5px" pr="5px"  >
                    {
                        data.map((ele, index) => (
                            <NavLink key={Date.now()+index+Math.random()} to={ele.page}>
                                <GridItem _hover={{ color: "#2874F0" }} fontSize={{ base: "0px", md: "12px", lg: "14px" }}
                                >
                                    <Box cursor={'pointer'} > <Img src={ele.image} alt="" height={{ base: "0px", md: "60px", lg: "70px" }} m="auto" />
                                        <Text fontWeight={'600'}> {ele.title}</Text>
                                    </Box>

                                </GridItem>
                            </NavLink>

                        ))
                    }
                </Grid>
            </Box>


        </Box>
    );
}

export default CategoryBar;