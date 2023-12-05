"use client"
import Image from "next/image"
import { useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { BsMegaphoneFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { GiPencil, GiTrashCan } from "react-icons/gi";
import { HiEllipsisVertical } from "react-icons/hi2"

export const DeptInternshipDisplay = () =>{

    const [hideOption, SetHideOption] = useState(false);

    return(
        <main>
        <div className="m-4 rounded h-fit overflow-hidden">
          <div className=" flex justify-center flex-wrap">
            <div className="bg-white drop-shadow-md border-background_shade_2 border h-fit rounded gap-2 my-2 p-1 flex justify-between items-center ">
              {/* profile image */}
              <div className="">
                <Image
                    src={"/dark-flower.jpeg"}
                    width={1000}
                    height={1000}
                    alt=""
                    className=" h-[3.2rem] w-fit rounded"
                />
              </div>
              {/* name and std number */}
              <div className="flex flex-wrap justify-center text-center items-center gap-0 rounded w-full truncate">
                <p className="font-semibold truncate w-[80%]">
                  Frontend Developer
                </p>
                <p className=" text-black rounded truncate text-sm w-[60%]">
                  Tesla.com
                </p>
              </div>
              {/* view button */}
              <div className="w-fit text-xl px-2">
                <FaEllipsisV onClick={()=>SetHideOption(true)} className=" cursor-pointer" />
  
                {/* options */}
                {hideOption && (
                  <div className="from-left absolute text-black -right-0 -top-[0rem] h-fit border border-background_shade_2 rounded w-[5rem] bg-white">
                    <div className="relative">
                      <div className="m-0.5 p-0.5 rounded flex text-sm font-medium items-center cursor-pointer gap-0.5 hover:bg-b hover:bg-background_shade">
                        <GiTrashCan className="text-xl text-yellow" />
                        <p className="">Delete</p>
                      </div>
  
                      <div className="m-0.5  p-0.5 rounded flex text-sm font-medium items-center cursor-pointer gap-0.5  hover:bg-background_shade">
                        <GiPencil className="text-xl text-yellow" />
                        <p>edit</p>
                      </div>
  
                      <span
                        className="absolute p-[0.1rem] cursor-pointer text-lg top-[1rem] bg-white rounded -left-6"
                        onClick={() => {
                          SetHideOption(false);
                        }}
                      >
                        <BiChevronsRight className="text-yellow" />
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}