import React , {useState} from 'react'
import { Box } from './Box'

const HeroSectionIcons = () => {

    const [heroSectionIcons, setHeroSectionIcons] = useState([
        { number: "167", label: "مدرس مجرب", pic:"./teacher1.svg" },
        { number: "408،228", label: "دقیقه اموزش", pic:"./clock.svg" },
        { number: "460،789", label: "نفر دانشجو", pic:"./people.svg" },
    ])

  return (
     <> 
           {heroSectionIcons.map((item,index) =>{
             return(  <Box key={index}  number={item.number} label={item.label} pic={item.pic} />)
           })}        
     </>
  )
}

export  {HeroSectionIcons}