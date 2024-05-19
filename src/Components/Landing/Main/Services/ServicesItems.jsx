import React , {useState} from 'react'
import { Box } from './Box'

const ServicesItems = () => {
    const [servicesItems, setSevicesItems] = useState([
      {label: "سادگی خدمات" , des:" سهولت دسترسی و خدمات به سرتاسر کشور با کمترین هزینه بدون نیاز به مراجعه حضوری", pic:"./favorite-chart.svg"} ,
      {label: "فرصت های شغلی" , des: " سهولت دسترسی و خدمات به سرتاسر کشور با کمترین هزینه بدون نیاز به مراجعه حضوری", pic:"./briefcase.svg"} ,
      {label: "مدارک معتبر" , des: " سهولت دسترسی و خدمات به سرتاسر کشور با کمترین هزینه بدون نیاز به مراجعه حضوری", pic:"./personalcard.svg"} ,   
    ])
  return (
    <div className='w-[1280px] h-[280px] flex mt-5 mx-auto'>
        {servicesItems.map((items , index) => {
            return (<Box key={index}  label={items.label} des={items.des} pic={items.pic} />)
        })}
    </div>
  )
}

export  {ServicesItems}