<<<<<<< HEAD
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Petform from './components/Petform'
=======
import { Route, Routes } from "react-router";
import "./App.css";
import ServicePage from "./components/Services";

import HomePage from "./pages/HomePage";
import Login from "./components/LoginComponent";
import Navbar from "./components/Navbar";
import { Stack } from "@chakra-ui/react";
import Adoptpetpage from "./pages/AdpotPetPage";
// import Footer from './components/Footer '
// import Signup from "./components/Signup";
// import Loginpage from "./pages/Loginpage";
import Signup from "./components/Signup";
>>>>>>> f96e0e3ce3295b10e655e1694d3c5c31561a093c

function App() {
  return (
<<<<<<< HEAD
     <>
    <Petform/>
     </>
  )
=======
    <>
      <Stack spacing={20}>
        <Navbar />
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Register" element={<Signup/>} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Adoptpage" element={<Adoptpetpage />} />
        </Routes>
        
      </Stack>
    </>
  );
>>>>>>> f96e0e3ce3295b10e655e1694d3c5c31561a093c
}

export default App;
