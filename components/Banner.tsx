
'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
const Banner = () => {
  return (
    <section id='home' 
    className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4  ' >
        <motion.h3
        initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,delay:0.5}}     
        className='text-lg font-titleFont tracking-wide text-textGreen font-bold' >Hi, my name is</motion.h3>
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
        
        >I am a FullStack developer with experience building websites and web applications. <br /> I specialize in JavaScript, ReactJS, NextJs, Tailwind CSS .
</motion.p>
{/* <motion.button 

  initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,delay:0.9}} 
className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md   bg-textGreen/25 hover:shadow-green-900 hover:shadow-2xl ' >
     <a  href="https://drive.google.com/file/d/1cW2ogTJux6MRsDtBVVamVMMfephAPWu9/view?usp=sharing"  target='_blank' >  Check out my Resume!  </a> 
</motion.button> */}

    </section>
  )
}

export default Banner
