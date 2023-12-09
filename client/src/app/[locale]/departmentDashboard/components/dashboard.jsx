"use client";
import Image from "next/image";
import { FaUserGroup } from "react-icons/fa6";
import { BsBuildings } from "react-icons/bs";
import { BiPlus, BiX } from "react-icons/bi";
import { useState, useEffect, useMemo } from "react";
import { Empty } from "antd";
import AuthConnect from "@/auth";
import { useTranslations } from "next-intl";
import Link from "next/link";
import jwtDecode from "jwt-decode";
import { DisplayAnnouncement } from "./displayAnnouncement";
import Modal from "../../globalComponents/modal";
import { StudentInformation } from "../../globalComponents/studentInfo";
import { CldUploadWidget } from "next-cloudinary";
import { DateInput } from "../../globalComponents/dateInput";
import countryList from "react-select-country-list";
import { DisplayInternshipPositions } from "./displayIntPos";

export const Dashboard = () => {
  const t = useTranslations("logbook");
  const [submissions, setSubmissions] = useState([]);
  const [showAddAnnouncements, setShowAddAnnouncements] = useState(false);
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementContent, setAnnouncementContent] = useState("");
  const [announcementAdded, setAnnouncementAdded] = useState(false);
  const [msg, setMsg] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [hasNewAnnouncement, setHasNewAnnouncement] = useState(false);
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

  const originalOptions = useMemo(() => countryList().getData(), []);
  const additionalOption = { value: "KKTC", label: "North Cyprus (KKTC)" };

  const updatedOptions = originalOptions.concat(additionalOption);

  const token = localStorage.getItem("accessToken");
  let decodedToken, firstname;
  if (token) {
    decodedToken = jwtDecode(token);
    firstname = decodedToken.firstname;
  }

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
  }, [hasNewAnnouncement]);

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
                    {"Announcements"}
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
                    <div>Add</div>
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
                    {"Internship Positions"}
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
                    <div>Add</div>
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
                  Submitted Forms
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
                                      Internship Application Form
                                    </span>
                                  </div>
                                ) : submission.filledConForm &&
                                  !submission.conFormConfirmed ? (
                                  <div className="flex">
                                    <span className="text-md">
                                      Internship Confirmation Form
                                    </span>
                                  </div>
                                ) : submission.filledSocial &&
                                  !submission.sifConfirmed ? (
                                  <div className="flex">
                                    <span className="text-md">
                                      Social Insurance Form
                                    </span>
                                  </div>
                                ) : submission.compEvalFilled &&
                                  !submission.compEvalConfirmed ? (
                                  <div className="flex">
                                    <span className="text-md">
                                      Company Evaluation Form
                                    </span>
                                  </div>
                                ) : submission.reportComplete &&
                                  !submission.reportConfirmed ? (
                                  <div className="flex">
                                    <span className="text-md">Report</span>
                                  </div>
                                ) : (
                                  <div className="flex">
                                    <span className="text-md">Problem</span>
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
                  Add Announcements
                </p>
              </div>
              <div className="flex gap-3 justify-center py-2 items-center">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {/* Department input section */}
                  <div className="w-[90%]">
                    <input
                      placeholder={"Title"}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setAnnouncementTitle(e.target.value)}
                    />
                  </div>
                  {/*  description section */}
                  <div className="w-[90%]">
                    <textarea
                      placeholder={"Announcement Content"}
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
                      <div>Add</div>
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
              <p>Announcement Added Successfully!</p>
            </div>
            <button
              onClick={() => setAnnouncementAdded(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              Close
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
                  Add Internship Positions
                </p>
              </div>
              <div className="flex gap-3 justify-center py-2 items-center">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {/* Department input section */}
                  <div className="w-[90%]">
                    <input
                      placeholder={"Company Name"}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setCompName(e.target.value)}
                    />
                  </div>
                  <div className="w-[90%]">
                    <input
                      placeholder={"Position"}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>
                  <div className="relative w-[44%]">
                    <div className=" flex border border-dark_4 dark:border-none dark:bg-background_shade_2 rounded">
                      <input
                        placeholder={"Country"}
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
                      placeholder={"City"}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  {/*  description section */}
                  <div className="w-[90%]">
                    <textarea
                      placeholder={"Description"}
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none h-[7rem] dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>

                  <div className="w-[90%]">
                    <textarea
                      placeholder={"Requirements"}
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none h-[7rem] dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setRequirements(e.target.value)}
                    />
                  </div>
                  <div className="w-[44%]">
                    <DateInput
                      placeholder="Students must apply by"
                      onDateChange={(date) => setDate(date)}
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                    />
                  </div>
                  <div className="w-[44%]">
                    <input
                      placeholder={"Contact"}
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
                    <span className="pt-2">
                      Add Company Logo or Internship Information Flyer:
                    </span>
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
                            Upload Image
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
                      <div>Add</div>
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
              <p>Internship Position Added Successfully!</p>
            </div>
            <button
              onClick={() => setIntPosAdded(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};
