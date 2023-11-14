'use client'
import React ,{useState} from 'react'
import { motion } from 'framer-motion'
import ArchiveCard from './ArchiveCard'

const Archive = () => {

const [ShowMore , setShowMore] =useState(false)

  return (
    <div  className='max-w-contentContainer mx-auto px-4 py-24' >
        <div  className='w-full flex flex-col items-center' >
            <h2  className='text-3xl font-titleFont text-textGreen' >Other Noteworthy Projects</h2>
            <p className='text-sm font-titleFont text-textGreen' >View the archive</p>

        </div>
        <div  className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10' >
            <ArchiveCard
            title='Netflix Api '
            des='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit eaque obcaecati illo ea adipisci hic'
            listItem = {["Nextjs",'Tailwind css','Firebase' ]}
            link='https://netflix-v1-xi.vercel.app/'
            />
                 <ArchiveCard
            title='Juice Shop'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam dolorum minus laudantium at ipsam quam animi minima ducimus.'
            listItem = {["Next js",'Tailwind css','vercel' ]}
            link='https://juiceshop-one.vercel.app/'
            />  
                
                    <ArchiveCard
            title='Car HM'
            des= 'A comprehensive car website where you can explore detailed car specifications. Our user-friendly interface allows you to effortlessly search and find your desired car type, providing an enhanced car browsing experience. '
            listItem = {["Next js",'TypeScript','Tailwind css' ]}
            link='https://cars-v1.vercel.app/'
            />


            {
                ShowMore && (

               < >
                   <motion.div  initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0.1}}  >

                <ArchiveCard
            title='Travel'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam dolorum minus laudantium at ipsam quam animi minima ducimus.'
            listItem = {["Next js",'Tailwind css','vercel' ]}
            link='https://travelweb-ochre.vercel.app/'
            />
                    
                    </motion.div>

                 
                    <motion.div  initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0.2}}  >

                <ArchiveCard
            title='E-Commerce'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam dolorum minus laudantium at ipsam quam animi minima ducimus.'
            listItem = {["React js",'Tailwind css','vercel' ]}
            link='https://hamzachbit.github.io/gamingcode/'
            />
                    
                    </motion.div>


                 
<motion.div  initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0.2}}  >


<ArchiveCard
title='PHOTOLAND'
des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam dolorum minus laudantium at ipsam quam animi minima ducimus.'
listItem = {["Nextjs",'Tailwind css','stripe' ]}
link='https://camera-ecom.vercel.app/'
/>

</motion.div>
                 <motion.div  initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0.3}}  >

<ArchiveCard
title='Fitness Academy'
des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam dolorum minus laudantium at ipsam quam animi minima ducimus.'
listItem = {["Nextjs",'Tailwind css' ]}
link='https://fitness-v0.vercel.app/'
/>

</motion.div>
                    <motion.div  initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0.3}}  >

                     <ArchiveCard
            title='Weather'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam dolorum minus laudantium at ipsam quam animi minima ducimus.'
            listItem = {["Next js",'Tailwind css','vercel' ]}
            link='https://weather-b1.vercel.app/'
            /></motion.div>





<motion.div  initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0.4}}  >

                                     <ArchiveCard
            title='To do app && media'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam dolorum minus laudantium at ipsam quam animi minima ducimus.'
            listItem = {["React",'Tailwind css','Firebase' ]}
            link='https://hamzachbit.github.io/my-media'
            />

</motion.div>
<ArchiveCard
            title='Private Beaches '
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam dolorum minus laudantium at ipsam quam animi minima ducimus.'
            listItem = {["React js",'Tailwind css','vercel' ]}
            link='https://hamzachbit.github.io/my-beaches/'
            />
<motion.div  initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0.4}}  >
                <ArchiveCard
            title='CRUDS'
            des='PRODUCT MANAGEMENT SYSTEM'
            listItem = {["Javascript",'css','Html' ]}
            link='https://magenta-marshmallow-e690f0.netlify.app/'
            />
</motion.div>
<motion.div  initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0.4}}  >
<ArchiveCard
            title='SHOP CHBIT'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam dolorum minus laudantium at ipsam quam animi minima ducimus.'
            listItem = {["React js",'Tailwind css','vercel' ]}
            link='https://hamzachbit.github.io/ecommrece-reacat/'
            /></motion.div>



<motion.div  initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0.4}}  >
                 <ArchiveCard
            title='
            Complete Responsive real estate website'
            des='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit eaque obcaecati illo ea adipisci hic'
            listItem = {["Html",'CSS','Javascript' ]}
            link='https://hamzachbit.github.io/bulid/'
            /> 
</motion.div>
<motion.div  initial={{opacity:0}}  whileInView={{opacity:1}} transition={{delay:0.5}}  >
                           <ArchiveCard
            title='Honey Shop Website '
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam dolorum minus laudantium at ipsam quam animi minima ducimus.'
            listItem = {["Html",'CSS','Javascript']}
            link='https://hamzachbit.github.io/honey/'
            />

</motion.div>

</>

                )
            }


</div>
           


                               
            
       
        <div  className='mt-12 flex items-center justify-center' >
          {
            ShowMore ?   <button    onClick={()=> setShowMore(false)}  className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 ' >Show Less</button> :   <button    onClick={()=> setShowMore(true)}  className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 ' >Show More</button>
          }
        </div>
      

    </div>
  )
}

export default Archive
