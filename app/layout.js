import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Movie Finder',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex items-center flex-col justify-between min-h-screen mx-auto">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
