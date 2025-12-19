import React from 'react'
import { useCart } from '../context/CartContext'

const PaymentPage = () => {
        const {totalQty,totalAmount} = useCart()
  return (


    <div className="flex flex-col items-center w-60 h-48 border-2 border-black rounded-lg mt-20 shadow m-auto">

  <p className="text-sm font-medium mt-4">
    Payable Amount: ${totalAmount}
  </p>

  <input className="border-2 border-black mt-4 px-2 py-1 rounded w-52 text-sm" placeholder="Cardholder Name"/>

  <input className="border-2 border-black mt-2 px-2 py-1 rounded w-52 text-sm" placeholder="3454 / 3453 / 3453"/>

  <button
    className="bg-blue-600 mt-4 text-white px-4 py-2 rounded w-52 text-sm"
    onClick={() => alert("Payment successful")}>Pay</button>
</div>

  )
}

export default PaymentPage