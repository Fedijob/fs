import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr'


export default function App() {
  return (
    <div> 
      <Navbarr/>
      
      <Routes>
    <Route path="/" element={<SignIn />} />

<Route path="/register" element={<SignUp />} />
<Route path="/home" element={<Home />} />
<Route path="/shop" element={<Shop />} />
</Routes></div>
  )
}

