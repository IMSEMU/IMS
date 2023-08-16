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
            <main className={""}>
                <div className={" z-0 h-fit w-full relative inline-block"}>
                    <Image
                        className={"w-full h-[35rem] object-cover"}
                        src={"/dark-flower.jpeg"}
                        alt={""}
                        width={400}
                        height={100}
                        priority
                    />

                    <div className={"items-center justify-center -mt-[14rem] z-10 flex "}>

                        <form onSubmit={(e)=>{e.preventDefault()}} className={"bg-white rounded"}>
                            <input
                                autoFocus
                                className={"my-4 mx-3 px-2 py- w-[30vw] outline-0"}
                                placeholder={"Search for Internships positions ..."}
                                onChange={(e) => {setSearchQuery(e.target.value)}}
                            />
                            <button  onClick={handleSearch} className={"py-2 px-6 rounded bg-blue text-white mx-2"}>send</button>

                        </form>

                    </div>

                </div>
            </main>
        </>
    )
}