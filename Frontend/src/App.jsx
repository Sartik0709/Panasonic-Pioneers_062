import { Route, Routes } from 'react-router'
import './App.css'
import ServicePage from './components/Services'
import Loginpage from './pages/Loginpage'
import HomePage from './pages/HomePage'

function App() {


  return (
     <>
  
<Routes>
<Route path="/" element={<HomePage />}/>
<Route path="/Register"  element={<Loginpage />} />
<Route path="/services"  element={<ServicePage />} />
</Routes>
     
     </>
  )
}

export default App
