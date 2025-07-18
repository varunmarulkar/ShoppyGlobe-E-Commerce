//Component for displaying individual product card

import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItems } from '../utils/CartSlice'

const ProductItem = (props) => {

  const dispatch=useDispatch()

  function addItemsToCart(){
    dispatch(addItems(props.data))
  }

  return (
    <div className=' m-3 border rounded-2xl p-2 shadow-md w-60 flex flex-col item-center text-center'>
        <img className='h-40' src={props.data.thumbnail} alt="" />
       <h1 className='font-black text-lg mb-1'>{props.data.title}</h1>    
       <h1 className='text-green-500 font-semibold'>${props.data.price}</h1>      
       <h2 className=' text-sm'> <span className='text-red-500 text-[15px]'>Discount:-</span>{props.data.discountPercentage}%</h2>
       <h2 className='text-yellow-500 text-sm font-medium'>{props.data.rating}⭐</h2>
       <h3 className={props.data.availabilityStatus==="In Stock"? 'text-blue-600'
       :'text-red-500'}>{props.data.availabilityStatus}</h3>
       <button className='border w-[100px] mx-16 mb-2 rounded-2xl bg-yellow-400 cursor-pointer hover:bg-yellow-500' onClick={addItemsToCart}>Add To Cart</button>
      <Link to={`/products/${props.data.id}`}><p className='underline hover:cursor-pointer hover:text-red-500'>View More</p></Link> 
    </div>
  )
}

export default ProductItem
