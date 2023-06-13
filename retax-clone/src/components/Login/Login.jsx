import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Img,
  Input,
  Link,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import "./Login.css";

import logo from "./Images/Retex.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context api/AuthcontextProvider";

function Login({handleChange}) {
  const {login} =useContext(AuthContext)
  const toast=useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("user"));
    // const navigate=useNavigate()
    // console.log(userData);
    if(userData){
      if(userData.email === email && userData.password === password){
        localStorage.setItem("auth", JSON.stringify(true))
        toast({
          title: 'Welcome to Retax.',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        login()
        // navigate('/')
        
      }else if (userData.email !=email && userData.password!=password){
        toast({
          title: 'Please Enter Email & Password',
          status: 'error',
          position:'top',
          duration: 2000,
          isClosable: true,
        })
      }
      else if(userData.email != email){
        toast({
          title: 'Please Enter Correct Email',
          status: 'error',
          position:'top',
          duration: 2000,
          isClosable: true,
        })
      }else if(userData.password != password){
        toast({
          title: 'Please Enter Correct Password',
          status: 'error',
          position:'top',
          duration: 2000,
          isClosable: true,
        })
      }
    }
    else{
      toast({
        title: 'Please Create Account First',
        status: 'warning',
        position:'top',
        duration: 2000,
        isClosable: true,
      })
      handleChange()
    }
  };

  // const handleSignupLinkClick = (e) => {
  //   e.preventDefault();
  //   onFormChange("signup");
  // };


  return (
    <div className="login-container">
        <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[10, "8vh"]}
      mx={"auto"}
      borderColor={"gray.300"}
      borderRadius={"10px"}
      boxShadow="xl"
      rounded="md"
      bg="white"
    >
      <VStack>
        <VStack mb={5}>
          <Img w={300} m={"-90px 0"} src={logo} alt="logo" />
          <Heading>Log In to Retax</Heading>
          <Text>Enter your email and password</Text>
        </VStack>

        <FormControl isRequired>
          <FormLabel>E-mail Address</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            variant="filled"
            bg={"purple.50"}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="filled"
            bg={"purple.50"}
          />
        </FormControl>

        <HStack w="full" justify={"space-between"}>
          <Checkbox>Remember Me</Checkbox>
          <Button variant={"link"} colorScheme="blue">
            Forgot Password?
          </Button>
        </HStack>
        <Button bg={"#722ed1"} color={"white"} w={"full"} onClick={handleLogin}>
          LOG IN
        </Button>
        <Text>
          New on Retax?
          <Link color="teal.500" onClick={handleChange}>
            SIGN UP
          </Link>
        </Text>
      </VStack>
    </Box>
    </div>
    
  );
}

export default Login;