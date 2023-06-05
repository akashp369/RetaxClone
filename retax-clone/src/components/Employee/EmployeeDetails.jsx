import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import dataa from "../../Employee.json";
import {useState} from 'react';
import { Link} from "react-router-dom";


function EmployeeDetails(){
    const {emp_id}=useParams()
    const  [empData , setEmpData] = useState(dataa.employeesListData);
    console.log(empData);
    const new_data=empData.filter(e=>{
        return e.id==emp_id
    })
    console.log(new_data);
    const dataEmp = new_data[0];

    return(

      
         <div style={{padding:'30px', margin:'10px'}}>

                <Box>
                <Flex>
                    <Heading>Employees  <span style={{fontSize:'30px', color:'grey'}}>{dataEmp.name}</span></Heading>
                    </Flex> 
                </Box>
                <br /><br />
                <Flex>
                        <Box className="left">
                                <Box>
                                <Flex>
                                        <img src={dataEmp.img} alt="" style={{width:'300px' , height:'300px'}}/>
                                        <Box style={{marginLeft:'50px'}}>
                                            <h2 style = {{color : dataEmp.status === 'Active' ?
                                                                    'Green':'Blue' , fontSize:'30px'}}>{dataEmp.status}</h2>
                                                <br />
                                            <Heading>{dataEmp.name}</Heading>
                                            <br />
                                            <p style={{fontSize:'30px'}}>Position:  {dataEmp.positions}</p>
                                            <p style={{fontSize:'30px'}}>Departmemt:  {dataEmp.department}</p>
                                        </Box>
                                </Flex>
                                    <div style={{marginLeft:'8px'}}>
                                        <br /><br />

                                        <div >      
                                            <Flex>                                 
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"
                                            alt="" style={{width:'100px'}}/>
                                            <p style={{fontSize:'30px' , marginTop:'13px', marginLeft:'3px'}}>Location : </p>
                                            <p style={{fontSize:'30px', marginTop:'13px'}}> {dataEmp.Location}</p>
                                            </Flex>
                                         </div>
                                         <div>   
                                         <Flex>                                     
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png"
                                            alt=""  style={{width:'70px'}}/>
                                            <p style={{fontSize:'30px' , marginTop:'13px',  marginLeft:'15px'}}>Phone No: </p>
                                            <p style={{fontSize:'30px' , marginTop:'13px'}}>{dataEmp.PhoneNumber}</p>
                                            </Flex> 
                                         </div>
                                         <div>  
                                         <Flex>                                      
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xbVW0hXsvd70H-Tv_T-hNtkrEWjBDnnbRtiTMhZRAw&s"
                                            alt="" style={{width:'100px'}}/>
                                            <p style={{fontSize:'30px' , marginTop:'13px' ,  marginLeft:'3px'}}>Email : </p>
                                            <p style={{fontSize:'30px' , marginTop:'13px'}}>{dataEmp.email}</p>
                                            </Flex> 
                                         </div>
                                    </div>
                                    <br />
                                    <div>
                                            <Button colorScheme='purple'>Button</Button>
                                    </div>
                                   
                                </Box>
                                
                        </Box>
                                    <div>
                                        <Button colorScheme='purple'>

                                            <Link to='/employee'>Back to Employees</Link>
                                        </Button>
                                    </div>
                        
                        <Box className="right">

                        </Box>
                </Flex>
        </div>

    );

}
export default EmployeeDetails;