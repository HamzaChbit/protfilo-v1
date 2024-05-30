
import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from 'react-icons/ai'
import Image from 'next/image'


import { motion } from 'framer-motion'

const About = () => {


  return (
    <motion.section initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8' >

      <SectionTitle title='About Me' titleNo='01' />
      <div
        className='flex flex-col lgl:flex-row gap-16' >
        <motion.div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.8 }} viewport={{ once: true }}
          className='w-full  text-base text-textDark font-medium flex flex-col gap-4' >
          <p>

            I specialize in frontend technologies like React, Next.js, TypeScript, Tailwind CSS, SCSS, and Bootstrap 5, ensuring seamless user experiences and maintainable code.
          </p>

          <p>


            On the backend, Im proficient in MongoDB, Firebase, Clerk and Prisma, creating scalable solutions with robust data management. <span className='text-emerald-800' > <br />
              I prioritize staying updated with industry trends, excel in problem-solving, and collaborate closely with clients to bring their visions to life. </span>My goal is delivering innovative solutions that surpass expectations, leveraging my skill set to create impactful web solutions.
          </p>

          <p>Here are a few technologies I have been working with recently :</p>
          <ul className='max-w-[450px]  text-sm font-titleFont grid grid-cols-2 gap-2 mt-6 ' >
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>React </li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Next.js</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Scss</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>TypeScript</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Tailwind css</li>

            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Bootstrap 5</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>FireBase</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Clerk</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>MongoDB</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>Prisma</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>JavaScript / ES6</li>
            <li className='flex items-center gap-2'><span className='text-textGreen' ><AiFillThunderbolt /></span>HTML / CSS </li>



          </ul>

        </motion.div>


        <div className='w-full    mb-1  mdl:w-full    sml:full    h-70  group     '>
          <div className='w-full  rounded-lg ' >

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
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

    </motion.section>
  )
}

export default About
