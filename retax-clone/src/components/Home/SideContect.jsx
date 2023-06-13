
import { Avatar, Box, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { FiBell, FiChevronDown, FiMenu } from 'react-icons/fi';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context api/AuthcontextProvider';

export default function SideContect({TOggel_theme ,toggle}) {
  const {onOpen} =useDisclosure()
  const {logout}=useContext(AuthContext)
  const navigate=useNavigate()
  const [theme, setTheme]=useState(false)
  const user=JSON.parse(localStorage.getItem("user"))
  // console.log(user.newUsername)
  return (
    <Flex
    
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height="50px"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'space-between' }} 
      // w={!toggle?"78.5%":"98%"}
      >
      <Box  onClick={()=>{
        TOggel_theme()
        setTheme(!theme)}}>  
      {
        theme?(
          <Icon  mr="4" fontSize="25" _groupHover={{color: 'white',}} as={AiOutlineDoubleRight} />
        )
        :(
          <Icon  mr="4" fontSize="25" _groupHover={{color: 'white',}} as={AiOutlineDoubleLeft} />
        )
      }
      </Box>
      <Box>
      {/* <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Retax
      </Text> */}

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{user.username}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('whiteAlpha.900', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')} opacity={"1"}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={()=>{
                localStorage.setItem("auth", JSON.stringify(false))
                logout()
                navigate('/')
              }}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
      </Box>
    </Flex>
  );
}
