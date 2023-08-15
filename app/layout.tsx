

import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hamza Chbit',
  description: 'Hamza Chbit',
 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider  >
        {children}
        </ThemeProvider  >
        </body>
    </html>
  )
}
