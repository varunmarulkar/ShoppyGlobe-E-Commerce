// Display all cart items

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItems } from '../utils/CartSlice'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const Cart = () => {
  // Get cart items from Redux store
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()

  function toDeleteItems() {
    dispatch(deleteItems())
  }

  return (
    <div className='text-center min-h-screen bg-[#2C3E50]'>
      <Link to='/'>
        <p className='p-2 absolute hover:text-red-500 hover:cursor-pointer text-white'>⬅Back To The Home Page</p>
      </Link>

      <h1 className='text-3xl font-bold text-white relative top-10'>Cart Items</h1>

      <div className='flex flex-col justify-center items-center m-10'>
        {cartItems.length === 0 ? (
          <h1 className='text-white'>No items in Cart</h1>
        ) : (
          cartItems.map((cart) => <CartItem key={cart.id} cart={cart} />)
        )}
      </div>

      <button className='border w-[200px] font-semibold -mt-10 p-2 bg-yellow-400 cursor-pointer' onClick={toDeleteItems}>
        Clear Cart
      </button>

      <Link to='/checkout'>
        <button className='border w-[200px] font-semibold mt-4 p-2 bg-yellow-400 cursor-pointer'>Proceed To Checkout</button>
      </Link>
    </div>
  )
}

export default Cart