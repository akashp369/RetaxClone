import React from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from '../components/Home/Home';
import { Box } from '@chakra-ui/react';
import Login from '../components/Login/Login';
import Main from '../components/Login/Main';
import Employee from '../components/Employee/Employee';
import EmployeeDetails from '../components/Employee/EmployeeDetails';
import { Customer } from '../components/Customer/Customer';
export default function AllRoutes() {
  return (
    <Box 
    mt={"50px"} 
    >
    <Routes >
      <Route path={'/dashboard'} element={<Home update_login={update_login} isLogin={isLogin}/>} />
      <Route path={'/customer'} element={<Customer />} /> {/* shailesh Wagh*/}
      <Route path={'/employee'} element={<Home />} /> {/* shailesh panghate*/}
      <Route path={'/employee/:emp_id'} element={<Home />} /> {/* shailesh panghate*/}
      <Route path={'/login'} element={<Home />} /> {/* vishwesh captain*/}
      <Route path={'/signup'} element={<Home />} /> {/* vishwesh captain*/}
      <Route path={'/cases'} element={<Home />} /> {/* sweksha patel*/}

    </Routes>
    </Box>
  )
}