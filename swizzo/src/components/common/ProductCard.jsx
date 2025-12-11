import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const navigate=useNavigate()

    const handleViewDetails=()=>{
        navigate(`/product/${product.id}`)
        console.log(product.id)
    }
    const handleAddToCart=()=>{
        console.log(product)
    }
  return (
    <div>
        <div className='p-4 border-1 w-78 rounded-xl border-black-500 shadow-lg hover:shadow-2xl '>
            <div >
                <img className='rounded-lg w-full h-52 overflow-hidden mb-3' src={product.image} alt={product.name} />
            </div>
            <div className='flex flex-col'>
                <h4 className='text-2xl font-bold'>{product.name}</h4>
                <h4 className='font-small text-sm text-gray-500 mt-0.5'>{product.description}</h4>
                <h4 className='text-sm text-gray-600 mt-1'>⭐⭐⭐⭐⭐{product.rating}</h4>
            <h4 className='mt-3'>
    <span className="text-gray-500 line-through " >
        ₹{product.price}
    </span>
    &nbsp;
    <span className='text-green-700 font-semibold' >
        ₹{product.price - (product.price * 10 / 100)}
    </span>
    &nbsp;
    <span className='text-red-500'>
        (10% OFF)
    </span>
    </h4>
                <h4 className='text-gray-500 mt-1'>{product.review}Reviews</h4>
            </div>
            <div className='flex gap-2 mt-3 h-8'>
                <button className='flex-1 border border-orange-500 text-orange-500 text-xs py-1.5 rounded-md hover:bg-orange-100 '
                onClick={handleViewDetails}
                >view</button>
                <button className='flex-1 bg-orange-500 text-white text-xs hover:bg-orange-400 rounded-md'
                onClick={handleAddToCart}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard