import React, { useEffect, useState } from "react"
import { Box,Input, InputGroup, InputLeftElement,
Button,
Select,
Table, Thead, Tbody, Tr, Td,
Avatar,
Checkbox,
} from '@chakra-ui/react'
import {SearchIcon, } from '@chakra-ui/icons';
import axios from "axios";

export const Customer=()=>{

    const [data, setData]=useState([]);
    
    useEffect(()=>{
        const fetchData = async() => {
            const res= await axios.get(`http://localhost:3000/employees`);
            console.log(res.data);
            setData(res.data);
        }
        fetchData();
    },[])

    function CharacterAvatar({ firstName }) {
        const character = firstName.charAt(0).toUpperCase();
        return ( <Avatar size="xs" name={character}></Avatar>);
    }

    function calculateAge(dateOfBirth) {
        const dob = new Date(dateOfBirth);
        const today = new Date();
      
        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
      
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
          age--;
        }
      
        return age;
      }

    return <Box>
        <Box></Box>
        <Box>
            {/* upper side */}
            <Box>
                <Box p={4} fontSize='30px' textAlign={[ 'left']} fontWeight="bold"> Customers</Box>

                <Box display="flex" justifyContent="space-between">
                    <Box style={{display:"flex"}} width="70%">
                        <Box width="30%" marginLeft={10}>
                            {/* serach box and some paraMeter */}
                            <InputGroup>
                                <InputLeftElement children={<SearchIcon/>} />
                                <Input placeholder="Search by name, phone or email"/>
                            </InputGroup>
                        </Box>
                        <Box marginLeft="10px" display="flex" columnGap="10px">
                            {/* sorting */}
                            <Button backgroundColor="white" border="solid 1px" borderColor="gray">Status</Button> 
                            <Button backgroundColor="white" border="solid 1px" borderColor="gray">Location</Button>
                            <Button backgroundColor="white" border="solid 1px" borderColor="gray">Family Status</Button>
                            <Button backgroundColor="white" border="solid 1px" borderColor="gray">Age</Button>
                        </Box>
                    </Box>
                    <Box display="flex" columnGap="10px" marginRight="20px"> 
                        <Box alignItems="center">Sort by:</Box>
                        <Box>
                        <Select placeholder="Select an option">
                            <option value="option1">Newest</option>
                            <option value="option2">Oldest</option>
                        </Select>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* Lower side */}
            <Box marginTop="40px">
            <Table variant="simple">
                <Thead backgroundColor="rgb(211, 211, 211)">
                    <Tr>
                    <   Td> <Checkbox/> </Td>
                        <Td>Customer Names</Td>
                        <Td>ID</Td>
                        <Td>Case Status</Td>
                        <Td>Family Status</Td>
                        <Td>Phone Number</Td>
                        <Td>Email</Td>
                        <Td>Age</Td>
                        <Td></Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map((elem,index)=>{
                            return <Tr key={index}>
                                <Td> <Checkbox/> </Td>
                                <Td> 
                                    {<CharacterAvatar firstName={elem.name} />} 
                                    {" "+elem.name} 
                                </Td>
                                <Td> {elem.id} </Td>
                                <Td> {elem.case} </Td>
                                <Td> {elem.family} </Td>
                                <Td> {"+91 "+elem.phone} </Td>
                                <Td> {elem.email} </Td>
                                <Td> {elem.age}  ({calculateAge(elem.age)}) </Td>
                                <Td><Button>...</Button></Td>
                            </Tr>
                        })
                    }
                </Tbody>
            </Table>
            </Box>

        </Box>
    </Box>
}