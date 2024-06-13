import { Route, Routes } from 'react-router'
import './App.css'
import ServicePage from './components/Services'
import Loginpage from './pages/Loginpage'
import HomePage from './pages/HomePage'
import Login from './components/LoginComponent'

function App() {


  return (
     <>
  
<Routes>
<Route path="/" element={<HomePage />}/>
<Route path="/home" element={<HomePage />}/>
<Route path="/Register"  element={<Loginpage />} />
<Route path="/services"  element={<ServicePage />} />
<Route path="/login"  element={<Login />} />
</Routes>
     
     </>
  )
}

export default App
