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
import Petform from './components/Petform';
=======
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import Petform from './components/Petform';


>>>>>>> a430e7a0508cc38f5a535e3583234827b8756e69

function App() {

  const { users } = useSelector(state => state.loginData);  //login data 
  console.log("from servicePayment Page : ", users);

  return (
    <>
<<<<<<< HEAD
      <Petform />
=======
     <Stack spacing={4}>
        <Box>
        <Navbar />
        </Box>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adminPage" element={users && users.role === 'Admin' ? <AdminPage /> : <HomePage />} /> 
           <Route path="/home" element={<HomePage />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/services"  element={<ServicePage />}/>
          <Route path="/servicePaymentPage" element={<ServicePayment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Adoptpage" element={<Adoptpetpage />} />
          <Route path="/forgot" element={<ForgotPassword />}/>
          <Route path="/reset" element={<PasswordReset/>} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<HomePage />} />
          <Route path='/RehomePet' element={<Petform />}/>
        </Routes>
      </Stack>
      <Box>
       <Footer />
      </Box>
      
>>>>>>> a430e7a0508cc38f5a535e3583234827b8756e69
    </>
    // <>
    //   <Stack spacing={20}>
    //     <Box>
    //     <Navbar />
    //     </Box>
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/adminPage" element={<AdminPage />} />
    //       <Route path="/home" element={<HomePage />} />
    //       <Route path="/Register" element={<Register/>} />
    //       <Route path="/services"  element={<ServicePage />}/>
    //       <Route path="/servicePaymentPage" element={<ServicePayment />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/Adoptpage" element={<Adoptpetpage />} />
    //       <Route path="/forgot" element={<ForgotPassword/>}/>
    //       <Route path="/reset" element={<PasswordReset/>} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </Stack>
    // </>
  );

}

export default App;