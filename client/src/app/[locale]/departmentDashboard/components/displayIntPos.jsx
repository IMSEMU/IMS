"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { BsMegaphoneFill } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { FaEllipsisV } from "react-icons/fa";
import { GiPencil, GiTrashCan } from "react-icons/gi";
import { Empty } from "antd";
import Modal from "../../globalComponents/modal";
import AuthConnect from "@/auth";
import { DateInput } from "../../globalComponents/dateInput";
import { CldUploadWidget } from "next-cloudinary";
import countryList from "react-select-country-list";

export const DisplayInternshipPositions = ({
  internships,
  updateInternships,
}) => {
  const [hideOptions, setHideOptions] = useState(
    Array(internships.length).fill(false)
  );
  const t = useTranslations("dashDep");
  const [selectedPostion, setSelectedPostion] = useState(null);
  const [positionToShow, setPositionToShow] = useState(null);
  const [editPosition, setEditPosition] = useState(false);
  const [compName, setCompName] = useState("");
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [requirements, setRequirements] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [date, setDate] = useState(Date());
  const [contact, setContact] = useState("");
  const [positionID, setPositionID] = useState("");
  const [dateText, setDateText] = useState("");
  const [edited, setEdited] = useState(false);
  const [deletePosition, setDeletePosition] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const originalOptions = useMemo(() => countryList().getData(), []);
  const additionalOption = { value: "KKTC", label: "North Cyprus (KKTC)" };

  const updatedOptions = originalOptions.concat(additionalOption);

  const toggleOptions = (index) => {
    setHideOptions((prevHideOptions) => {
      const newHideOptions = [...prevHideOptions];
      newHideOptions[index] = !newHideOptions[index];
      return newHideOptions;
    });

    setSelectedPostion(hideOptions[index] ? null : index);
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

  const closeOptions = () => {
    if (selectedPostion !== null) {
      setHideOptions((prevHideOptions) => {
        const newHideOptions = [...prevHideOptions];
        newHideOptions[selectedPostion] = false;
        return newHideOptions;
      });

      setSelectedPostion(null);
    }
  };

  const ShowPosition = (position) => {
    setPositionToShow(position);
  };

  const EditPosition = (position) => {
    setEditPosition(true);
    setPositionID(position.posid);
    setCompName(position.compname);
    setCountry(position.country);
    setCity(position.city);
    setDesc(position.desc);
    setRequirements(position.requirements);
    setImageSrc(position.photo);
    setDate(position.applyby);
    setDateText(position.applyby);
    setPosition(position.position);
    setContact(position.contact);
  };

  const DeletePosition = (position) => {
    setDeletePosition(true);
    setPositionID(position.posid);
  };

  const SendEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthConnect.post("/editintposition", {
        companyname: compName,
        country: country,
        city: city,
        desc: desc,
        reqs: requirements,
        applyby: date,
        image: imageSrc,
        id: positionID,
        position: position,
        contact: contact,
      });
      if (response) {
        const updatedPositions = internships.map((internship) =>
          internship.posid === positionID
            ? {
                ...internship,
                compname: compName,
                country: country,
                city: city,
                desc: desc,
                requirements: requirements,
                applyby: date,
                photo: imageSrc,
              }
            : internship
        );

        updateInternships(updatedPositions);
        setEditPosition(false);
        setPositionToShow(null);
        setEdited(true);
      }
    } catch (error) {
      alert("Application Error");
    }
  };

  const SendDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthConnect.post("/deleteintposition", {
        id: positionID,
      });
      if (response) {
        const updatedPositions = internships.filter(
          (internship) => internship.posid !== positionID
        );

        updateInternships(updatedPositions);
        setDeletePosition(false);
        setPositionToShow(null);
        setDeleted(true);
      }
    } catch (error) {
      // if (error.response) {
      //   setMsg(error.response.data.msg);
      // }
      alert("Application Error");
    }
  };

  return (
    <main onClick={closeOptions}>
      <div className="m-4 rounded h-fit overflow-hidden">
        <div className=" flex justify-center flex-wrap">
          {internships.length === 0 ? (
            <div className=" font-semibold text-lg text-center text-white">
              <Empty />
            </div>
          ) : (
            internships.map((internship, index) => (
              <div
                key={internship.posid}
                className="cursor-pointer mx-1 py-1.5 md:py-2 my-1 bg-white drop-shadow-md border-background_shade_2 hover:border-l-8 hover:border-l-yellow duration-300 border text-black dark:bg-dark_4 dark:text-black w-full flex items-center justify-between rounded"
                onClick={() => {
                  EditPosition(internship);
                }}
              >
                <div className="pl-1 md:pl-2">
                  {internship.photo ? (
                    <Image
                      src={internship.photo}
                      width={1000}
                      height={1000}
                      alt=""
                      className="w-[4rem] h-[3rem]  rounded"
                    />
                  ) : (
                    <Image
                      src={"/dark-flower.jpeg"}
                      width={1000}
                      height={1000}
                      alt=""
                      className=" h-[3rem] w-fit rounded"
                    />
                  )}
                </div>

                <div className="flex flex-wrap justify-center text-start gap-0 rounded w-full truncate">
                  <p className="font-semibold capitalize truncate w-[80%]">
                    {internship.compname}
                  </p>
                  <p className="rounded truncate text-sm w-[80%]">
                    {internship.position}
                  </p>
                </div>

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleOptions(index);
                  }}
                  className="relative text-black text-lg md:text-xl mr-2.5"
                >
                  <FaEllipsisV className=" cursor-pointer" />

                  {/* options */}
                  {hideOptions[index] && (
                    <div className="from-left absolute text-black -right-2 -top-[1.1rem] h-fit border border-background_shade_2 rounded w-[5rem] bg-white dark:bg-dark_2 dark:text-white">
                      <div className="relative">
                        <div
                          className="m-0.5 p-0.5 rounded flex text-sm font-medium items-center cursor-pointer gap-0.5 hover:bg-b hover:bg-background_shade"
                          onClick={() => DeletePosition(internship)}
                        >
                          <GiTrashCan className="text-xl text-yellow" />
                          <p>{t("Delete")}</p>
                        </div>

                        <div
                          className="m-0.5  p-0.5 rounded flex text-sm font-medium items-center cursor-pointer gap-0.5  hover:bg-background_shade"
                          onClick={() => EditPosition(internship)}
                        >
                          <GiPencil className="text-xl text-yellow" />
                          <p>{t("Edit")}</p>
                        </div>
                        <span
                          className="absolute p-[0.1rem] cursor-pointer text-lg top-[1rem] dark:bg-dark_2 bg-white rounded -left-6"
                          onClick={() => {
                            closeOptions();
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
                            {/* edit position modal */}
      {editPosition && (
        <Modal onClose={() => setEditPosition(false)}>
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className={"w-full mb-3"}>
                <p
                  className={
                    " font-bold m-3 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  {t("editIP")}
                </p>
              </div>
              <div className="flex gap-3 justify-center py-2 items-center">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {/* Department input section */}
                  <div className="w-[90%]">
                    <input
                      placeholder={t("CompanyName")}
                      type="text"
                      value={compName}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setCompName(e.target.value)}
                    />
                  </div>
                  <div className="w-[90%]">
                    <input
                      placeholder={t("Position")}
                      type="text"
                      value={position}
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
                      value={city}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  {/*  description section */}
                  <div className="w-[90%]">
                    <textarea
                      placeholder={t("Description")}
                      value={desc}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none h-[7rem] dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>

                  <div className="w-[90%]">
                    <textarea
                      placeholder={"Requirements"}
                      value={requirements}
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none h-[7rem] dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setRequirements(e.target.value)}
                    />
                  </div>
                  <div className="w-[44%]">
                    <DateInput
                      placeholder={dateText.split("T")[0]}
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
                      value={contact}
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
                    <span className="pt-2  text-black dark:text-white text-sm md:text-md">
                    {t("editCL")}:
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
                            className="ml-4 bg-blue py-2 px-3.5 rounded text-white   text-sm md:text-md"
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
                      onClick={SendEdit}
                    >
                      <GiPencil className="text-lg md:text-xl text-white" />
                      <div>{t("Edit")}</div>
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
            <div className="font-bold text-black dark:text-white text-sm md:text-md">
              <p>{t("editIPMsg")}</p>
            </div>
            <button
              onClick={() => setEdited(false)}
              className="bg-blue text-white rounded px-3 py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
      {deletePosition && (
        <Modal onClose={() => setDeletePosition(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold  text-black dark:text-white text-sm md:text-md">
              <p>{t("delIP")}</p>
            </div>
            <div className="flex justify-between mt-2 w-10/12">
              <button
                className="bg-blue text-white px-3 py-1 mt-2 justify-start rounded"
                onClick={() => setDeletePosition(false)}
              >
                {t("No")}
              </button>
              <button
                className="bg-red text-white px-3 py-1 mt-2 justify-end rounded"
                onClick={SendDelete}
              >
                 {t("Yes")}
              </button>
            </div>
          </div>
        </Modal>
      )}
      {deleted && (
        <Modal onClose={() => setDeleted(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold  text-black dark:text-white text-sm md:text-md">
              <p>{t("delIPMsg")}</p>
            </div>
            <button
              onClick={() => setDeleted(false)}
              className="bg-blue text-white px-3 rounded py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};
