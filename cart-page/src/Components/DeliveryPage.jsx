import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons'



function DeliveryPage(){





    return (


        <Box w='100%' h='150vh' pt='20' bg='#f1f3f6' >

            <HStack
             w="82%"
             h='50vh'
             bg="pink"
             margin="auto"
             display="flex"
             alignItems="start"
             justifyContent='space-between' 
            >
             {/*LEFT BOX  */}
             <Box 
             w='69%'
             h='40vh'
             bg='#f1f3f6'
             >
                 {/* Left top 1 */}
                 <Box 
                 w='100%'
                 h='10vh'
                 bg='white'
                 display='flex'
                 justifyContent='space-between'
                 alignItems='center'
                 shadow='md'
                 >
                    <Box ml='6' display='flex' alignItems='center' >
                        <Box bg='#f1f3f6' pl='2' pr='2' color='blue' mr='4' borderRadius='2' > 1</Box>
                        <Text fontWeight='500' color='grey' >LOGIN</Text> 
                        <CheckIcon ml='3' color='blue.600' />
                    </Box>
                    <Box>
                        <Button mr='6' colorScheme='blue' variant='outline' borderRadius='0' border='1px solid blue' > 
                        CHANGE
                        </Button>
                    </Box>
                    
                 </Box>

                 {/* Top Box 2 */}

                 <Box 
                 w='100%'
                 h='7vh'
                 bg='#2874f0'
                 mt='4'
                 display='flex'

                 >
                    <Box ml='6' display='flex' alignItems='center' >
                        <Box bg='white' pl='2' pr='2' color='blue' mr='4' borderRadius='2'>2</Box>
                        <Text fontWeight='500' color='white' >DELIVERY ADDRESS</Text> 
                    </Box>
                </Box>                 

                {/* Top Box 3 FORM */}


                <Box  
                w='100%'
                h='80vh'
                bg='#f5faff'
                >
                    
                </Box>

             </Box>

             {/* Right BOX */}
             <Box 
             w='28%'
             h='35vh'
             bg='green.200'
             >
                Hey 2
             </Box>


            </HStack>

        </Box>


    )


}


export default DeliveryPage;