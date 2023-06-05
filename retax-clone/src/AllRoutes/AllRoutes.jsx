import React from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from '../components/Home/Home';
import { Box } from '@chakra-ui/react';
import Login from '../components/Login/Login';
import Main from '../components/Login/Main';
import Employee from '../components/Employee/Employee';
import EmployeeDetails from '../components/Employee/EmployeeDetails';
import { Customer } from '../components/Customer/Customer';
import Calender from '../components/Calender/Calender';
export default function AllRoutes({isLogin, update_login}) {
  const navigate=useNavigate();
  if(isLogin==false){
    navigate('/');
  }
  return (
    <Box 
    mt={"50px"} 
    >
    <Routes >
      <Route path={'/dashboard'} element={<Home update_login={update_login} isLogin={isLogin}/>} />
      <Route path={'/customer'} element={<Customer />} /> {/* shailesh Wagh*/}
      <Route path={'/employee'} element={<Employee />} /> {/* shailesh panghate*/}
      <Route path={'/employee/:emp_id'} element={<EmployeeDetails  />} /> {/* shailesh panghate*/}
      <Route path={'/cases'} element={<Customer />} /> {/* sweksha patel*/}
      <Route path={'/calendar'} element={<Calender />} /> {/* sweksha patel*/}
    </Routes>
    </Box>
  )
}
