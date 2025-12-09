import React from 'react'
import Navbar from '../components/layout/Navbar'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import {Route,Routes} from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-50 '>
        <Navbar/>
        <main>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<CartPage/>}/>

        </Routes>
        </main>
    </div>
  )
}

export default AppRoutes