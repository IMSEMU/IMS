import { HiMiniCalendarDays } from "react-icons/hi2";
import { BiPlus } from "react-icons/bi";
import Link from "next/link";
import { LogbookDisplay } from "../../logbook/components/logbookDisplay";
import { useEffect, useState } from "react";
import AuthConnect from "@/auth";
import { FaWpforms } from "react-icons/fa6";
import {
  BsExclamationTriangleFill,
  BsPatchCheckFill,
  BsMegaphoneFill,
} from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Empty } from "antd";
import Modal from "../../globalComponents/modal";
import CalendarComponent from "../../internDashboard/components/calendar";

export const Dashboard = ({ user }) => {
  const t = useTranslations("dash");
  const [student, setStudent] = useState([]);
  const [country, setCountry] = useState("");
  const [logbookEntries, setLogbookEntries] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [dueDates, setDueDates] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const today = new Date();

  useEffect(() => {
    const getDueDates = async () => {
      try {
        const response = await AuthConnect.get("/getstdduedates");
        setDueDates(response.data);
        console.log(response.data);
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
    const getStudent = async () => {
      try {
        const response = await AuthConnect.get("/getstudent");
        console.log(response.data);
        setStudent(response.data);
        setCountry(response.data.country);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    getStudent();
  }, []);

  useEffect(() => {
    const fetchLogbookEntries = async () => {
      try {
        const response = await AuthConnect.get("/viewlog");
        setLogbookEntries(response.data);
      } catch (error) {
        console.error("Error fetching logbook entries:", error);
      }
    };

    // Fetch initial logbook entries when the page loads
    fetchLogbookEntries();
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

  function countWeekdays(startDate, endDate) {
    const currentDate = new Date(startDate);
    const targetDate = new Date(endDate);

    let weekdaysCount = 0;

    while (currentDate <= targetDate) {
      // Check if the current day is a weekday (Monday to Friday)
      if (currentDate.getDay() >= 1 && currentDate.getDay() <= 5) {
        weekdaysCount++;
      }

      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return weekdaysCount;
  }

  return (
    <main className={"m-5 bg-white dark:bg-dark_1 "}>
      <div
        className={
          "text-md dark:text-white lg:text-xl xl:text-2xl pb-3 md:py-2 w-full max-w-[1300px] xl:mx-auto mx-2 font-bold"
        }
      >
        <p className="capitalize">
          {t("welcome")} {user.firstname}{" "}
        </p>
      </div>

      {/*  section 1*/}
      <div
        className={
          "grid grid-cols-6  justify-between items-center  gap-4 w-full max-w-[1300px] xl:mx-auto mx-2 self-center px-4 sm:px-10 lg:px-0"
        }
      >
        {/*total days*/}
        <div
          className={
            "min-h-[12rem] lg:h-[12rem] xl:h-[14rem] flex flex-wrap items-center gap-2 content-center justify-around col-span-6 md:col-span-3 lg:col-span-2 dark:bg-dark_2 dark:border-none bg-white shadow-lg border border-background_shade_2 rounded"
          }
        >
          <div className="flex justify-end w-full gap- items-center mx-10 my-2">
            <div className="inline-flex justify-end w-fit px-1.5 py-0.5 rounded bg-white gap-2 items-center  border border-dark_4 ">
              <FaRegCalendarCheck className="text-[green] text-xl" />
              <p>{student.duration}</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center ">
            <div className={"p-2 flex items-center w-1/4"}>
              <span
                className={"text-4xl rounded p-4 my-1 dark:bg-yellow_2 dark:text-black bg-dark_3 text-white"}
              >
                <HiMiniCalendarDays />
              </span>
            </div>

            <div
              className={
                "flex flex-wrap justify-center text-center items-center gap-2 text-md xl:text-lg p-2 dark:text-white text-black"
              }
            >
              <div className="w-full text-4xl font-bold">
                {countWeekdays(today, student.enddate)}
              </div>
              <div className="w-full text-sm">{t("rdays")}</div>
            </div>
          </div>
        </div>

        {/*Announcements*/}
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
        {/* calendar */}
        <div
          className={
            " col-span-6 md:col-span-3 lg:col-span-2 flex items-center justify-center"
          }
        >
          <CalendarComponent eventsList={dueDates} />
        </div>

        {/*logbook Card*/}
        <div
          className={
            "bg-background_shade dark:bg-dark_2 col-span-6 md:col-span-3 lg:col-span-2 h-[19rem] rounded"
          }
        >
         

          {(student.iafConfirmed &&
            !student.logComplete &&
            !(country === "Turkey" || country === "North Cyprus (KKTC)")) ||
          (student.sifConfirmed &&
            !student.logComplete &&
            (country === "Turkey" || country === "North Cyprus (KKTC)")) ? (
            <div>
              <div
                className={"justify-between flex items-center mx-3 mt-3 mb-2"}
              >
                <p
                  className={
                    " font-semibold text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  {t("logbook")}
                </p>
                <Link
                  href={"/logbook"}
                  className={
                    "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                  }
                >
                  <BiPlus className={"text-white text-xl"} />
                  <div>{t("add")}</div>
                </Link>
              </div>

              {/*    section container*/}
              <div className={"h-[15rem] overflow-y-auto"}>
                <LogbookDisplay logbookEntries={logbookEntries} />
              </div>
            </div>
          ) : (
            <div>
              <div
                className={"justify-between flex items-center  mx-3 mt-3 mb-2"}
              >
                <p
                  className={
                    " font-semibold text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  {t("logbook")}
                </p>
                <Link
                  href={""}
                  className={
                    "px-2 py-1 bg-background_shade dark:text-white text-white rounded inline-flex items-center justify-center gap-1"
                  }
                >
                  <BiPlus className={"text-white text-xl"} />
                  <div>{t("add")}</div>
                </Link>
              </div>

              {student.logComplete && (
                <div className={"h-[15rem] overflow-y-auto  "}>
                  <LogbookDisplay logbookEntries={logbookEntries} />
                </div>
              )}
            </div>
          )}
        </div>

        {/*TODO Card*/}
        <div
          className={
            "bg-background_shade dark:bg-dark_2 col-span-6 md:col-span-3 lg:col-span-2 h-[19rem] rounded"
          }
        >
          {/*section Name*/}
          <p
            className={
              " font-semibold m-3 text-black dark:text-white  text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
            }
          >
            {t("todo")}
          </p>

          {/*section Container*/}
          <div className={"h-[15rem] overflow-y-auto"}>
            <div
              className={
                " mx-auto max-w-[90%]  rounded  border-yellow text-black"
              }
            >
              {/* Fill Internship Application Form */}
              {!student.filled_iaf ? (
                <div
                  className={
                    " p-2 rounded w-full  gap-2 bg-white drop-shadow-md border-background_shade_2 dark:bg-dark_3 text-black hover:bg-blue hover:text-white "
                  }
                >
                  <Link
                    href={"/appForm"}
                    className={
                      "flex items-center justify-center py-1.5 gap-2 px-1"
                    }
                  >
                    <span className={"text-center font-bold text-md w-full dark:text-white "}>
                      {t("iaf")}
                    </span>
                    <div className="text-xl ">
                      <BsExclamationTriangleFill className="text-[#cab13e]" />
                    </div>
                  </Link>
                </div>
              ) : (
                <div
                  className={
                    "my-2 flex justify-center items-center p-2.5 w-full   text-black/25 dark:text-dark_4 disabled"
                  }
                >
                  <div
                    className={
                      "text-center font-bold text-md w-full flex  justify-center gap-2"
                    }
                  >
                    <p>{t("iaf")}</p>
                    <BsPatchCheckFill className="text-[green] text-xl " />
                  </div>
                </div>
              )}

              {/* Fill Social Insurance Form */}
              {student.iafConfirmed &&
              student.conFormConfirmed &&
              !student.logComplete &&
              !student.filledSocial &&
              (country === "Turkey" || country === "North Cyprus (KKTC)") ? (
                <div
                  className={
                    " p-2 rounded w-full   gap-2 bg-white drop-shadow-md border-background_shade_2 dark:bg-dark_3 text-black hover:bg-blue hover:text-white"
                  }
                >
                  <Link
                    href={"/insuranceForm"}
                    className={
                      "flex items-center justify-center py-1.5 gap-2 px-1"
                    }
                  >
                    <span className={"text-center font-bold text-md w-full dark:text-white"}>
                      {t("sif")}
                    </span>
                    <div className="text-xl ">
                      <BsExclamationTriangleFill className="text-[#cab13e]" />
                    </div>
                  </Link>
                </div>
              ) : (
                <div
                  className={
                    "flex justify-center items-center p-2.5 w-full gap-2 text-black/25 dark:text-dark_4 disabled"
                  }
                >
                  <div
                    className={
                      "text-center font-bold text-md w-full flex justify-center gap-2"
                    }
                  >
                    <p>{t("sif")}</p>
                    {student.filledSocial && (
                      <BsPatchCheckFill className="text-[green] text-xl " />
                    )}
                  </div>
                </div>
              )}

              {/* Fill Logbook */}
              {(student.iafConfirmed &&
                student.conFormConfirmed &&
                !student.logComplete &&
                !(country === "Turkey" || country === "North Cyprus (KKTC)")) ||
              (student.sifConfirmed &&
                student.conFormConfirmed &&
                !student.logComplete &&
                (country === "Turkey" || country === "North Cyprus (KKTC)")) ? (
                <div
                  className={
                    " p-2 rounded w-full   gap-2 bg-white drop-shadow-md border-background_shade_2 dark:bg-dark_3 text-black hover:bg-blue hover:text-white"
                  }
                >
                  <Link
                    href={"/logbook"}
                    className={
                      "flex items-center justify-center py-1.5 gap-2 px-1"
                    }
                  >
                    <span className={"text-center font-bold text-md w-full dark:text-white "}>
                      {t("filllg")}
                    </span>

                    <div className="text-xl ">
                      <BsExclamationTriangleFill className="text-[#cab13e]" />
                    </div>
                  </Link>
                </div>
              ) : (
                <div
                  className={
                    "flex justify-center items-center p-2.5 w-full gap-2 text-black/25 dark:text-dark_4 disabled"
                  }
                >
                  <span className={"text-center font-bold text-md w-full "}>
                    {t("filllg")}
                  </span>
                  {student.logComplete && (
                    <BsPatchCheckFill className="text-[green] text-xl " />
                  )}
                </div>
              )}

              {/* Write Report */}
              {student.compEvalConfirmed && !student.reportComplete ? (
                <div
                  className={
                    " p-2 rounded w-full  gap-2 bg-white drop-shadow-md border-background_shade_2 dark:bg-dark_3 text-black hover:border-l-8 hover:border-l-yellow duration-300 hover:border-[transparent]"
                  }
                >
                  <Link
                    href={"/report"}
                    className={
                      "flex items-center justify-center py-1.5 gap-2 px-1"
                    }
                  >
                    <span className={"text-center font-bold text-md w-full dark:text-white "}>
                      {t("report")}
                    </span>
                    <div className="text-xl ">
                      <BsExclamationTriangleFill className="text-[#cab13e]" />
                    </div>
                  </Link>
                </div>
              ) : (
                <div
                  className={
                    "flex justify-center items-center p-2.5 w-full gap-2 text-black/25 dark:text-dark_4 disabled"
                  }
                >
                  <span className={"text-center font-bold text-md w-full "}>
                    {t("report")}
                  </span>
                  {student.reportComplete && (
                    <BsPatchCheckFill className="text-[green] text-xl " />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/*Upcoming events Card*/}
        <div
          className={
            "bg-background_shade dark:bg-dark_2 col-span-6 md:col-span-3 lg:col-span-2 h-[19rem] rounded"
          }
        >
          {/*section Name*/}
          <p
            className={
              " font-semibold m-3 text-black dark:text-white  text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
            }
          >
            {t("events")}
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
                      className={"justify-start items-center gap-1 pl-3 pr-2"}
                    >
                      <p className={"font-semibold justify-start text-xs md:text-sm"}>
                        {duedate.name === "Internship Application Form"
                          ? t("iafdue")
                          : duedate.name === "Internship Confirmation Form"
                          ? t("conform")
                          : duedate.name === "Social Insurance Form"
                          ? t("sifdue")
                          : duedate.name === "Logbook"
                          ? t("logdue")
                          : duedate.name === "Company Evaluation Form"
                          ? t("compeval")
                          : duedate.name === "Report"
                          ? t("reportdue")
                          : ""}
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
