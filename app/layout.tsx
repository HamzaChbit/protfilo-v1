import Head from 'next/head'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import ToastProvider from '../context/Tosat'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {


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
    metadataBase: new URL("https://hamzachbit.vercel.app"),
  openGraph: {
    title: 'Hamza Chbit',
    description: 'I am a FullStack developer with experience building websites and web applications...',
  
    url:"https://hamzachbit.vercel.app",siteName:"hamza chbit" ,type:"website",local:""
  },
  robots: "index, follow",
}

export default function  RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
 
}>) {


  const initialTheme = 'light'; 

  return (
    <html lang="en">
           <Head>
       
            <meta name="robots" content="index, follow ,Hamza Chbit,hamza chbit,chbit, CHBIT , Front end Developer,Agadir,Development" />

          
            <meta name="msvalidate.01" content="B8C345F65ACF1759C6FEE03ECB37A2E3" />
            <meta name="google-site-verification" content="biLLABt4fX9K0SvGTRdOm1XlTO774iH5iVAsJsmmxkg" />
       
      </Head>
      <body className={inter.className} >
      
      <ThemeProvider initialTheme={initialTheme}>
      <SpeedInsights />
      <ToastProvider/>
     

 
        {children}
        <Analytics />
        </ThemeProvider>
        </body>
    </html>
  )
}
