// Indiviudal cart item with quantity controls

import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItems, increasePrice, decreasePrice } from '../utils/CartSlice'

const CartItem = ({ cart }) => {
  const dispatch = useDispatch()

  function toRemoveItems(id) {
    dispatch(removeItems({ id }))
  }

  function toIncreasePrice(id) {
    dispatch(increasePrice(id))
  }

  function toDecreasePrice(id) {
    dispatch(decreasePrice(id))
  }

  return (
    <div key={cart.id} className='border w-[600px] bg-[#34495E] shadow-md mb-5 p-3 px-8'>
      <div className='flex gap-3 items-center text-white font-bold '>
        <img className='w-[50px]' src={cart.thumbnail} alt='' />
        <h1 className='font-bold text-[16px] w-[200px]'>{cart.title}</h1>
        <h1 className='text-[16px]'>${cart.totalPrice.toFixed(2)}</h1>

        {/* Decrease Quantity */}
        <button className='text-4xl text-white flex justify-center items-center cursor-pointer font-semibold mx-10' onClick={() => toDecreasePrice(cart.id)}>-</button>
        <h1 className='text-2xl mt-8 relative bottom-3 right-7.5'>{cart.quantity}</h1>

        {/* Increase Quantity */}
        <button className='text-4xl text-white flex justify-center items-center cursor-pointer font-semibold -mx-7' onClick={() => toIncreasePrice(cart.id)}>+</button>

        {/* Remove item from cart */}
        <button className='cursor-pointer mx-10' onClick={() => toRemoveItems(cart.id)}>Remove</button>
      </div>
    </div>
  )
}

export default CartItem