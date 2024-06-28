import React, { createContext, useReducer } from 'react'
import { ToastContainer } from 'react-toastify'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Navbar from './components/Navbar'
import FixedNavbar from './components/FixedNavbar'

export const ProductContext = createContext()

const App = () => {
  // const [data, setData] = useState([])
  // const [defData, setDefData] = useState([])
  // const [isFetched, setisFetched] = useState(false)
  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const res = await fetch(`${baseUrl}/products`)
  //             const answ = await res.json()
  //             setData(answ?.products)
  //             setProduct(answ?.products)
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     }
  //     fetchData()
  // }, [])
  // const [state, dispatch] = useReducer(reducerFn, setData)
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
      {/* <ProductContext.Provider value={[state, dispatch]}>
        <FixedNavbar />
      </ProductContext.Provider> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carts' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist />}/>
      </Routes>
    </div>
  )
}

export default App