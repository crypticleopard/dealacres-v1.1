import './globals.css'
import { Inter} from 'next/font/google'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const inter = Inter({ subsets: ['latin'],
                      weight: ['300','400','500','700','900'] })

export const metadata = {
  title: 'Deal acres',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className= {inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
