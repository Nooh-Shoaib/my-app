import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductNotFound() {
  return (
    <>
      <div className=' bg-[#f8d7da] border-[#f5c6cb] text-[#721c24]  p-[10px] my-[10px]'>
          <div className='flex'>
            <i className='fa-solid fa-circle-exclamation mt-2 px-1'></i>
            <p className='leading-8'>Error: Product not found</p>
          </div>
          <p className='leading-8'>Please check the other products.</p>
          <Link to='/products-all'>
            <button type='button' className=' font-medium rounded-sm mx-12 my-2 text-sm  '>
              <i className='fa-solid fa-circle-arrow-left text-[#721c24] hover:text-[#923a44] text-4xl '></i>
            </button>
          </Link>
        </div>
    </>
  )
}
