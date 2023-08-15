
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
const Banner = () => {
  return (
    <section id='home' 
    className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4' >
        <motion.h3
        initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,delay:0.7}}     
        className='text-lg font-titleFont tracking-wide text-textGreen' >Hi, my name is</motion.h3>
        <motion.h1   
        className='text-4xl lgl:text-6xl font-titleFont    font-semibold flex flex-col'
          initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,delay:0.7}}    
        >
        <Typewriter
  options={{
    strings: ['Hamza Chbit.'],
    autoStart: true,
    loop: true,
  }}
/>
        
        </motion.h1>
        <motion.p
        className='text-base md:max-w-[650px] text-textDark font-medium'
        initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,delay:0.8}}    
        
        >I am a FrontEnd developer with experience building websites and web applications. I specialize in JavaScript, ReactJS, NextJs, Tailwind CSS and HTML.
</motion.p>
<motion.button 

  initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,delay:0.9}} 
className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md   bg-textGreen/25 hover:shadow-green-900 hover:shadow-2xl ' >
     <a  href="https://github.com/HamzaChbit"  target='_blank' >  Check out my Project!  </a> 
</motion.button>

    </section>
  )
}

export default Banner