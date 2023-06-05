import './App.css';
import {useState} from "react"
import AllRoutes from "./AllRoutes/AllRoutes";
import Side from './Side'
import { Route, Routes } from "react-router-dom";
import Main from "./components/Login/Main";
import Sidebar from "./Pages/Sidebar";
import SideContect from "./components/Home/SideContect";
import { 
  Flex,Box
  } from '@chakra-ui/react';

function App() {
  const [toggel, setToggle]=useState(false)
  const onChange=()=>{
    setToggle(!toggel)
  }
  const[isLogin, setIsLogin]=useState(false);
  const update_login=()=>{
    setIsLogin(!isLogin)
  }
  if(isLogin==true){
    return (
      <div className="App">
      <Flex>
      <Box w={"20%"} display={toggel?"none":'block'} >
        <Sidebar  update_login={update_login}/>
      </Box>
      <Box w={!toggel?"82.7%":"100%"}  ml={"0px"}  >
        <SideContect onChange={onChange} toggle={toggel} update_login={update_login}/>
        <AllRoutes  toggle={toggel} isLogin={isLogin} update_login={update_login}/>
      </Box>
    </Flex>
    </div>
  );
   
  }
    return(
      <Routes>
        <Route path="/" element={<Main update_login={update_login}  />}/>
      </Routes>
    )
}

export default App;