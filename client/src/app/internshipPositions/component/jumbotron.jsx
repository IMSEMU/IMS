"use client"
import Image from "next/image";
import {useState} from "react";

export const Jumbotron = ( { onSearch } ) => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
    console.log(searchQuery)
  };
    return(
        <>
            <main className={"dark:bg-dark_2 bg-white"}>
                <div className={" z-0 h-fit w-full relative inline-block"}>
                    <Image
                        className={"w-full h-[15rem] sm:h-[20rem] md:h-[25rem] xl:h-[32rem] object-cover "}
                        src={"/school of computing and technology.jpg"}
                        alt={""}
                        width={2000}
                        height={2000}
                        priority
                    />

                    <div className={"items-center justify-center -mt-[8rem] md:-mt-[14rem] z-30 flex"}>

                        <form onSubmit={(e)=>{e.preventDefault()}} className={"text-sm md:text-md lg:text-lg dark:bg-dark_2 bg-white rounded "}>
                            <input
                                autoFocus
                                className={"my-2 md:my-4 mx-3 px-2 w-[55vw] md:w-[40vw] outline-0 dark:bg-dark_2 bg-white dark:text-white text-black placeholder:text-black dark:placeholder:text-white"}
                                placeholder={"Search for Internships positions ..."}
                                onChange={(e) => {setSearchQuery(e.target.value)}}
                            />
                            <button  onClick={handleSearch} className={" md:py-2 md:px-6 py-1 px-2 rounded bg-blue text-white m-1.5 md:mx-2"}>send</button>

                        </form>

                    </div>

                </div>
            </main>
        </>
    )
}