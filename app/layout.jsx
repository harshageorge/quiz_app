import "@/styles/globals.css";
import { Inter } from 'next/font/google';
// import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quiz app',
  description: 'Simple quiz app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <main className='app'>
          {/* <Nav /> */}
          {children}
        </main>
        </body>
    </html>
  )
}
