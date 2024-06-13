import { Route, Routes } from 'react-router'
import './App.css'
// import Home from './components/Home'
// import Navbar from './components/Navbar'
import Loginpage from './pages/Loginpage'
import HomePage from './pages/HomePage'

function App() {


  return (
     <>
     {/*
     <Home />
     <Loginpage /> */}

<Routes>
<Route path="/" element={<HomePage />}/>
<Route path="/Register"  element={<Loginpage />} />

</Routes>
     </>
  )
}

export default App
