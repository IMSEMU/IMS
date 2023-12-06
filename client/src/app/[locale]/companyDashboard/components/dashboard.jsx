import Image from "next/image";
import Link from "next/link";
import jwtDecode from "jwt-decode";
import { Empty } from "antd";
import { BsMegaphoneFill, BsReceipt, BsBuildings } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BiPlus, BiX } from "react-icons/bi";
import { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { StudentList } from "../../studentInformation/components/studentsList";
import { DeptInternshipDisplay } from "../../deptInternshipPosition/components/deptInternshipDisplay";
import AuthConnect from "@/auth";
import Modal from "../../globalComponents/modal";

export const Dashboard = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [stdInfoSearch, setStdInfoSearch] = useState(false);

  const token = localStorage.getItem("accessToken");
  let decodedToken, firstname;
  if (token) {
    decodedToken = jwtDecode(token);
    firstname = decodedToken.firstname;
  }

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await AuthConnect.get("/getannouncements");
        setAnnouncements(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();

    const intervalId = setInterval(() => {
      fetchAnnouncements();
    }, 5 * 60 * 1000); // 2 minutes in milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const DisplayAnnouncement = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  return (
    <main className="w-full">
      <div className="m-4 mb-20 md:mb-4">
        <div
          className={
            "text-md lg:text-xl xl:text-2xl py-1 md:py-2 w-full max-w-[1300px] xl:mx-auto mx-2 font-bold"
          }
        >
          <p>Welcome {firstname}</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="grid grid-cols-6 col-span-3 lg:col-span-2  justify-between items-center  gap-4 w-full max-w-[1300px] self-center px-4 sm:px-10 lg:px-0">
            {/* display card */}
            <div className=" col-span-6 md:col-span-3  flex items-center justify-center">
              <div
                className={
                  "min-h-[12rem] lg:h-[12rem] xl:h-[14rem] flex flex-wrap items-center gap-2 content-center justify-around col-span-6 md:col-span-3 lg:col-span-2 bg-white shadow-lg border border-background_shade_2 rounded"
                }
              >
                <div className="flex justify-end w-full gap- items-center mx-10 my-2">
                  <div className="inline-flex justify-end w-fit px-1.5 py-0.5 rounded bg-white gap-2 items-center  border border-dark_4 ">
                    <BsBuildings className="text-[green] text-xl" />
                    <p>40</p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center ">
                  <div className={"p-2 flex items-center w-1/4"}>
                    <span
                      className={
                        "text-4xl rounded p-4 my-1 bg-dark_3 text-white"
                      }
                    >
                      <FaUserGroup />
                    </span>
                  </div>

                  <div
                    className={
                      "flex flex-wrap justify-center text-center items-center gap-2 text-md xl:text-lg p-2"
                    }
                  >
                    <div className="w-full text-2xl md:text-4xl font-bold">
                      23
                    </div>
                    <div className="w-full text-xs">Total students</div>
                  </div>
                </div>
              </div>
            </div>

            {/*Announcement Card*/}
            <div className=" col-span-6 md:col-span-3">
              <div
                className={
                  "bg-background_shade  col-span-6 md:col-span-3 lg:col-span-2 h-[19rem] rounded"
                }
              >
                {/*section Name*/}
                <p
                  className={
                    " font-semibold m-3 text-black dark:text-white  text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
                  }
                >
                  Announcements
                </p>

                {/*section container*/}
                <div className={"h-[15rem] overflow-y-auto"}>
                  <div
                    className={
                      "mx-auto max-w-[90%] my-2 rounded flex justify-center flex-wrap"
                    }
                  >
                    {announcements.length === 0 ? (
                      <div className=" font-semibold text-lg text-center text-white">
                        <Empty />
                      </div>
                    ) : (
                      announcements.map((announcement) => (
                        <div
                          key={announcement.announcementid}
                          className="cursor-pointer mx-1 py-2 my-1 bg-white drop-shadow-md border-background_shade_2 hover:bg-blue hover:text-white border text-black dark:bg-dark_4 dark:text-black w-full flex items-center justify-between rounded"
                          onClick={() => {
                            DisplayAnnouncement(announcement);
                          }}
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
                            <p
                              className={
                                "font-semibold capitalize justify-start w-[40%]"
                              }
                            >
                              {announcement.title}
                            </p>

                            <span className={"truncate text-sm lg:text-md"}>
                              {announcement.content}
                            </span>
                          </div>
                          <div
                            className={
                              "flex items-center justify-center text-sm pr-2"
                            }
                          >
                            <span>{announcement.createdAt.split("T")[0]}</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Students Information */}

            <div className=" col-span-6 md:col-span-3  overflow-hidden">
              {/*body*/}

              <div
                className={
                  "bg-background_shade  col-span-6 md:col-span-3 lg:col-span-2 h-[19rem] rounded"
                }
              >
                {/*section Name and button*/}
                <div className="flex justify-between capitalize p-3 items-center relative">
                  <p
                    className={
                      " font-semibold  text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
                    }
                  >
                    {"Students Info"}
                  </p>

                  <button
                    onClick={() => {
                      setStdInfoSearch(true);
                    }}
                    className="flex gap-1 items-center px-2.5 py-1.5 rounded bg-blue text-white "
                  >
                    <HiMagnifyingGlass className="text-lg" />
                  </button>

                  {/* search section */}
                  {stdInfoSearch && (
                    <div className=" from-top rounded  w-full h-full absolute items-center flex justify-center right-0 top-0 bg-background_shade_2">
                      <div className="flex flex-nowrap w-[75%] justify-center items-center bg-white rounded m-0">
                        <input
                          placeholder="search by Id or name"
                          id=""
                          className="outline-none w-full text-center my-0.5 px-2"
                          type="text"
                        />
                        <button
                          onClick={() => {
                            setStdInfoSearch(false);
                          }}
                          className="bg-blue text-white px-2 py-1 rounded m-1 "
                        >
                          <BiX className="text-lg" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/*section container*/}
                <div className={"h-[15rem] overflow-y-auto"}>
                  <div
                    className={"mx-auto my-2 flex justify-center items-center"}
                  >
                    <StudentList />
                  </div>
                </div>
              </div>
            </div>

            {/* internship opportunities */}

            <div className=" col-span-6 md:col-span-3">
              <div
                className={
                  "bg-background_shade  col-span-6 md:col-span-3 lg:col-span-2 h-[19rem] rounded"
                }
              >
                {/*section Name and button*/}
                {/*section Name and button*/}
                <div className="flex justify-between capitalize p-3 items-center">
                  <p
                    className={
                      " font-semibold  text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
                    }
                  >
                    {"Internship Positions"}
                  </p>

                  <button
                    className={
                      "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                    }
                  >
                    <BiPlus className={"text-white text-xl"} />
                    <div>Add</div>
                  </button>
                </div>

                {/*section container*/}
                <div className={"h-[15rem] overflow-y-auto"}>
                  <DeptInternshipDisplay />
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className=" col-span-3 lg:col-span-1 grid grid-rows-2">
            {/* Submitted Forms */}

            <div className=" row-span-2 bg-background_shade rounded">
              {/*section Name and button*/}
              <div className="capitalize p-3 items-center">
                <p
                  className={
                    " font-semibold  text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
                  }
                >
                  To-Do
                </p>
              </div>

              {/*section container*/}
              <div className={"h-fit overflow-y-auto"}>
                <div className={"mx-auto max-w-[90%] my-2 rounded"}>
                  <div className=" rounded h-fit"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedAnnouncement && (
        <Modal onClose={() => setSelectedAnnouncement(null)}>
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className={"hidden lg:block w-full mb-3"}>
                <p
                  className={
                    " font-bold m-3 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  {selectedAnnouncement.title}
                </p>
              </div>
              <div className="flex gap-3 justify-center py-2 items-center">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {/*  description section */}
                  <div className="w-[90%]">
                    <p className="rounded p-3 outline-none w-full border border-dark_4 dark:bg-background_shade_2 text-dark_2">
                      {selectedAnnouncement.content}
                    </p>
                  </div>
                  <div className=" flex justify-end mx-4 w-full">
                    <button
                      className={
                        "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                      }
                      onClick={() => setSelectedAnnouncement(null)}
                    >
                      <div>Close</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};
