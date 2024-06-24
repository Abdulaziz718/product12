import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";
const BaseUrl = 'https://dummyjson.com/products/categories'


const FilterSelect = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getCategoryList = async () =>{
      try {
        const res = await fetch(BaseUrl)
        const ans = await res.json()
        setData([{slug: "all", name: "all"}, ...ans])
      } catch (error) {
        console.log(error);
      }
    }
    getCategoryList()
  }, [])
  
  return (
    <div className='bg-black gap-3 rounded-md px-3 flex items-center py-2'>
        <div>
          <FaBars />
        </div>
        <select className='p-0 rounded-none border-0 bg-black outline-none bg-transparent' name="" id="">
          {
            data?.length ? data.map((item, i) => (
              <option className='bg-black' value={item.slug} key={i}>{item.name}</option>
            )):<option value="none">Ma'lumot topilmadi</option>
          }
        </select>
    </div>
  )
}

export default FilterSelect