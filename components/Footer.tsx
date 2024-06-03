import React from 'react'
import {TbBrandGithub  } from 'react-icons/tb'
import {TiSocialLinkedin } from 'react-icons/ti'
import { FaInstagram ,FaFacebook} from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <div  className='hidden mdl:inline-flex xl:hidden items-center justify-center  w-full py-6 gap-11 text-textLight ' >
        
             
          <Link href="https://github.com/HamzaChbit"  target='_blank'  title='Github'>
            <span className='w-10 h-10 text-xl bg-hoverColor  border-[1px]  rounded-zinc-700     hover:text-textGreen rounded-full   inline-flex  items-center justify-center        cursor-pointer  translate-y-2 transition-all duration-300' >
              <TbBrandGithub/>
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/hamza-chbit-3b47b1239/t"  target='_blank' title='linkedin' >
            <span  className='w-10 h-10 text-xl bg-hoverColor  border-[1px]  rounded-zinc-700     hover:text-textGreen rounded-full   inline-flex  items-center justify-center         cursor-pointer  translate-y-2 transition-all duration-300' >
              <TiSocialLinkedin/>
            </span>
          </Link>
          <Link href="https://www.instagram.com/hamza__chbit"  target='_blank' title='instagram' >
            <span  className='w-10 h-10 text-xl bg-hoverColor  border-[1px]  rounded-zinc-700     hover:text-textGreen  rounded-full   inline-flex  items-center justify-center         cursor-pointer  translate-y-2 transition-all duration-300' >
              <FaInstagram/>
            </span>
          </Link>
          <Link href="https://www.facebook.com/hamzachbit"  target='_blank' title='facebook' >
            <span  className='w-10 h-10 text-xl bg-hoverColor  border-[1px]  rounded-zinc-700     hover:text-textGreen  rounded-full   inline-flex  items-center justify-center         cursor-pointer  translate-y-2 transition-all duration-300' >
              <FaFacebook/>
            </span>
          </Link>


        


    </div>
  )
}

export default Footer