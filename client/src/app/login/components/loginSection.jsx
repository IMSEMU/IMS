'use client'

import Link from "next/link";
import Image from "next/image";
import {RxEyeClosed,RxEyeOpen} from "react-icons/rx";
import {BiPencil} from "react-icons/bi";
import {FaHome} from "react-icons/fa";
import {useState} from "react";
import {DarkModeButton} from "@/app/globalComponents/darkModeButton";
import {SignupSection} from "@/app/login/components/signupSection";
import {motion,AnimatePresence} from 'framer-motion'
import {loginToogleAnimation, } from "@/app/styleVariants";
import AuthConnect from "@/auth";
import {useRouter} from 'next/navigation';

export default function LoginSection() {

    const [visibility, setVisibility] = useState(false);
    const [login, setLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const router = useRouter();


    const showPassword = () => {
        setVisibility(!visibility);
    }

    const loginToogle = () => {
        setLogin(!login);
    }

    const Auth = async (e) => {
        e.preventDefault();
       try { 
        const response = await AuthConnect.post('/login', {
                email: email,
                password: password
        });
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            
            console.log(response);

            router.push('/internDashboard');
        } catch (error) {
            console.error("Error:", error);
            if (error.response) {
              setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <main className={'max-h-screen'}>
            <Link href='/'>
    <div className= 'absolute bg-white p-2 shadow-md border border-background_shade_2 dark:border-dark_2 dark:border-0 dark:bg-dark_2 inline-flex items-center gap-1 text-blue dark:text-yellow top-4 rounded left-4 md:left-7'>
        <FaHome/>
    </div>
</Link>

            <div className='absolute top-4 rounded right-1 md:right-7'>
                <DarkModeButton/>
            </div>

            <section className="p-2 bg-white dark:bg-dark_1 min-h-screen flex items-center justify-center">
                <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 max-w-[30rem] md:max-w-full w-[60rem] h-[35rem]">
                    {/* Image section */}
                    <div className="w-1/2 md:block hidden mr-2">
                        <Image
                            width={1000}
                            height={1000}
                            src="https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            className=" rounded-lg w-full h-full object-cover"
                            alt="page img"
                        />
                    </div>

                    {/* Form section */}
                    <AnimatePresence>
                        {login ? login && (
                        <motion.div
                            variants={loginToogleAnimation}
                            initial={'initial'}
                            animate={'animate' }
                            exit={{y:-1000}}
                            className="w-full md:w-1/2 px-8 md:px-6 my-1 md:my-4"
                        >
                            <div className='flex justify-center items-center my-2'>
                                <Image
                                    width={90}
                                    height={90}
                                    src="/logo.svg"
                                    className="rounded-lg w-[4.5rem] h-[4.5rem] object-cover"
                                    alt="page img"
                                />
                            </div>

                            <h2 className="text-sm md:text-md lg:text-lg xl:text-xl font-bold text-center text-black dark:text-white">
                                Sign in to your account
                            </h2>

                            <form className="mt-2 md:mt-6 text-sm md:text-md" onSubmit={Auth}>
                                <div className='relative'>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="address@provider.com"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-2 border-2  focus:outline-none"
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mt-2 md:mt-4 relative">
                                    <input
                                        type={visibility ? 'text' : 'password'}
                                        id="password"
                                        placeholder="Password"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-2 border-2  focus:outline-none"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <span
                                        onClick={() => showPassword()}
                                        className={
                                            ' bg-opacity-0  absolute p-0.5 md:p-1.5 text-blue cursor-pointer bottom-2 right-4 text-xl'
                                        }
                                    >
                                        {visibility ? <RxEyeClosed/> : <RxEyeOpen/>}
                                    </span>
                                </div>

                                <div
                                    className={'flex flex-wrap flex-row-reverse md:flex-row md:flex-nowrap justify-between my-3 text-center'}>
                                    <button
                                        type="submit"
                                        className="flex justify-center items-center gap-3 w-full md:w-fit text-black dark:text-white border border-background_shade_2 dark:border-0 hover:bg-background_shade_2 hover:ease-in-out hover:duration-300  bg-white dark:bg-dark_3  font-normal rounded px-3 py-2 mt-5"
                                    >
                                        <Image src={'/microsoft-icon.svg'} alt={'.'} width={20} height={20}/>
                                        <span>Microsoft</span>
                                    </button>

                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 w-fit  bg-blue hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded px-3 py-2 mt-5"
                                    >
                                        <span>Login</span>
                                    </button>
                                </div>

                                <div className={'my-4 text-center text-black dark:text-white hover:underline'}>
                                    <Link href='/reset-password'>Forgot Password ?</Link>
                                </div>

                            </form>

                            <div className={'flex justify-end mt-8'}>
                                <button
                                    onClick={() => loginToogle()}
                                    className="flex items-center gap-2 w-fit bg-blue text-white font-semibold rounded px-3 py-2 "
                                >
                                    <span className={'flex items-center gap-1'}>
                                      <BiPencil/> Register
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                ) : (
                    <SignupSection loginToogle={loginToogle} />
                )}
                    </AnimatePresence>

                </div>
            </section>
        </main>
    );
}