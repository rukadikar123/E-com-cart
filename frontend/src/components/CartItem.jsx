import React from 'react'

function CartItem({item, onRemove }) {
  return (
    <div className="flex justify-between bg-white p-3 rounded shadow">
      <span>{item?.productId?.title}</span>
      <div>
        <span className="mr-3">Qty: {item?.quantity}</span>
        <button
          onClick={() => onRemove(item?._id)}
          className="text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem