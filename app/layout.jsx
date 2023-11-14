import Head from 'next/head'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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


