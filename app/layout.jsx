

import Head from 'next/head'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase:new URL('https://hamzachbit.vercel.app/'),
  
  title: {
    default:'Hamza Chbit',
    template:`%s | hamza chbit`
},

  description: 'Hamza chbit  React - Nextjs Front-end Developer (JAMstack)  Talks about #reactjs, #reactdeveloper, and #frontenddevelopment',
  
  verification:{
    google:"google-site-verification=Ato9kbNjOrYcUtsrS3ym8wBTaKHyfln7WYPC1D2ODcQ"
  },



  metaTags: [
    {
      name: 'robots',
      content: 'all'
    },
    {
      name: 'google-site-verification',
      content: 'Ato9kbNjOrYcUtsrS3ym8wBTaKHyfln7WYPC1D2ODcQ'
    }
  ],
  
 




 
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
           <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={'https://hamzachbit.vercel.app/'} />
      </Head>
      <body className={inter.className}>
      <ThemeProvider  >
        {children}
        </ThemeProvider  >
        </body>
    </html>
  )
}
