// import './globals.css'
// import { Inter } from 'next/font/google'
// // import {Providers} from '../app/provider'
// import { DarkModeProvider } from './contexts/darkModeContext'

// const inter = Inter({ subsets: ['latin'] })

// export default function RootLayout({ children }) {
//   // console.log(children);
//   return (
//     <html lang="en" >
//       <link rel={"icon"} href={"/logo.svg"}/>
//       <DarkModeProvider>
//       {/* <Providers> */}
//          <body className={`bg-white dark:bg-black ${inter.className }`}>{children}</body>
//       {/* </Providers> */}
//       </DarkModeProvider>
//     </html>
//   )
// }

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import { DarkModeProvider } from "../[locale]/contexts/darkModeContext";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <link rel={"icon"} href={"/logo.svg"} />
      <DarkModeProvider>
        <body className={`bg-white dark:bg-black ${inter.className}`}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </DarkModeProvider>
    </html>
  );
}
