import Head from 'next/head'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL("https://hamzachbit.vercel.app"),
  title: 'Hamza Chbit | Chbit  ',
  description: 'I am a FullStack developer with experience building websites and web applications. I specialize in JavaScript, ReactJS, NextJs,ExpressJS , Tailwind CSS ',
  applicationName:"Hamza Chbit",
  keywords:["Hamza Chbit","hamzachbit","hamza chbit","chbit","Hamza chbit"],
  authors:[{name:"Hamza Chbit"}],
  creator:"Hamza Chbit",
  publisher:"Hamza chbit",
  alternates:{canonical:"/",languages:{"en-US":"/en-US"}  },

  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "hamzachbit.vercel.app",
    "og:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    "og:type": "website",
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
