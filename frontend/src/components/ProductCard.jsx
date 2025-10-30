import React from 'react'

function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
     
      <h2 className="text-lg font-semibold text-center">{product?.title}</h2>
      <p className="text-gray-600">Rs{product?.price}</p>
      <button
        onClick={() => onAdd(product?._id)}
        className="mt-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard