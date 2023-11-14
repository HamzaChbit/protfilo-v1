

import Head from 'next/head'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   metadataBase:new URL('https://hamzachbit.vercel.app/'),
  
//   title: {
//     default:'Hamza chbit',
//     template:`%s | hamza chbit`,

// },


//   description: 'Hamza chbit  React - Nextjs Front-end Developer (JAMstack)  Talks about #reactjs, #reactdeveloper, and #frontenddevelopment',
  
//   verification:{
//     google:"google-site-verification=Ato9kbNjOrYcUtsrS3ym8wBTaKHyfln7WYPC1D2ODcQ"
//   },
//   other: {
//     'theme-color': '#0d1117',
//     "color-scheme": "dark only",
//     "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
//     "twitter:card": "summary_large_image",
//     "og:url": "hamzachbit.vercel.app",
//     "og:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
//     "og:type": "website",
//   },



//   metaTags: [
//     {
//       name: 'robots',
//       content: 'all'
//     },
//     {
//       name: 'google-site-verification',
//       content: 'Ato9kbNjOrYcUtsrS3ym8wBTaKHyfln7WYPC1D2ODcQ'
//     }
//   ],
  
 




 
// }

export const metadata: Metadata = {
  title: 'Hamza Chbit ',
  description: 'I am a FullStack developer with experience building websites and web applications. I specialize in JavaScript, ReactJS, NextJs,ExpressJS , Tailwind CSS ',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "hamzachbit.vercel.app",
    "og:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "og:type": "website",
  }
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
