import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleFormChange = (formName) => {
    setCurrentForm(formName);
  };

  const handleSignup = (email, password, username) => {
    setSignupDetails({ email, password, username });
    setCurrentForm("login");
  };

  const handleLogin = (email, password) => {
    if (currentForm === 'signup') {
      alert('Welcome to Retax');
    } else {
      if (email === signupDetails.email && password === signupDetails.password) {
        alert('Welcome to Retax');
      } else {
        alert('Invalid credentials');
      }
    }
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormChange={handleFormChange} onLogin={handleLogin} />
      ) : (
        <Signup onFormChange={handleFormChange} onSignup={handleSignup} />
      )}
    </div>
  );
}

export default App;
