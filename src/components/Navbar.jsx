import React from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className='flex main-container justify-between h-[70px] items-center'>
            <Link to={'/'} className='text-3xl font-medium'>
                <span className='text-blue-500'>Ecom</span><span>merse</span>
            </Link>
            <ul className='sm:flex hidden itams-center gap-6'>
                <li>
                    <Link className='hover:text-blue-500 transition-all'>Home</Link>
                </li>
                <li>    
                    <Link className='hover:text-blue-500 transition-all'>Shopping</Link>
                </li>
                <li>
                    <Link className='hover:text-blue-500 transition-all'>Pages</Link>
                </li>
                <li>
                    <Link className='hover:text-blue-500 transition-all'>Contact</Link>
                </li>
            </ul>
            <div className='flex sm:hidden text-3xl'>
            <RxHamburgerMenu />
            </div>
    </nav>
  )
}

export default Navbar