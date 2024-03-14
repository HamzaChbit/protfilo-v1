'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';


export const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = useRef();

  const sendEmail = (e) => {
   

    emailjs.sendForm('service_1l8wln6', 'template_tugej4a', form.current, 'EGW9Iy57TjlDfnomu')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent!")
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
    
  };
  const onSubmit = (data, event) => {
    
    event.preventDefault();

    
    if (data.email === "") {
      toast.error("Please enter your email address");
      return;
    }

    
    sendEmail(data);
  };

  return (
    <section id='contact' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
      <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
        04. What's Next?
      </p>
      <h2 className='font-titleFont text-5xl font-semibold'>Get In Touch</h2>
      <p className='max-w-[600px] text-center text-textDark'>
        Currently looking for any new opportunities, my inbox is always open.
      </p>
     
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5  min-w-[50%]     xxl:min-w-[50%]  xl:min-w-[50%]  lg:min-w-[70%]   md:min-w-[80%]  mdl:min-w-[80%] sm:min-w-[82%]  xs:min-w-[92%] '   >
     
     <input type="text"
      name="user_name" placeholder='Name'
      {...register("user_name", { required: true })}
      
       className='py-2 px-2 text-black border-b-2 border-textGreen focus:outline-none '/>
 
     <input   type="email"
      name="user_email" 
      placeholder='Email'
       {...register("user_email", { required: true })}
     className='py-2 px-2 text-black border-b-2 border-textGreen focus:outline-none  '/>

     <input name="subject" placeholder='Subject'
     {...register("subject", { required: true })}
     className='py-2 px-2  text-black border-b-2 border-textGreen   focus:outline-none'   />
 
     <textarea name="message"   {...register("message", { required: true })} placeholder='Type your message here' className=' pb-12  text-black border-2 border-textGreen focus:outline-none'/>
 

<div  className='mt-2 flex items-center justify-center' >
        <input type="submit" value="submit" className='cursor-pointer w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300  '  />
 
   </div>     
    
  
   </form>
  
    
   
 
    </section>
  );
};
