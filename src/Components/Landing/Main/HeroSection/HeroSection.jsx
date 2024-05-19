import React from 'react'
import { HeroSectionItems } from './HeroSectionItems'
import style from './../../../../assets/images/LandingImages/header-bg.png'

const HeroSection = () => {
  return (
    <div className='w-full h-[40rem] flex flex-row-reverse justify-center item-center mt-[-5rem] ' style={{width: `1440px` , height: `900px`   , backgroundImage: `url(${style})`}} > 
          <HeroSectionItems />
    </div>
  )
}

export  {HeroSection}