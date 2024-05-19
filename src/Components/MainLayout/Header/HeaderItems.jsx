import React from 'react'
import { HeaderLogo } from './HeaderLogo'
import { HeaderMenu } from './HeaderMenu'
import { HeaderLogin } from './HeaderLogin'
import moon from  './../../../assets/images/Header/moon.svg'

const HeaderItems = ({handleThemeSwitch}) => {
  return (
    <>
    <div className='w-44 flex flex-row-reverse'> 
          <HeaderLogin />
          <button onClick={handleThemeSwitch} className='mr-3  w-20 '> <img src={moon} /> </button>
    </div>
         
    <div className='w-96 h-12 flex justify-between' >      
            <HeaderMenu />
      </div> 

    <div className=' h-12 flex'>   
            
             <HeaderLogo /> 
          
      </div>        
    </>
  )
}

export  {HeaderItems}




