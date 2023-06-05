import React, { useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import "./Home.css"
import { Box, Button, Flex, Grid, GridItem, Heading, Icon, Select, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { BsThreeDots } from "react-icons/bs";
import Graph from './Graph';
import { useNavigate } from 'react-router-dom';

export default function Home({update_login, isLogin}) {
  const navigate=useNavigate();
  if(isLogin==false){
    navigate('/');
  }
  return (
    <Box >
      <Flex
        ml={{ base: 0, md: 0 }}
        px={{ base: 4, md: 4 }}
        pt={0} pb={0}
        height="60px"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'space-between' }}
        
        fontFamily="Courier"
        >
        <Heading size={"md"}>Dashboard</Heading>

        <button className='button' colorScheme='purple' variant='outline' ><Icon  fontSize="20" _groupHover={{color: 'white',}} as={IoMdAddCircleOutline} alignItems={"center"}/>&nbsp;  Add an employee</button>
      </Flex>
      <Box>
        <Flex mt={"10px"}
        ml={{ base: 0, md: 0 }} pt={"10px"}
        px={{ base: 4, md: 4 }} justifyContent={"space-between"}>
          <Box><Heading size={"sm"}>Key Indicators</Heading></Box>
          <Box>
          <select placeholder='All time' className='select_option' >
          <option value='option1'> All time</option>
            <option value='option2'>1 Year</option>
            <option value='option3'>6 Month</option>
            <option value='option3'>3 Month</option>
        </select> &nbsp;&nbsp;
        <Icon as={BsThreeDots} />
          </Box>
        </Flex>
        <Box px={{ base: 4, md: 4 }} pt={"20px"} borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')} pb={"20px"} h={"auto"}>
          <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem w='100%' h='100px' bg='purple.100' borderRadius={"5px"} p={"20px 20px"} textAlign={"left"}> 
              <Heading size={"sm"}>Sucessfull Cases</Heading>
              <Heading size={"lg"}>230</Heading>
            </GridItem>
            <GridItem w='100%' h='100px' bg='orange.100' borderRadius={"5px"} p={"20px 20px"} textAlign={"left"}> 
              <Heading size={"sm"}>Leads</Heading>
              <Heading size={"lg"}>385</Heading>
            </GridItem>
            <GridItem w='100%' h='100px' bg='green.100' borderRadius={"5px"} p={"20px 20px"} textAlign={"left"}> 
              <Heading size={"sm"}>Requests</Heading>
              <Heading size={"lg"}>540</Heading>
            </GridItem>
            <GridItem w='100%' h='100px' bg='blue.100' borderRadius={"5px"} p={"20px 20px"} textAlign={"left"}> 
              <Heading size={"sm"}>New Customers</Heading>
              <Heading size={"lg"}>48</Heading>
            </GridItem>
          </Grid>  
        </Box> 
        
        </Box>
        <Grid templateColumns={'2fr 1.3fr'}>
          <Box borderWidth="1px" 
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}>
          <Flex mt={"10px"}
            ml={{ base: 0, md: 0 }} pt={"10px"}
            px={{ base: 4, md: 4 }} justifyContent={"space-between"}>
              <Box><Heading size={"sm"}>Cases</Heading></Box>
              <Box>
              <select placeholder='All time' className='select_option' >
              <option value='option1'> All time</option>
                <option value='option2'>1 Year</option>
                <option value='option3'>6 Month</option>
                <option value='option3'>3 Month</option>
            </select> &nbsp;&nbsp;
            <Icon as={BsThreeDots} />
              </Box>
          </Flex>
          <Box  
            px={{ base: 4, md: 4 }}>
            <Graph />
          </Box>
          </Box>
          <Box borderWidth="1px" 
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}>
          <Flex mt={"10px"}
            ml={{ base: 0, md: 0 }} pt={"10px"}
            px={{ base: 4, md: 4 }} justifyContent={"space-between"}>
              <Box><Heading size={"sm"}>Key Indicators</Heading></Box>
              <Box>
              <select placeholder='All time' className='select_option' >
              <option value='option1'> All time</option>
                <option value='option2'>1 Year</option>
                <option value='option3'>6 Month</option>
                <option value='option3'>3 Month</option>
            </select> &nbsp;&nbsp;
            <Icon as={BsThreeDots} />
              </Box>
          </Flex>   
          </Box>
        </Grid>
    </Box>  
  )
}
