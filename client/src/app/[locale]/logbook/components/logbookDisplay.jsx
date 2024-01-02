"use client";
import { useState, useEffect } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
import { GiTrashCan, GiPencil } from "react-icons/gi";
import { Empty } from "antd";
import { useTranslations, useFormatter } from "next-intl";
import AuthConnect from "@/auth";
import Loading from "../../globalComponents/loading";
import { useRouter, usePathname } from "next/navigation";

export const LogbookDisplay = ({
  logbookEntries,
  setEdit,
  setHasNewLogEntry,
  updateEntries,
  mobileLogAdd,
  setMobileLogAdd,
}) => {
  const t = useTranslations("logbook");
  const format = useFormatter();
  const pathName = usePathname();
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(null);

  const [hideOptions, setHideOptions] = useState(
    Array(logbookEntries.length).fill(false)
  );

  const toggleOptions = (index) => {
    setHideOptions((prevHideOptions) => {
      const newHideOptions = [...prevHideOptions];
      newHideOptions[index] = !newHideOptions[index];
      return newHideOptions;
    });

    setSelectedItem(hideOptions[index] ? null : index);
  };

  const closeOptions = () => {
    if (selectedItem !== null) {
      setHideOptions((prevHideOptions) => {
        const newHideOptions = [...prevHideOptions];
        newHideOptions[selectedItem] = false;
        return newHideOptions;
      });

      setSelectedItem(null);
    }
  };

  const formatDate = (fullDate) => {
    const date = new Date(fullDate);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
    return formattedDate;
  };

  const DeleteLog = async (logid) => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/deletelog", {
        logid: logid,
      });

      if (response) {
        const updatedEntries = logbookEntries.filter(
          (entry) => entry.logid !== logid
        );
        updateEntries(updatedEntries);
        setHasNewLogEntry(true);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        if (error.response.status === 400) {
          setLoading(false);
          // Handle 400 Bad Request error
          setError(error.response.data.msg);
          setShowErrorModal(true);
        }
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="m-4 rounded h-fit from-bottom">
      {logbookEntries.length === 0 ? (
        <div className=" font-semibold text-lg text-center text-white">
          <Empty />
        </div>
      ) : (
        logbookEntries.map((entry, index) => (
          <div key={entry.logid} className=" flex justify-center flex-wrap overflow-hidden">
            {/* Render each logbook entry */}
            <div className="mb-2 mx-1 gap-1.5 py-1.5 bg-white text-black drop-shadow-lg hover:border-l-8 hover:border-l-yellow duration-300 border-[transparent] dark:bg-dark_4 dark:text-black min-w-full flex items-center justify-between rounded">
              <div className="ml-2  flex flex-wrap gap-1 w-[5rem]">
                <p className="font-semibold text-sm md:text-md">
                  {t("day")} {entry.day}
                </p>
                <p className=" bg-yellow text-black rounded text-xs  smtext-sm md:text-md font-semibold px-1 py-0.5">
                  {formatDate(entry.date)}
                </p>
              </div>

              <div className="flex flex-wrap truncate w-full items-center pr-2">
                <div>
                  <span className=" w-[90%] truncate font-semibold text-sm text-center">
                    {entry.department}
                  </span>
                  <div className="max-w-[90%] truncate  text-xs md:text-sm text-justify">
                    <p className="truncate">{entry.description}</p>
                  </div>
                </div>
              </div>

              {(pathName === "/logbook" || pathName === "/tr/logbook") && (
                <div className="relative mr-3">
                  <FaEllipsisV
                    className=" cursor-pointer"
                    onClick={() => toggleOptions(index)}
                  />

                  {hideOptions[index] && (
                    <div className="from-left absolute text-white -left-10 -top-[1.4rem] h-fit rounded w-[5rem] bg-dark_3">
                      <div className="relative">
                        <div
                          className="m-0.5  p-1 rounded flex text-sm font-medium items-center cursor-pointer gap-0.5  hover:bg-background_shade"
                          onClick={() => DeleteLog(entry.logid)}
                        >
                          <GiTrashCan className="text-xl text-yellow" />
                          <p className="">{t("Delete")}</p>
                        </div>

                        <div
                          className="m-0.5  p-1 rounded flex text-sm font-medium items-center cursor-pointer gap-0.5  hover:bg-background_shade"
                          onClick={(e) => {
                            e.stopPropagation();
                            setEdit(entry);
                            closeOptions();
                            if (mobileLogAdd) {
                              setMobileLogAdd(!mobileLogAdd);
                            }
                          }}
                        >
                          <GiPencil className="text-xl text-yellow" />
                          <p>{t("edit")}</p>
                        </div>
                        <span
                          onClick={() => {
                            closeOptions();
                          }}
                          className="absolute p-[0.1rem] cursor-pointer text-lg top-[1.3rem] bg-dark_3 rounded -left-6"
                        >
                          <BiChevronsRight className="text-yellow" />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};