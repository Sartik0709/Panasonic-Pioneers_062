import Navbar from './components/Navbar'
import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./components/LoginComponent";
import { Stack } from "@chakra-ui/react";
import Adoptpetpage from "./pages/AdpotPetPage";
import Signup from "./components/Signup";
import BookingPage from './components/BookingPage';
import ServicePage from './pages/ServicePage';
import ServicePayment from './pages/ServicePaymentPage';


function App() {
  return (
    <>
      <Stack spacing={20}>
        <Navbar />
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Register" element={<Signup/>} />
          <Route path="/services"  element={<ServicePage />}/>
          <Route path="/servicePaymentPage" element={<ServicePayment />} />
          <Route path="/booking/:serviceId" element={<BookingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Adoptpage" element={<Adoptpetpage />} />  
        </Routes>
        
      </Stack>
    </>
  );

}

export default App;
