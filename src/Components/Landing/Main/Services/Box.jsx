import React from 'react'


const Box = ({label , des , pic}) => {
  return (
    <div className='w-[405px] h-[280px] odd:ring-2 odd:ring-gray-100 even:bg-white flex flex-wrap justify-center rounded-2xl mx-3  dark:bg-black'>
        <img className='w-20 h-20' src={pic} />
        <h1 className='w-full h-10 text-2xl font-bold dark:text-white'>   {label}  </h1>
        <h1 className='w-full h-10 text-[16px] dark:text-white'>  {des} </h1>
    </div>
  )
}

export  {Box}