import React from 'react'
import { ServicesText } from './ServicesText'
import { ServicesItems } from './ServicesItems'
import { Box } from './Box'


const Services = () => {
  return (
    <div className='w-[1280px] h-[390px] flex flex-wrap   mx-auto '>
       <ServicesText />
       <ServicesItems />
    </div>
  )
}

export  {Services}