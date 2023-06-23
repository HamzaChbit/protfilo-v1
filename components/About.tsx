import React from 'react'
import SectionTitle from './SectionTitle'
import {AiFillThunderbolt} from 'react-icons/ai'
import Image from 'next/image'
import { chbit, profileImg } from '@/public/assets'

const About = () => {
  return (
    <section  id='about'   className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8' >
        <SectionTitle  title='About Me' titleNo='01'  />
        <div  className='flex flex-col lgl:flex-row gap-16' >
            <div  className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4' >
                <p>As a FrontEnd developer with experience building websites, I have a strong foundation in JavaScript, ReactJS, NextJS, CSS, and HTML. I specialize in creating websites that are both visually appealing and highly functional, using my skills to create dynamic and responsive web pages. I am passionate about web development and strive to stay up-to-date with the latest industry trends and best practices.</p>

                    <p>
                 
                        Over the course of my career, I have honed my problem-solving skills and developed a knack for finding creative solutions to complex challenges.  <span  className='text-textGreen' > I am confident in my ability to tackle any challenge that comes my way ,</span> from debugging code to implementing new features. I believe in collaborating closely with clients and stakeholders to ensure that their vision is realized in the final product.
                    </p> 
                    <p>
                    In addition to my technical skills, I bring a strong work ethic, attention to detail, and a commitment to excellence to every project I undertake. Whether I am building a website from scratch or optimizing an existing web page, I am dedicated to delivering high-quality work that exceeds expectations.
        </p>
        <p>Here are a few technologies I have been working with recently :</p>
        <ul className='max-w-[450px]  text-sm font-titleFont grid grid-cols-2 gap-2 mt-6 ' >
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>React </li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>Next.js</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>TypeScript</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>Tailwind css</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>FireBase</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>JavaScript / ES6</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>HTML</li>
            <li className='flex items-center gap-2'><span  className='text-textGreen' ><AiFillThunderbolt/></span>CSS</li>
            
        </ul>

            </div>


            <div className='w-full  h-[65vh]   mb-1  mdl:w-1/2    sml:w-1/2    lg:w-1/3 h-70  group     '>
                    <div  className='w-full h-80 -left-6 -top-6 rounded-lg ' >
                        <div className='w-full h-[65vh]  flex  ' >
                            <Image  className='rounded-lg    object-cover   '  src={chbit} alt='profile'/>
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