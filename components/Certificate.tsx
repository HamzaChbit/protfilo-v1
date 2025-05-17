"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';

import {  meta,  dev, metalogo,  network,  ccna, cisco} from '@/public/assets';
import { motion } from 'framer-motion'
import { FaLongArrowAltRight, FaRegFolder } from 'react-icons/fa'


const Certificate = () => {

    

  return (
    <section className='max-w-container mx-auto lgl:px-20  py-24 mt-1' id='certificate'>
        <motion.div   initial={{ y: 100, opacity: 0 }}  transition={{ duration: 1, delay: 0.5 ,ease:"easeInOut"}}   animate={{y:0,opacity:1}}>
        <SectionTitle title='Online Certificates' titleNo='' />
      </motion.div>

      <div className='mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 '>

  
      <motion.div   
            
            initial={{ y: 100, opacity: 0 }} 
            whileInView={{opacity:1 ,y:0}}
            transition={{ duration: 1, delay: 0.2 ,ease:"easeInOut"}} 
            className='w-full flex  flex-col items-center justify-center gap-28 mt-10 ' >
              <div className='flex flex-col gap-6 items-center '>
             
              <div className='border-4 border-textGreen  '>
                    <Image className='w-full md:h-[300px] h-[150px]  '   src={meta} alt='sanity' title='sanity' />
                    </div>
             
            <div className='flex flex-row items-center justify-center text-black text-xl gap-5'>
                <div>
                <Image src={metalogo} width={35} height={35}  alt='react' title='react'></Image>
                </div>
                <div className='flex flex-col px-2'>
                    <h1 className='text-textDark font-titleFont'>React Advanced</h1>
                    <Link href="https://www.coursera.org/account/accomplishments/verify/P5Z2HLCA7YP8" target="_blank" title='react' className='text-textGreen list-disc underline flex flex-row items-center gap-x-2' >See certificate   <FaLongArrowAltRight  /></Link>
                </div>


            </div>
              </div>
            </motion.div>





            <motion.div   
            
            initial={{ y: 100, opacity: 0 }} 
            whileInView={{opacity:1 ,y:0}}
            transition={{ duration: 1, delay: 0.2 ,ease:"easeInOut"}} 
            className='w-full flex  flex-col items-center justify-center gap-28 mt-10 ' >
              <div className='flex flex-col gap-6 items-center '>
             
              <div className='border-4 border-textGreen  '>
                    <Image className='w-full  md:h-[300px] h-[150px] '   src={ccna} alt='network' title='network' />
                    </div>
             
            <div className='flex flex-row items-center justify-center text-black text-xl gap-5'>
                <div>
               <Image src={cisco} width={35} height={35}  alt='network' title='network'></Image>
                </div>
                <div className='flex flex-col px-2'>
                    <h1 className='text-textDark font-titleFont'>Network Security</h1>
                    <Link href='https://www.credly.com/badges/e8bd9ea2-4bc4-4a35-9e03-0cd66f7c3490/public_url'title='network'  target="_blank" className='text-textGreen list-disc underline flex flex-row items-center gap-x-2' >See certificate   <FaLongArrowAltRight  /></Link>
                </div>


            </div>
              </div>
            </motion.div>




            <motion.div   
            
            initial={{ y: 100, opacity: 0 }} 
            whileInView={{opacity:1 ,y:0}}
            transition={{ duration: 1, delay: 0.2 ,ease:"easeInOut"}} 
            className='w-full flex  flex-col items-center justify-center gap-28 mt-10' >
              <div className='flex flex-col gap-6 items-center '>
             
              <div className='border-4 border-textGreen  '>
                    <Image className='w-full  md:h-[300px] h-[150px]  '   src={dev} alt='sanity' title='sanity' />
                    </div>
             
            <div className='flex flex-row items-center justify-center text-black md:text-xl text-md gap-5'>
                <div>
                <Image src={metalogo} width={35} height={35}  alt='react' title='react'></Image>
                </div>
                <div className='flex flex-col px-2'>
                    <h1 className='text-textDark font-titleFont'>Front end Development</h1>
                    <Link href="https://www.coursera.org/account/accomplishments/verify/CAK9FA6L45TB" title="react" target="_blank" className='text-textGreen list-disc underline flex flex-row items-center gap-x-2' >See certificate   <FaLongArrowAltRight  /></Link>
                </div>


            </div>
              </div>
            </motion.div>

    
      </div>
    </section>
  );
}

export default Certificate
