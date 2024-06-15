"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { adan, adbanced, ecommecre, sanity, solo ,meta, johns, dev} from '@/public/assets';
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
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#0081fb" d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1" x1="42.304" x2="13.533" y1="24.75" y2="24.75" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0081fb"></stop><stop offset=".995" stop-color="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1)" d="M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2" x1="7.635" x2="7.635" y1="32.87" y2="13.012" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0081fb"></stop><stop offset=".995" stop-color="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2)" d="M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z"></path><path d="M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z" opacity=".05"></path><path d="M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z" opacity=".07"></path>
</svg>
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
                    <Image className='w-full  md:h-[300px] h-[150px] '   src={solo} alt='sanity' title='sanity' />
                    </div>
             
            <div className='flex flex-row items-center justify-center text-black text-xl gap-5'>
                <div>
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" className="sol-illustration"><g id="logo.simplified"><g id="Logo" clip-path="url(#clip0_2813_8103)"><g id="Logo_2" clip-path="url(#clip1_2813_8103)"><path id="Vector" d="M21.4906 7.15989C24.9115 7.15989 27.985 8.66049 30.0696 11.0588C30.7778 11.8627 32.1008 11.3133 31.9939 10.2415C31.927 9.54477 31.7934 8.83467 31.593 8.12456C30.5373 4.34628 27.5173 1.39868 23.7356 0.407212C16.1321 -1.60251 9.29028 4.10511 9.29028 11.4071C9.29028 11.8761 9.31701 12.345 9.37046 12.8005C9.50409 13.859 10.9206 14.1269 11.4283 13.1891C13.3526 9.59836 17.1343 7.15989 21.4906 7.15989Z" fill="#FFA310"></path><path id="Vector_2" d="M7.16402 10.5093C7.16402 7.08844 8.66368 4.01498 11.0605 1.93036C11.8638 1.22213 11.3149 -0.100797 10.2437 0.00610591C9.53402 0.0729204 8.82436 0.206549 8.11469 0.39363C4.33877 1.46266 1.39301 4.46932 0.402163 8.25102C-1.59292 15.8679 4.11114 22.7097 11.4086 22.7097C11.8772 22.7097 12.3459 22.683 12.8011 22.6295C13.8589 22.4959 14.1267 21.0794 13.1894 20.5716C9.60096 18.6474 7.16402 14.8657 7.16402 10.5093Z" fill="#149EF2"></path><path id="Vector_3" d="M10.5032 24.8494C7.08428 24.8494 4.01262 23.3497 1.92923 20.9529C1.22141 20.1496 -0.100738 20.6985 0.00610232 21.7697C0.0728775 22.466 0.206428 23.1757 0.406754 23.8853C1.4618 27.6612 4.48004 30.607 8.25952 31.5979C15.8719 33.5929 22.7097 27.8889 22.7097 20.5914C22.7097 20.1228 22.683 19.6541 22.6295 19.1989C22.496 18.1411 21.0804 17.8733 20.5729 18.8106C18.6364 22.4124 14.8569 24.8494 10.5032 24.8494Z" fill="#F20057"></path><path id="Vector_4" d="M24.8494 21.4968C24.8494 24.9157 23.3497 27.9874 20.9529 30.0708C20.1496 30.7786 20.6985 32.1007 21.7697 31.9939C22.466 31.9271 23.1757 31.7936 23.8853 31.5932C27.6612 30.5382 30.607 27.52 31.5979 23.7405C33.5929 16.1281 27.8889 9.29031 20.5914 9.29031C20.1228 9.29031 19.6541 9.31702 19.1989 9.37044C18.1411 9.50399 17.8733 10.9196 18.8106 11.4271C22.4124 13.3636 24.8494 17.1431 24.8494 21.4968Z" fill="#8252DD"></path></g></g></g><defs><clipPath id="clip0_2813_8103"><rect width="32" height="32" fill="white"></rect></clipPath><clipPath id="clip1_2813_8103"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>
                </div>
                <div className='flex flex-col px-2'>
                    <h1 className='text-textDark font-titleFont'>React + Redux</h1>
                    <Link href='https://www.sololearn.com/en/certificates/CT-YWBOKVMZ'title='react'  target="_blank" className='text-textGreen list-disc underline flex flex-row items-center gap-x-2' >See certificate   <FaLongArrowAltRight  /></Link>
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
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#0081fb" d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1" x1="42.304" x2="13.533" y1="24.75" y2="24.75" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0081fb"></stop><stop offset=".995" stop-color="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1)" d="M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2" x1="7.635" x2="7.635" y1="32.87" y2="13.012" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0081fb"></stop><stop offset=".995" stop-color="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2)" d="M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z"></path><path d="M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z" opacity=".05"></path><path d="M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z" opacity=".07"></path>
</svg>
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
