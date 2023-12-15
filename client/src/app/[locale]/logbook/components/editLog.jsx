import { useTranslations } from "next-intl";
import { useState } from "react";
import { DateInput } from "../../globalComponents/dateInput";
import { BiPlus } from "react-icons/bi";
import Modal from "../../globalComponents/modal";

export const EditLog = ({ entry, startdate, enddate, duration }) => {
  const t = useTranslations("logbook");
  const [day, setDay] = useState(entry.day);
  const [date, setDate] = useState(entry.date);
  const [department, setDepartment] = useState(entry.department);
  const [description, setDescription] = useState(entry.description);
  const [showErrorModal, setShowErrorModal] = useState(false);

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
              placeholder="Day"
              type="number"
              min={0}
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
            />
          </div>
          <div className="w-[90%]">
            <DateInput
              placeholder={date.split("T")[0]}
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
              placeholder="Department"
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
            />
          </div>
          {/* work description section */}
          <div className="w-[90%]">
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className=" resize-none rounded p-3 outline-none w-full border border-dark_4 dark:border-none h-[10rem] dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
            />
          </div>
          <div className=" flex justify-end mx-4 w-full">
            <button
              type="button"
              className={
                "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
              }
            >
              <BiPlus className={"text-white text-xl"} />
              <div>Save</div>
            </button>
          </div>
        </div>
      </div>
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
