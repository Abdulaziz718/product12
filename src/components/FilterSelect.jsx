import React, { useContext, useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { getCategoryList, getProduct } from '../api/api';
import { storeContext } from '../App';
const BaseUrl = 'https://dummyjson.com/products/categories'


const FilterSelect = ({product, setProduct}) => {
  const [_, dispatch] = useContext(storeContext)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategoryList({setCategories})
  }, [])

  

  
  return (
    <div className='bg-black gap-3 rounded-md px-3 flex items-center py-2'>
        <div>
          <FaBars />
        </div>
        <select onChange={(e) => getProduct({dispatch, value: e.target.value, type: "filter"})} className='p-0 rounded-none border-0 bg-black outline-none bg-transparent' name="" id="">          
          {
            categories?.length ? categories.map((item, i) => (
              <option className='bg-black' value={item.slug} key={i}>{item.name}</option>
            )):<option value="none">Ma'lumot topilmadi</option>
          }
        </select>
    </div>
  )
}

export default FilterSelect