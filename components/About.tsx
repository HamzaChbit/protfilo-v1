"use client"
import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from 'react-icons/ai'
import Image from 'next/image'


import { motion } from 'framer-motion'

const About = () => {


  return (
    <section   id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8' >
      <motion.div   initial={{ y: 100, opacity: 0 }}  transition={{ duration: 1, delay: 0.5 ,ease:"easeInOut"}}  animate={{y:0,opacity:1}}>
         <SectionTitle title='About Me' titleNo='01' />
      </motion.div>
     
      <div
        className='flex flex-col lgl:flex-row gap-16' >
        <motion.div 
          
          initial={{ x: -100, opacity: 0 }}  transition={{ duration: 1, delay: 0.9 ,ease:"easeInOut"}}    whileInView={{opacity:1 ,x:0}}
          className='w-full  text-base text-textDark font-medium flex flex-col gap-4' >
          <p>

          I am currently a student in System & Network Administration, with a focus on Active Directory, Windows Server, Routing, and Backup Installation.

          <p>


        
          </p>   Alongside my studies,I work as a freelance Front-End Developer, specializing in building responsive websites and web applications. <span className=' text-textGreen' > <br />
          I have strong expertise in JavaScript, ReactJS, Next.js, and Tailwind CSS, creating engaging and user-friendly interfaces. </span>My goal is to provide reliable IT solutions while ensuring the seamless management of network systems and server infrastructure.
          </p>

          <p>Here are a few technologies I have been working with recently :</p>
          <ul className='max-w-[450px]  text-sm font-titleFont grid grid-cols-2 gap-2 mt-6 ' >


            
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Active Directory</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>NextJs</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Cablage</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Reactjs</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Péparation informatique </li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Bootstrap </li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Routing</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>MongoDB</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>GLPI</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Tailwind css</li>


          </ul>

        </motion.div>


        <div className='w-full    mb-1  mdl:w-full    sml:full    h-70  group     '>
          <div className='w-full  rounded-lg ' >

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{opacity:1 ,x:0}}
             
              transition={{ duration: 1, delay: 0.9 ,ease:"easeInOut"}}
            
              className='w-full flex'
            >
              <Image
                className='rounded-lg object-cover'
                width={600}
                     height={600}
                src='/assets/chbit1.jpeg'
                alt='profile'
                title='profile'
              />
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
