import React, { useEffect, useState } from "react"
import { Box,Input, InputGroup, InputLeftElement,
Button,
Select,
Table, Thead, Tbody, Tr, Td,
Avatar,
Checkbox,
} from '@chakra-ui/react';
import {SearchIcon, } from '@chakra-ui/icons';
import axios from "axios";
import "./customer.css"

import CustomerModal from "./customerModel";

export const Customer=()=>{

    const [data, setData]=useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const [showModal, setShowModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const res = await axios.get(`https://retaxcustomerdata.onrender.com/employees`);
        // console.log(res.data);
        setData(res.data);
      };

    function CharacterAvatar({ firstName }) {
        const character = firstName.charAt(0).toUpperCase();
        const bgColor = character === "a" ? "red" : "green";
        return ( <Avatar size="xs" name={character} backgroundColor={bgColor}></Avatar>);
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
      const filteredData = data.filter((elem) => {
        const { caseStatus, family, age } = elem;
        const query = searchQuery.toLowerCase();
      
        return (
            caseStatus.toLowerCase().includes(query) ||
            query.includes(caseStatus.toLowerCase()) ||
              
            family.toLowerCase().includes(query) ||
            query.includes(family.toLowerCase()) ||
            age.toString().includes(query) ||
            query.includes(age.toString())
        );
      });

      
      const sortedData = [...filteredData]; // Copy filteredData array

      if (sortBy === "newest") {
        sortedData.sort((a, b) => new Date(b.age) - new Date(a.age));
      }
      else if (sortBy === "oldest") {
        sortedData.sort((a, b) => new Date(a.age) - new Date(b.age));
      }     
      
      
    //   pagination
    const entriesPerPage = 10;
    const totalPages = Math.ceil(sortedData.length / entriesPerPage);

    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const visibleData = sortedData.slice(startIndex, endIndex);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
      
    //delete
    const [selectedIds, setSelectedIds] = useState(0);

    const handleCheckboxChange = (id) => {
        setSelectedIds(id);
        console.log(id);
    };
    
    const handleDelete= async (id) => {
        await axios.delete(`https://retaxcustomerdata.onrender.com/employees/${id}`);
        fetchData();
    }
      
    return <Box>
        <Box></Box>
        <Box>
            {/* upper side */}
            <Box>
                <Box p={4} fontSize='30px' textAlign={[ 'left']} fontWeight="bold"> Customers</Box>

                <Box display="flex" justifyContent="space-between"   >
                    <Box style={{display:"flex"}} width="70%">
                        <Box width="30%" marginLeft={10}>
                            {/* serach box and some paraMeter */}
                            <InputGroup>
                                <InputLeftElement children={<SearchIcon/>} />
                                <Input placeholder="Search by name, phone or email"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </InputGroup>
                        </Box>
                        <Box marginLeft="10px" display="flex" columnGap="10px">
                            {/* sorting */}
                            <Button backgroundColor="white" border="solid 1px" borderColor="gray">Status</Button> 
                            {/* <Button backgroundColor="white" border="solid 1px" borderColor="gray">Location</Button> */}
                            <Button backgroundColor="white" border="solid 1px" borderColor="gray">Family Status</Button>
                            <Button backgroundColor="white" border="solid 1px" borderColor="gray">Age</Button>
                        </Box>
                    </Box>
                    <Box display="flex" columnGap="10px" marginRight="20px"> 
                        <Box alignItems="center">Sort by:</Box>
                        <Box>
                        <Select
                            placeholder="Select an option"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </Select>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* Lower side */}
            <Box marginTop="40px">
            <Table variant="simple">
                <Thead backgroundColor="rgb(211, 211, 211)">
                    <Tr className="my-table">
                        <Td > <Checkbox /> </Td>
                        <Td >Customer Names</Td>
                        <Td >ID</Td>
                        <Td > Case Status</Td>
                        <Td >Family Status</Td>
                        <Td >Phone Number</Td>
                        <Td >Email</Td>
                        <Td >Age</Td>
                        <Td ></Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        visibleData.map((elem,index)=>{
                            return <Tr key={index} style={{fontSize:"13px"}} className="my-table">
                                    <Td> <Checkbox
                                    onChange={() => handleCheckboxChange(elem.id)}
                                    // isChecked={selectedIds.includes(elem.id)}
                                    />
                                    </Td>
                                    <Td> 
                                        <Tr>
                                        {<CharacterAvatar firstName={elem.name}/>} 
                                        {" "+elem.name} 
                                        </Tr>
                                        <Tr style={{height: "10px"}}/>
                                        <Tr>
                                        {<CharacterAvatar firstName={elem.name} />} 
                                        {" "+elem.name} 
                                        </Tr >
                                    </Td>
                                    <Td> {elem.id} </Td>
                                    <Td>
                                        {/* {elem.case} */}
                                        <Box display="inline-block" 
                                        borderColor={
                                            elem.caseStatus === "Completed"
                                              ? "green"
                                              : elem.caseStatus === "in progress"
                                              ? "blue"
                                              : "orange"
                                          }
                                          
                                          color={
                                            elem.caseStatus === "Completed"
                                              ? "green"
                                              : elem.caseStatus === "in progress"
                                              ? "blue"
                                              : "orange"
                                          }
                                         borderWidth={1} fontSize="12px" padding="2px" fontWeight="bold">
                                            [{elem.caseStatus}]
                                        </Box>    
                                    </Td>
                                    <Td> {elem.family} </Td>
                                    <Td>
                                        <Tr> {"+91 "+elem.phone} </Tr>
                                        <Tr style={{height: "10px"}}/>
                                        <Tr> {"+91 "+elem.phone} </Tr>
                                    </Td>
                                    <Td> 
                                        <Tr> {elem.email} </Tr>
                                        <Tr style={{height: "10px"}}/>
                                        <Tr> {elem.email} </Tr>
                                    </Td>
                                    <Td>
                                        <Tr>{elem.age+" -"}  ({calculateAge(elem.age)+" years"}) </Tr>
                                        <Tr style={{height: "10px"}}/>
                                        <Tr>{elem.age+" -"}  ({calculateAge(elem.age)+" years"}) </Tr>
                                    </Td>
                                    <Td><Button
                                    onClick={() => {
                                        setSelectedCustomer(elem);
                                        setShowModal(true);
                                      }}
                                      >...</Button></Td>
                                </Tr>
                        })
                    }
                </Tbody>
            </Table>
            </Box>
            <CustomerModal isOpen={showModal} onClose={() => setShowModal(false)} customer={selectedCustomer} />
        </Box>
        <Box style={{display:"flex"}}>
            <Box width="80%" textAlign="left" margin="5px">
                {/* delete op */}
                <Button onClick={()=>{
                    handleDelete(selectedIds);
                }} >Delete</Button>
            </Box>
            <Box>
                {/* Pagination */}
                <Box display="flex" justifyContent="center" mt={4}>
                    <Button
                        disabled={currentPage === 1}
                        onClick={goToPreviousPage}
                        marginRight={2}
                    >
                        {"<"}
                    </Button>
                    {[...Array(totalPages)].map((_, i) => (
                        <Button
                        key={i}
                        onClick={() => goToPage(i + 1)}
                        colorScheme={currentPage === i + 1 ? "blue" : "gray"}
                        marginRight={2}
                        >
                        {i + 1}
                        </Button>
                    ))}
                    <Button
                        disabled={currentPage === totalPages}
                        onClick={goToNextPage}
                        marginLeft={2}
                    >
                        {">"}
                    </Button>

                    </Box>
            </Box>
        </Box>
    </Box>
}