"use client"

import About from '@/components/About';
import Archive from '@/components/Archive';
import Banner from '@/components/Banner';
import { Contact } from '@/components/Contact';
import Footer from '@/components/Footer';
import LeftSide from '@/components/LeftSide';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import RightSide from '@/components/RightSide';
import Head from 'next/head';
import Certificate from '@/components/Certificate';
export default function Home() {

  return (
    <>
      <Head>
        <title>hamza chbit</title>
        <meta property="og:title" content="hamza chbit" key="title" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hamzachbit.vercel.app/" />
      </Head>

      <main className="w-full h-screen overflow-y-scroll  font-bodyFont bg-bodYColor text-textLight overflow-x-hidden  ">


  
    

          <Navbar />
       
      
         <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between   "> 
          <div className="hidden xl:inline-flex w-32 h-full fixed bottom-0 left-0  ">
            <LeftSide />
          </div>
          <div className="h-[88vh] w-full mx-auto p-4   ">
            <Banner />
            <About />
            <Certificate/>
            <Projects />

            <Archive />
            <Contact />
            <Footer />
          
          </div>
          <div className=' w-28 h-full fixed right-0 bottom-0  '>
              <RightSide/>
            </div>
            </div>
          
      </main>
    </>
  );
}
