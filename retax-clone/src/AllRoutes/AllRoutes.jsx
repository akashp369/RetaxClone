import React from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from '../components/Home/Home';
import { Box } from '@chakra-ui/react';
import Employee from '../components/Employee/Employee';
import EmployeeDetails from '../components/Employee/EmployeeDetails';
import { Customer } from '../components/Customer/Customer';
import Calender from '../components/Calender/Calender';
import { Cases } from '../components/Cases/Cases';
import PrivateRoute from './PrivateRoute';
export default function AllRoutes({setISAuth, isAuth}) {
  return (
    <Box 
    mt={"50px"}  pl={"5px"}
    >
    <Routes >
      <Route path={'/'} element={<Home setISAuth={setISAuth} isAuth={isAuth}/>} />
      <Route path={'/customer'} element={<Customer /> } />    {/* shailesh Wagh*/}
      <Route path={'/employee'} element={<Employee />} /> {/* shailesh panghate*/}
      <Route path={'/employee/:emp_id'} element={<EmployeeDetails  />} /> {/* shailesh panghate*/}
      <Route path={'/cases'} element={<Cases />} /> {/* sweksha patel*/}
      <Route path={'/calendar'} element={<Calender />} /> {/* sweksha patel*/}
    </Routes>
    </Box>
  )
}