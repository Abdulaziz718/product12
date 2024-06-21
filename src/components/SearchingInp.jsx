import React from 'react'

const SearchingInp = () => {
  return (
    <div className='flex'>
        <input type="text" className='rounded-s-lg outline-none rounded-e-none w-[450px] text-black p-2'/>
        <button className='px-6 bg-black text-white text-sm rounded-e-lg '>Searching...</button>
    </div>
  )
}

export default SearchingInp