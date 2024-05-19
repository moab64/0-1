import React , {useState} from 'react'
import { Modal } from './LoginModal/Modal'

const HeaderLogin = () => {
  const [open, setOpen] = useState(false)
  return (
      <>
         <div className='bg-blue-500 w-[133px] h-[38px]  text-white text-center text-sm leading-[30px] rounded-3xl' onClick={() => setOpen(true)}>  ورود به حساب  </div>
         
         <Modal open={open} onCLose={() => setOpen(false)}/>
      </>
  )
}

export  {HeaderLogin}