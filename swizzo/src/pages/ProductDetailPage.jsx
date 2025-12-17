import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../api/FoodApi'

const ProductDetailPage = () => {
    const {id}= useParams()
    const [product,setProduct]= useState(null)
    useEffect(()=>{
        if(!id) return;

        fetchProductById(id).then((p)=>{
            console.log("product",p)
            setProduct(p)
        }).catch((err)=>{
            console.log("data is not found",err)
        })
        
    }, [id])

    

  return (
    <div>
        krish
    <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
             <div className='col-span-1  bg-gray-100 h-80 flex items-center justify-center '>
                 {product?.image ? <img className='w-full h-60 ' alt={product.name} src={product.image}/>:"No image"}
             </div>
             <div className='md:col-span-2 mt-8.5'><h1 className='font-bold text-2xl'>{product?.name}</h1>
             <p className='mt-2 text-gray-700'>{product?.description}</p>
             <div className='font-semibold text-xl mt-4'>{product?.price}</div>
             <button className='rounded-md bg-black px-4 mt-6 py-2  text-white '
             >Add to Cart</button>
             </div>
         </div>
    </div>
    </div>
  )
}

export default ProductDetailPage