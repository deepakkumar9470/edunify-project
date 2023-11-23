import { Raleway } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'School App',
  description: 'School Search app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <main>
          <Navbar/>
        {children} 
        <Footer/> 
        </main>  
      </body>
    </html>
  )
}
