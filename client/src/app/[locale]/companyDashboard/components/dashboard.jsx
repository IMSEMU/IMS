import Image from "next/image";
import Link from "next/link";
import { TopNav } from "../../internDashboard/components/topNav";
import { HiAnnotation } from "react-icons/hi";
import { LuClock2 } from "react-icons/lu";
import { Empty } from "antd";
import { BsMegaphoneFill, BsReceipt } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";

export const Dashboard = () => {
  const notifications = [
    { title: "submit Logbook", date: "23/23/12" },
    { title: "Buy Logbook", date: "23/23/12" },
    { title: "submit Logbook", date: "23/23/12" },
    { title: "submit Logbook", date: "23/23/12" },
    { title: "submit Logbook", date: "23/23/12" },
    { title: "submit Logbook", date: "23/23/12" },
    { title: "submit Logbook", date: "23/23/12" },
    { title: "submit Logbook", date: "23/23/12" },
    { title: "submit Logbook", date: "23/23/12" },
    { title: "submit Logbook", date: "23/23/12" },
    { title: "submit Logbook", date: "23/23/12" },
    { title: "submit Logbook", date: "23/23/12" },
    { title: "submit Logbook", date: "23/23/12" },
    { title: "submit Logbook", date: "23/23/12" },
  ];

  return (
    <main className="my-2">
      <TopNav />
      {/*first grid cards */}

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3 mx-4">
        {/* search and help section */}

        <div className="bg-background_shade_2 rounded md:h-[20rem] grid grid-cols-6 col-span-1 md:col-span-2">
          {/* search section */}

          <div className="col-span-6 md:col-span-4 my-3 mx-4 h-full">
            <div className=" w-full flex no-wrap rounded overflow-hidden text-center bg-white drop-shadow-md border-background_shade_2">
              <input
                className="outline-none mx-2 my-1 w-full"
                placeholder="search for student"
              />
              <button className="mr-2 ml-0.5 my-1 bg-blue px-2 py-1 rounded">
                search
              </button>
            </div>

            {/* search display section */}
            <div className="w-full mt-3 h-[15rem] rounded bg-white drop-shadow-md border-background_shade_2">
              {/* list of students */}

              <div className="flex items-start  rounded m-2 overflow-visible h-full ">
                {/* student */}

                <div className="max-w-[19rem] w-full mx-auto rounded mt-3 bg-white drop-shadow-md border border-background_shade_2 ">
                  <div className="p-1.5  flex justify-between items-center gap-2">
                    {/* profile photo */}
                    <div className="">
                      <Image
                        src={"/avatar.png"}
                        width={100}
                        height={100}
                        className={"h-[3rem] w-[3rem] rounded-full"}
                        alt={""}
                      />
                    </div>

                    {/* student name */}
                    <div className="truncate text-md w-fit">
                      <p className="truncate">Joel Ikenga Inyama</p>
                    </div>

                    {/* status */}
                    <div className="">ied</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* help section */}
          <div className="col-span-6 md:col-span-2 w-full my-3 px-4 h-full">
            <div className=" w-full rounded bg-white drop-shadow-md border-background_shade_2 h-[18.2rem]">
              <div className=" m-2 font-semibold text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2">
                Help
              </div>

              {/* contacts */}

              <div className="h-[15.5rem] overflow-y-auto  w-full">
                <div className="flex p-1 flex-wrap w-full mt-1 justify-start border-b border-yellow">
                  <div className="text-semibold text-md w-full">
                    Zafer Akile
                  </div>
                  <div className="text-light text-blue text-sm w-full">
                    Internship Whahever
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* notification section */}

        <div className="bg-background_shade_2 rounded h-full col-span-1">
          <div className=" mx-4 my-3 h-[18.2rem] rounded bg-white drop-shadow-md border-background_shade_2">
            <div className=" m-2 font-semibold text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2">
              Notification
            </div>

            {/* notifications */}

            {/* notifications */}
            <div className=" h-[15rem] overflow-y-scroll">
              {notifications.map((notification, index) => (
                <div key={index} className="m-2">
                  <Link
                    href={""}
                    className="p-2 flex items-center justify-between gap-4 bg-background_shade_2 dark:bg-dark_4 rounded"
                  >
                    <div className="p-1.5 text-2xl text-yellow bg-dark_2 rounded">
                      <HiAnnotation />
                    </div>

                    <div className="">
                      <p className="font-medium">{notification.message}</p>
                    </div>

                    <div className=" w-fit">
                      <div className="flex bg-yellow rounded">
                        <div className="flex py-0.5 px-1 gap-0.5">
                          <LuClock2 />
                          <p className="text-xs font-medium ">
                            {/* {notification.slice(0, 10)} */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      

      {/* second grid cards */}

        {/* forms section */}
        <div className="bg-background_shade_2 h-[20rem] col-span-1 rounded">
          <div className="bg-white drop-shadow-md h-[18rem] m-4 rounded border-background_shade_2">
            <div className=" m-2 font-semibold text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2">
              Forms
            </div>
            <div className=" overflow-y-auto h-[15.7rem]">
              {/*  */}
              <div className="mx-2 bg-white drop-shadow-md border-background_shade_2 border h-fit rounded gap-2 my-2 p-1 flex justify-between items-center ">
                {/*  */}
                <div className="flex flex-wrap justify-center text-center items-center gap-0 rounded w-full truncate">
                  <p className="font-semibold truncate w-[80%]">
                    Fill Company details
                  </p>
                </div>

                {/* icon */}

                <div className="">dd</div>
              </div>
            </div>
          </div>
        </div>

        {/* Announcement section */}
        <div className="bg-background_shade_2 h-[20rem] col-span-1 rounded">
          <div className="bg-white drop-shadow-md h-[18rem] m-4 rounded border-background_shade_2">
            <div className=" m-2 font-semibold text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2">
              Announcement
            </div>
            {/* submission data display */}

            <div className=" overflow-y-auto h-[15.7rem]">
              <div className="mx-2 bg-white drop-shadow-md border-background_shade_2 border h-fit rounded gap-2 my-2 p-1 flex justify-between items-center ">
                {/*  */}
                <div className="p-2.5 bg-black rounded">
                  <BsMegaphoneFill className="text-xl text-yellow" />
                </div>
                {/*  */}
                <div className="flex flex-wrap justify-center text-center items-center gap-0 rounded w-full truncate">
                  <p className="font-semibold truncate w-[80%]">
                    Pay Internship Fee
                  </p>
                  <p className=" text-black rounded truncate text-sm w-[60%]">
                    lorem ipsum dolorfddfdfdgdgd
                  </p>
                </div>
              </div>
              <Empty />
            </div>
          </div>
        </div>

        {/* Submissions section */}
        <div className="bg-background_shade_2 h-[20rem] col-span-1 rounded">
          <div className="bg-white drop-shadow-md h-[18rem] m-4 rounded border-background_shade_2">
            <div className=" m-2 font-semibold text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2">
              Submissions
            </div>

            {/* submission data display */}

            <div className=" overflow-y-auto h-[15.7rem]">
              <div className="mx-2 bg-white drop-shadow-md border-background_shade_2 border h-fit rounded gap-2 my-2 p-1 flex justify-between items-center ">
                {/*  */}
                <div className="p-2.5 bg-black rounded">
                  <BsReceipt className="text-xl text-yellow" />
                </div>
                {/*  */}
                <div className="flex flex-wrap justify-center text-center items-center gap-0 rounded w-full truncate">
                  <p className="font-semibold truncate w-[80%]">
                    Pay Internship Fee
                  </p>
                  <p className=" text-black rounded truncate text-sm w-[60%]">
                    lorem ipsum dolorfddfdfdgdgd
                  </p>
                </div>
              </div>
              <Empty />
            </div>
          </div>
        </div>
                </div>
    </main>
  );
};
