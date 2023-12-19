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

export const Dashboard = () => {
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
            "text-md lg:text-xl xl:text-2xl py-1 md:py-2 w-full max-w-[1300px] xl:mx-auto mx-2 font-bold"
          }
        >
          <p>
            {t("welcome")} {user.firstname}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="grid grid-cols-6 col-span-3 lg:col-span-2  justify-between items-center  gap-4 w-full max-w-[1300px] self-center px-4 sm:px-10 lg:px-0">
            {/* Calendar */}
            <div className=" col-span-6 md:col-span-3  flex items-center justify-center">
              <CalendarComponent eventsList={dueDates} />
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
                            <span>{announcement.updatedAt.split("T")[0]}</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events*/}
            <div className="bg-background_shade col-span-6 md:col-span-3 overflow-hidden">
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
                          <div className="p-3 text-white bg-blue text-xl rounded">
                            <FaWpforms />
                          </div>
                        </div>

                        <div
                          className={
                            "justify-start items-center gap-1 pl-3 pr-2"
                          }
                        >
                          <p className={"font-semibold justify-start"}>
                            {duedate.name} {t("isdue")}
                          </p>

                          <span className={"text-sm lg:text-md"}>
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
          <div className=" col-span-3 lg:col-span-1 grid grid-rows-2">
            <div className=" row-span-2 bg-background_shade rounded">
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

              {/*section container*/}
              <div className={"h-fit overflow-y-auto"}>
                <div className={"mx-auto max-w-[90%] my-2 rounded"}>
                  <div className=" rounded h-fit"></div>
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
                          className=" flex justify-center flex-wrap"
                        >
                          <div className="cursor-pointer mx-1 py-2 my-1 bg-white drop-shadow-md border-background_shade_2 hover:bg-blue hover:text-white border text-black dark:bg-dark_4 dark:text-black w-full flex items-center justify-between rounded">
                            <div
                              className={
                                "w-2/12 flex justify-center items-center ml-3"
                              }
                            >
                              <Image
                                src={todo.photo ? todo.photo : "/avatar.png"}
                                alt={"Profile Picture"}
                                height={1000}
                                width={1000}
                                priority
                                className={
                                  "w-[3rem] h-[3rem] rounded-full hidden lg:inline-block "
                                }
                              />
                            </div>
                            <div className={"w-10/12 ml-5"}>
                              <div className=" flex flex-wrap">
                                <p className="font-semibold"></p>
                              </div>
                              {todo.iafConfirmed && !todo.filledConForm ? (
                                <div className="flex">
                                  <span className="text-md font-semibold">
                                    {t("FillForm")} {todo.firstname}{" "}
                                    {todo.lastname}
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
                                  <span className="text-md font-semibold">
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
