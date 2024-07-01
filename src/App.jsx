import React, { createContext, useReducer } from 'react'
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Navbar from './components/Navbar'
import FixedNavbar from './components/FixedNavbar'
import { reducerFn } from './api/reducerFn'

export const storeContext = createContext()


const initialValue = {
  products: [],
  cart: [],
  Wishlist: []
}

const App = () => {
  
  const [state, dispatch] = useReducer(reducerFn, initialValue)
  
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

      <storeContext.Provider value={[state, dispatch]}>

      <Navbar />
      <FixedNavbar /> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carts' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist />}/>
      </Routes>
      </storeContext.Provider>
    </div>
  )
}

export default App