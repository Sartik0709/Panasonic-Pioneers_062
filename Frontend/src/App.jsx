
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Petform from './components/Petform'

import { Route, Routes } from "react-router";
import "./App.css";
import ServicePage from "./components/Services";

import HomePage from "./pages/HomePage";
import Login from "./components/LoginComponent";
import { Stack } from "@chakra-ui/react";
import Adoptpetpage from "./pages/AdpotPetPage";
// import Footer from './components/Footer '
// import Signup from "./components/Signup";
// import Loginpage from "./pages/Loginpage";
import Signup from "./components/Signup";
import BookingPage from './components/BookingPage';
import PaymentPage from './components/PaymentPage';
import ForgotPassword from './components/ForgotPassword';
import PasswordReset from './components/PasswordReset';


function App() {
  return (

    //  <>
    // <Petform/>
    //  </>
    // <>
    //  <ForgotPassword />
    // </>

    <>
      <Stack spacing={20}>
        <Navbar />
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Register" element={<Signup/>} />
          <Route path="/services"  element={<ServicePage />}/>
          <Route path="/booking/:serviceId" element={<BookingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Adoptpage" element={<Adoptpetpage />} />
          <Route path="/payment/:petId" element={<PaymentPage />} />
          <Route path="/forgot" element={<ForgotPassword/>}/>
          <Route path="/reset" element={<PasswordReset/>} />
        </Routes>
        
      </Stack>
    </>
  );

}

export default App;
