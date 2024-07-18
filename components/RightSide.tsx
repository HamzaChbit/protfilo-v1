"use client"
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
const RightSide = () => {
  return (
   
     <motion.div className='w-full h-full flex flex-col items-center justify-end text-textLight'  initial={{ y: 100, opacity: 0 }}  transition={{ duration: 1, delay: 1.5 ,ease:"easeInOut"}}    whileInView={{opacity:1 ,y:0}}>



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

     </motion.div>
       
      


    
  )
}

export default RightSide
