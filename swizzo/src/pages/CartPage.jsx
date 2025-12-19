import React from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'


const CartPage = () => {
  const {cartItem,updateQuantity,removeFromCart,totalAmount,totalQty}=useCart()
   const navigate = useNavigate()


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
            <li key={item.id} className='flex gap-4 bg-white p-3 rounded-2xl shadow-sm'>
              <div className='flex gap-4 items-center'>
                <h3 className='font-medium'>{item.id}</h3>
                <p className='text-sm text-gray-500'>price:${item.price}</p>
                <p className='text-sm text-gray-500'>Added At{item.addedAt}</p>
                  <div className='ml-3 flex items-center gap-3'>
                      {console.log(item)}
                    <button onClick={()=>updateQuantity(item.id,item.quantity-1)} className='text-4xl'>-</button>
                    <button  className='text-xl'>{item.quantity}</button>
                    <button onClick={()=>updateQuantity(item.id,item.quantity+1)} className='text-4xl'>+</button>
                    <span className='ml-4 text-sm'>subtotal:{item.quantity*item.price}</span>
                  </div>
                </div>
                <button onClick={()=>removeFromCart(item.id)}>Remove</button>
                </li>
          ))}
        </ul>
        <div className='mt-6 p-4 justify-between flex'>
          <div>
            <p className='text-xl'>Item: {totalQty}</p>
          <p className='text-xl'>Total: {totalAmount}</p>
          </div>
          <div className='flex gap-3'>
            <button className='bg-red-500 px-4 py-2 h-fit text-white'>Clear</button>
            <button onClick={()=>navigate("/payment")} className='bg-blue-800 px-4 py-2 h-fit text-white'>Go To Payment</button>
          </div>
        </div>
        </>
      )}
    </div>
  )
}

export default CartPage