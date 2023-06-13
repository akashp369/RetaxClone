import { useState } from "react";
import Login from "./Login";
import Signup from './Signup';

function Main() {
  const [currentForm, setCurrentForm] = useState(false);
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    password: "",
    username: "",
  });
  const handleChange=()=>{
    setCurrentForm(!currentForm)
  }
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // // console.log(isLoggedIn)
  // const handleFormChange = (formName) => {
  //   setCurrentForm(formName);
  // };

  // const handleSignup = (email, password, username) => {
  //   setSignupDetails({ email, password, username });
  //   setCurrentForm("login");
  // };
  // const handleChange=()=>{
  //   setIsLoggedIn(!isLoggedIn)
  // }
  // const handleLogin = (email, password) => {
  //   if (currentForm === "signup") {
  //     alert("Welcome to Retax");
  //     onLogin();
  //   } else {
  //     if (
  //       email === signupDetails.email &&
  //       password === signupDetails.password
  //     ) {
  //       alert("Welcome to Retax");
  //       onLogin();
  //     } else {
  //       alert("Invalid credentials");
  //     }
  //   }
  // };

    return (
      <div>
        {
          currentForm?<Signup handleChange={handleChange}/> : <Login handleChange={handleChange}/>
        }
        
      </div>
    )
 
}

export default Main;