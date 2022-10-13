import React from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Grid, GridItem, HStack, Img, Input, Text } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi'
import { IoMdShareAlt } from 'react-icons/io'
import { MdRestartAlt } from 'react-icons/md'
import { HiCurrencyRupee } from 'react-icons/hi'
import { AiFillStar } from 'react-icons/ai'
import { BsLightningCharge } from 'react-icons/bs'
// import ReactImageMagnify from 'ReactImageMagnify';
// import SpacedSpan from '../components/SpacedSpan';
import ReactImageMagnify from 'react-image-magnify'
import './App.css'
function Viewpage() {
    const viewData = [
        {
            brand: "HIGHLANDER",
            category_id: 3,
            category_name: "fashion",
            image: "https://i.ibb.co/23StKfC/5e3aa027808d.jpg",
            description: "Georgette Blend Stitched Flared/A-line Gown",
            stars: 4.3,
            ratings: "4,161 Ratings ",
            reviews: " 310 Reviews",
            warrant: "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories",
            new_price: 1799,
            old_price: 2999,
            discount: 40,
            delivery_type: "Free delivery",
            offer: "₹16,750",
            offer2: " Off on Exchange",
            hidden_stars: 4.3,
            item_id: 1
        }
    ]
    return (
        <div>

            <HStack p="10px" >
                {viewData.map((item) => (
                    <Box w="40%" h="100vh" position={"sticky"}>
                        <Box display={"flex"} p="15px">
                            <Box w="15%"  > <Img h="20%" border={"2px solid #2974F1"} src={item.image} alt="smallImg" /> </Box>
                            <Box w="79%">
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: `${item.image}`,
                                        sizes: '(max-width: 480px) 100vw, (max-width: 1000px) 30vw, 360px'
                                    },
                                    largeImage: {
                                        src: `${item.image}`,
                                        width: 1000,
                                        height: 1800,
                                        margin:"auto"
                                    },
                                    enlargedImageContainerDimensions: {
                                        width: '200%',
                                        height: '100%'
                                    }
                                }} />

                            </Box>
                            <Box w="6%" bg="white" marginLeft="15px" > <FaHeart color="silver" size="25px" /> </Box>
                        </Box>
                        <Flex alignContent={"center"} justifyContent="space-around" w="100%" m="auto" color={"white"}  >

                            <Button alignItems={"center"}
                                size='md'
                                height='55px'
                                width='48%'
                                bg="#FE9E00"
                                rounded='1px'
                                fontSize={"18px"}
                                _hover={{ backgroundColor: "#FE9E00" }}
                            > <HiShoppingCart />
                                ADD TO CART
                            </Button><Button
                                size='md'
                                height='55px'
                                width='48%'
                                bg="#FB641B"
                                rounded='1px'
                                fontSize={"18px"}
                                _hover={{ backgroundColor: "#FB641B" }}
                            >
                                <BsLightningCharge />
                                BUY NOW
                            </Button>
                        </Flex>


                    </Box>
                ))}
                {viewData.map((item) => (
                    <Box w="60%" h="100vh" overflow="auto" pl="2%" zIndex={"-1"}> 
                        <Box > <Text p="15px" display="flex" alignItems="center" float="right"> <IoMdShareAlt /> Share</Text></Box>
                        <Box> <Text color={"silver"} > {item.brand} </Text></Box>
                        <Text> {item.description}</Text>
                        <Text fontSize={"12px"} color="green"> Special price</Text>
                        <Box display={"flex"} alignItems="center" fontSize={"12px"}> <Text fontSize={"25px"} pr="10px"> ₹{item.new_price} </Text>  <Text pr="10px">  <del> ₹{item.old_price} </del> </Text>  <Text pr="10px" color="green"> {item.discount}% Off</Text></Box>
                        <Box mb="20px" display="flex" alignItems="center"> <Box bg="green" color={"white"} pl="5px" pr="5px" display="flex" alignItems="center" borderRadius={"25px"} fontSize="15px"> {item.stars} <AiFillStar /></Box>
                            <Text pl="12px" pr="6px"> {item.ratings}</Text> and <Text pl="6px" pr="12px"> {item.reviews}</Text>
                            <Img w="60px" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="logo" />
                        </Box>

                        <Text> Copons for you</Text>
                        <Box display={"flex"} mb="5px" mt="5px" alignItems="center"> <Img w="18px" mr="5px" src="https://rukminim1.flixcart.com/www/36/36/promos/30/07/2019/79f48e86-8a93-46ab-b45a-5a12df491941.png?q=90" alt="small" /> Special Price₹100 off with cashback coupon on First Order <Text color={"#2974F1"} pl="5px">T&C </Text></Box>

                        <Text> Available offers</Text>
                        <Box mt="10px" mb="5px" display="flex" alignItems="center" >  <Img w="18px" mr="5px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="small copoun" />Special PriceGet extra 22% off (price inclusive of cashback/coupon) <Text color={"#2974F1"} pl="5px"> T&C</Text> </Box>
                        <Box display={"flex"} mb="5px" alignItems="center" > <Img w="18px" mr="5px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="small copoun" />Combo OfferBuy 2 items save 5%; Buy 3 or more save 10% <Text color={"#2974F1"} pl="10px"> See all productsT&C</Text> </Box>
                        <Text display={"flex"} mb="5px" alignItems="center"> <Img w="18px" mr="5px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="small copoun" /> Bank OfferTest - 10% off on HDFC Bank Cardless EMI, up to ₹500. On orders of ₹3000 and above <Text color={"#2974F1"} pl="5px"> T&C</Text></Text>
                        <br />
                        <br />
                        <Flex display={"flex"} justifyContent={"space-between"}>
                            <Box>
                                <Box display={"flex"} mb="15px" alignItems="center"> <Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" alt="" />
                                    <Text> Deliver to</Text>
                                </Box>
                                <Box display="flex" alignItems={"center"} borderBottom="1px solid #2974F1"> <Input variant='unstyled' placeholder='Enter Delivery pincode' type="text"/> Check </Box>
                            </Box>
                            <Box>
                                <Text display={"flex"} mb="15px" alignItems="center"> <MdRestartAlt size="15px" color='#2974F1' /> 10 Days Return Policy</Text>
                                <Text display={"flex"} alignItems="center"> <HiCurrencyRupee size="15px" color='#2974F1' /> Cash on Delivery available</Text>
                            </Box>
                        </Flex>
                        <Box pt="20px" fontSize={"12px"}>  <Text>  Usually delivered in8 days</Text>
                            <Text>  Enter pincode for exact delivery dates/charges</Text>
                        </Box>
                        <Text color='#2974F1' pt={"10px"}> View Details</Text>
                        <Flex display={"flex"} w="30%" justifyContent="space-between" pt="10px" fontSize={"12px"}>

                            <Box>
                                Seller
                            </Box>
                            <Box>
                                <Box display={"flex"} alignItems="center">
                                    RetailNet
                                    <Flex bg='#2974F1' w="35px" color={"white"} alignItems="center" pr="5px" display="flex" pl="5px" borderRadius={"25px"} fontSize="11px"> {item.hidden_stars} <AiFillStar /></Flex>
                                </Box>


                                <Text>10 Days Return Policy </Text>
                                <Text> GST invoice available</Text>
                            </Box>
                        </Flex>

                        <Img w="400px" p="20px" src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50" />
                        <Accordion defaultIndex={[0]} allowMultiple>


                            <AccordionItem>
                                <h1>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left' fontSize={"20px"}>
                                            Product Details
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h1>
                                <AccordionPanel pb={4}>
                                    <Grid templateColumns='repeat(2, 1fr)' gap={6} fontSize="12px" w="50%" >

                                        <GridItem> Pack of</GridItem>
                                        <GridItem>1 </GridItem>
                                        <GridItem> Style Code </GridItem>
                                        <GridItem> HLSH013399 </GridItem>
                                        <GridItem>   Fit</GridItem>
                                        <GridItem> Slim </GridItem>
                                        <GridItem>  Fabric</GridItem>
                                        <GridItem>   Cotton Blend</GridItem>
                                        <GridItem> Sleeve</GridItem>
                                        <GridItem> Full Sleeve</GridItem>
                                        <GridItem>   Pattern</GridItem>
                                        <GridItem> Printed </GridItem>
                                        <GridItem>   Reversible </GridItem>
                                        <GridItem>   No </GridItem>
                                        <GridItem>   Collar </GridItem>
                                        <GridItem> Cut Away</GridItem>

                                    </Grid>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                ))}
            </HStack>
        </div>
    );
}

export default Viewpage;