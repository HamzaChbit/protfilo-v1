
'use client'

import About from '@/components/About'
import Archive from '@/components/Archive'
import Banner from '@/components/Banner'
import { Contact } from '@/components/Contact'
import Footer from '@/components/Footer'
import LeftSide from '@/components/LeftSide'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import RightSide from '@/components/RightSide'

import { motion } from 'framer-motion'
import Head from 'next/head'



export default function Home() {
  return (
<>
      <Head>
        <title>hamza chbit</title>
     
      
        <meta property="og:title" content="hamza chbit" key="title" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hamzachbit.vercel.app/" />
      </Head>

   <main  className='w-full h-screen font-bodyFont bg-bodYColor text-textLight overflow-x-hidden overflow-y-scroll  scrollbar scrollbar-track-textDarkBt scrollbar-thumb-textDarkTw ' >
    <Navbar/>
    <div  className=" w-full h-[88vh] xl: flex items-center gap-20 justify-between" >
      <motion.div
        initial={{opacity:0}} animate={{opacity :1}} transition={{delay:1.5} }    
         className='hidden xl:inline-flex w-32 h-full fixed bottom-0 left-0' >
        <LeftSide/>
      </motion.div>
      <div  className=' h-[88vh] w-full mx-auto p-4' >
        <Banner/>
        <About/>
        <Projects/>
        <Archive/>
      <Contact/>
      <Footer/>




      </div>
      <motion.div  
      initial={{opacity:0}} animate={{opacity :1}} transition={{delay:1.5} }    className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0' >
        <RightSide/>
      </motion.div>
    </div>

   </main>
   </>
  )
}
