import React, { useContext, useEffect, useRef, useState } from 'react'
import { storeContext } from '../App'
import { getProduct } from '../api/api'
const baseUrl = "https://dummyjson.com"

const SearchingInp = () => {
  const [state, dispatch] = useContext(storeContext)
  const inpRef = useRef()
  

  
  return (
    <div className='flex'>
        <input ref={inpRef}  placeholder='Search Porducts...' type="text" className='rounded-s-lg outline-none rounded-e-none w-[450px] text-black p-2'/>
        <button onClick={()=>getProduct({dispatch, value: inpRef.current.value, type: "search"})} className='px-6 bg-black text-white text-sm rounded-e-lg '>Searching...</button>
    </div>
  )
}

export default SearchingInp