import React from 'react'
import Navbar from './Components/Navbar'
import Loading from './Components/Loading'
import Register from './Components/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes> 
    {/* <Loading /> */}
    {/* <Register /> */}
    </>
  )
}

export default App