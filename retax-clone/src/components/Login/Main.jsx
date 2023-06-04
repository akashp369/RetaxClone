import { useState } from "react";
import Login from "./Login";
import Signup from './Signup';

function Main({ onLogin, update_login }) {
  const [currentForm, setCurrentForm] = useState("login");
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn)
  const handleFormChange = (formName) => {
    setCurrentForm(formName);
  };

  const handleSignup = (email, password, username) => {
    setSignupDetails({ email, password, username });
    setCurrentForm("login");
  };
  const handleChange=()=>{
    setIsLoggedIn(!isLoggedIn)
  }
  const handleLogin = (email, password) => {
    if (currentForm === "signup") {
      alert("Welcome to Retax");
      onLogin();
    } else {
      if (
        email === signupDetails.email &&
        password === signupDetails.password
      ) {
        alert("Welcome to Retax");
        onLogin();
      } else {
        alert("Invalid credentials");
      }
    }
  };
  
  return (
    <div>
      {currentForm === "login" ? (
        <Login onFormChange={handleFormChange} onLogin={handleLogin} handleChange={handleChange} update_login={update_login}/>
      ) : (
        <Signup onFormChange={handleFormChange} onSignup={handleSignup} />
      )}
    </div>
  );
}

export default Main;