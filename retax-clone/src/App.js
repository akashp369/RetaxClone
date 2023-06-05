import { Customer } from "./components/Customer/Customer";
import './App.css';
import Employee from "./components/Employee/Employee";
import { ChakraProvider } from '@chakra-ui/react'
import AllRoutes from "./AllRoutes/AllRoutes";

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
