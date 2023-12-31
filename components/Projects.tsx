
import Image from 'next/image'
import React from 'react'
import SectionTitle from './SectionTitle'
import {TbBrandGithub} from 'react-icons/tb'
import {RxOpenInNewWindow} from 'react-icons/rx'
import { carWeb, Commerce, ecom,crypto ,ecommecre, payload  } from '@/public/assets'

const Projects = () => {
  return (
    <section className='max-w-container mx-auto lgl:px-20 py-24  mt-1 ' id='project'>
        <SectionTitle   title='Some Things I have Built'  titleNo='03' />
            <div  className='w-full flex flex-col items-center justify-between gap-28 mt-10' >

                       {/* Project 1  */}
        <div className='w-full flex flex-col items-center  justify-center gap-28 mt-10' >
            <div  className='flex flex-col xl:flex-row gap-6   ' >
         <a href="https://e-commerce-chbit.payloadcms.app/" target='_blanc' className='w-full xl:w-1/2 h-auto relative group '>
         <div   className='  hover:border-4  border-textGreen rounded-3xl  ' >
                <Image  className='w-full h-full object-contain rounded-2xl  '  src={payload} alt='payload' />
            </div>
         </a>  
             <div className='w-full xl:w-1/2 flex flex-col  gap-6  lgl:justify-between items-end text-right xl:-ml-16 z-10 '   >
                <p  className='font-titleFont text-textGreen text-sm tracking-wide' >Featured Project</p>
                <h3 className='text-2xl font-bold' >E-Commerce App </h3>
                <p   className='bg-bgCard  text-sm md:text-base p-2 md:p-6 rounded-md' >
                Full Stack E-Commerce App with an Admin Dashboard & CMS & Stripe
                   
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark' >
                    <li>Nextjs</li>
                    <li>Scss</li>
                    <li>Payload</li>
                    <li>Stripe</li>
                    
                </ul>
                <div  className='text-2xl flex gap-4' >
                    <a  className='hover:text-textGreen duration-300'  href="https://github.com/HamzaChbit/e-commerce"  target='_blanc'><TbBrandGithub/></a>
                    <a   className='hover:text-textGreen duration-300'  href="https://e-commerce-chbit.payloadcms.app/ " target='_blanc'><RxOpenInNewWindow/></a>
                
                </div>
            </div>
         </div>
      
           
        </div>

        {/* Project 2  */}

        <div className='w-full flex flex-col items-center  justify-center gap-28 mt-10' >
            <div  className='flex flex-col xl:flex-row-reverse gap-6' >
         <a href="https://chbit-store.vercel.app/" target='_blanc' className='w-full xl:w-1/2 h-auto relative group '>
         <div    className='  hover:border-4  border-textGreen rounded-3xl  ' >
                <Image  className='w-full h-full object-contain rounded-2xl  '  src={ecommecre } alt='car' />
            </div>
         </a>  
             <div className='w-full xl:w-1/2 flex flex-col  gap-6  lgl:justify-between items-end text-right  z-10 '   >
                <p  className='font-titleFont text-textGreen text-sm tracking-wide  ' >Featured Project</p>
                <h3 className='text-2xl font-bold' >E-Commerce</h3>
                <p   className='bg-bgCard  text-sm    xl:-mr-16 md:text-base p-2 md:p-6 rounded-md' >
                Full Stack E-Commerce App with and Admin Dashboard & Stripe
                   
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark' >
                    <li>Nextjs</li>
                    <li>TypeScript</li>
                    <li>PlanetScale</li>
                    <li>Stripe</li>
                    <li>Tailwind && shadcn/ui</li>
                    <li>Vercel Deployment</li>
                </ul>
                <div  className='text-2xl flex gap-4' >
                    <a  className='hover:text-textGreen duration-300'  href="https://github.com/HamzaChbit/chbit-store"  target='_blanc'><TbBrandGithub/></a>
                    <a   className='hover:text-textGreen duration-300'  href="https://chbit-store.vercel.app/ " target='_blanc'><RxOpenInNewWindow/></a>
                
                </div>
            </div>
         </div>
      
           
        </div>

    {/* Project 3 */}
    <div className='w-full flex flex-col items-center  justify-center gap-28 mt-10' >
            <div  className='flex flex-col xl:flex-row gap-6' >
         <a href="https://ecommerce-v10.vercel.app/" target='_blanc' className='w-full xl:w-1/2 h-auto relative group '>
         <div    className='  hover:border-4  border-textGreen rounded-3xl  ' >
                <Image  className='w-full h-full object-contain rounded-2xl   '  src={ecom}   alt='commerce' />
            </div>
         </a>  
             <div className='w-full xl:w-1/2 flex flex-col  gap-6  lgl:justify-between items-end text-right xl:-ml-16 z-10 '   >
                <p  className='font-titleFont text-textGreen text-sm tracking-wide' >Featured Project</p>
                <h3 className='text-2xl font-bold' >Ecommerce</h3>
                <p   className='bg-bgCard  text-sm md:text-base p-2 md:p-6 rounded-md' >
                A specialized site for gaming. Browse our extensive collection of gaming computers, keyboards, mice, and chairs.  
                   
                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark' >
                    <li>Nextjs </li>
                    <li>stripe </li>
                    <li>Sanity </li>
                    <li> Tailwind css</li>
                    <li>Vercel Deployment</li>
                </ul>
                <div  className='text-2xl flex gap-4' >
                    <a  className='hover:text-textGreen duration-300'  href="https://github.com/HamzaChbit/ecommerce-v10"  target='_blanc'><TbBrandGithub/></a>
                    <a   className='hover:text-textGreen duration-300'  href="https://ecommerce-v10.vercel.app/ " target='_blanc'><RxOpenInNewWindow/></a>
                
                </div>
            </div>
         </div>
      
           
        </div>
            </div>


 

    </section>
  )
}

export default Projects