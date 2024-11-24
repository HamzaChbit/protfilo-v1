"use client"
import {TbBrandGithub  } from 'react-icons/tb'
import {TiSocialLinkedin } from 'react-icons/ti'
import { FaInstagram ,FaFacebook} from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'
const LeftSide = () => {
  return (
    <motion.div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'  initial={{ y: 100, opacity: 0 }}  transition={{ duration: 1, delay: 1.5 ,ease:"easeInOut"}}    whileInView={{opacity:1 ,y:0}}>
        <div  className='flex flex-col gap-4' >
          <Link href="https://github.com/HamzaChbit"  target='_blank' title='github' >
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300' >
              <TbBrandGithub/>
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/hamzachbit/"  target='_blank'
          title='linkedin' >
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300' >
              <TiSocialLinkedin/>
            </span>
          </Link>
          <Link href="https://www.instagram.com/hamza__chbit"  target='_blank' title='instagram' >
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300' >
              <FaInstagram/>
            </span>
          </Link>
          <Link href="https://www.facebook.com/hamzachbit"  target='_blank'
          title='facebook' >
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300' >
              <FaFacebook/>
            </span>
          </Link>
        </div>
        <div className='w-[2px] h-32 bg-textDark ' ></div>
        
        
      
      
      </motion.div>
  )
}

export default LeftSide
