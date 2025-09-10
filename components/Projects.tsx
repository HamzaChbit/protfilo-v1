"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { adan, ecommecre, hotel, sanity } from '@/public/assets';
import { motion } from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='max-w-container mx-auto lgl:px-20 py-24 mt-1' id='project'>
           <motion.div   initial={{ y: 100, opacity: 0 }}  transition={{ duration: 1, delay: 0.5 ,ease:"easeInOut"}}    animate={{y:0,opacity:1}}>
           <SectionTitle title='Some Things I have Built' titleNo='02' />
      </motion.div>





      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>

        {/* Project 1 */}
        <motion.div   
            
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{opacity:1 ,y:0}}
        transition={{ duration: 1, delay: 0.2 ,ease:"easeInOut"}} 
        className='w-full flex flex-col items-center justify-center gap-28 mt-10' >
          <div className='flex flex-col xl:flex-row gap-6'>
            <Link href="https://ecom-one01.vercel.app/" target='_blanc' className='w-full xl:w-1/2 h-auto relative group  '  title='sanity'>
              <div className='hover:border-4 border-textGreen rounded-3xl '>
                <Image className='w-full h-full object-contain rounded-2xl ' src={sanity} alt='sanity' title='sanity' />
              </div>
            </Link>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 z-10 lgl:justify-between items-end text-right xl:-ml-16 '>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className='text-2xl font-bold'>E-Commerce Sanity</h3>
              <p className='bg-bgCard text-sm md:text-base p-2 md:p-6 rounded-md text-left'>
                The website is an online commercial platform that specializes in selling iPhone phones. The site features modern technologies as it was created using the Next.js source code and the back-end content is controlled using Sanity.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>Nextjs</li>
                <li>Tailwind Css</li>
                <li>Sanity</li>
                <li>clerk</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <Link className='hover:text-textGreen duration-300' title="github" href="https://github.com/HamzaChbit/Ecom-Sanity" target='_blanc'><TbBrandGithub /></Link>
                <Link className='hover:text-textGreen duration-300' href="https://ecom-one01.vercel.app/" title="sanity" target='_blanc'><RxOpenInNewWindow /></Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div        initial={{ y: 100, opacity: 0 }} 
        whileInView={{opacity:1 ,y:0}}
        transition={{ duration: 1, delay: 0.3,ease:"easeInOut"}}   className='w-full flex flex-col items-center justify-center gap-28 mt-10' >
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <Link href="https://adan-ma.vercel.app/" target='_blanc' className='w-full xl:w-1/2 h-auto relative group '   title='store'>
              <div className='hover:border-4 border-textGreen rounded-3xl'>
                <Image className='w-full h-full object-contain rounded-2xl' src={adan} alt='car' title='car' />
              </div>
            </Link>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className='text-2xl font-bold'>Prayer times</h3>
              <p className='bg-bgCard text-sm xl:-mr-16 md:text-base p-2 md:p-6 rounded-md text-left'>
             This web application displays daily prayer times for any city in Morocco. It features a city selector, a live countdown to the next prayer, and a modern, easy-to-read interface for the five daily prayers
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>Nextjs</li>
                <li>TypeScript</li>
                <li>Api</li>
                <li>Framer motion</li>
                <li>Tailwind </li>
                <li>Vercel Deployment</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                {/* <Link className='hover:text-textGreen duration-300' href="https://github.com/HamzaChbit/chbit-store" title="github" target='_blanc'><TbBrandGithub /></Link> */}
                <Link className='hover:text-textGreen duration-300' href="https://adan-ma.vercel.app/" title="Store" target='_blanc'><RxOpenInNewWindow /></Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div         initial={{ y: 100, opacity: 0 }} 
        whileInView={{opacity:1 ,y:0}}
        transition={{ duration: 1, delay:0.4 ,ease:"easeInOut"}}     className='w-full flex flex-col items-center justify-center gap-28 mt-10' >
          <div className='flex flex-col xl:flex-row gap-6'>
            <Link href="https://hotelsindibad.ma/" target='_blanc' title="Hotel" className='w-full xl:w-1/2 h-auto relative group '>
              <div className='hover:border-4 border-textGreen rounded-3xl'>
                <Image className='w-full h-full object-contain rounded-2xl' src={hotel} alt='Hotel' title='Hotel'/>
              </div>
            </Link>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className='text-2xl font-bold'>Hotel Management Site</h3>
              <p className='bg-bgCard text-sm md:text-base p-2 md:p-6 rounded-md text-left'>
              The Hôtel Sindibad Agadir website allows online reservations with room customization. Using Next.js and Sanity for the back-end, the site offers a modern design thanks to Tailwind CSS.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>Nextjs</li>
                <li>Sanity</li>
                <li>Tailwind css</li>
                <li>Next-intl</li>
                <li>Framer motion</li>

              </ul>
              <div className='text-2xl flex gap-4'>
                {/* <Link className='hover:text-textGreen duration-300' href="https://github.com/HamzaChbit/hotelsindibad" title='github' target='_blanc'><TbBrandGithub /></Link> */}
                <Link className='hover:text-textGreen duration-300' href="https://hotelsindibad.ma/" title="Hotel" target='_blanc'><RxOpenInNewWindow /></Link>
              </div>
            </div>
          </div>
        </motion.div>
       
      </div>
    </section>
  );
}

export default Projects;
