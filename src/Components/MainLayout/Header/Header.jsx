import React from 'react'
import { HeaderItems } from './HeaderItems'



const Header = ({handleThemeSwitch}) => {
  return (

    <div className='w-11/12 h-[3rem] mx-auto mt-4 flex flex-row-reverse justify-between items-center z-50  relative '> 
       <HeaderItems handleThemeSwitch={handleThemeSwitch}/>
     </div>
  )
}

export  {Header}