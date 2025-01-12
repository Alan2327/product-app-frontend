import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Addproduct from './components/Addproduct'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-product" element={<Addproduct/>} />
        </Routes>

    </div>
  )
}

export default App