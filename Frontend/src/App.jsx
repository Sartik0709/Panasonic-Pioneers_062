import Navbar from './components/Navbar'
import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./components/LoginComponent";
import { Stack } from "@chakra-ui/react";
import Adoptpetpage from "./pages/AdpotPetPage";
import BookingPage from './components/BookingPage';

import PaymentPage from './components/PaymentPage';
import ForgotPassword from './components/ForgotPassword';
import PasswordReset from './components/PasswordReset';

import ServicePage from './pages/ServicePage';
import ServicePayment from './pages/ServicePaymentPage';
import About from './pages/About';
import Register from './components/Register';
import { AdminPage } from './pages/AdminPage';




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
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/services"  element={<ServicePage />}/>
          <Route path="/servicePaymentPage" element={<ServicePayment />} />
          <Route path="/booking/:serviceId" element={<BookingPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/Adoptpage" element={<Adoptpetpage />} />
          <Route path="/payment/:petId" element={<PaymentPage />} />
          <Route path="/forgot" element={<ForgotPassword/>}/>
          <Route path="/reset" element={<PasswordReset/>} />

          <Route path="/Adoptpage" element={<Adoptpetpage />} />  
          <Route path="/about" element={<About />} />

        </Routes>
        
      </Stack>
    </>
  );

}

export default App;
