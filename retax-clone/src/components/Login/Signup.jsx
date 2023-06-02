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
} from "@chakra-ui/react";
import logo from "./Images/Retex.png";
import "./Login.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup({ onFormChange }) {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");

  // const navigate = useNavigate()
  const handleSignup = () => {
    
    if (newEmail && newPassword && newUsername) {
      alert("Account created successfully");
      localStorage.setItem(
        "user",
        JSON.stringify({ newEmail, newPassword, newUsername })
      );
      onFormChange("login");
      // navigate("/login");
    } else {
      alert("Please provide email, username, and password");
    }
  };

  const handleLoginLinkClick = (e) => {
    e.preventDefault();
    onFormChange("login");
  };

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
            <FormLabel>E-mail Address</FormLabel>
            <Input
              type="email"
              variant="filled"
              bg={"purple.50"}
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              variant="filled"
              bg={"purple.50"}
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              variant="filled"
              bg={"purple.50"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
            <Link color="teal.500" onClick={handleLoginLinkClick}>
              LOG IN
            </Link>
          </Text>
        </VStack>
      </Box>
    </div>
  );
}

export default Signup;
