import React from 'react'
import { useCart } from '../context/CartContext'

const CartPage = () => {
  const {cartItem,updateQuantity}=useCart()
  console.log(cartItem,"111111111")

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>yourcart</h1>
      {cartItem.length==0?(
        <div className='py-12 text-center text-red-500'>
            your cart is Empty
          </div>
      ):(
        <>
        <ul className='space-y-4'>
          {cartItem.map((item)=>(
            <li className='flex gap-4 bg-white p-3 rounded-2xl shadow-sm'>
              <div>
                <h3>{item.productId}</h3>
                <p>price:${item.price}</p>
                <p>Added At{item.addedAt}</p>
                </div>
                </li>
          ))}
        </ul>
        </>
      )}
    </div>
  )
}

export default CartPage