// "use client"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: {
//     template: '%s | I.M.S.',
//     default: 'I.M.S', // a default is required when creating a template
//   },
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel={"icon"} href={"/logo.svg"}/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
