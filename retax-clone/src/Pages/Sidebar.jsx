import { Box, Button, Flex, Heading, Icon, Image, Input, InputGroup, InputLeftAddon, InputLeftElement, useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import './Sidebar.css'
import { Link, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiSettings,
  FiTrash,
  FiCalendar,
  FiCloudSnow,
  FiUser,
} from 'react-icons/fi';
import {BsBoxArrowInUpLeft} from 'react-icons/bs'
import { CgCheckO } from "react-icons/cg";
import { TbHelpOctagon } from "react-icons/tb";
import { AiOutlineLogin, AiOutlineSearch } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";
import { GrSearch } from "react-icons/gr";
import { SearchIcon } from '@chakra-ui/icons';

 
export default function Sidebar({onClose, isOpen, toggle, update_login}) {
    const navigate=useNavigate()
  return (
    <Flex className='shadow' direction={"column"} justifyContent={"space-between"} w="19%"  h={"100vh"} bg={useColorModeValue('gray.100', 'gray.900')} position={"fixed"}     mb={"10px"} textAlign={"left"}  >  
    <Box className='shadow' p={"20px"} h={"75%"}   >
    <Box mb={"5px"} >
      <Heading fontSize={"1.5rem"} color={"gray"} borderRadius={"5px"} width={"90px"} textAlign={"center"} p={"5px 5px"} cursor="pointer" _hover={{bg: 'teal.300',color: 'white',}} mb={"10px"}>
        Retax
      </Heading> 
      {/* <Input  bgColor={"white"} size={"small"} borderRadius={"5px"}  /> */}
      <InputGroup  >
        <InputLeftElement pointerEvents='none'>
        <SearchIcon />
        </InputLeftElement>
        <Input bgColor={"white"}  borderRadius={"5px"} placeholder='Search' />
      </InputGroup>
    </Box >
    <Box  mr={"0px"}  >
      <Link to={"/dashboard"}>
      <Button display={"flex"}  width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{bg: 'teal.300',color: 'white',}} >
         <Icon mr="4" fontSize="16" _groupHover={{color: 'white',}} as={FiHome} />
          <p>Dashboard</p>
      </Button>
      </Link>
      <Link to={"/customer"}>
      <Button display={"flex"}  width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{bg: 'teal.300',color: 'white',}} >
        <Icon mr="4" fontSize="16" _groupHover={{color: 'white',}} as={CgCheckO} />  
          <p>Tasks</p>
      </Button>
      </Link>
      <Link to={"/calendar"}>
      <Button display={"flex"}  width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{bg: 'teal.300',color: 'white',}} >
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={FiCalendar}
          />
          <p>Calendar</p>
      </Button>
      </Link>
      <Link to={"/employee"}>
      <Button display={"flex"}  width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{bg: 'teal.300',color: 'white',}}>
      <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={FiUser}
          />
          <p>Employees</p>
      </Button>
      </Link>
      <Link to={"/customer"}>
      <Button display={"flex"}  width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{bg: 'teal.300',color: 'white',}}>
      <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={FaUserFriends}
          />
          <p>Customers</p>
      </Button>
      </Link>
      <Link to={"/cases"}>
      <Button display={"flex"}  width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{bg: 'teal.300',color: 'white',}}>
      <Icon mr="4" fontSize="16" _groupHover={{color: 'white',}} as={HiIdentification} />  
          <p>Cases</p>
      </Button>
      </Link>
      <Link to={"/customer"}>
      <Button display={"flex"}  width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{bg: 'teal.300',color: 'white',}}>
        <Icon mr="4" fontSize="16" _groupHover={{color: 'white',}} as={MdLeaderboard} />  
          <p>Leads</p>
      </Button>
      </Link>
      <Link to={"/customer"}>
      <Button display={"flex"}  width={"100%"} justifyContent={"left"} cursor="pointer" _hover={{bg: 'teal.300',color: 'white',}}>
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={BsBoxArrowInUpLeft}
          />
          <p>Requests</p>
      </Button>
      </Link>
    </Box>
    </Box>
    <Box className='shadow' h={"25%"}>
    <Box  className='shadow' mr={"0px"}   p={"20px"} h={"67%"}>
    <Link to={"/cases"}>
      <Button display={"flex"}  width={"100%"} justifyContent={"left"}
      cursor="pointer"
      _hover={{
        bg: 'teal.300',
        color: 'white',
      }}>
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={FiSettings}
          />
          <p>Settings</p>
      </Button>
      </Link>
      <Link to={`/employee/${1}`}>
      <Button display={"flex"}  width={"100%"} justifyContent={"left"}
      cursor="pointer"
      _hover={{
        bg: 'teal.300',
        color: 'white',
      }}>
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={TbHelpOctagon}
          />
          <p>Help</p>
      </Button>
      </Link>
    </Box>
    <Box className='shadow' mr={"0px"}   p={"20px"} h={"33%"}>
    
      <Button display={"flex"}  width={"100%"} justifyContent={"left"}
      cursor="pointer"
      _hover={{
        bg: 'teal.300',
        color: 'white',
      }} onClick={()=>{
        update_login()
        navigate("/")
      }}>
         <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={AiOutlineLogin}
          /> 
          <p>Logout</p>
      </Button>
      
    </Box>
    </Box>
    </Flex>
  )
}
