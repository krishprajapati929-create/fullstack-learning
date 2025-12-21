import React from 'react'
import Select from 'react-select'

const FilterBar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  sortOption,
  onSortChange
}) => {

  const sortOptions = [
    { value: 'none', label: 'None' },
    { value: 'priceLowHigh', label: 'Price: Low to High' },
    { value: 'priceHighLow', label: 'Price: High to Low' },
    { value: 'ratingHighLow', label: 'Rating: High to Low' }
  ]

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    ...(categories || []).map(cat => ({
      value: cat.name.toLowerCase(),
      label: cat.name
    }))
  ]

  const selectedSort =
    sortOptions.find(opt => opt.value === sortOption) || sortOptions[0]

  const selectedCategoryOption =
    categoryOptions.find(opt => opt.value === selectedCategory) || categoryOptions[0]

  return (
    <div className="bg-white rounded-md px-4 py-3 mb-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search foods..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full md:flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
      />

      {/* 🔽 Sort */}
      <div className="w-full md:w-64">
        <Select
          options={sortOptions}
          value={selectedSort}
          onChange={(opt) => onSortChange(opt.value)}
          className="text-sm"
        />
      </div>

      {/* 🗂 Category */}
      <div className="w-full md:w-64">
        <Select
          options={categoryOptions}
          value={selectedCategoryOption}
          onChange={(opt) => onCategoryChange(opt.value)}
          className="text-sm"
          placeholder="Select Category"
        />
      </div>

    </div>
  )
}

export default FilterBar
