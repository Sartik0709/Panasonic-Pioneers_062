import { Route, Routes } from "react-router";
import "./App.css";
import ServicePage from "./components/Services";
import Loginpage from "./pages/Loginpage";
import HomePage from "./pages/HomePage";
import Login from "./components/LoginComponent";
import Navbar from "./components/Navbar";
import { Stack } from "@chakra-ui/react";
import Adoptpetpage from "./pages/AdpotPetPage";

function App() {
  return (
    <>
      <Stack spacing={2}>
        <Navbar />
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Register" element={<Loginpage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Adoptpage" element={<Adoptpetpage />} />
        </Routes>
      </Stack>
    </>
  );
}

export default App;
