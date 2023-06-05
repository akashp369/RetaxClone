import React from "react"
import axios from 'axios';
import { useEffect , useState} from "react";
import { Box , Input,Text , Button , Flex, Spacer , Heading , Select} from '@chakra-ui/react'
import { Table,  Thead,Tbody,Tr,Th,Td,TableContainer , InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Link} from "react-router-dom";
import {SearchIcon, AddIcon } from '@chakra-ui/icons';
import dataa from "../../Employee.json";




 function Employee () {
 
     
     const [sort , setSort] = useState(dataa.employeesListData);
     const  [employeeData , setEmployeeData] = useState(sort);
    
    const handleSort = (event) => {
        let status = event.target.value;
        // console.log(status);
        if(status == "All")
        {
            setEmployeeData(sort);
        }
       else
       {        
        const sortedList  = sort.filter((employee) => employee.status === status);
        setEmployeeData(sortedList);
        // console.log(event.target.value)

        }
    };


    return(

        <div style={{margin:'10px' , padding:'10px'}}>
                <Flex style={{margin:'30px'}}>
                            <Heading>Employees</Heading>
                            <Spacer />
                            <Button colorScheme='purple' size='md' variant='outline'> <Box style={{margin:"5px"}}><AddIcon></AddIcon></Box>
                            Add An Employee
                            </Button>
                </Flex>

                <Flex className="sort">
                        <Box>
                            <InputGroup>
                                    <InputLeftElement children={<SearchIcon/>} />
                                    <Input placeholder="Search by name, phone or email"/>
                            </InputGroup>
                        </Box>
                        <Box marginLeft="10px" display="flex" columnGap="10px">
                                {/* sorting */}
                                <Button backgroundColor="white" border="solid 1px" borderColor="gray">Position</Button> 
                                <Button backgroundColor="white" border="solid 1px" borderColor="gray">Department</Button>
                                <Button backgroundColor="white" border="solid 1px" borderColor="gray">Status</Button>
                                
                            </Box>
                        <Spacer />
                        <Box alignItems="center">Sort by:</Box>
                        <Box>                            
                                <Select
                                            placeholder='Select option' size='sm' variant='filled'
                                            style={{width : "200px", }} 
                                            onChange={ handleSort}>
                                    <option value='All'>All</option>
                                    <option value='Active'>Active</option>
                                    <option value='Inactive'>Inactive</option>
                                </Select>
                        </Box>
                    
                </Flex>

                <br/> 

                <Box className="showData">
                <TableContainer>
                    <Table variant='simple'>
                                <Thead>
                                        <Tr>
                                        
                                            <Th>Name</Th>
                                            <Th>Age</Th>
                                            <Th>Position</Th>
                                            <Th>Department</Th>
                                            <Th>Status</Th>
                                            <Th>Phone no</Th>
                                            <Th>Email</Th>
                                        </Tr>
                                </Thead>
                               
                                <Tbody>
                                        {
                                            employeeData.map(employee=>{
                                                return (
                                                    <Tr alignItems={"center"} textAlign={'left'}>
                                                         <Flex style={{alignItems:'center'}}>
                                                              <Link to={`/employee/${employee.id}`}>
                                                                 <img src={employee.img}
                                                                    alt="profile img" style={{width:'30px' , height:'30px'}}/>
                                                               </Link>
                                                                
                                                                <Link to={`/employee/${employee.id}`}>
                                                                    <Td>{employee.name}</Td>
                                                                </Link>
                                                        </Flex>                                                      
                                                        
                                                        <Td>{employee.age}</Td>
                                                        <Td>{employee.positions}</Td>
                                                        <Td>{employee.department}</Td>
                                                        <Td style = {{
                                                            color : employee.status === 'Active' ?
                                                            'Green':'Blue'}}>{employee.status}</Td>
                                                        <Td>{employee.PhoneNumber}</Td>
                                                        <Link to={`/employee/${employee.id}`} style={{marginLeft:'-50px'}}>
                                                        <Td textAlign='left'>{employee.email}</Td>
                                                        </Link>
                                                        
                                                        

                                                    </Tr>
                                                )
                                            })
                                        }
                                </Tbody>
                    </Table>
                       

                    </TableContainer>
                </Box>


        </div>
    );
    
}

export default Employee;