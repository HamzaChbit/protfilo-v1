import React from 'react'
import {TbBrandGithub  } from 'react-icons/tb'
import {TiSocialLinkedin } from 'react-icons/ti'
import { FaInstagram ,FaFacebook} from 'react-icons/fa'
import Link from 'next/link'

const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight' >
        <div  className='flex flex-col gap-4' >
          <Link href="https://github.com/HamzaChbit"  target='_blank' >
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300' >
              <TbBrandGithub/>
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/hamza-1dz4/"  target='_blank' >
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300' >
              <TiSocialLinkedin/>
            </span>
          </Link>
          <Link href="https://www.instagram.com/hamza__chbit"  target='_blank' >
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300' >
              <FaInstagram/>
            </span>
          </Link>
          <Link href="https://www.facebook.com/hamzachbit"  target='_blank' >
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300' >
              <FaFacebook/>
            </span>
          </Link>
        </div>
        <div className='w-[2px] h-32 bg-textDark ' ></div>
        
        
      
      
      </div>
  )
}

export default LeftSide
