"use client";
import Image from "next/image";
import { BiPencil, BiPlus, BiX } from "react-icons/bi";
import { useState, useEffect, useMemo } from "react";
import { Empty } from "antd";
import AuthConnect from "@/auth";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { DisplayAnnouncement } from "./displayAnnouncement";
import Modal from "../../globalComponents/modal";
import { StudentInformation } from "../../globalComponents/studentInfo";
import { CldUploadWidget } from "next-cloudinary";
import { DateInput } from "../../globalComponents/dateInput";
import countryList from "react-select-country-list";
import { DisplayInternshipPositions } from "./displayIntPos";
import CalendarComponent from "../../internDashboard/components/calendar";
import { GiPencil } from "react-icons/gi";

export const Dashboard = ({ user }) => {
  const t = useTranslations("dashDep");
  const [submissions, setSubmissions] = useState([]);
  const [showAddAnnouncements, setShowAddAnnouncements] = useState(false);
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementContent, setAnnouncementContent] = useState("");
  const [announcementAdded, setAnnouncementAdded] = useState(false);
  const [msg, setMsg] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [hasNewAnnouncement, setHasNewAnnouncement] = useState(false);
  const [datesEdited, setDatesEdited] = useState(false);
  const [students, setStudents] = useState([]);
  const [showAddIntPosition, setShowAddIntPosition] = useState(false);
  const [compName, setCompName] = useState("");
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [requirements, setRequirements] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [date, setDate] = useState(Date());
  const [contact, setContact] = useState("");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [intPosAdded, setIntPosAdded] = useState(false);
  const [hasNewPosition, setHasNewPosition] = useState(false);
  const [intPositions, setIntPositions] = useState([]);
  const [editDueDates, setEditDueDates] = useState(false);
  const [iaf, setIAF] = useState("");
  const [iafText, setIafText] = useState("");
  const [conForm, setConForm] = useState("");
  const [conFormText, setConFormText] = useState("");
  const [sif, setSIF] = useState("");
  const [sifText, setSifText] = useState("");
  const [logbook, setLogbook] = useState("");
  const [logbookText, setLogbookText] = useState("");
  const [compEval, setCompEval] = useState("");
  const [compEvalText, setCompEvalText] = useState("");
  const [report, setReport] = useState("");
  const [reportText, setReportText] = useState("");
  const [dueDates, setDueDates] = useState([]);
  const [edited, setEdited] = useState(false);

  const originalOptions = useMemo(() => countryList().getData(), []);
  const additionalOption = { value: "KKTC", label: "North Cyprus (KKTC)" };

  const updatedOptions = originalOptions.concat(additionalOption);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await AuthConnect.get("/getstd");
        setStudents(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    getStudents();
  }, []);

  useEffect(() => {
    const getDueDates = async () => {
      try {
        const response = await AuthConnect.get("/getdeptduedates");
        setDueDates(response.data);
        console.log(response.data);
        initDueDates(response.data);
      } catch (error) {
        console.error("Error fetching due dates:", error);
      }
    };

    getDueDates();
  }, []);

  useEffect(() => {
    if (datesEdited) {
      const getDueDates = async () => {
        try {
          const response = await AuthConnect.get("/getdeptduedates");
          setDueDates(response.data);
          console.log(response.data);
          initDueDates(response.data);
        } catch (error) {
          console.error("Error fetching due dates:", error);
        }
      };

      getDueDates();
      setHasNewPosition(false);
    }
  }, [datesEdited]);

  const initDueDates = (duedates) => {
    const findiaf = duedates.filter((duedate) =>
      duedate.name.toLowerCase().includes("internship application form")
    );
    if (findiaf.length != 0) {
      setIAF(findiaf[0].date);
      setIafText(findiaf[0].date);
    }

    const findconform = duedates.filter((duedate) =>
      duedate.name.toLowerCase().includes("internship confirmation form")
    );
    if (findconform.length != 0) {
      setConForm(findconform[0].date);
      setConFormText(findconform[0].date);
    }

    const findsif = duedates.filter((duedate) =>
      duedate.name.toLowerCase().includes("social insurance form")
    );
    if (findsif.length != 0) {
      setSIF(findsif[0].date);
      setSifText(findsif[0].date);
    }

    const findlogbook = duedates.filter((duedate) =>
      duedate.name.toLowerCase().includes("logbook")
    );
    if (findlogbook.length != 0) {
      setLogbook(findlogbook[0].date);
      setLogbookText(findlogbook[0].date);
    }

    const findcompeval = duedates.filter((duedate) =>
      duedate.name.toLowerCase().includes("company evaluation form")
    );
    if (findcompeval.length != 0) {
      setCompEval(findcompeval[0].date);
      setCompEvalText(findcompeval[0].date);
    }

    const findreport = duedates.filter((duedate) =>
      duedate.name.toLowerCase().includes("report")
    );
    if (findreport.length != 0) {
      setReport(findreport[0].date);
      setReportText(findreport[0].date);
    }
  };

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await AuthConnect.get("/getsubs");
        setSubmissions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching Submissions:", error);
      }
    };

    fetchSubmissions();
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
  }, []);

  useEffect(() => {
    if (hasNewAnnouncement) {
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
      setHasNewAnnouncement(false);
    }
  }, [hasNewAnnouncement]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await AuthConnect.get("/getintpositions");
        setIntPositions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching available internships:", error);
      }
    };

    fetchPositions();
  }, []);

  useEffect(() => {
    if (hasNewPosition) {
      const fetchPositions = async () => {
        try {
          const response = await AuthConnect.get("/getintpositions");
          setIntPositions(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching available internships:", error);
        }
      };

      fetchPositions();
      setHasNewPosition(false);
    }
  }, [hasNewPosition]);

  const updateAnnouncements = (newAnnouncement) => {
    setAnnouncements((prevAnnouncments) => [
      ...prevAnnouncments,
      newAnnouncement,
    ]);
  };

  const AddAnnouncement = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthConnect.post("/addannouncement", {
        title: announcementTitle,
        content: announcementContent,
      });
      if (response) {
        const newAnnouncement = response.data;
        updateAnnouncements(newAnnouncement);
        setHasNewAnnouncement(true);
        setShowAddAnnouncements(false);
        setAnnouncementAdded(true);
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error");
    }
  };

  const updatePositions = (newPosition) => {
    setIntPositions((prevPositions) => [...prevPositions, newPosition]);
  };

  const AddInternshipPosition = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthConnect.post("/addintpostion", {
        companyname: compName,
        country: country,
        city: city,
        desc: desc,
        reqs: requirements,
        applyby: date,
        image: imageSrc,
        position: position,
        contact: contact,
      });
      if (response) {
        const newPosition = response.data;
        updatePositions(newPosition);
        setHasNewPosition(true);
        setShowAddIntPosition(false);
        setIntPosAdded(true);
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error");
    }
  };

  const EditDueDates = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthConnect.post("/editduedates", {
        iaf: iaf,
        conform: conForm,
        sif: sif,
        logbook: logbook,
        compeval: compEval,
        report: report,
      });
      if (response) {
        setDueDates(response.data);
        initDueDates(response.data);
        setDatesEdited(true);
        setEditDueDates(false);
        setEdited(true);
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error");
    }
  };

  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen);
  };

  const handleSelectCountry = (country) => {
    setCountry(country);
    setIsCountryDropdownOpen(false);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setIsCountryDropdownOpen(true);
  };

  const handleImageUploadSuccess = (result) => {
    if (result.event === "success") {
      const url = result.info.secure_url;
      setImageSrc(url); // Store the URL in state
    }
  };

  const capitalizeFirstLetter = (word) => {
    if (typeof word !== "string" || word.length === 0) {
      return word;
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
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
            {t("welcome")} {capitalizeFirstLetter(user.firstname)}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="grid grid-cols-6 col-span-3 lg:col-span-2  justify-between items-center  gap-4 w-full max-w-[1300px] self-center px-4 sm:px-10 lg:px-0">
            {/* display card */}
            <div className="relative col-span-6 md:col-span-3">
              {/* Add button */}
              <button
                className="absolute top-0 right-0 px-2 py-1 bg-blue text-white inline-flex rounded items-center justify-center gap-1"
                onClick={() => {
                  setEditDueDates(true);
                }}
              >
                <BiPencil className="text-white text-xl" />
                <div>{t("editDue")}</div>
              </button>

              {/* Calendar */}
              <div className="flex items-center justify-center w-[340px] mt-7">
                <CalendarComponent eventsList={dueDates} />
              </div>
            </div>

            <div className=" col-span-6 md:col-span-3">
              {/*Announcement Card*/}
              <div
                className={
                  "bg-background_shade  col-span-6 md:col-span-3 lg:col-span-2 h-[19rem] rounded"
                }
              >
                {/*section Name and button*/}
                <div className="flex justify-between capitalize p-3 items-center">
                  <p
                    className={
                      " font-semibold  text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
                    }
                  >
                    {t("Announcements")}
                  </p>

                  <button
                    className={
                      "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                    }
                    onClick={() => {
                      setShowAddAnnouncements(true);
                    }}
                  >
                    <BiPlus className={"text-white text-xl"} />
                    <div>{t("add")}</div>
                  </button>
                </div>

                {/*section container*/}
                <div className={"h-[15rem] overflow-y-auto"}>
                  <DisplayAnnouncement
                    announcements={announcements}
                    updateAnnouncements={setAnnouncements}
                  />
                </div>
              </div>
            </div>

            {/* Students Information */}
            <div className=" col-span-6 md:col-span-3 overflow-hidden">
              <StudentInformation students={students} usage={"dept"} />
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
                    {t("IP")}
                  </p>

                  <button
                    className={
                      "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                    }
                    onClick={() => {
                      setShowAddIntPosition(true);
                    }}
                  >
                    <BiPlus className={"text-white text-xl"} />
                    <div>{t("add")}</div>
                  </button>
                </div>

                {/*section container*/}
                <div className={"h-[15rem] overflow-y-auto"}>
                  <DisplayInternshipPositions
                    internships={intPositions}
                    updateInternships={setIntPositions}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submitted Forms */}
          <div className=" col-span-3 lg:col-span-1 grid grid-rows-2">
            <div className=" row-span-2 bg-background_shade rounded">
              {/*section Name and button*/}
              <div className="capitalize p-3 items-center">
                <p
                  className={
                    " font-semibold  text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
                  }
                >
                  {t("subFor")}
                </p>
              </div>

              {/*section container*/}
              <div className={"h-fit overflow-y-auto"}>
                <div className={"mx-auto max-w-[90%] my-2 rounded"}>
                  <div className=" rounded h-fit">
                    {submissions.length === 0 ? (
                      <div className=" font-semibold text-lg text-center text-white">
                        <Empty />
                      </div>
                    ) : (
                      submissions.map((submission) => (
                        <Link
                          href={
                            submission.filled_iaf && !submission.iafConfirmed
                              ? `/iafview?id=${submission.internshipid}&stdid=${submission.stdid}`
                              : submission.filledConForm &&
                                !submission.conFormConfirmed
                              ? `/conformview?id=${submission.internshipid}&stdid=${submission.stdid}`
                              : submission.filledSocial &&
                                !submission.sifConfirmed
                              ? `/sifview?id=${submission.internshipid}&stdid=${submission.stdid}`
                              : submission.compEvalFilled &&
                                !submission.compEvalConfirmed
                              ? `/evalview?id=${submission.internshipid}&stdid=${submission.stdid}`
                              : submission.reportComplete &&
                                !submission.reportConfirmed
                              ? `/reportview?id=${submission.internshipid}&stdid=${submission.stdid}`
                              : ""
                          }
                        >
                          <div
                            key={submission.internshipid}
                            className=" flex justify-center flex-wrap"
                          >
                            <div className="my-2 mx-1 py-2 bg-blue text-white dark:bg-dark_4 dark:text-black w-full flex max-w-[30rem] items-center justify-between rounded">
                              <div
                                className={
                                  "w-2/12 flex justify-center items-center"
                                }
                              >
                                <Image
                                  src={"/avatar.png"}
                                  alt={"Profile Picture"}
                                  height={1000}
                                  width={1000}
                                  priority
                                  className={
                                    "w-[2rem] h-[2rem] rounded-full hidden lg:inline-block"
                                  }
                                />
                              </div>
                              <div className={"w-10/12 ml-5"}>
                                <div className=" flex flex-wrap">
                                  <p className="font-semibold">
                                    {submission.stdid}
                                  </p>
                                </div>
                                {submission.filled_iaf &&
                                !submission.iafConfirmed ? (
                                  <div className="flex">
                                    <span className="text-md">
                                      {t("iaForm")}
                                    </span>
                                  </div>
                                ) : submission.filledConForm &&
                                  !submission.conFormConfirmed ? (
                                  <div className="flex">
                                    <span className="text-md">
                                      {t("icForm")}
                                    </span>
                                  </div>
                                ) : submission.filledSocial &&
                                  !submission.sifConfirmed ? (
                                  <div className="flex">
                                    <span className="text-md">
                                      {t("siForm")}
                                    </span>
                                  </div>
                                ) : submission.compEvalFilled &&
                                  !submission.compEvalConfirmed ? (
                                  <div className="flex">
                                    <span className="text-md">
                                      {t("ceForm")}
                                    </span>
                                  </div>
                                ) : submission.reportComplete &&
                                  !submission.reportConfirmed ? (
                                  <div className="flex">
                                    <span className="text-md">
                                      {t("Report")}
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
      </div>
      {showAddAnnouncements && (
        <Modal onClose={() => setShowAddAnnouncements(false)}>
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className={"hidden lg:block w-full mb-3"}>
                <p
                  className={
                    " font-bold m-3 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  {t("addAnn")}
                </p>
              </div>
              <div className="flex gap-3 justify-center py-2 items-center">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {/* Department input section */}
                  <div className="w-[90%]">
                    <input
                      placeholder={t("Title")}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setAnnouncementTitle(e.target.value)}
                    />
                  </div>
                  {/*  description section */}
                  <div className="w-[90%]">
                    <textarea
                      placeholder={t("AnnouncementContent")}
                      id=""
                      className=" resize-none rounded p-3 outline-none w-full border border-dark_4 dark:border-none h-[10rem] dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setAnnouncementContent(e.target.value)}
                    />
                  </div>
                  <div className=" flex justify-end mx-4 w-full">
                    <button
                      className={
                        "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                      }
                      onClick={AddAnnouncement}
                    >
                      <BiPlus className={"text-white text-xl"} />
                      <div>{t("add")}</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {announcementAdded && (
        <Modal onClose={() => setAnnouncementAdded(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("addAnnMsg")}</p>
            </div>
            <button
              onClick={() => setAnnouncementAdded(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
      {showAddIntPosition && (
        <Modal onClose={() => setShowAddIntPosition(false)}>
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className={"hidden lg:block w-full mb-3"}>
                <p
                  className={
                    " font-bold m-3 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  {t("addIP")}
                </p>
              </div>
              <div className="flex gap-3 justify-center py-2 items-center">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {/* Department input section */}
                  <div className="w-[90%]">
                    <input
                      placeholder={t("CompanyName")}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setCompName(e.target.value)}
                    />
                  </div>
                  <div className="w-[90%]">
                    <input
                      placeholder={t("Position")}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>
                  <div className="relative w-[44%]">
                    <div className=" flex border border-dark_4 dark:border-none dark:bg-background_shade_2 rounded">
                      <input
                        placeholder={t("Country")}
                        type="text"
                        value={country}
                        className="rounded p-3 outline-none w-10/12 text-dark_2 placeholder:text-dark_2"
                        onChange={handleCountryChange}
                      />
                      <button
                        type="button"
                        onClick={toggleCountryDropdown}
                        className={"mt-1 text-yellow"}
                      >
                        ▼
                      </button>
                    </div>
                    {isCountryDropdownOpen && (
                      <div className="absolute z-10 w-[15rem] mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                        <ul className="py-1">
                          {updatedOptions
                            .filter((option) =>
                              option.label
                                .toLowerCase()
                                .includes(country.toLowerCase())
                            )
                            .map((option) => (
                              <li
                                key={option.value} // Assuming value is unique
                                className="px-4 py-2 hover:bg-black/25 cursor-pointer"
                                onClick={() =>
                                  handleSelectCountry(option.label)
                                }
                              >
                                {option.label}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="w-[44%]">
                    <input
                      placeholder={t("City")}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  {/*  description section */}
                  <div className="w-[90%]">
                    <textarea
                      placeholder={t("Description")}
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none h-[7rem] dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>

                  <div className="w-[90%]">
                    <textarea
                      placeholder={t("Requirements")}
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none h-[7rem] dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setRequirements(e.target.value)}
                    />
                  </div>
                  <div className="w-[44%]">
                    <DateInput
                      placeholder={t("StudentsApply")}
                      onDateChange={(date) => setDate(date)}
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                    />
                  </div>
                  <div className="w-[44%]">
                    <input
                      placeholder={t("Contact")}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  <div className="w-[90%] justify-center text-center">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        width={1000}
                        height={1000}
                        alt=""
                        className=" mx-auto h-[7rem] w-[7rem] justify-center text-center"
                      />
                    )}
                  </div>
                  <div className="w-[90%]">
                    <span className="pt-2">{t("addCL")}:</span>
                    <CldUploadWidget
                      uploadPreset="p5tgbjfx"
                      onSuccess={handleImageUploadSuccess}
                    >
                      {({ open }) => {
                        function handleOnClick(e) {
                          e.preventDefault();
                          open();
                        }
                        return (
                          <button
                            className="ml-4 bg-blue py-2 px-3.5 rounded text-white"
                            onClick={handleOnClick}
                          >
                            {t("UploadImage")}
                          </button>
                        );
                      }}
                    </CldUploadWidget>
                  </div>
                  <div className=" flex justify-end mx-4 w-full">
                    <button
                      className={
                        "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                      }
                      onClick={AddInternshipPosition}
                    >
                      <BiPlus className={"text-white text-xl"} />
                      <div>{t("add")}</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {intPosAdded && (
        <Modal onClose={() => setIntPosAdded(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("addIPMsg")}</p>
            </div>
            <button
              onClick={() => setIntPosAdded(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
      {editDueDates && (
        <Modal onClose={() => setEditDueDates(false)}>
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className={"hidden lg:block w-full mb-3"}>
                <p
                  className={
                    " font-bold m-3 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  {t("editDue")}
                </p>
              </div>
              <div className="flex gap-3 justify-center py-2 items-center">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  <div className="w-[90%] flex">
                    <p className="w-[80%]">{t("iaForm")}</p>
                    <DateInput
                      placeholder={
                        iafText
                          ? iafText.split("T")[0]
                          : "Internship Application Form"
                      }
                      onDateChange={(iaf) => setIAF(iaf)}
                      value={iaf}
                      min={new Date().toISOString().split("T")[0]}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                    />
                  </div>
                  <div className="w-[90%] flex">
                    <p className="w-[80%]">{t("icForm")}</p>
                    <DateInput
                      placeholder={
                        conFormText
                          ? conFormText.split("T")[0]
                          : "Internship Confirmation Form"
                      }
                      onDateChange={(conForm) => setConForm(conForm)}
                      value={conForm}
                      min={new Date().toISOString().split("T")[0]}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                    />
                  </div>
                  <div className="w-[90%] flex">
                    <p className="w-[80%]">{t("siForm")}</p>
                    <DateInput
                      placeholder={
                        sifText
                          ? sifText.split("T")[0]
                          : "Social Insurance Form"
                      }
                      onDateChange={(sif) => setSIF(sif)}
                      value={sif}
                      min={new Date().toISOString().split("T")[0]}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                    />
                  </div>
                  <div className="w-[90%] flex">
                    <p className="w-[80%]">{t("Logbook")}</p>
                    <DateInput
                      placeholder={
                        logbookText ? logbookText.split("T")[0] : "Logbook"
                      }
                      onDateChange={(logbook) => setLogbook(logbook)}
                      value={logbook}
                      min={new Date().toISOString().split("T")[0]}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                    />
                  </div>
                  <div className="w-[90%] flex">
                    <p className="w-[80%]">{t("cteForm")}</p>
                    <DateInput
                      placeholder={
                        compEvalText
                          ? compEvalText.split("T")[0]
                          : "Company Trainee Evaluation Form"
                      }
                      onDateChange={(compEval) => setCompEval(compEval)}
                      value={compEval}
                      min={new Date().toISOString().split("T")[0]}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                    />
                  </div>
                  <div className="w-[90%] flex">
                    <p className="w-[80%]">{t("Report")}</p>
                    <DateInput
                      placeholder={
                        reportText ? reportText.split("T")[0] : "Report"
                      }
                      onDateChange={(report) => setReport(report)}
                      value={report}
                      min={new Date().toISOString().split("T")[0]}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                    />
                  </div>
                  <div className=" flex justify-end mx-4 w-full">
                    <button
                      className={
                        "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                      }
                      onClick={EditDueDates}
                    >
                      <GiPencil className="text-xl text-yellow" />
                      <div>{t("Save")}</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {edited && (
        <Modal onClose={() => setEdited(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("editDueMsg")}</p>
            </div>
            <button
              onClick={() => setEdited(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};
