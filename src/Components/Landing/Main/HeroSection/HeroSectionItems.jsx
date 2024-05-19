import React from 'react'
import { HeroSectionCenter } from './HeroSectionCenter'
import style from './../../../../assets/images/HeroSection/left.svg'
import right from './../../../../assets/images/HeroSection/right.svg'

const HeroSectionItems = () => {
  return (
    <> 
         <div className='w-[152px] h-[448px] mr-10 mt-[15rem]'> 
           <img className='w-full h-80' src={style} />
        </div>
         <div className='w-3/5 h-[365px] mt-[70px]'> 
             <HeroSectionCenter />
          </div>
         <div className='w-[152px] h-[448px]  ml-10 mt-[15rem]'> 
           <img className='w-full  h-80' src={right}/> 
          </div>         
    </>
  )
}

export  {HeroSectionItems}