import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeItems } from '../utils/CartSlice'

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.items)

  const dispatch=useDispatch()

  function toRemoveItems(id) {
    dispatch(removeItems({ id }))
  }

  const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0)

  return (
    <div className='text-center min-h-screen bg-[#2C3E50] p-5'>
      <Link to="/cart">
        <p className='p-2 absolute hover:text-red-500 hover:cursor-pointer text-white'>
          ⬅ Back to Cart
        </p>
      </Link>

      <h1 className='text-3xl font-bold text-white mt-10 mb-6'>Checkout</h1>

      {cartItems.length === 0 ? (
        <h2 className='text-white'>Your cart is empty</h2>
      ) : (
        <div className='flex flex-col items-center'>
          {cartItems.map((item) => (
            <div key={item.id} className='border w-[600px] bg-[#34495E] shadow-md mb-4 p-3 px-8 text-white rounded-lg'>
              <div className='flex gap-4 items-center justify-between'>
                <img src={item.thumbnail} alt={item.title} className='w-[50px] rounded-md' />
                <h2 className='w-[200px] text-left'>{item.title}</h2>
                <p>Qty: {item.quantity}</p>
                <p>Total: ${item.totalPrice.toFixed(2)}</p>
              </div>
            </div>
          ))}

          <h2 className='text-yellow-300 text-xl font-bold mt-6'>
            Total Amount: ${totalAmount.toFixed(2)}
          </h2>

         <Link to="/orderdelivery" onClick={()=>toRemoveItems()}><button className='mt-4 bg-green-500 text-white font-bold px-6 py-2 rounded hover:bg-green-600 cursor-pointer'>
            Place Order
          </button></Link> 
        </div>
      )}
    </div>
  )
}

export default Checkout