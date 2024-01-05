// ^ importing required components
import React from 'react'
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'

// * declaring app component which will be exported
const App = () => {
  return (
    <>

    {/*  Adding Navbar Component, so it renders in every page */}
    <Navbar />

    {/* Adding Routes, which will help in changing the required components */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes> 
    {/* <Register /> */}
    </>
  )
}

export default App