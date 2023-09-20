import Link from "next/link";
import Image from "next/image";
import {CiSettings} from "react-icons/ci";
import {VscSignOut} from "react-icons/vsc";
import {HomeIcon,DashboardIcon,NotificationIcon,ChatIcon,LogbookIcon} from "@/app/svg_Icons";

export const PcSideNav = () => {

    let navlinks = [
        {name:'Home',icons: <HomeIcon />,link:''},
        {name:'Dashboard',icons: <DashboardIcon />,link:''},
        {name:'Notifications',icons: <NotificationIcon />,link:''},
        {name:'Chat',icons: <ChatIcon />,link:''},
        {name:'Logbook',icons: <LogbookIcon />,link:''},
    ]

  return(
      <main className={' bg-white dark:bg-dark_2 hidden sm:block z-50 h-screen w-[6rem] lg:w-[16rem] py-2 sticky top-0 border-r border-background_shade_2'}>

            <div className={"flex justify-start items-center  gap-1 ml-6 cursor-pointer"}>

                <Link href={"/"}>
                    <Image
                        className={"w-[2.5rem] sm:w-[3rem] md:w-[3.5rem] lg:w-[4rem] "}
                        src={"/logo.svg"}
                        alt={"emu logo"}
                        width={70}
                        height={70}
                        priority
                    />
                </Link>


            </div>

          <div className={'py-4 px-6 w-[6rem] lg:w-[16rem] '}>

              {/*top navs*/}
              <div className={'flex flex-wrap justify-center gap-2'}>

                  <div className={'w-fit lg:w-full rounded bg-background_shade_2 dark:bg-dark_4 border-yellow text-black'}>
                    <div className={'flex justify-center items-center p-1 lg:px-1.5 lg:py-2.5 w-fit lg:w-full gap-3 '}>
                      <Image
                          src={'/dark-flower.jpeg'}
                          alt={"qq"}
                          height={1000}
                          width={1000}
                          priority
                          className={'w-[2.5rem] h-[2.5rem] rounded-full '}
                      />
                      <span className={'hidden lg:block font-semibold text-md lg:text-lg truncate'}>Joel Ikenga</span>
                    </div>
                  </div>


                  { navlinks.map((navs, index) => (
                    <Link href={navs.link} key={index} className={'my-1.5 w-full md:w-[10rem] hover:ml-4 ease-in-out duration-150 text-black dark:text-background_shade_2 border-yellow'}>
                      <div className={'flex justify-start items-center px-3 py-1 gap-2 select-none'}>
                          <div>{navs.icons}</div>
                          <span className={'hidden lg:block font-semibold text-md'}>{navs.name}</span>
                      </div>
                    </Link>
                  ))}

              </div>

              {/*bottom nav*/}
              <div className={' absolute bottom-3 mx-2 lg:mx-6 w-fit'}>

                  <div className={'my-2 w-full rounded bg-blue text-white'}>
                    <div className={'flex justify-center items-center p-2 w-fit lg:w-full gap-1'}>
                      <CiSettings className={'text-2xl'} />
                      <span className={'hidden lg:block font-semibold text-md'}>Settings</span>
                    </div>
                  </div>

                  <div className={'my-2 w-full rounded bg-blue text-white'}>
                    <div className={'flex justify-center items-center p-2 w-fit lg:w-full gap-1'}>
                      <VscSignOut className={'text-2xl'} />
                      <span className={'hidden lg:block font-semibold text-md'}>Logout</span>
                    </div>
                  </div>

              </div>

          </div>

      </main>
  )
}