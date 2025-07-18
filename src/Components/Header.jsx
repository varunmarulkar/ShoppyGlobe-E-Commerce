// Header of the ShoppyGlobe

import React from 'react'
import { headerIcon } from '../utils/constant'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const cart=useSelector((store)=>store.cart.items)
  return (
    <div className='flex justify-between m-2 shadow-lg p-1'>
      <ul className='flex gap-5'>
       <Link to={"/about"}><li className='w-10'><img src={headerIcon} alt="" /></li></Link> 
        <li className='font-black my-1 text-2xl'>ShoppyGlobe</li>
      </ul>
      <ul className='flex gap-20 my-1 font-serif '>
        <div className='flex justify-around gap-2'>
          <img className='w-4 mb-2 ' src="https://cdn-icons-png.flaticon.com/128/25/25694.png" alt="" />
        <Link to=""> <li className='hover:text-red-500 '>Home</li></Link>
        </div>

        <div className='flex justify-around gap-2'>
        <img className='w-4 mb-2' src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="" />
        <Link to="/cart"><li className='hover:text-red-500'>Cart <sup className='text-[20px]'>({cart.length})</sup></li></Link> 
        </div>
        
        <div className='flex justify-around gap-2'>
        <img className='w-4 mb-2' src="	https://cdn-icons-png.flaticon.com/128/295/295128.png" alt="" />
       <Link to="/login"><li className='hover:text-red-500'>Login/SignIn</li></Link> 
        </div>
   
      </ul>
    </div>
  )
}

export default Header
