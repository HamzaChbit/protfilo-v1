"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { adan, ecommecre, sanity } from '@/public/assets';
import { motion } from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='max-w-container mx-auto lgl:px-20 py-24 mt-1' id='project'>
           <motion.div   initial={{ y: 100, opacity: 0 }}  transition={{ duration: 1, delay: 0.5 ,ease:"easeInOut"}}    whileInView={{opacity:1 ,y:0}}>
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
            <Link href="https://ecom-sanity-delta.vercel.app/" target='_blanc' className='w-full xl:w-1/2 h-auto relative group  '  title='sanity'>
              <div className='hover:border-4 border-textGreen rounded-3xl '>
                <Image className='w-full h-full object-contain rounded-2xl ' src={sanity} alt='sanity' title='sanity' />
              </div>
            </Link>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 z-10 lgl:justify-between items-end text-right xl:-ml-16 '>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className='text-2xl font-bold'>E-Commerce Sanity</h3>
              <p className='bg-bgCard text-sm md:text-base p-2 md:p-6 rounded-md'>
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
                <Link className='hover:text-textGreen duration-300' href="https://ecom-sanity-delta.vercel.app/" title="sanity" target='_blanc'><RxOpenInNewWindow /></Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div        initial={{ y: 100, opacity: 0 }} 
        whileInView={{opacity:1 ,y:0}}
        transition={{ duration: 1, delay: 0.3,ease:"easeInOut"}}   className='w-full flex flex-col items-center justify-center gap-28 mt-10' >
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <Link href="https://chbit-store.vercel.app/" target='_blanc' className='w-full xl:w-1/2 h-auto relative group '   title='store'>
              <div className='hover:border-4 border-textGreen rounded-3xl'>
                <Image className='w-full h-full object-contain rounded-2xl' src={ecommecre} alt='car' title='car' />
              </div>
            </Link>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className='text-2xl font-bold'>E-Commerce</h3>
              <p className='bg-bgCard text-sm xl:-mr-16 md:text-base p-2 md:p-6 rounded-md'>
                Full Stack E-Commerce App with an Admin Dashboard & Stripe
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>Nextjs</li>
                <li>TypeScript</li>
                <li>PlanetScale</li>
                <li>Stripe</li>
                <li>Tailwind && shadcn/ui</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <Link className='hover:text-textGreen duration-300' href="https://github.com/HamzaChbit/chbit-store" title="github" target='_blanc'><TbBrandGithub /></Link>
                <Link className='hover:text-textGreen duration-300' href="https://chbit-store.vercel.app/" title="Store" target='_blanc'><RxOpenInNewWindow /></Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div         initial={{ y: 100, opacity: 0 }} 
        whileInView={{opacity:1 ,y:0}}
        transition={{ duration: 1, delay:0.4 ,ease:"easeInOut"}}     className='w-full flex flex-col items-center justify-center gap-28 mt-10' >
          <div className='flex flex-col xl:flex-row gap-6'>
            <Link href="https://adan-ma.vercel.app/" target='_blanc' title="adan" className='w-full xl:w-1/2 h-auto relative group '>
              <div className='hover:border-4 border-textGreen rounded-3xl'>
                <Image className='w-full h-full object-contain rounded-2xl' src={adan} alt='commerce' title='commerce'/>
              </div>
            </Link>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
              <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
              <h3 className='text-2xl font-bold'>Prayer times</h3>
              <p className='bg-bgCard text-sm md:text-base p-2 md:p-6 rounded-md'>
                Prayer times in Morocco accurately and easily, as the site provides comprehensive schedules for today’s prayers in all cities and regions.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>Nextjs</li>
                <li>Api</li>
                <li>Tailwind css</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <Link className='hover:text-textGreen duration-300' href="https://github.com/HamzaChbit/adan" title='github' target='_blanc'><TbBrandGithub /></Link>
                <Link className='hover:text-textGreen duration-300' href="https://adan-ma.vercel.app/" title="adan" target='_blanc'><RxOpenInNewWindow /></Link>
              </div>
            </div>
          </div>
        </motion.div>
       
      </div>
    </section>
  );
}

export default Projects;
