import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ products, onAdd }) {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      {products?.map((p) => (
        <ProductCard key={p?._id} product={p} onAdd={onAdd} />
      ))}
    </div>
  )
}

export default ProductList