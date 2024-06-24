import React, { useEffect, useState } from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosHeart } from "react-icons/io";
import { IoStar } from "react-icons/io5";


const url = 'https://dummyjson.com/products'

const Home = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    const getProduct = async () =>{
      try {
        const res = await fetch(url)
        const {products} = await res.json()
        setProduct(products)
      } catch (error) {
        console.log(error);
      }
    }
    getProduct()
  }, [])

  return (
    <div className='mt-10 main-container gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        {
          product?.length ? product?.map((item, i) => (
            <div key={i} className='shadow flex flex-col rounded-md hover:shadow-md transition-all'>
              <div className='aspect-[5/3] relative group'>
                <img src={item.thumbnail} className='w-full h-full object-cover object-center' alt="" />
                <div className='group-hover:opacity-100 transition-all group-hover:visible opacity-0 invisible absolute top-0 left-0 w-full h-full bg-white/50 flex gap-4 items-center justify-center'>
                  <div className='bg-green-500 hover:bg-black cursor-pointer rounded-full w-8 h-8 flex justify-center items-center'>
                    <HiOutlineShoppingCart className='w-5 h-5 text-white'/>
                  </div>
                  <div className='bg-red-500 cursor-pointer hover:bg-black rounded-full w-8 h-8 flex justify-center items-center'>
                    <IoIosHeart className='w-5 h-5 text-white'/>
                  </div>
                </div>
              </div>
              <div className='flex flex-col h-full flex-1 p-3 gap-2'>
                <h1 className='font-medium text-2xl'>{item.title}</h1>
                <div className='font-medium'>
                  <span className='text-red-500 line-through'>${item.price}</span>
                  <span className='font-normal text-xs'>(-{item.discountPercentage}%)</span>
                  <span className='text-green-500 ms-4'>${(item.price * (100 - item.discountPercentage)/100).toFixed(2)}</span>
                </div>
                <div className='mt-auto flex items-center justify-between'>
                  <div className='text-orange-400 flex items-center gap-2'>
                    <span><IoStar className="w-7 h-7"/></span>
                    <span>{item.rating}</span>
                  </div>
                  <div className='flex gap-2'>
                    <HiOutlineShoppingCart className='h-5 w-5 text-green-500 '/>
                    <IoIosHeart className='h-5 w-5 text-red-500 '/>
                  </div>
                </div>
              </div>
            </div>
          )):<div>Ma'lumot yoq...</div>
        }
    </div>
  )
}

export default Home