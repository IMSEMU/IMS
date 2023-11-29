"use client";
import { BiPlus } from "react-icons/bi";
import { useEffect, useState } from "react";
import AuthConnect from "@/auth";
import { useTranslations } from "next-intl";
import Modal from "../../globalComponents/modal";
import { DateInput } from "../../globalComponents/dateInput";

export const AddLogData = ({
  updateLogbookEntries,
  setHasNewLogEntry,
  startdate,
  enddate,
  duration,
}) => {
  const t = useTranslations("logbook");
  const [day, setDay] = useState("");
  const [date, setDate] = useState(new Date());
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const createLogEntry = async (e) => {
    e.preventDefault();

    if (day > duration) {
      setError("Invalid Day. Day cannot be more than Internship Duration");
      setShowErrorModal(true);
    } else {
      try {
        const response = await AuthConnect.post("/createlog", {
          day: day,
          date: date,
          department: department,
          description: description,
        });

        console.log(response);
        const newLogEntry = response.data;
        updateLogbookEntries(newLogEntry);
        setHasNewLogEntry(true);
        setDay("");
        setDate(null);
        setDepartment("");
        setDescription("");
      } catch (error) {
        console.error("Error:", error);
        if (error.response) {
          if (error.response.status === 400) {
            // Handle 400 Bad Request error
            setError(error.response.data.msg);
            setShowErrorModal(true);
          }
        }
      }
    }
  };
  const closeModal = () => {
    setShowErrorModal(false);
  };

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
      <form
        onSubmit={createLogEntry}
        className="flex gap-3 justify-center py-2 items-center"
      >
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
              placeholder="Date"
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
          <div className=" flex justify-end mx-4 w-full">
            <button
              type="submit"
              className={
                "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
              }
            >
              <BiPlus className={"text-white text-xl"} />
              <div>{t("add")}</div>
            </button>
          </div>
        </div>
      </form>
      {/* Error Modal */}
      {showErrorModal && (
        <Modal onClose={closeModal}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">{error}</div>
            <button
              onClick={closeModal}
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
