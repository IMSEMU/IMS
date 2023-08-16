'use client'
import Image from "next/image";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import {LanguageToogle} from "@/app/components/languageToogle";
import Link from "next/link";

export const HomeNav = () => {
  return (
    <>
        {/*homepage navbar*/}
<main className={" border-b border-b-background_shade z-50 mx-0 bg-white sticky w-full top-0"}>
        <nav className={"sticky bg-white top-0 z-50 flex justify-between w-full max-w-[83.75rem] mx-auto my-1"}>

            {/*logo*/}
            <div className={"flex cursor-pointer"}>
                <Link href={"/"}>
                    <Image
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

                <button className={"flex items-center bg-blue rounded py-2 px-4 text-white"}>
                    <BiLogIn className={"mr-1"}/>
                    Login
                </button>
            </div>


        </nav>
    </main>
    </>
  )
}