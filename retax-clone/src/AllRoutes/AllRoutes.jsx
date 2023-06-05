import React from 'react'
import { Route, Routes } from "react-router-dom";
import Employee from '../components/Employee/Employee';
import EmployeeDetails from '../components/Employee/EmployeeDetails';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={<Employee />} />
      <Route path={'/customer'} element={<Employee />} /> {/* shailesh Wagh*/}
      <Route path={'/employee'} element={<Employee />} /> {/* shailesh panghate*/}
      <Route path={'/employee/:emp_id'} element={<EmployeeDetails />} /> {/* shailesh panghate*/}
      <Route path={'/Employee'} element={<Employee />} /> {/* vishwesh captain*/}
      <Route path={'/signup'} element={<Employee />} /> {/* vishwesh captain*/}
      <Route path={'/cases'} element={<Employee />} /> {/* sweksha patel*/}

    </Routes>
  )
}
