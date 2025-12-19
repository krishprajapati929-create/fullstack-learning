import React from 'react'
import {Link} from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { useCart } from '../../context/CartContext';
const Navbar = () => {
  const {totalQty}=useCart();
  let isLoggedIn = false;
  return (
    <header className='bg-white shadow-md sticky top-0 z-10'>
        <nav className='container mx-auto px-4 flex items-center justify-between'>
            <Link to='/' className='text-2xl font-bold text-orange-600 py-4'>Swizzo</Link>
            <div className='flex items-center gap-4'>
                <Link to='/cart' className='text-gray-700 hover:text-green-600'>
                Home
                </Link>
                <Link to="/cart" className='text-gray-700 hover:text-green-600 flex items-center gap-1'>
                Cart <FaCartPlus />
                <span className='bg-orange-500 text-white rounded-full ml-1  px-2  '>{totalQty}</span>
                </Link>
            </div>
            <div>
              <button className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600'>{!isLoggedIn?"Login":"Logout"}</button>
            </div>
        </nav>

    </header>
  )
}

export default Navbar