import Link from 'next/link'
import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end text-textLight' >
        <Link href="https://mail.google.com/mail/?view=cm&to=hamzachbit@gmail.com" target='_blanc' title='gmail'>



            <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen  'style={{ color: 'var(--color-textGreen)' }}>hamza.chbit.me</p>

            <p className="text-sm rotate-90 w-72 tracking-wide cursor-pointer" style={{ color: 'var(--color-textGreen)' }}>hamza.chbit.me</p>


            </Link>
            </div>
  )
}

export default RightSide
