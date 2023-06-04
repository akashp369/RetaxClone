import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home/Home';
import { Box } from '@chakra-ui/react';
import Login from '../components/Login/Login';
import Main from '../components/Login/Main';
export default function AllRoutes({isLogin, update_login}) {
  return (
    <Box 
    mt={"50px"} 
    >
    <Routes >
      <Route path={'/dashboard'} element={<Home update_login={update_login}/>} />
      <Route path={'/customer'} element={<Home />} /> {/* shailesh Wagh*/}
      <Route path={'/employee'} element={<Home />} /> {/* shailesh panghate*/}
      <Route path={'/employee/:emp_id'} element={<Home  />} /> {/* shailesh panghate*/}
      <Route path={'/cases'} element={<Home />} /> {/* sweksha patel*/}
    </Routes>
    </Box>
  )
}
