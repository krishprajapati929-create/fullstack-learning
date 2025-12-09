import React, { useEffect, useState } from 'react'
import FilterBar from '../components/layout/FilterBar';
import ProductCard from '../components/common/ProductCard';


const HomePage = () => {
  const [loading,setLoading]=useState(false);
  const [products,setProducts]=useState([])
  const [error,setError]=useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null)
      try{
        const response = await fetch('http://localhost:3000/products')
        const data = await response.json();
        console.log("our product data",data)
        setProducts(data);
      } catch (error) {
        setError(error)
        console.error('Error fetching products:',error);
      } finally {
        setLoading(false);
      }
      
    }
    fetchData()
  },[])
  return (
    <div>
    <h1 className='text-2xl font-semibold mb-4'>Food Items</h1>
    <FilterBar/>
    {error && <div className='text-red-500'>Error loading products</div>}
    {!loading && !error && products.length!==0 && (
      <div className='mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4'>
        {products.map((product)=>{
          return <ProductCard product={product}/>

        })}
      </div>
    )}
    </div>
  )
}

export default HomePage