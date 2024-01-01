import Image from "next/image";
import Link from "next/link";
import { Empty } from "antd";
import { BsMegaphoneFill } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { StudentInformation } from "../../globalComponents/studentInfo";
import AuthConnect from "@/auth";
import Modal from "../../globalComponents/modal";
import CalendarComponent from "../../internDashboard/components/calendar";
import { useTranslations } from "next-intl";

export const Dashboard = ({ user }) => {
  const t = useTranslations("companyDashboard");
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [todos, setTodos] = useState([]);
  const [students, setStudents] = useState([]);
  const [dueDates, setDueDates] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await AuthConnect.get("/compgetstd");
        setStudents(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    getStudents();
  }, []);

  useEffect(() => {
    const getDueDates = async () => {
      try {
        const response = await AuthConnect.get("/getcompduedates");
        setDueDates(response.data);
        console.log("duedate", response.data);
        const today = new Date();
        setUpcomingEvents(
          response.data.filter((duedate) => duedate.date > today.toISOString())
        );
      } catch (error) {
        console.error("Error fetching due dates:", error);
      }
    };

    getDueDates();
  }, []);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await AuthConnect.get("/gettodos");
        setTodos(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching Todos:", error);
      }
    };

    fetchTodos();
  }, []);

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
            "text-md dark:text-white lg:text-xl xl:text-2xl pb-3 py-1 md:py-2 w-full max-w-[1300px] xl:mx-auto mx-2 font-bold"
          }
        >
          <p>
            {t("welcome")} {user.firstname}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full max-w-[1300px]   xl:mx-auto mx-2  self-center">
          <div className="grid grid-cols-6 col-span-3 lg:col-span-2  justify-between items-center gap-4 self-center px-4 sm:px-10 lg:px-0">
            {/* Calendar */}
            <div className=" col-span-6 md:col-span-3  flex items-center justify-center">
              <CalendarComponent eventsList={dueDates} />
            </div>

            {/*Announcement Card*/}
            <div className=" col-span-6 md:col-span-3">
              <div
                className={
                  "bg-background_shade dark:bg-dark_2  col-span-6 md:col-span-3 lg:col-span-2 h-[19rem] rounded"
                }
              >
                {/*section Name*/}
                <p
                  className={
                    " font-semibold m-3 text-black dark:text-white  text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
                  }
                >
                  {t("Announcements")}
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
                        className="hover:border-l-8 hover:border-l-yellow duration-300 cursor-pointer mx-1 py-2 md:py-2 my-1 bg-white drop-shadow-md border-background_shade_2 text-black dark:bg-dark_4 dark:text-black min-w-full flex items-center justify-between rounded"
                        onClick={() => {
                          DisplayAnnouncement(announcement);
                        }}
                      >
                        <div className="ml-2  flex  gap-1 w-fit">
                          <div className="p-2  text-yellow bg-dark_2 text-xl rounded">
                            <BsMegaphoneFill />
                          </div>
                        </div>
    
                        <div
                          className={
                            "truncate flex flex-wrap justify-start items-center gap-0 md:gap-1 pl-2 w-[80%]"
                          }
                        >
                          <p className={"font-semibold justify-start truncate  text-sm lg:text-md md:w-full"}>
                            {announcement.title}
                          </p>
    
                          <span className={"truncate text-xs lg:text-md"}>
                            {announcement.content}
                          </span>
                        </div>
                        <div
                          className={
                            "flex items-center justify-center font-medium text-xs md:text-sm"
                          }
                        >
                          <p>{announcement.createdAt.split("T")[0]}</p>
                        </div>
                      </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events*/}
            <div className="bg-background_shade dark:bg-dark_2 col-span-6 md:col-span-3 overflow-hidden">
              <p
                className={
                  " font-semibold m-3 text-black dark:text-white  text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
                }
              >
                {t("UpcomingEvents")}
              </p>

              {/*section Container*/}
              <div className={"h-[15rem] overflow-y-auto"}>
                <div
                  className={
                    "mx-auto max-w-[90%] my-2 rounded flex justify-center flex-wrap"
                  }
                >
                  {upcomingEvents.length === 0 ? (
                    <div className=" font-semibold text-lg text-center text-white">
                      <Empty />
                    </div>
                  ) : (
                    upcomingEvents.map((duedate) => (
                      <div
                      key={duedate.formid}
                      className="mx-1 py-2 my-1 bg-white drop-shadow-md border-background_shade_2 border text-black dark:bg-dark_4 dark:text-black w-full flex items-center rounded"
                    >
                      <div className="ml-2  flex flex-wrap gap-1 w-fit">
                        <div className="p-2 text-yellow bg-dark_2  text-xl rounded">
                          <FaWpforms />
                        </div>
                      </div>

                        <div
                          className={
                            "justify-start items-center gap-1 pl-3 pr-2"
                          }
                        >
                          <p className={"font-semibold justify-start text-xs md:text-sm"}>
                            {duedate.name} {t("isdue")}
                          </p>

                          <span className={"text-xs sm:text-sm"}>
                            {duedate.date.split("T")[0]}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Students Information */}
            <div className=" col-span-6 md:col-span-3 overflow-hidden">
              <StudentInformation students={students} usage={"comp"} />
            </div>
          </div>

          {/* Todo */}
          <div className="h-[19rem] lg:h-full px-4 sm:px-10 lg:px-0 col-span-3 md:col-span-2/1/2 lg:col-span-1 grid grid-rows-2">
            <div className=" row-span-2 bg-background_shade dark:bg-dark_2 rounded">
              {/*section Name and button*/}
              <div className="capitalize p-3 items-center">
                <p
                  className={
                    " font-semibold  text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
                  }
                >
                  {t("ToDo")}
                </p>
              </div>

              {/*todos container*/}
              <div className={"h-fit overflow-y-auto"}>
                <div className={"mx-auto max-w-[90%] my-2 rounded"}>
                  {/* <div className=" rounded h-fit"></div> */}
                  {todos.length === 0 ? (
                    <div className=" font-semibold text-lg text-center text-white">
                      <Empty />
                    </div>
                  ) : (
                    todos.map((todo) => (
                      <Link
                        href={
                          todo.iafConfirmed && !todo.filledConForm
                            ? `/confirmationForm?id=${todo.internshipid}&stdid=${todo.stdid}`
                            : todo.logComplete && !todo.logConfirmed
                            ? `/logview?id=${todo.internshipid}&stdid=${todo.stdid}`
                            : todo.logConfirmed && !todo.compEvalFilled
                            ? `/companyEval?id=${todo.internshipid}&stdid=${todo.stdid}`
                            : ""
                        }
                      >
                        <div
                          key={todo.internshipid}
                          className=" flex justify-center items-start w-full flex-wrap"
                        >
                          <div className="cursor-pointer mx-1 gap-2 py-1 my-1 bg-white drop-shadow-md border-background_shade_2 hover:border-l-[0.5rem] duration-300 hover:border-r-[transparent] hover:border-y-[transparent] hover:border-l-yellow dark:hover:border-white dark:border-y-none text-black dark:bg-yellow dark:text-black w-full flex items-center justify-start rounded">
                            <div
                              className={
                                "w-full flex justify-center  items-center "
                              }
                            >
                              <Image
                                src={todo.photo ? todo.photo : "/avatar.png"}
                                alt={"Profile Picture"}
                                height={1000}
                                width={1000}
                                priority
                                className={
                                  "min-w-fit w-[3rem] h-[3rem] rounded-full"
                                }
                              />
                            </div>
                            <div className={"w-full px-1"}>

                              {todo.iafConfirmed && !todo.filledConForm ? (
                                <div className="flex truncate justify-start w-full ">
                                  <span className="text-sm md:text-md xl:text-lg font-semibold truncate">
                                     {t("FillForm")} {todo.firstname}
                                  </span>
                                </div>
                              ) : todo.logComplete && !todo.logConfirmed ? (
                                <div className="flex">
                                  <span className="text-md font-semibold">
                                    {t("ApproveLogbook")} {todo.firstname}{" "}
                                    {todo.lastname}
                                  </span>
                                </div>
                              ) : todo.logConfirmed && !todo.compEvalFilled ? (
                                <div className="flex">
                                  <span className="text-sm md:text-md font-semibold">
                                    {t("FillEvaluationForm")} {todo.firstname}{" "}
                                    {todo.lastname}
                                  </span>
                                </div>
                              ) : (
                                <div className="flex">
                                  <span className="text-md"></span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedAnnouncement && (
        <Modal onClose={() => setSelectedAnnouncement(null)}>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="w-full">
              <div className={"block w-full mb-3 truncate"}>
                <p
                  className={
                    "max-w-[80%] w-fit truncate font-bold m-3 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  {selectedAnnouncement.title}
                </p>
              </div>
              <div className="flex gap-3 justify-center py-1.5 items-center w-full">
                <div className="flex flex-wrap gap-3 justify-center items-center w-full">
                  {/*  description section */}
                  <div className="w-[90%] overflow-y-auto h-[10rem] rounded border border-dark_4">
                    <p className="rounded p-1 outline-none w-full  text-xs md:text-sm lg:text-lg break-words h-fit text-dark_2 dark:text-white">
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
                      <div>{t("Close")}</div>
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
