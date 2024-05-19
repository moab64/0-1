import React from 'react'

const Box = ({number , label , pic}) => {
  return (
    <div className='w-56 h-52 bg-[#ebf9f9] bg-opacity-60 border-[5px] border-white  rounded-2xl '>
        <img className='w-14 h-14 mx-auto mt-5' src={pic}/>
        <div className='mt-5 text-3xl font-bold'>   {number} </div>        
        <div className='mt-5 text-[#546971] font-semibold text-lg'>  {label} </div>
    </div>
  )
}

export  {Box}