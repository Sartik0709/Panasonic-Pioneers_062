import Navbar from './components/Navbar'
import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./components/LoginComponent";
import { Box, Stack } from "@chakra-ui/react";
import Adoptpetpage from "./pages/AdpotPetPage";
import ForgotPassword from './components/ForgotPassword';
import PasswordReset from './components/PasswordReset';
import ServicePage from './pages/ServicePage';
import ServicePayment from './pages/ServicePaymentPage';
import About from './pages/About';
import Register from './components/Register';
import { AdminPage } from './pages/AdminPage';
<<<<<<< HEAD

=======
// import Petform from './components/Petform';
>>>>>>> 72b3833d6fa628db630e97f390b6c842a0ec8213



function App() {
  return (

<<<<<<< HEAD

    //  <>
    // <Petform/>
    //  </>
    // <>
    //  <ForgotPassword />
    // </>

    <>
      <Stack spacing={20}>
        <Navbar />
=======
    <>
      <Stack spacing={20}>
        <Box>
        <Navbar />
        </Box>
>>>>>>> 72b3833d6fa628db630e97f390b6c842a0ec8213
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/services"  element={<ServicePage />}/>
          <Route path="/servicePaymentPage" element={<ServicePayment />} />
<<<<<<< HEAD
          <Route path="/booking/:serviceId" element={<BookingPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/Adoptpage" element={<Adoptpetpage />} />
          <Route path="/payment/:petId" element={<PaymentPage />} />
          <Route path="/forgot" element={<ForgotPassword/>}/>
          <Route path="/reset" element={<PasswordReset/>} />

          <Route path="/Adoptpage" element={<Adoptpetpage />} />  
          <Route path="/about" element={<About />} />

        </Routes>
        
=======
          <Route path="/login" element={<Login />} />
          <Route path="/Adoptpage" element={<Adoptpetpage />} />  
          <Route path="/about" element={<About />} />
        </Routes>
>>>>>>> 72b3833d6fa628db630e97f390b6c842a0ec8213
      </Stack>
    </>
  );

}

export default App;
