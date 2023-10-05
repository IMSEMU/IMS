import Link from "next/link";
import Image from "next/image";
import {BiPlus} from "react-icons/bi";
import {GiPencil} from "react-icons/gi";
import {VscSignOut} from "react-icons/vsc";
import {RiSunFoggyFill} from "react-icons/ri";
import {DarkModeButton} from "@/app/globalComponents/darkModeButton";


export const TopNav = () => {
  return(
<main className={"remove-highlight border-b border-b-background_shade z-50 mx-0 bg-white dark:bg-dark_2 sticky w-full  top-0"}>
        <nav className={"sticky bg-white dark:bg-dark_2 top-0 z-50 flex justify-between sm:justify-end  w-full max-w-[83.75rem] pr-6 mx-auto py-2"}>

            <div className={"sm:hidden flex justify-start items-center  gap-1 ml-6 cursor-pointer"}>

                <Link href={"/"}>
                    <Image
                        className={"w-[3.5rem] lg:w-[4rem] "}
                        src={"/logo.svg"}
                        alt={"emu logo"}
                        width={70}
                        height={70}
                        priority
                    />
                </Link>


            </div>

            {/*profile*/}
            <div className={"flex items-baseline text-blue relative"}>
              <Image
                  src={'/dark-flower.jpeg'}
                  alt={"qq"}
                  height={2000}
                  width={2000}
                  priority
                  className={'w-[3rem] h-[3rem] rounded-full'}
              />

            {/*    dropdown*/}
                <div className={' hidden absolute right-4 top-14 w-[16rem] h-fit bg-background_shade_2 rounded text-black'}>

                    {/*image and name*/}
                    <div className={'flex justify-start items-center p-3 gap-3 border-b border-dark_3'}>

                      <div className={'relative cursor-pointer rounded-full overflow-hidden w-[5rem]  flex items-center'}>
                          <Image
                              src={'/dark-flower.jpeg'}
                              alt={"qq"}
                              height={2000}
                              width={2000}
                              priority
                              className={'w-[3.3rem] h-[3.3rem] rounded-full'}
                          />
                          <div className={'absolute bottom-0 right-2 bg-white text-black rounded-full text-xl'}>
                              <BiPlus />
                          </div>
                      </div>

                      <div className={'flex truncate flex-wrap w-full'}>
                          <p className={'truncate text-sm sm:text-md md:text-lg font-semibold'}>Joel Ikenga</p>
                          <p className={'truncate text-sm sm:text-md text-blue cursor-pointer'}>joelikenga@email.com</p>
                      </div>

                    </div>

                {/*    options*/}
                    <div className={'p-3'}>

                        <div className={'flex justify-start gap-2 capitalize py-1.5 my-1 cursor-pointer'}>
                            <GiPencil className={'text-2xl text-blue'} />
                            <p className={''}>Edit Profile</p>
                        </div>

                        <div className={'flex justify-between gap-2 capitalize py-1.5 my-1 cursor-pointer'}>

                            <div className={'inline-flex gap-2'}>
                                <RiSunFoggyFill className={'text-2xl text-blue'} />
                                <p className={''}>Theme</p>
                            </div>

                            <span  classname={'border-2 border-dark_3'}>
                                <DarkModeButton />
                            </span>

                        </div>

                        <div className={'flex justify-start gap-2 capitalize py-1.5 my-1 cursor-pointer'}>
                            <VscSignOut className={'text-2xl text-blue'} />
                            <p className={''}>Logout</p>
                        </div>

                    </div>

                </div>

            </div>


        </nav>
    </main>
  )
}