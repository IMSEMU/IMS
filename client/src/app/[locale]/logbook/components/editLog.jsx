import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { DateInput } from "../../globalComponents/dateInput";
import { BiPlus } from "react-icons/bi";
import Modal from "../../globalComponents/modal";
import { IoClose } from "react-icons/io5";
import Loading from "../../globalComponents/loading";
import AuthConnect from "@/auth";

export const EditLog = ({
  entry,
  startdate,
  enddate,
  duration,
  mobileLogAdd,
  setMobileLogAdd,
  setEdit,
  setHasNewLogEntry,
  updateEntries,
  logbookEntries,
}) => {
  const t = useTranslations("logbook");
  const [day, setDay] = useState(entry.day);
  const [date, setDate] = useState(entry.date);
  const [dateText, setDateText] = useState(entry.date);
  const [department, setDepartment] = useState(entry.department);
  const [description, setDescription] = useState(entry.description);
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDay(entry.day);
    setDate(entry.date);
    setDepartment(entry.department);
    setDescription(entry.description);
  }, [entry]);

  const editLogEntry = async (e, logid) => {
    setLoading(true);
    e.preventDefault();
    console.log(day, date, department, description, logid);
    try {
      const response = await AuthConnect.post("/editlog", {
        day: day,
        date: date,
        department: department,
        description: description,
        logid: logid,
      });

      if (response) {
        const updatedEntries = logbookEntries.map((entry) =>
          entry.logid === logid
            ? {
                ...entry,
                day: day,
                date: date,
                department: department,
                description: description,
              }
            : entry
        );
        updateEntries(updatedEntries);
        setHasNewLogEntry(true);
        setEdit(null);
        if (mobileLogAdd) {
          setMobileLogAdd(!mobileLogAdd);
        }
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        if (error.response.status === 400) {
          // Handle 400 Bad Request error
          if (error.response.data.msg === "1") {
            setError(t("error1"));
          } else if (error.response.data.msg === "2") {
            setError(t("error2"));
          } else if (error.response.data.msg === "3") {
            setError(t("error3"));
          } else {
            setError(t("generic"));
          }
          setShowErrorModal(true);
          setLoading(false);
        }
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full from-left">
      <div className={"hidden lg:block w-full mb-3"}>
        <p
          className={
            " font-bold m-3 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
          }
        >
          {t("title")}
        </p>
      </div>
      <div className="flex gap-3 justify-center py-2 items-center">
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <div className="w-[90%]">
            <input
              placeholder={t("day")}
              type="number"
              min={0}
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
            />
          </div>
          <div className="w-[90%]">
            <DateInput
              placeholder={dateText.split("T")[0]}
              onDateChange={(date) => setDate(date)}
              value={date}
              min={new Date(startdate).toISOString().split("T")[0]}
              max={new Date(enddate).toISOString().split("T")[0]}
              className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
            />
          </div>

          {/* Department input section */}
          <div className="w-[90%]">
            <input
              placeholder={t("dept")}
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
            />
          </div>
          {/* work description section */}
          <div className="w-[90%]">
            <textarea
              placeholder={t("desc")}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className=" resize-none rounded p-3 outline-none w-full border border-dark_4 dark:border-none h-[10rem] dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
            />
          </div>
          <div className="justify-between flex w-full mx-4">
            <div className="flex justify-start">
              <button
                type="button"
                className={
                  "px-2 py-1 bg-red text-white rounded inline-flex items-center justify-center gap-1"
                }
                onClick={() => {
                  setEdit(null);
                  if (mobileLogAdd) {
                    setMobileLogAdd(!mobileLogAdd);
                  }
                }}
              >
                <IoClose className={"text-white text-xl"} />
                <div>{t("Close")}</div>
              </button>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className={
                  "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                }
                onClick={(e) => {
                  editLogEntry(e, entry.logid);
                }}
              >
                <BiPlus className={"text-white text-xl"} />
                <div>{t("save")}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Error Modal */}
      {showErrorModal && (
        <Modal onClose={() => setShowErrorModal(false)}>
          <div className="flex flex-col justify-center items-center dark:text-white">
            <div className="font-bold">{error}</div>
            <button
              onClick={() => setShowErrorModal(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};
