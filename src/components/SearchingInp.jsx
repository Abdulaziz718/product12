import React, { useEffect, useState } from 'react'
const baseUrl = "https://dummyjson.com"

const SearchingInp = ({product, setProduct}) => {
//   const [state, dispatch] = useContext(ProductContext)
  
  const serachHandler = async (value) =>{
      try {
          const res = await fetch(`${baseUrl}/products/search?q=${value}`)
          const answ = await res.json()
          console.log(answ);
          setProduct(answ?.products)
      } catch (error) {
          console.log(error);
      }
  } 
  return (
    <div className='flex'>
        <input onChange={(e)=>serachHandler(e.target.value)} placeholder='Search Porducts...' type="text" className='rounded-s-lg outline-none rounded-e-none w-[450px] text-black p-2'/>
        <button className='px-6 bg-black text-white text-sm rounded-e-lg '>Searching...</button>
    </div>
  )
}

export default SearchingInp