import React from 'react'
import CartItem from './CartItem'

function CartList({ cart, onRemove }) {
  return (
    <div className="space-y-3">
      {cart?.map((item) => (
        <CartItem key={item?._id} item={item} onRemove={onRemove} />
      ))}
    </div>
  )
}

export default CartList