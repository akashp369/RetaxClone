import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home/Home';
import { Box } from '@chakra-ui/react';
export default function AllRoutes() {
  return (
    <Box 
    mt={"50px"} 
    >
    <Routes >
      <Route path={'/'} element={<Home />} />
      <Route path={'/customer'} element={<Home />} /> {/* shailesh Wagh*/}
      <Route path={'/employee'} element={<Home />} /> {/* shailesh panghate*/}
      <Route path={'/employee/:emp_id'} element={<Home  />} /> {/* shailesh panghate*/}
      <Route path={'/cases'} element={<Home />} /> {/* sweksha patel*/}
    </Routes>
    </Box>
  )
}
