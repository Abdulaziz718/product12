import React from 'react'
import { ToastContainer } from 'react-toastify'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Navbar from './components/Navbar'
import FixedNavbar from './components/FixedNavbar'

const App = () => {
  return (
    <div>
      <ToastContainer 
      position='top-right'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
      style={{zIndex: 10000}}
      />

      <Navbar />
      <FixedNavbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carts' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist />}/>
      </Routes>
    </div>
  )
}

export default App