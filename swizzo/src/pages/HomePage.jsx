import React from 'react'
import { useState,useEffect } from 'react'
import FilterBar from '../components/layout/FilterBar'
import ProductCard from '../components/common/ProductCard'

const HomePage = () => {
  const [loading,setLoading]=useState(false)
  const [product,setProduct]=useState([])
  const [error,setError]=useState(null)
  useEffect(()=>{
    const fetchdata = async()=>{
      setLoading(true)
      setError(null)
      try {
      const res = await fetch("http://localhost:3001/products")
      const data = await res.json()
      setProduct(data)

      console.log("our product data",data)
      } catch (error) {
        setError(error)
        console.error('error feching product',error)
      }finally{
        setLoading(false)
      }

    }
    fetchdata()
},[])
  return (
    <div>
      <h2 className='text-red-500 text-xl'>swizzo items</h2>
      <FilterBar/>
      {error&&<h2 className='text-red-500'>product not fetched</h2>}
      {!error && product.length!==0 && !loading &&(
        <div  className='grid mt-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4'>
      {product.map(product=>(
        <div key={product.id}><ProductCard product={product}/></div>

      ))}
      </div>
      )}
      
    </div>
  )
}

export default HomePage