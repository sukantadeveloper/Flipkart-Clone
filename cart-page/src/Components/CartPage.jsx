import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  ButtonGroup,
  HStack,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function CartPage() {
  const [count, setCount] = useState(0);
  const [Deleteid, setDeleteId] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [cartData, SetCartData] = useState([]);

  const initialFocusRef = useRef();

  function getData() {
    fetch(`http://localhost:4000/products`)
      .then((res) => res.json())
      .then((res) => SetCartData(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, [count]);

  console.log(cartData);

  const handelDeleteCart = () => {
    onClose();
    fetch(`http://localhost:4000/products/${Deleteid}`, {
      method: "DELETE",
    });
    setCount(count - 1);
  };

  const handelID = (id) => {
    onOpen();
    console.log(id);
    setDeleteId(id);
  };

  const handelPatchLess = (id, quantity) => {
    fetch(`http://localhost:4000/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...quantity, quantity: quantity - 1 }),
    });
    console.log(id);
    setCount(count - 1);
  };

  const handelPatchAdd = (id, quantity) => {
    fetch(`http://localhost:4000/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...quantity, quantity: quantity + 1 }),
    });
    setCount(count + 1);
  };

  return (
    <Box w="100%" bg="#f1f3f6" h="150vh" pt="100px">
      <HStack
        w="80%"
        bg="f1f3f6"
        h="50vh"
        margin="auto"
        display="flex"
        alignItems="start"
      >
        <Box shadow="md" bg="f1f3f6" w="69%" height="40vh">
          <Box
            w="100%"
            bg="white"
            h="8.5vh"
            borderRadius="5"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text color="blue" fontSize="20" fontWeight="400">
              Flipkart ({cartData.length})
            </Text>
          </Box>
          <Box
            w="100%"
            bg="white"
            mt="3"
            h="8.5vh"
            borderRadius="5"
            display="flex"
            alignItems="center"
          >
            <Text ml="5" fontSize="18" fontWeight="400">
              From Saved Adress
            </Text>
            <Spacer />
            <Popover
              initialFocusRef={initialFocusRef}
              placement="bottom"
              closeOnBlur={false}
              border="none"
            >
              <PopoverTrigger>
                <Button mr="5">Saved Adress</Button>
              </PopoverTrigger>
              <PopoverContent color="white" bg="white" borderColor="blue.800">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody color="black">
                  OOPS!! <br />
                  You Don't Have Any Saved Adress
                </PopoverBody>
                <PopoverFooter
                  border="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pb={4}
                ></PopoverFooter>
              </PopoverContent>
            </Popover>
          </Box>
          <Box
            w="100%"
            bg="white"
            mt="4"
            borderRadius="5"
            display="grid"
            justifyContent="start"
            alignItems="center"
          >
            {cartData.map((data) => {
              return (
                <Box
                  key={data.id}
                  display="flex"
                  justifyContent="start"
                  w="800px"
                  m="5"
                  p="5"
                >
                  <Box display="block">
                    <Image src={data.image} w="150px" h="160px" />
                    <ButtonGroup
                      display="flex"
                      justifyContent="flex-start"
                      mt="3"
                    >
                      <Button
                        disabled={data.quantity === 1}
                        onClick={() => handelPatchLess(data.id, data.quantity)}
                      >
                        -
                      </Button>
                      <Button>{data.quantity}</Button>
                      <Button
                        onClick={() => handelPatchAdd(data.id, data.quantity)}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </Box>
                  <Box w="600px" ml="10">
                    <Text
                      fontSize="17px"
                      fontWeight="500"
                      display="flex"
                      justifyContent="start"
                      mt="3"
                      variant="list"
                    >
                      {data.description}
                    </Text>
                    <Text
                      fontSize="17px"
                      fontWeight="400"
                      display="flex"
                      mt="1"
                      color="grey"
                      justifyContent="start"
                    >
                      Category: {data.category_name}
                    </Text>
                    <Box display="flex" alignItems="center" mt="1">
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        display="flex"
                        color="grey"
                        justifyContent="start"
                      >
                        Ratings: {data.hidden_stars} ★
                      </Text>
                      <Image
                        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                        ml="4"
                        alt="assured"
                        w="14"
                        h="5"
                      />
                    </Box>
                    <Box display="flex" alignItems="center" mt="5">
                      <Text
                        color="grey"
                        fontSize="18px"
                        fontWeight="400"
                        display="flex"
                        as="del"
                        justifyContent="start"
                      >
                        ₹{data.quantity * data.old_price}
                      </Text>
                      <Text
                        color="black"
                        fontSize="20px"
                        fontWeight="500"
                        display="flex"
                        justifyContent="start"
                        ml="2"
                      >
                        ₹{data.quantity * data.new_price}
                      </Text>
                      <Text
                        fontSize="16px"
                        fontWeight="500"
                        display="flex"
                        color="green"
                        justifyContent="start"
                        ml="2"
                      >
                        {data.discount}% Off {data.offer} Applied
                      </Text>
                    </Box>

                    <Button
                      display="flex"
                      mt="6"
                      colorScheme="blue"
                      bg="none"
                      color
                      onClick={() => {
                        handelID(data.id);
                      }}
                    >
                      REMOVE
                    </Button>

                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Remove Item
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Are you sure you want to remove this item?
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                              CANCEL
                            </Button>
                            <Button
                              colorScheme="blue"
                              onClick={() => {
                                handelDeleteCart();
                              }}
                              ml={3}
                            >
                              REMOVE
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
            position="sticky"
            bottom="0"
            bg="white"
            w="100%"
            h="70px"
            style={{ boxShadow: "rgba(1.15, 0, 0, 0.15) 0px 1px 8px" }}
            display='flex'
            justifyContent='flex-end' alignItems='center'
          >
            <Button  color='white' bg='#fb641b' borderRadius='0' mr='10' pl='10' pr='10' >
              PLACE ORDER
            </Button>
          </Box>
        </Box>

        <Box bg="white" position="sticky" top="0" mt='10' shadow="md" h="20vh" w="29%">
          {" "}
          hey 2
        </Box>
      </HStack>
    </Box>
  );
}

export default CartPage;
