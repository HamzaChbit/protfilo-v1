import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end text-textLight' >
    
            <Link 
      target="_blank" 
      href="https://wa.me/+212694977110" 
      className="group"
    >
      <FaWhatsapp 
        className="transform group-hover:-translate-y-2 duration-500 transition-all animate-bounce" 
        size={40}  
        color="green" 
      />
    </Link>
      


    
            </div>
  )
}

export default RightSide
