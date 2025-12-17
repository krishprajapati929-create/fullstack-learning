import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { CartProvider } from './context/CartContext'


function App() {


  return (
    <>
        <CartProvider>
        <AppRoutes/>
        </CartProvider>
    </>
  )
}

export default App
 