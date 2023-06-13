import './App.css';
import {useContext, useEffect, useState} from "react"
import AllRoutes from "./AllRoutes/AllRoutes";
import Side from './Side'
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./components/Login/Main";
import Sidebar from "./Pages/Sidebar";
import SideContect from "./components/Home/SideContect";
import { 
  Flex,Box
  } from '@chakra-ui/react';
import { AuthContext } from './Context api/AuthcontextProvider';

function App() {
  const {isLogged}=useContext(AuthContext)
  const [toggel, setToggle]=useState(false)
  const TOggel_theme=()=>{
    setToggle(!toggel)
  }
  const [isAuth, setIsAuth]=useState(false)
  useEffect(()=>{
    const auth= JSON.parse(localStorage.getItem('auth'))
    if(auth){
      setIsAuth(auth)
    }
  },[])
  return (
        <div className="App">
          {
            !isLogged && !isAuth?(
              <Main  />
              )
            :
            <Flex>
              <Box w={"20%"} display={toggel?"none":'block'}>
                <Sidebar  />
              </Box>
              <Box w={!toggel?"82.7%":"100%"}  ml={"0px"}  >
                  <SideContect TOggel_theme={TOggel_theme}  toggel={toggel} />
                  <AllRoutes  />
              </Box>
            </Flex>
          }
        </div>
  )

  

  
  
  // console.log(auth)
  // const navigate=useNavigate();
  // // if(auth==true){
  // //   if(auth==true){
  // //     navigate('/dashboard');
  // //   }
  // //   return (
  // //     <div className="App">
  // //     
  // //   </div>
  // // );
   
  // // }
  // //   return(
  // //     <Routes>
  // //       <Route path="/" element={<Main update_login={update_login}  />}/>
  // //     </Routes>
  // //   )

  //   {
  //     auth!=null && auth? (
  //       <div className="App">
  //     <Flex>
  //     <Box w={"20%"} display={toggel?"none":'block'}>
  //       <Sidebar  update_login={update_login}/>
  //     </Box>
  //     <Box w={!toggel?"82.7%":"100%"}  ml={"0px"}  >
  //       <SideContect onChange={onChange} toggle={toggel} update_login={update_login}/>
  //       <AllRoutes  toggle={toggel} isLogin={isLogin} update_login={update_login}/>
  //     </Box>
  //   </Flex>
  //   </div>
  //     ):(
  //       <Routes>
  //        <Route path="/" element={<Main update_login={update_login}  />}/>
  //      </Routes>
  //     )
  //   }
}

export default App;