import React from 'react'
import { Signup } from './SignUp'
import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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

  const initialvalues = { email: '', password: '' }
  const [inputValues, setInputValues] = useState(initialvalues)
  const [error, setError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [isAuth, setIsAuth] = useState()
  const [isCheck, setIsCheck] = useState(false)
  const [incorrect, setIncorrect] = useState(0)
  const [correct, setCorrect] = useState(0)

  let otp
  let raj = 0
  const generateOtp = () => {
    otp = ''

    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10)
    }
    raj = otp
    return Number(otp)
  }
  console.log(raj)
  let checkOtp = (e) => {
    setIsAuth(e.target.value)
  }

  const handleChange = (inp) => {
    const { name, value } = inp.target
    setInputValues({ ...inputValues, [name]: value })
    // console.log(inputValues)
  }

  const handlelogin = (inputValues) => {
    fetch(`http://localhost:4000/Userdetails`)
      .then((res) => res.json())
      .then((res) => {
        res.filter((el) => {
          return el.email == inputValues.email &&
            el.password == inputValues.password
            ? setCorrect(true)
            : setIncorrect(true)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const notify = () => {
    setCorrect(false)
    setIncorrect(false)
    toast('login SuccesFully', {
      position: 'top-center',
    })
  }

  const check = () => {
    toast('Incorrect Details', {
      position: 'top-center',
    })
    setIncorrect(false)
  }
  if (correct == true) {
    // setIncorrect(0)
    notify()
  } else if (incorrect == true) {
    // console.log('ra')
    check()
  }

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
    }
  }, [error])

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (values.email == '') {
      errors.email = 'email is required'
    } else if (!regex.test(values.email)) {
      errors.email = 'Enter a valid email'
    }
    if (values.password == '') {
      errors.password = 'password is required'
    } else if (values.password.length < 6) {
      errors.password = 'password must not be less than 6 character'
    }
    return errors
  }
  const getOtp = () => {
    toast(otp, {
      position: 'top-center',
    })
  }

  const Otp = () => {
    setIsCheck(true)
    generateOtp()
    getOtp()
  }

  const Pass = () => {
    setIsCheck(false)
  }

  const SubmitOtp = (e) => {
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    handlelogin(inputValues)
    e.preventDefault()
    setError(validate(inputValues))
    setIsSubmit(true)
    setInputValues(initialvalues)
  }

  return (
    <>
      <Button bg="white" textAlign="center" onClick={onOpen}>
        login
      </Button>
      <Modal
        loginRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        padding="0px"
      >
        <ModalOverlay />

        <ModalContent>
          <ModalBody padding="-1.5">
            <ToastContainer />
            <ModalCloseButton
              size="lg"
              color="white"
              marginRight="-3.5rem"
              marginTop="-4"
            />
            <div style={{ display: 'flex' }}>
              <Box height="32rem" bg="#2874f0" width="16rem" padding="35px">
                <Text fontWeight="500" color="white" fontSize="3xl">
                  Login
                </Text>
                <Text
                  fontWeight="500"
                  marginTop="15px"
                  color="#Dbdbdb"
                  fontSize="1xl"
                >
                  Get access to your <br /> Orders, Wishlist and Recommendations
                </Text>
                <Image
                  marginTop="10rem"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  aend="image"
                />
              </Box>
              <Box height="32rem" padding="35" width="24rem" color="#878787">
                <FormControl>
                  {!isCheck ? (
                    <>
                      {' '}
                      <FormLabel>Email address</FormLabel>
                      <Input
                        color="black"
                        marginTop="-3"
                        name="email"
                        variant="flushed"
                        placeholder="Enter Email"
                        value={inputValues.email}
                        onChange={handleChange}
                      />
                      <Text color="red" fontSize="xs">
                        {error.email}
                      </Text>
                    </>
                  ) : (
                    ''
                  )}

                  {isCheck ? (
                    <>
                      {' '}
                      <FormLabel marginTop="5">Enter your OTP</FormLabel>
                      <Input
                        color="black"
                        marginTop="-3"
                        name="password"
                        type="number"
                        variant="flushed"
                        placeholder="Enter OTP"
                        value={isAuth}
                        onChange={checkOtp}
                      />
                    </>
                  ) : (
                    <>
                      {' '}
                      <FormLabel marginTop="5">Password</FormLabel>
                      <Input
                        color="black"
                        marginTop="-3"
                        name="password"
                        type="password"
                        variant="flushed"
                        placeholder="Enter Password"
                        value={inputValues.password}
                        onChange={handleChange}
                      />
                      <Text color="red" fontSize="xs">
                        {error.password}
                      </Text>
                    </>
                  )}

                  <Text marginTop="5" fontSize="xs">
                    By continuing, you agree to Flipkart's{' '}
                    <Link color="#2f74f0" href="">
                      Terms of Use{' '}
                    </Link>
                    and{' '}
                    <Link color="#2f74f0" href="">
                      Privacy Policy.
                    </Link>
                  </Text>

                  {!isCheck ? (
                    <Button
                      onClick={handleSubmit}
                      borderRadius="0.5"
                      marginTop="4"
                      padding="6"
                      color="white"
                      bg="#fb641b"
                      width="19.7rem"
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      onClick={SubmitOtp}
                      borderRadius="0.5"
                      marginTop="4"
                      padding="6"
                      color="white"
                      bg="#fb641b"
                      width="19.7rem"
                    >
                      Submit OTP
                    </Button>
                  )}
                  <Text marginTop="2" marginBottom="2" textAlign="center">
                    OR
                  </Text>
                  {!isCheck ? (
                    <>
                      {' '}
                      <Button
                        onClick={Otp}
                        boxShadow="md"
                        p="6"
                        rounded="md"
                        borderRadius="0.5"
                        padding="6"
                        color="#2f74f0"
                        bg="white"
                        width="19.7rem"
                      >
                        Request OTP
                      </Button>
                    </>
                  ) : (
                    <>
                      {' '}
                      <Button
                        onClick={Pass}
                        boxShadow="md"
                        p="6"
                        rounded="md"
                        borderRadius="0.5"
                        padding="6"
                        color="#2f74f0"
                        bg="white"
                        width="19.7rem"
                      >
                        Request Password
                      </Button>
                    </>
                  )}
                  <Link>
                    <Text
                      marginTop="2"
                      bg="white"
                      textAlign="center"
                      color="#2f74f0"
                    >
                      New to Flipkart? {<Signup />}{' '}
                    </Text>{' '}
                  </Link>
                </FormControl>
              </Box>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
