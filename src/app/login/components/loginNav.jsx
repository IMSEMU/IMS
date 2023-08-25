import Link from "next/link";
import Image from "next/image";
import {LanguageToogle} from "@/app/components/languageToogle";

export const LoginNav = () => {
    return(
       <>
        <main className={"remove-highlight border-b border-b-background_shade z-50 mx-0 bg-white sticky w-full  top-0"}>
            <nav className={"sticky bg-white top-0 z-50 flex justify-between w-full max-w-[83.75rem] px-1 mx-auto my-1"}>

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

            </nav>
        </main>
       </>
    )
}