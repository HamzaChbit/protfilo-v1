'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
const Banner = () => {


  return (
    <section id='home' 
    className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4  ' >
        <motion.h3
        initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,delay:0.5}}     
        className="text-lg font-titleFont tracking-wide font-bold text-textGreen"  >Hi, my name is</motion.h3>
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
        initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,delay:0.8}}    
        
        >I am a System & Network Administrator and a freelance Front-End Developer, <br />  I build modern, responsive websites using ReactJS, Next.js, and Tailwind CSS.

.
</motion.p>



          {/* this is MY CV */}
                        
{/* <a href="/assets/cv-chbit.pdf" target='_blanc'> <motion.button
        initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,delay:0.8}}    
    className="px-4 py-2 rounded-md text-textGreen text-sm border border-textGreen hover:bg-hoverColor duration-300"
  
  >
    Resume
  </motion.button></a> */}



    </section>
  )
}

export default Banner
