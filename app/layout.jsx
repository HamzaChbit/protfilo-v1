import Head from 'next/head'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL("https://hamzachbit.vercel.app","https://hamzachbit.netlify.app/"),
  title: 'Hamza Chbit | Chbit   ',
  description: 'I am a FullStack developer with experience building websites and web applications. I specialize in JavaScript, ReactJS, NextJs,ExpressJS , Tailwind CSS ',
  applicationName:"Hamza Chbit",
  keywords:["Hamza Chbit","hamzachbit","hamza chbit","chbit","Hamza chbit"],
  authors:[{name:"Hamza Chbit"}],
  creator:"Hamza Chbit",
  publisher:"Hamza chbit",
  alternates:{canonical:"/",languages:{"en-US":"/en-US"}  },


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
        <meta property="og:url" content={'https://hamzachbit.vercel.app/'} />
      </Head>
      <body className={inter.className}>
      <ThemeProvider  >
      <SpeedInsights />
        {children}
        </ThemeProvider  >
        </body>
    </html>
  )
}
