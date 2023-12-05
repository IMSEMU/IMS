"use client";
import { useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { BsMegaphone, BsMegaphoneFill, BsSpeaker } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { GiPencil, GiSoundOn, GiTrashCan } from "react-icons/gi";
import { Empty } from "antd";

export const DisplayAnnouncement = ({ announcements }) => {
  const [hideOption, SetHideOption] = useState(false);

  return (
    <main>
      <div className="m-4 rounded h-fit overflow-hidden">
        <div className=" flex justify-center flex-wrap">
          {/* Render each logbook entry */}
          {announcements.length === 0 ? (
            <div className=" font-semibold text-lg text-center text-white">
              <Empty />
            </div>
          ) : (
            announcements.map((announcement) => (
              <div
                key={announcement.announcementid}
                className=" mx-1 py-2 my-1 bg-white drop-shadow-md border-background_shade_2 hover:bg-blue border text-black dark:bg-dark_4 dark:text-black w-full flex items-center justify-between rounded"
              >
                <div className="ml-2  flex flex-wrap gap-1 w-fit">
                  <div className="p-3 text-white bg-blue text-xl rounded">
                    <BsMegaphoneFill />
                  </div>
                </div>

                <div
                  className={
                    "truncate flex flex-wrap justify-start items-center gap-1 pl-3"
                  }
                >
                  <p className={"font-semibold capitalize "}>
                    {announcement.title}
                  </p>
                  <span className={"truncate text-sm lg:text-md"}>
                    {announcement.content}
                  </span>
                </div>

                <div
                  onClick={() => SetHideOption(true)}
                  className="relative text-black text-xl mr-2.5"
                >
                  <FaEllipsisV className=" cursor-pointer" />

                  {/* options */}
                  {hideOption && (
                    <div className="from-left absolute text-black -right-2 -top-[1.1rem] h-fit border border-background_shade_2 rounded w-[5rem] bg-white">
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
            ))
          )}
        </div>
      </div>
    </main>
  );
};
