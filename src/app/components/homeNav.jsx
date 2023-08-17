'use client'
import Image from "next/image";
import { BiLogIn } from "react-icons/bi";
import {LanguageToogle} from "@/app/components/languageToogle";
import Link from "next/link";

export const HomeNav = () => {
  return (
    <>
        {/*homepage navbar*/}
<main className={"border-b border-b-background_shade z-50 mx-0 bg-white sticky w-full top-0"}>
        <nav className={"sticky bg-white top-0 z-50 flex justify-between w-full max-w-[83.75rem] mx-auto my-1"}>

            {/*logo*/}
            <div className={"flex cursor-pointer"}>
                <Link href={"/"}>
                    <Image
                        className={"w-[3rem] sm:w-[3.5rem] md:w-[4.5rem] lg:w-[5rem] "}
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

                <button className={"text-sm md:text-md lg:text-lg flex items-center bg-blue rounded py-1 px-2 sm:py-2 sm:px-4 text-white"}>
                    <BiLogIn className={"mr-1"}/>
                    Login
                </button>
            </div>


        </nav>
    </main>
    </>
  )
}