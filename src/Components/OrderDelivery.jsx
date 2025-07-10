import React from 'react'
import { Link } from 'react-router-dom';

const OrderDelivery = () => {
  return (
    <div className='text-center text-white h-screen bg-[#1C2833] flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold mb-4'>🛍 Checkout Page</h1>
      <p className='text-lg'>Thanks for shopping at <span className="text-yellow-400 font-semibold">ShoppyGlobe</span>!</p>
      <p className='mt-2'>Your order has been placed successfully.</p>
     <Link to="/"> <p className='mt-2'>You can go back to the home screen <button className='underline cursor-pointer'>click here</button></p></Link>
    </div>
  )
}

export default OrderDelivery;