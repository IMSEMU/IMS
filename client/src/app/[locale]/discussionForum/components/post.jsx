"use client"
import Image from "next/image";
import { useState } from "react";
import { FaCommentDots, FaHeart } from "react-icons/fa6";
import { IoIosLink, IoMdArrowRoundBack, IoMdHappy } from "react-icons/io";

export const Post = () => {
    const [viewComments, setViewComments] = useState(false);
  return (
    <div className="w-full mb-5 rounded bg-white drop-shadow-md border-background_shade_2 border relative overflow-hidden">
      <div className="p-4 flex justify-start items-center gap-3">
        {/* user profile */}
        <Image
          height={100}
          width={100}
          src={"/dark-flower.jpeg"}
          alt="profile picture"
          className="border w-[3rem] h-[3rem] rounded-full"
        />

        {/* username and id */}
        <div className="truncate flex w-full flex-wrap ">
          <p className="truncate font-bold md:text-lg capitalize w-full">
            Joel Ikenga Inyama
          </p>
          <span className="flex justify-start w-full text-xs md:text-sm text-dark_3 gap-4">
            <p className="">@21902920</p>
          </span>
        </div>
      </div>
      
      <div className="my-2 px-3 flex justify-start w-full" >
        <p className="w-full">You could be crazy</p>
      </div>

      {/* post image */}
      <div className="w-full flex items-center overflow-hidden">
        <Image
          height={1000}
          width={1000}
          src={"/dark-flower.jpeg"}
          alt=""
          className=" w-full  min-h-[20rem] h-fit hover:scale-110  duration-500 ease-in-out"
        />
      </div>



      {/* like and comments section */}
      <div className="flex justify-start md:gap-1.5 px-3 py-2 text-2xl md:text-3xl">
        <div className="cursor-pointer text-yellow flex items-center justify-center flex-wrap w-[4rem]">
          <FaHeart />
          <p className="text-xs sm:text-sm w-full text-black text-center">{3} Likes</p>
        </div>
        <div onClick={()=>setViewComments(true)}  className="cursor-pointer flex items-center justify-center flex-wrap w-[4rem]">
          <FaCommentDots />
          <p className="text-xs sm:text-sm w-full">comments</p>
        </div>
        <div className="cursor-pointer flex items-center justify-center flex-wrap w-[4rem]">
          <IoIosLink />
          <p className="text-xs sm:text-sm w-full text-center">link</p>
        </div>
      </div>

{     viewComments &&
 <div className="from-bottom absolute w-full h-[25rem] bottom-0 bg-white">
        {/* comments */}
        <div className="h-[20rem]  m-1 flex justify-center">
          <div className="overflow-y-auto w-[30rem]">
            {/* user comment */}
            <div className="flex flex-wrap w-full items-center px-3 pt-3 border-background_shade_2 border-b-2 pb-2">
              {/* name and pic */}
              <div className="justify-start items-center gap-1.5 flex w-full">
                <Image
                  height={100}
                  width={100}
                  src={"/dark-flower.jpeg"}
                  alt="profile picture"
                  className=" w-[2.5rem] h-[2.5rem] rounded-full"
                />
                {/* username and id */}
                <div className="truncate flex w-full flex-wrap ">
                  <p className="truncate font-bold text-md capitalize w-full">
                    Joel Ikenga Inyama
                  </p>
                </div>
              </div>

              {/* comment message */}
              <div className="w-full flex justify-center items-center h-fit ml-[2.5rem]">
                <div className=" w-full mt-2 h-fit">{"This girl is hot"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* add a comment */}
        <div className="p-2 flex justify-center">
          <div className="inline-flex justify-center items-center gap-4 p-2 rounded bg-white drop-shadow-md border-background_shade_2 border">
            {/* back button */}
            <div onClick={()=>setViewComments(false)} className="text-xl cursor-pointer">
              <IoMdArrowRoundBack />
            </div>

            {/* comment section */}
            <div className="flex gap-2">
              {/* comment input */}
              <div className="border-2 border-background_shade_2 rounded w-full">
                <input
                  placeholder="Hello"
                  type="text"
                  className="p-0.5 w-full outline-none"
                />
              </div>
              {/* emoji */}
              {/* <div className="border rounded flex">
                <div className="p-1 flex gap-2 items-center text-xl ">
                  <IoMdHappy className="text-yellow"/>
                  <FaHeart className="text-[red]"/>
                  <TbBulb className="text-yellow_2"/>
                </div>
              </div> */}
            </div>

            {/* post comment */}
            <button className="text-white bg-blue rounded px-4 py-1.5">
              Post
            </button>
          </div>
        </div>
      </div>}
    </div>
  );
};
