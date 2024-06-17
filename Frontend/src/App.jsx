import Navbar from './components/Navbar'
import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./components/LoginComponent";
import { Stack } from "@chakra-ui/react";
import Adoptpetpage from "./pages/AdpotPetPage";
import BookingPage from './components/BookingPage';
import ServicePage from './pages/ServicePage';
import ServicePayment from './pages/ServicePaymentPage';
import About from './pages/About';
import Register from './components/Register';
import { AdminPage } from './pages/AdminPage';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Stack spacing={15}>
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
          <Route path="/about" element={<About />} />
        </Routes>
        
      </Stack>
      <Footer />
    </>
  );

}

export default App;
