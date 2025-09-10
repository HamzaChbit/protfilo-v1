
'use client'
import { logo } from '@/public/assets'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle';
import React, {  useRef, useState } from 'react'
import {  motion } from 'framer-motion'
import {MdOutlineClose} from 'react-icons/md'
import { TbBrandGithub } from 'react-icons/tb'
import { TiSocialLinkedin } from 'react-icons/ti'
import { FaFacebook, FaInstagram } from 'react-icons/fa'



const Navbar = () => {

        const ref = useRef<string | any>('')  
        const [showMenu,setShowMenu] =useState(false)
      

    const handelScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        setShowMenu(false)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({behavior:'smooth'})
        const links = document.querySelectorAll('.nav-link')
        links.forEach((link)=>{
            link.classList.remove('active')
        })
           

            e.currentTarget.classList.add('active')
    }
    function handlClick(e:any ) {
        if(e.target.contains(ref.current)){
            setShowMenu(false)
        }
    }
   

  return (







    <div  className=' w-full shadow-navbarShadow h-20 lg:h-[12vh] fixed top-0 z-50 bg-bodYColor px-4 ' >
        <div     className='max-w-container    h-full mx-auto py-1 font-titleFont flex items-center justify-between' >
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} >
                <Image   className='w-16' src={logo} alt='logo' title='logo' />
            </motion.div>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}   className='hidden md:block'>
            <ThemeToggle />
        </motion.div>

            <div  className='hidden mdl:inline-flex items-center gap-7 ' >
                <div className='flex text-[13px] gap-7'>
              
                    <Link href='#home' title='home' className='flex items-center gap-1 font-medium text-primary hover:text-textGreen cursor-pointer duration-300 nav-link  hover:shadow-green-500 hover:shadow-xl  '     onClick={handelScroll} >
                        <motion.div
                        initial={{y:-10,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:0.1}}
                        >Home</motion.div>
                     </Link >
                     <Link href='#about' title='about' className='flex items-center gap-1 font-medium text-primary hover:text-textGreen cursor-pointer duration-300 nav-link    hover:shadow-green-500 hover:shadow-xl  '   onClick={handelScroll} >
                     <motion.div
                        initial={{y:-10,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:0.1,delay:0.1}}
                        >
                  

                           <span className='text-textGreen ' >01.</span>About
                        </motion.div>  
                     </Link >
         
                     <Link href='#project' title='project' className='flex items-center gap-1 font-medium text-primary hover:text-textGreen cursor-pointer duration-300 nav-link   hover:shadow-green-500 hover:shadow-xl  '   onClick={handelScroll} >
                     <motion.div
                        initial={{y:-10,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:0.1,delay:0.3}}
                        >
                             <span className='text-textGreen '>02.</span>Project
                        </motion.div>  
                     </Link >
                     <Link href='#contact'  title='contact' className='flex items-center gap-1 font-medium text-primary hover:text-textGreen cursor-pointer duration-300 nav-link    hover:shadow-green-500 hover:shadow-xl  '     onClick={handelScroll} >
                     <motion.div
                        initial={{y:-10,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:0.1,delay:0.4}}
                        >
                             <span  className='text-textGreen '>03.</span>Contact
                        </motion.div>  
                     </Link >
                </div>

            </div>
            <div onClick={()=>setShowMenu(true)}  className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group' >
                <span  className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300 ' ></span>
                <span  className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3   group-hover:translate-x-0 transition-all ease-in-out duration-300 ' ></span>
                <span  className='w-full h-[2px] bg-textGreen inline-flex transform   translate-x-1  group-hover:translate-x-3 transition-all ease-in-out duration-300 ' ></span>

            </div>
      
            {showMenu && (
                <div ref={(node) => (ref.current = node) } 
                className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end '
                 onClick={handlClick}  >
                    <motion.div  initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.1}} 
                    className='w-[80%] h-full  bg-bgCard  flex flex-col items-center px-4 py-10 relative'
                    >
                        <MdOutlineClose  className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4' onClick={()=>setShowMenu(false)} />
                        <div  className='flex flex-col items-center gap-7 ' >
                            <div  className='flex flex-col text-base gap-7 ' >
                            <Link href='#home' className='flex items-center gap-1 font-medium text-primary hover:text-textGreen cursor-pointer duration-300 nav-link'     onClick={handelScroll} >
                        <motion.div
                        initial={{y:20,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:0.2,delay:0.1,ease:"easeIn"}}
                        >Home</motion.div>
                     </Link >
                     <Link href='#about' title="about" className='flex items-center gap-1 font-medium text-primary hover:text-textGreen cursor-pointer duration-300 nav-link'   onClick={handelScroll} >
                     <motion.div
                          initial={{y:20,opacity:0}}
                          animate={{y:0,opacity:1}}
                          transition={{duration:0.2,delay:0.2,ease:"easeIn"}}
                        >
                             <span  className='text-textGreen' >01.</span>About
                        </motion.div>  
                     </Link >

                     <Link href='#project' title='project' className='flex items-center gap-1 font-medium text-primary hover:text-textGreen cursor-pointer duration-300 nav-link'   onClick={handelScroll} >
                     <motion.div
                                 initial={{y:20,opacity:0}}
                                 animate={{y:0,opacity:1}}
                                 transition={{duration:0.2,delay:0.3,ease:"easeIn"}}
                        >
                             <span  className='text-textGreen' >02.</span>Project
                        </motion.div>  
                     </Link >


                     <Link href='#contact' title='contact' className='flex items-center gap-1 font-medium text-primary hover:text-textGreen cursor-pointer duration-300 nav-link'     onClick={handelScroll} >
                     <motion.div
                                 initial={{y:20,opacity:0}}
                                 animate={{y:0,opacity:1}}
                                 transition={{duration:0.2,delay:0.4,ease:"easeIn"}}
                        >
                             <span  className='text-textGreen' >03.</span>Contact
                        </motion.div>  
                     </Link >






                            </div>


                            <div   className=''>
            <ThemeToggle />
        </div>
{/* <a > <motion.button
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, ease: 'easeIn' }}
    className="px-4 py-2 rounded-md text-textGreen text-sm border border-textGreen hover:bg-hoverColor duration-300"
    onClick={handleDownload}
  >
    Resume
  </motion.button></a> */}
       
            <div  className='flex gap-4' >
                          
          <motion.a     initial={{ y:20, opacity:0} } animate={{  opacity:1}} transition={{delay:0.8,ease:"easeIn"} }   href="https://github.com/HamzaChbit"  target='_blank'    rel="noopener noreferrer" >
            <span className='w-10 h-10 text-xl bg-hoverColor  border-[1px]  rounded-zinc-700     text-textLight rounded-full   inline-flex  items-center justify-center       hover:text-textGreen  cursor-pointer  translate-y-2 transition-all duration-300' >
              <TbBrandGithub/>
            </span>
          </motion.a>
          <motion.a     initial={{ y:20, opacity:0} } animate={{opacity:1}} transition={{delay:1,ease:"easeIn"} }   href="https://www.linkedin.com/in/hamza-chbit-3b47b1239/t"  target='_blank'   rel="noopener noreferrer" >
            <span  className='w-10 h-10 text-xl bg-hoverColor  border-[1px]  rounded-zinc-700     text-textLight rounded-full   inline-flex  items-center justify-center       hover:text-textGreen  cursor-pointer  translate-y-2 transition-all duration-300' >
              <TiSocialLinkedin/>
            </span>
          </motion.a>
          <motion.a     initial={{ y:20, opacity:0} } animate={{opacity:1}} transition={{delay:1,ease:"easeIn"} }  href="https://www.instagram.com/hamza__chbit"  target='_blank'    rel="noopener noreferrer">
            <span  className='w-10 h-10 text-xl bg-hoverColor  border-[1px]  rounded-zinc-700     text-textLight rounded-full   inline-flex  items-center justify-center       hover:text-textGreen  cursor-pointer  translate-y-2 transition-all duration-300' >
              <FaInstagram/>
            </span>
          </motion.a>
          <motion.a     initial={{ y:20, opacity:0} } animate={{opacity:1}} transition={{delay:1,ease:"easeIn"} }   href="https://www.facebook.com/hamzachbit"  target='_blank'    rel="noopener noreferrer">
            <span  className='w-10 h-10 text-xl bg-hoverColor  border-[1px]  rounded-zinc-700      text-textLight rounded-full   inline-flex  items-center justify-center       hover:text-textGreen  cursor-pointer  translate-y-2 transition-all duration-300' >
              <FaFacebook/>
            </span>
          </motion.a>

            </div>

     





                </div>
                <motion.a initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2,ease:'easeIn'}} 
            className='text-sm w-72 tracking-widest text-textGreen text-center mt-4 ' href="https://mail.google.com/mail/?view=cm&to=hamzachbit@gmail.com"    rel="noopener noreferrer">

            </motion.a>


                    </motion.div>
                </div>

                
            )}


        </div>
    </div>
 
  )
}

export default Navbar