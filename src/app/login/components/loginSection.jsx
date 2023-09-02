'use client'

import Link from "next/link";
import Image from "next/image";
import {RxEyeClosed,RxEyeOpen} from "react-icons/rx";
import {BiPencil} from "react-icons/bi";
import {FaHome} from "react-icons/fa";
import {useState} from "react";
import {DarkModeButton} from "@/app/globalComponents/darkModeButton";

export default function LoginSection() {

  const [visibility, setVisibility] = useState(true);

  const showPassword = () => {
    setVisibility(!visibility);
  }

  return (
    <main className={'max-h-screen'}>

      <Link href={'/'} className={'absolute bg-white p-2 shadow-md border border-background_shade_2 dark:border-dark_2 dark:border-0 dark:bg-dark_2 inline-flex items-center gap-1 text-blue dark:text-yellow top-4 rounded left-4 md:left-7'}>
        <FaHome />
      </Link>

      <div className={'absolute top-4 rounded right-1 md:right-7'}><DarkModeButton /></div>


       <section className=" p-2 bg-white dark:bg-dark_1 min-h-screen flex items-center justify-center">
      <div className="bg- dark:bg-dark_2 p-5 flex rounded shadow-xl dark:border-none border border-background_shade_2 max-w-[30rem] md:max-w-full w-[60rem] h-[35rem]">

        {/*image section*/}

        <div className="w-1/2 md:block hidden mr-2">
          <Image width={1000} height={1000} src="https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="rounded-lg w-full h-full object-cover" alt="page img" />
        </div>


        {/*form section*/}
        <div className="w-full md:w-1/2 px-5 my-1 md:my-4">
          <div className={'flex justify-center items-center my-2'}> <Image width={90} height={90} src="/logo.svg" className="rounded-lg w-[5rem] h-[5rem] object-cover" alt="page img" /></div>
          <h2 className="text-md md:text-md lg:text-lg xl:text-xl font-bold text-center text-black dark:text-white">Sign in to your account</h2>

          <form className="mt-2 md:mt-6 " action="#" method="GET">
            <div className={'relative '}>
              {/*<label className={'label text-yellow font-semibold'}>Email</label>*/}
              <input type="email" name="" id="" placeholder="E-mail@emu.edu.tr" className="input w-full placeholder:text-yellow bg-white dark:bg-dark_2 text-black dark:text-white px-4 py-2.5 border-b-yellow border-x-0 border-t-0 mt-2 border-2 focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
            </div>

            <div className=" mt-2 md:mt-4 relative">
              {/*<label className={'label  text-yellow font-semibold'}>Password</label>*/}
              <input type={visibility ? 'text' : "password"} name="" id="" placeholder="Password"  className="input w-full placeholder:text-yellow bg-white dark:bg-dark_2 text-black dark:text-white px-4 py-2.5 border-b-yellow border-x-0 border-t-0 mt-2 border-2 focus:border-blue-500 focus:bg-white focus:outline-none" required />
              <span onClick={() => showPassword()} className={'absolute p-0.5 text-blue cursor-pointer bottom-2 right-4 text-xl'}>{visibility ? <RxEyeClosed /> : <RxEyeOpen />}</span>
            </div>

            <div className={ 'flex flex-wrap flex-row-reverse md:flex-row md:flex-nowrap justify-between my-3 text-center'}>
              <button type="submit" className=" flex justify-center items-center gap-2 w-full md:w-fit text-black dark:text-white  bg-dark_4 dark:bg-dark_3  font-semibold rounded-lg
                    px-4 py-3 mt-5"><Image src={'/microsoft-icon.svg'} alt={'.'} width={20} height={20} /> <span>Microsoft Login</span>
              </button>

              <button type="submit" className="flex items-center gap-2 w-fit  bg-blue hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                    px-4 py-3 mt-5"><span>Login</span>
              </button>
            </div>

            <div className={'my-5 text-center text-black dark:text-white hover:underline'}>
              <Link href={'#'}>Forgot Password ?</Link>
            </div>

            <div className={'flex justify-center'}>
              <button type="submit" className="flex items-center gap-2 w-fit  bg-yellow hover:bg-yellow_2 text-black font-semibold rounded-lg px-4 py-3 ">
                <span className={'flex items-center gap-1'}> <BiPencil/> Register</span>
              </button>
            </div>

          </form>

        </div>

      </div>
  </section>
    </main>
  )
}
