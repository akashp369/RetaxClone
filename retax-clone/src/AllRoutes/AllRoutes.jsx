import React from 'react'
import { Route, Routes } from "react-router-dom";
import Signup from '../components/Login/Signup';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/customer'} element={<Login />} /> {/* shailesh Wagh*/}
      <Route path={'/employee'} element={<Login />} /> {/* shailesh panghate*/}
      <Route path={'/employee/:emp_id'} element={<Login />} /> {/* shailesh panghate*/}
      <Route path={'/login'} element={<Login />} /> {/* vishwesh captain*/}
      <Route path={'/signup'} element={<Signup />} /> {/* vishwesh captain*/}
      <Route path={'/cases'} element={<Home />} /> {/* sweksha patel*/}
    </Routes>
  )
}
