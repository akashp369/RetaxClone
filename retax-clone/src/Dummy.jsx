import { Customer } from "./components/Customer/Customer";
import './App.css';
import Sidebar from "./Pages/Sidebar";
import { Box, Flex, Grid } from "@chakra-ui/react";
import SideContect from "./components/Home/SideContect";
import AllRoutes from "./AllRoutes/AllRoutes";
import { useState } from "react";

function App() {
  const [toggel, setToggle]=useState(false)
  const onChange=()=>{
    setToggle(!toggel)
  }
  return (
    <div className="App">
      <Flex>
      <Box w={"20%"} display={toggel?"none":'block'} >
        <Sidebar  />
      </Box>
      <Box w={!toggel?"80%":"100%"}  ml={0}    >
        <SideContect onChange={onChange} toggle={toggel}/>
        <AllRoutes  toggle={toggel}/>
      </Box>
    </Flex>
    {/* <Side /> */}
    </div>
  );
}

export default App;
