import Link from "next/link";
import Image from "next/image";
import {AiFillCaretDown} from "react-icons/ai";


export const TopNav = () => {
  return(
<main className={"remove-highlight border-b border-b-background_shade z-50 mx-0 bg-white dark:bg-dark_2 sticky w-full  top-0"}>
        <nav className={"sticky bg-white dark:bg-dark_2 top-0 z-50 flex justify-between sm:justify-end  w-full max-w-[83.75rem] pr-6 mx-auto py-2"}>

            <div className={"sm:hidden flex justify-start items-center  gap-1 ml-6 cursor-pointer"}>

                <Link href={"/"}>
                    <Image
                        className={"w-[3rem] sm:w-[3rem] md:w-[3.5rem] lg:w-[4rem] "}
                        src={"/logo.svg"}
                        alt={"emu logo"}
                        width={70}
                        height={70}
                        priority
                    />
                </Link>


            </div>

            {/*profile*/}
            <div className={"flex items-baseline text-blue"}>
              <Image
                  src={'/dark-flower.jpeg'}
                  alt={"qq"}
                  height={2000}
                  width={2000}
                  priority
                  className={'w-[3rem] h-[3rem] rounded-full'}
              />
              {/*<AiFillCaretDown />*/}
            </div>


        </nav>
    </main>
  )
}