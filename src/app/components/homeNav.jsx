'use client'
import Image from "next/image";
import { BiLogIn } from "react-icons/bi";
import {LanguageToogle} from "@/app/globalComponents/languageToogle";
import Link from "next/link";
import {DarkModeButton} from "@/app/globalComponents/darkModeButton";

export const HomeNav = () => {
  return (
    <>
        {/*homepage navbar*/}
<main className={"remove-highlight border-b border-b-background_shade z-50 mx-0 bg-white dark:bg-dark_2 sticky w-full  top-0"}>
        <nav className={"sticky bg-white dark:bg-dark_2 top-0 z-50 flex justify-between w-full max-w-[83.75rem] px-1 mx-auto py-1"}>

            {/*logo*/}
            <div className={"flex cursor-pointer"}>
                <Link href={"/"}>
                    <Image
                        className={"w-[3rem] sm:w-[3.5rem] md:w-[4rem] lg:w-[4.5rem] "}
                        src={"/logo.svg"}
                        alt={"emu logo"}
                        width={70}
                        height={70}
                        priority
                    />
                </Link>

                {/*language toogle*/}
                <LanguageToogle />

            </div>

            {/*login button*/}
            <div className={"flex items-center"}>

                <DarkModeButton/>

                <Link href={"/login"} className={"text-sm md:text-md lg:text-lg flex items-center bg-blue rounded py-1 px-2 sm:py-2 sm:px-4 text-white"}>
                    <BiLogIn className={"mr-1"}/>
                    Login
                </Link>
            </div>


        </nav>
    </main>
    </>
  )
}