import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ServicePage from './components/Services'

function App() {


  return (
     <>
   <Routes>
 
<Route path="/services"  element={<ServicePage />} />

</Routes>
     
     </>
  )
}

export default App
