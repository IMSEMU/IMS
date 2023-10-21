import './globals.css'
import { Inter } from 'next/font/google'
// import {Providers} from '../app/provider'
import { DarkModeProvider } from './contexts/darkModeContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  // console.log(children);
  return (
    <html lang="en" >
      <link rel={"icon"} href={"/logo.svg"}/>
      <DarkModeProvider>
      {/* <Providers> */}
         <body className={`bg-white dark:bg-black ${inter.className }`}>{children}</body>
      {/* </Providers> */}
      </DarkModeProvider>
    </html>
  )
}
