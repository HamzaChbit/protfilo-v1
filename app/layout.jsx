import Head from 'next/head'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import ToastProvider from '../context/Tosat'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL("https://hamzachbit.vercel.app"),

  title: 'Hamza Chbit | Front-end Web Dev   ',
  description: 'I am a FullStack developer with experience building websites and web applications. I specialize in JavaScript, ReactJS, NextJs, Tailwind CSS ',
  applicationName:"Hamza Chbit",
  keywords:["Hamza Chbit","Portfolio", "Developer", "Developer Portfolio","hamza chbit","chbit","Hamza chbit"],
  authors:[{name:"Hamza Chbit"}],
  icons: {
    icon: ['/favicon.ico?v=1'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  manifest:'/site.webmanifest',
  creator:"Hamza Chbit",
  publisher:"Hamza chbit",
  alternates:{canonical:"/",languages:{"en-US":"/en-US"}  },
    twitter:{
card:"summary_large_image"
    },

  openGraph: {
    title: 'Hamza Chbit',
    description: 'I am a FullStack developer with experience building websites and web applications...',
  
    url:"https://hamzachbit.vercel.app",siteName:"hamza chbit" ,type:"website",local:""
  },
}

export default function RootLayout({
  children,
}) {




  return (
    <html lang="en">
           <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
            <meta name="robots" content="Hamza Chbit,hamza chbit,chbit, CHBIT , Front end Developer,Agadir,Development" />
        <meta property="og:url" content={'https://hamzachbit.vercel.app/'} />
      </Head>
      <body className={inter.className} >
      
      <ThemeProvider  >
      <SpeedInsights />
      <ToastProvider/>
     

 
        {children}
        <Analytics />
        </ThemeProvider  >
        </body>
    </html>
  )
}
