import Image from "next/image";

const CompanySupervisor = () => {
    return ( 
        <main>
              <section className="p-2 bg-white dark:bg-dark_1 flex items-center justify-center px-4 sm:px-12 md:px-20">
                <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 w-[40rem] lg:w-[40rem] h-[32rem]">
                   
                   {/* LOgbook Add section */}
                    <div className=" w-full">
                        <p className={" font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"}>
                          Company Supervisor Information
                        </p>


                        {/* forms */}
                        <form className="mx-4 lg:mx-16 ">
                            <div className="mt-2 md:mt-4 relative flex space-x-2 w-full">
                                <div className="w-1/2">
                                    <input
                                        type={'text'}
                                        name=""
                                        id=""
                                        placeholder="First Name"
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
                                        placeholder="Last Name"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        
                                    />
                                </div>

                            </div>

                            <div className="mt-2 md:mt-4 relative flex space-x-2">

                                <div className="w-1/2">
                                    <input
                                        type={'email'}
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
                                        placeholder="position in Company"
                                        className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                                        
                                    />
                                </div>

                                <div className="w-1/2 flex items-center justify-end text-white">
                                 <button className="bg-blue py-2 px-3.5 rounded">Next</button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </section>
        </main>
     );
}
 
export default CompanySupervisor;