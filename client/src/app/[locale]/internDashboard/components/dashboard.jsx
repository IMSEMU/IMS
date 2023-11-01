import { HiMiniCalendarDays } from "react-icons/hi2";
import Calendar from "../../internDashboard/components/calendar";
import { BiPlus } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { LogbookDisplay } from "../../logbook/components/logbookDisplay";
import { useEffect, useState } from "react";
import AuthConnect from "@/auth";
import { BsExclamationTriangleFill, BsPatchCheckFill } from "react-icons/bs";
import { BsBuildings, BsExclamationTriangleFill, BsPatchCheckFill } from "react-icons/bs";
import { FaBriefcase, FaRegCalendarCheck } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useTranslations } from "next-intl";
import jwtDecode from "jwt-decode";

export const Dashboard = () => {
  const t = useTranslations("dash");
  const [student, setStudent] = useState([]);
  const [country, setCountry] = useState("Nigeria");
  const [logbookEntries, setLogbookEntries] = useState([]);


  const token = localStorage.getItem("accessToken");
  let decodedToken, firstname;
  if (token) {
    decodedToken = jwtDecode(token);
    firstname = decodedToken.firstname;
  }

  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await AuthConnect.get("/getstudent");
        console.log(response.data);
        setStudent(response.data);
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
  return (
    <main className={"m-5 bg-white dark:bg-dark_2 "}>
      <div
        className={
          "text-md lg:text-xl xl:text-2xl py-1 md:py-2 w-full max-w-[1300px] xl:mx-auto mx-2 font-bold"
        }
      >
        <p>
          {t("welcome")} {firstname}{" "}
        </p>
      </div>

      {/*  section 1*/}
      <div
        className={
          "grid grid-cols-6  justify-between items-center  gap-4 w-full max-w-[1300px] self-center px-4 sm:px-10 lg:px-0"
        }
      >
        {/*total days*/}
        <div
          className={
            "min-h-[12rem] lg:h-[12rem] xl:h-[14rem] flex flex-wrap items-center gap-2 content-center justify-around col-span-6 md:col-span-3 lg:col-span-2 bg-white shadow-lg border border-background_shade_2 rounded"
          }
        >
          <div className="flex justify-end w-full gap- items-center mx-10 my-2">
            <div className="inline-flex justify-end w-fit px-1.5 py-0.5 rounded bg-white gap-2 items-center  border border-dark_4 ">
              <FaRegCalendarCheck className="text-[green] text-xl" />
              <p>40</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center ">
            <div className={"p-2 flex items-center w-1/4"}>
              <span
                className={"text-4xl rounded p-4 my-1 bg-dark_3 text-white"}
              >
                <HiMiniCalendarDays />
              </span>
            </div>

            <div
              className={
                "flex flex-wrap justify-center text-center items-center gap-2 text-md xl:text-lg p-2"
              }
            >
              <div className="w-full text-4xl font-bold">23</div>
              <div className="w-full text-xs">Remaining Days</div>
            </div>
          </div>
        </div>

        {/*orgaization name*/}
        <div
          className={
            "min-h-[12rem] lg:h-[12rem] xl:h-[14rem] flex flex-wrap items-center gap-2 content-center justify-around col-span-6 md:col-span-3 lg:col-span-2 bg-white shadow-lg border border-background_shade_2 rounded"
          }
        >
          <div className="flex justify-end w-full gap- items-center mx-10 my-2">
            <div className="inline-flex justify-end w-fit px-1.5 py-0.5 rounded bg-white gap-2 items-center  border border-dark_4 ">
              <RiVerifiedBadgeFill className="text-[green] text-xl" />
              <p>Verified</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center ">
            <div className={"p-2 flex items-center w-1/4"}>
              <span
                className={"text-4xl rounded p-4 my-1 bg-dark_3 text-white"}
              >
                <BsBuildings />
              </span>
            </div>

            <div
              className={
                "w-1/2 flex flex-wrap justify-center text-center items-center gap-2 text-md xl:text-lg p-2"
              }
            >
              <div className=" text-xl truncate font-bold mx-1 max-w-[100%]">
                <p className="truncate">Eastern Meditrannean</p>
              </div>
              <div className="w-full text-xs">company Name</div>
            </div>
          </div>
        </div>

        <div
          className={
            " col-span-6 md:col-span-3 lg:col-span-2 flex items-center justify-center"
          }
        >
          <Calendar />
        </div>

        {/*logbook Card*/}
        <div
          className={
            "bg-background_shade col-span-6 md:col-span-3 lg:col-span-2 h-[19rem] rounded"
          }
        >
          {/*section Name and Buton*/}

          {(student.isConfirmed &&
            !student.logComplete &&
            !(country === "Turkey" || country === "KKTC")) ||
          (student.filledSocial &&
            !student.logComplete &&
            (country === "Turkey" || country === "KKTC")) ? (
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
                  href={""}
                  className={
                    "px-2 py-1 bg-background_shade text-white rounded inline-flex items-center justify-center gap-1"
                  }
                >
                  <BiPlus className={"text-white text-xl"} />
                  <div>{t("add")}</div>
                </Link>
              </div>

              {student.logComplete && (
                <div className={"h-[15rem] overflow-y-auto"}>
                  <LogbookDisplay logbookEntries={logbookEntries} />
                </div>
              )}
            </div>
          )}
        </div>

        {/*Announcement Card*/}
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
                "mx-auto max-w-[90%]  my-2 bg-background_shade_2 hover:bg-dark_4 rounded"
              }
            >
              <Link
                href={""}
                className={
                  "flex justify-between items-center w-full py-3 px-2 w gap-3"
                }
              >
                <Image
                  src={"/envelope.png"}
                  width={1000}
                  height={1000}
                  className={"w-[3rem] h-[3rem]"}
                  alt={""}
                />

                <div
                  className={
                    "truncate flex flex-wrap justify-start items-center  gap-1"
                  }
                >
                  <p className={"font-semibold capitalize "}>Title</p>
                  <span className={"truncate text-sm lg:text-md"}>
                    Announcement contentfffffffff
                  </span>
                </div>

                <div
                  className={"flex items-center justify-center text-sm w-fit"}
                >
                  <p>21/21/21</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/*Todo Card*/}
        <div
          className={
            "bg-background_shade col-span-6 md:col-span-3 lg:col-span-2 h-[19rem] rounded"
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
                    " p-2 rounded w-full  gap-2 bg-background_shade_2 dark:bg-dark_2 text-black hover:bg-blue hover:text-white"
                  }
                >
                  <Link
                    href={"/appForm"}
                    className={
                      "flex items-center justify-center py-1.5 gap-2 px-1"
                    }
                  >
                    <span className={"text-center font-bold text-md w-full "}>
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
                    "my-2 flex justify-center items-center p-2.5 w-full   text-black/25 disabled"
                  }
                >
                  <div
                    className={
                      "text-center font-bold text-md w-full flex justify-center gap-2"
                    }
                  >
                    <p>{t("iaf")}</p>
                    <BsPatchCheckFill className="text-[green] text-xl " />
                  </div>
                </div>
              )}

              {/* Fill Social Insurance Form */}
              {student.isConfirmed &&
              !student.logComplete &&
              !student.filledSocial &&
              (country === "Turkey" || country === "KKTC") ? (
                <div
                  className={
                    " p-2 rounded w-full  gap-2 bg-background_shade_2 dark:bg-dark_2 text-black hover:bg-blue hover:text-white"
                  }
                >
                  <Link
                    href={""}
                    className={
                      "flex items-center justify-center py-1.5 gap-2 px-1"
                    }
                  >
                    <span className={"text-center font-bold text-md w-full "}>
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
                    "flex justify-center items-center p-2.5 w-full gap-2 text-black/25 disabled"
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
              {(student.isConfirmed &&
                !student.logComplete &&
                !(country === "Turkey" || country === "KKTC")) ||
              (student.filledSocial &&
                !student.logComplete &&
                (country === "Turkey" || country === "KKTC")) ? (
                <div
                  className={
                    " p-2 rounded w-full  gap-2 bg-background_shade_2 dark:bg-dark_2 text-black hover:bg-blue hover:text-white"
                  }
                >
                  <Link
                    href={"/logbook"}
                    className={
                      "flex items-center justify-center py-1.5 gap-2 px-1"
                    }
                  >
                    <span className={"text-center font-bold text-md w-full "}>
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
                    "flex justify-center items-center p-2.5 w-full gap-2 text-black/25 disabled"
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
              {student.logComplete && !student.reportComplete ? (
                <div
                  className={
                    " p-2 rounded w-full  gap-2 bg-background_shade_2 dark:bg-dark_2 text-black hover:bg-blue hover:text-white"
                  }
                >
                  <Link
                    href={""}
                    className={
                      "flex items-center justify-center py-1.5 gap-2 px-1"
                    }
                  >
                    <span className={"text-center font-bold text-md w-full "}>
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
                    "flex justify-center items-center p-2.5 w-full gap-2 text-black/25 disabled"
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
      </div>
    </main>
  );
};
