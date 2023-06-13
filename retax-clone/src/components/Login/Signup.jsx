import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Img,
    Input,
    Text,
    VStack,
    useToast,
  } from "@chakra-ui/react";
  import logo from "./Images/Retex.png";
  import "./Login.css";
  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  
  function Signup({ handleChange }) {
    const toast=useToast();
    const [newUsername, setNewUsername] = useState({
      email: "",
      password: "",
      username: "",
    });
    const handleSignup=(e)=>{
      e.preventDefault();
      localStorage.setItem("user", JSON.stringify(newUsername))
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      handleChange()
    }
    console.log(newUsername)
    return (
      <div className="signup-container">
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
              <Heading>Signup to Retax</Heading>
            </VStack>
  
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                variant="filled"
                bg={"purple.50"}
                value={newUsername.username}
                onChange={(e) => setNewUsername({...newUsername, username:e.target.value})}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>E-mail Address</FormLabel>
              <Input
                type="email"
                variant="filled"
                bg={"purple.50"}
                value={newUsername.email}
                onChange={(e) => setNewUsername({...newUsername, email:e.target.value})}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                variant="filled"
                bg={"purple.50"}
                value={newUsername.password}
                onChange={(e) => setNewUsername({...newUsername, password:e.target.value})}
              />
            </FormControl>
  
            <Button
              bg={"#722ed1"}
              color={"white"}
              w={"full"}
              onClick={handleSignup}
            >
              SIGNUP
            </Button>
  
            <Text>
              Already on Retax?
              <Link color="teal.500" onClick={handleChange}>
                LOG IN
              </Link>
            </Text>
          </VStack>
        </Box>
      </div>
    );
  }
  
  export default Signup;