import React from 'react'

const Search = () => {
  return (
    <div className='relative'> 
      <img src="./search-normal.svg" alt="" className='absolute top-4 left-0 cursor-pointer' />
      <input  className='w-full h-14 mr-7 rounded-2xl pr-5 focus:outline-none text-right' type='text'  placeholder='چی میخوای یاد بگیری؟' />  
    </div>
  )
}

export  {Search}