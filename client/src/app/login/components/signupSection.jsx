import Image from "next/image";
import {AnimatePresence,motion} from "framer-motion";
import {loginToogleAnimation} from "@/app/styleVariants";
import {MdVerifiedUser} from "react-icons/md";
import {VscSignIn} from "react-icons/vsc";

export const SignupSection = ({loginToogle}) => {
    console.log(loginToogle)
  return (
    <>
      <main className="w-full md:w-1/2 px-8 md:px-6 ">
        {/* Form section */}
         <AnimatePresence>

            <motion.div
                variants={loginToogleAnimation}
                initial={"initial"}
                animate={'animate' }
                exit={"exit"}
                className=""
            >
                <div className={'flex justify-center items-center'}>
                    <Image
                        width={90}
                        height={90}
                        src="/logo.svg"
                        className="rounded-lg w-[4.5rem] h-[4.5rem] object-cover"
                        alt="page img"
                    />
                </div>

                <h2 className="mt-0.5 text-sm md:text-md lg:text-lg xl:text-xl font-bold text-center text-black dark:text-white">
                    Register for Internship
                </h2>

                <form className="mt-2  text-sm md:text-md" action="#" method="GET">
                    <div className={'relative '}>
                        <input
                            type="email"
                            name=""
                            id=""
                            placeholder="E-mail@emu.edu.tr"
                            className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-0 border-2  focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mt-2 md:mt-4 relative">
                        <input
                            type={'text'}
                            name=""
                            id=""
                            placeholder="Firstname"
                            className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mt-2 md:mt-4 relative">
                        <input
                            type={'text'}
                            name=""
                            id=""
                            placeholder="Lastname"
                            className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mt-2 md:mt-4 relative">
                        <input
                            type={'password'}
                            name=""
                            id=""
                            placeholder="password"
                            className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                            required
                        />
                    </div>

                    <div className="mt-2 md:mt-4 relative">
                        <input
                            type={'password'}
                            name=""
                            id=""
                            placeholder="confirm Passwod"
                            className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                            required
                        />

                        <span className={'bg-white dark:bg-dark_2 absolute p-0.5 md:p-1.5 text-[green] cursor-pointer bottom-2 right-4 text-xl'}>
                             <MdVerifiedUser/>
                        </span>
                    </div>


                    <div
                        className={'flex flex-wrap flex-row-reverse md:flex-row  justify-between my-2 text-center'}>
                        <button
                            type="submit"
                            className="flex justify-center items-center gap-3 w-full md:w-fit text-black dark:text-white border border-background_shade_2 dark:border-0 hover:bg-background_shade_2 hover:ease-in-out hover:duration-300  bg-white dark:bg-dark_3  font-normal rounded px-3 py-2 mt-5"
                        >
                            <Image src={'/microsoft-icon.svg'} alt={'.'} width={20} height={20}/>
                            <span>Microsoft</span>
                        </button>

                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 w-full md:w-fit  bg-blue hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded px-3 py-2 mt-5"
                        >
                            <span>Register</span>
                        </button>
                    </div>


                </form>

                <div className={'flex justify-center my-3 text-'}>
                    <button
                        onClick={() => loginToogle()}
                        className="flex items-center gap-2 w-fit md:w-full justify-center  bg-blue text-white font-semibold rounded px-3 py-2 ">
                        <span className={'flex items-center gap-1'}>
                          <VscSignIn/> Login
                        </span>
                    </button>
                </div>

            </motion.div>


        </AnimatePresence>

      </main>
    </>
  );
};
