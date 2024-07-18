"use client"

import Link from 'next/link';
import React from 'react'
import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'

interface  Props {
    title : string;
    link : string;
    listItem : string[];
    des: string;

}



const ArchiveCard = ({title,link,listItem,des} :Props ) => {
 
  return (
<Link href={link} target='_blanc' title='links' >
<div  className='w-full h-80 rounded-lg bg-bgCard p-7 flex flex-col justify-between gap-6 hover:-translate-y-2 transition-transform duration-300 group' >
        <div className='flex justify-between items-center' >
                <FaRegFolder className='text-textGreen text-4xl' />
                <RxOpenInNewWindow  className=' text-4xl  hover:text-textGreen '/>
        </div>
        <div>
            <h2  className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen' >{title}</h2>
           <p  className='mt-3 text-sm' >{des}</p>
        </div>
        <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap' >
         {listItem.map((item,i)=>(
            <li key={i} >{item}</li>
         )
            
    )}
        </ul>

    </div>
</Link>
  )
}

export default ArchiveCard