'use client'
import { useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
import { GiTrashCan,GiPencil } from "react-icons/gi";

export const LogbookDisplay = () => {

    const [options, setOptions] = useState(false);

    const optionToogle = () => {
        setOptions(!options);
    }
    
    return ( 
        <div  className="m-4 bg-[rgb(173,173,173)] dark:bg-dark_2 rounded h-fit">

            <div className="mx-4 py-2.5 dark:text-white flex items-center justify-between rounded">

                <div className="ml-3  flex flex-wrap gap-1 w-[5rem]">
                    <p className=" bg-yellow rounded text-sm font-medium text-white px-1 py-0.5">21/21/21</p>
                    <p className="font-semibold"># Day 1</p>
                </div>

                <div className="flex flex-wrap truncate w-40 text-center items-center">
                    <span className=" font-semibold text-lg">Frontend</span>

                </div>

                <div className="relative mr-3">
                    <FaEllipsisV className=" cursor-pointer" onClick={optionToogle} />

                    {
                        options &&
                        <div className="absolute text-white -left-10 -top-[1.4rem] h-fit rounded w-[5rem] bg-dark_3">
                            <div className="relative">
                                <div className="m-0.5 p-1 rounded flex text-sm font-medium items-center cursor-pointer gap-0.5 hover:bg-b dark:hover:bg-background_shade">
                                    <GiTrashCan className="text-xl text-yellow"/>
                                    <p className="">Delete</p>
                                </div>

                                <div className="m-0.5  p-1 rounded flex text-sm font-medium items-center cursor-pointer gap-0.5  hover:bg-background_shade">
                                    <GiPencil className="text-xl text-yellow"/>
                                    <p>edit</p>
                                </div>
                                <span onClick={optionToogle} className="absolute p-[0.1rem] cursor-pointer text-lg top-[1.3rem] bg-dark_3 rounded -left-6">
                                    <BiChevronsRight className="text-yellow"/>
                                </span>
                            </div>

                        </div> 
                    }

                </div>

            </div>

        </div>
     );
}
 