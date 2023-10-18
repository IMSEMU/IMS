'use client'

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence,motion } from "framer-motion";
import CompanyInformation from "./companyInformation";
import { loginToogleAnimation } from "@/app/styleVariants";

const StudentInfo = () => {

    const [imageSrc, setImageSrc] = useState('');
    const [form , setForm] = useState(1);

const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];

  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = (e) => setImageSrc(e.target.result);
    reader.readAsDataURL(selectedFile);
  } else {
    setImageSrc('/avatar.png');
  }
};

    return ( 
        <main>
            <AnimatePresence>
                {form===1  ? form === 1 && (
              <section 

              className="p-2 bg-white dark:bg-dark_1 flex items-center justify-center px-4 sm:px-12 md:px-20">
                <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 w-[40rem] lg:w-[40rem] h-[32rem]">
                   
                   {/* LOgbook Add section */}
                    <motion.div
                        variants={loginToogleAnimation}
                        initial={'initial'}
                        animate={'animate' }
                        exit={{y:-1000}}
                        className=" w-full">
                        <p className={" font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"}>
                          Students Information
                        </p>
                        {/* profile pic */}
                        <div className="w-full flex justify-center mt-1">
                            <Image 
                                src={imageSrc ? imageSrc : "/avatar.png"}
                                width={1000}
                                height={1000}
                                alt=""
                                priority
                                className="h-[7rem] w-[7rem] rounded-2xl"
                            />
                        </div>

                        {/* forms */}
                        <form className="mx-4 lg:mx-16">
                            <div className="mt-2 md:mt-4 relative flex space-x-2">
                                <div className="w-1/2">
                                    <input
                                        type={'text'}
                                        name=""
                                        id=""
                                        placeholder="First Name"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        
                                    />
                                </div>

                                <div className="w-1/2">
                                    <input
                                        type={'text'}
                                        name=""
                                        id=""
                                        placeholder="Last Name"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        
                                    />
                                </div>
                            </div>

                            <div className="mt-2 md:mt-4 relative flex space-x-2">
                                <div className="w-1/2">
                                    <input
                                        type={'text'}
                                        name=""
                                        id=""
                                        placeholder="Student Number"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        
                                    />
                                </div>

                                <div className="w-1/2">
                                    <input
                                        type={'text'}
                                        name=""
                                        id=""
                                        placeholder="Email"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        
                                    />
                                </div>
                            </div>

                            <div className="mt-2 md:mt-4 relative flex space-x-2">
                                <div className="w-1/2">
                                    <input
                                        type={'text'}
                                        name=""
                                        id=""
                                        placeholder="Postal Address"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        
                                    />
                                </div>

                                <div className="w-1/2">
                                    <input
                                        type={'text'}
                                        name=""
                                        id=""
                                        placeholder="Telephone Number"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        
                                    />
                                </div>
                            </div>

                            <div className="mt-2 md:mt-4 relative flex space-x-2">
                                <div className="w-1/2">
                                    <input
                                        type={'file'}
                                        name=""
                                        accept=".png, .jpg, .jpeg"
                                        onChange={handleFileChange}
                                        id=""
                                        placeholder="profile Picture"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white file:text-blue file:font-bold file:bg-white file:border file:rounded dark:bg-dark_2 pr-4 py-0.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        
                                    />
                                </div>

                                <div className="w-1/2 flex items-center justify-end mt-2 text-white">
                                 <button  onClick={()=>{setForm(2)}} className="bg-blue py-2 font-medium px-3.5 rounded">Next</button>
                                </div>
                            </div>
                        </form>

                    </motion.div>

                </div>
            </section>
                ) : <CompanyInformation />
                }
            </AnimatePresence>
        </main>
     );
}
 
export default StudentInfo;