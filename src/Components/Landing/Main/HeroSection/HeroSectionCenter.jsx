import React from 'react'
import { Search } from '../../../Common/Search/Search'
import { HeroSectionText } from './HeroSectionText'
import { HeroSectionIcons } from './HeroSectionIcons'
import { Box } from './Box'

const HeroSectionCenter = () => {
  return (
    <> 
    <div className='w-[92%] h-[214px] mt-[70px]'>  <HeroSectionText /> </div>
    <div className='w-[86%] h-14 mt-5'><Search /> </div>
    <div className='w-[92%] h-[211px] flex justify-between mt-[79px] pl-5 pr-[28px]'  >  <HeroSectionIcons /> </div>    
     </>
  )
}

export  {HeroSectionCenter}