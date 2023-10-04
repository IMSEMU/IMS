import Link from "next/link";
import Image from "next/image";
import {CiSettings} from "react-icons/ci";
import {VscSignOut} from "react-icons/vsc";
import {ChatIcon, DashboardIcon, HomeIcon, LogbookIcon, NotificationIcon} from "@/app/svg_Icons";

export const TabletSideNav = () => {

    let navlinks = [
        {name:'Home',icons: <HomeIcon />,link:''},
        {name:'Dashboard',icons: <DashboardIcon />,link:''},
        {name:'Notifications',icons: <NotificationIcon />,link:''},
        {name:'Chat',icons: <ChatIcon />,link:''},
        {name:'Logbook',icons: <LogbookIcon />,link:''},
    ]
  return(
      <main className={' bg-white dark:bg-dark_2 hidden sm:block lg:hidden  h-screen w-[6rem] py-2 relative border-r border-background_shade_2'}>

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

                {/*<p className={'text-md mt-5 select-none font-semibold'}>Dashboard</p>*/}

            </div>

          <div className={'py-4 px-4 w-[6rem] '}>

              {/*top navs*/}
              <div className={'flex flex-wrap justify-center '}>

                  <div className={'w-fit rounded bg-background_shade_2 dark:bg-dark_3 border-yellow text-black'}>
                    <div className={'flex justify-center items-center p-2 w-fit gap-3 hover:'}>
                      <Image
                          src={'/dark-flower.jpeg'}
                          alt={"qq"}
                          height={2000}
                          width={2000}
                          priority
                          className={'w-[2.5rem] h-[2.5rem] rounded-full '}
                      />
                    </div>
                  </div>


                  { navlinks.map((navs, index) => (
                    <Link href={navs.link} key={index} className={'my-1.5 w-full hover:ml-3 ease-in-out duration-150 text-blue py-1 '}>
                      <div className={'flex justify-center items-center px-3 py-1  gap-2'}>
                          <div>{navs.icons}</div>
                      </div>
                    </Link>
                  ))}

              </div>

              {/*bottom nav*/}
              <div className={' absolute bottom-3 px-3 w-fit'}>

                  <div className={'my-2 w-fit rounded bg-blue text-white'}>
                    <div className={'flex justify-center items-center p-2 w-fit gap-2'}>
                      <CiSettings className={'text-2xl'} />
                    </div>
                  </div>

                  <div className={'my-2 w-full rounded bg-blue text-white'}>
                    <div className={'flex justify-center items-center p-2  w-fit gap-2'}>
                      <VscSignOut className={'text-2xl'} />
                    </div>
                  </div>

              </div>

          </div>

      </main>
  )
}