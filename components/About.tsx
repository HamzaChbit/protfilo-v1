import React from 'react'
import SectionTitle from './SectionTitle'
import {AiFillThunderbolt} from 'react-icons/ai'
import Image from 'next/image'
import {  chbithamza } from '@/public/assets'

const About = () => {
  return (
    <section  id='about'   className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8' >
        <SectionTitle  title='About Me' titleNo='01'  />
        <div  className='flex flex-col lgl:flex-row gap-16' >
            <div  className='w-full  text-base text-textDark font-medium flex flex-col gap-4' >
                <p>
As a FullStack developer, I possess a robust skill set that includes both frontend and backend technologies. I&apos;m experienced in JavaScript, ReactJS, NextJS, CSS, and HTML for frontend development, while also proficient in ExpressJS and MongoDB for backend tasks. My expertise extends to creating visually appealing and highly functional websites, ensuring dynamic and responsive pages.
</p>

                    <p>
                 
                       
I&apos;m dedicated to staying updated with the latest industry trends and best practices to provide innovative solutions. <span  className='text-textGreen' > I excel in problem-solving, debugging, and implementing new features, and I prioritize close collaboration with clients and stakeholders to bring their vision to life. </span> My strong work ethic, attention to detail, and commitment to excellence consistently shine through in every project I undertake.
                    </p> 
                    <p>
                    Whether I&apos;m building a website from scratch or optimizing an existing web page, my approach remains the same. I&apos;m dedicated to delivering high-quality work that exceeds expectations. With a strong foundation in frontend and backend technologies, along with my problem-solving skills and creative mindset, I am confident in tackling any challenge that comes my way. My ultimate goal is to contribute to the development of dynamic and innovative web solutions that leave a lasting impact.
        </p>
        <p>Here are a few technologies I have been working with recently :</p>
        <ul className='max-w-[450px]  text-sm font-titleFont grid grid-cols-2 gap-2 mt-6 ' >
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>React </li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>Next.js</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>Express.js</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>TypeScript</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>Tailwind css</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>Bootstrap 5</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>FireBase</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>Shadcn/ui</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>MongoDB</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>Prisma</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>JavaScript / ES6</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>HTML / CSS</li>
          
            
        </ul>

            </div>


            <div className='w-full  h-[65vh]   mb-1  mdl:w-full    sml:full    h-70  group     '>
                    <div  className='w-full h-80  rounded-lg ' >
                        <div className='w-full h-[65vh]  flex  ' >
                            <Image  className='rounded-lg object-fill'  src={chbithamza} alt='profile'/>
                            {/* <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300' ></div>
                            <div  className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 ' >    </div> */}

                        
                        </div>
                    </div>
            </div>
        </div>
        
    </section>
  )
}

export default About