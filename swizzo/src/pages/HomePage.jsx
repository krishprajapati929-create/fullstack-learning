import React, { useState, useEffect } from 'react'
import FilterBar from '../components/layout/FilterBar'
import ProductCard from '../components/common/ProductCard'

const HomePage = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [error, setError] = useState(null)

  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('none')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [categories, setCategories] = useState([])

  // 🔹 Fetch products & categories
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()

        const resCategory = await fetch('http://localhost:3000/categories')
        const dataCategory = await resCategory.json()

        setProducts(data)
        setCategories(dataCategory)
        setFiltered(data)
      } catch (err) {
        setError(err)
        console.error('Error fetching data', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // 🔹 Filter + Search + Sort
  useEffect(() => {
    let temp = [...products]

    // Category filter
    if (selectedCategory !== 'all') {
      temp = temp.filter(
        (p) => p.category === selectedCategory
      )
    }

    // Search filter
    if (searchTerm) {
      temp = temp.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sorting
    if (sortOption === 'priceLowHigh') {
      temp.sort((a, b) => a.price - b.price)
    } else if (sortOption === 'priceHighLow') {
      temp.sort((a, b) => b.price - a.price)
    } else if (sortOption === 'ratingHighLow') {
      temp.sort((a, b) => b.rating - a.rating)
    }

    setFiltered(temp)
  }, [products, searchTerm, sortOption, selectedCategory])

  return (
    <div>
      <h2 className="text-red-500 text-xl mb-3">Swizzo Items</h2>

      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">Product not fetched</p>}

      {!loading && !error && filtered.length > 0 && (
        <div className="grid mt-4 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage