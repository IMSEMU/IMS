import React from "react";
import { useTranslations } from "next-intl";

const ConfirmationModal = (props) => {
  const t = useTranslations("iaf");
  const {
    onClose,
    onConfirm,
    formData, // Pass the form data as a prop to display it in the modal
  } = props;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 shadow-xl">
      <div
        className="fixed inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>
      <div className="bg-white dark:bg-dark_2 w-9/12 p-4 rounded shadow-md relative">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <div className="">
          <h2>Are you sure you want to submit?</h2>
          <p
            className={
              " font-bold my-4 text-black dark:text-white text-md inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
            }
          >
            {t("stdinfo")}
          </p>
          <div className="mt-2 md:mt-4 relative flex">
            <div className="w-1/3">
              <span className="text-md">
                {t("name")}: {formData.fname} {formData.lname}
              </span>
            </div>

            <div className="w-1/3">
              <span>
                {t("stdid")}: {formData.stdid}
              </span>
            </div>
            <div className="w-1/3">
              <span>
                {t("email")}: {formData.email}
              </span>
            </div>
          </div>
          <div className="mt-2 md:mt-4 relative flex ">
            <div className="w-1/3">
              <span>
                {t("phone")}: {formData.stdphoneno}
              </span>
            </div>
            <div className="w-2/3">
              <span>
                {t("address")}: {formData.stdaddress}
              </span>
            </div>
          </div>
          <p
            className={
              " font-bold my-4 text-black dark:text-white text-md  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
            }
          >
            {t("compinfo")}
          </p>
          <div className="mt-2 md:mt-4 relative flex ">
            <div className="w-1/2">
              <span>
                {t("compname")}: {formData.companyname}
              </span>
            </div>

            <div className="w-1/2">
              <span>
                {t("orgemail")}: {formData.compemail}
              </span>
            </div>
          </div>
          <div className="mt-2 md:mt-4 relative flex ">
            <div className="w-1/2">
              <span>
                {t("website")}: {formData.website}
              </span>
            </div>

            <div className="w-1/2">
              <span>
                {t("phone")}: {formData.compphone}
              </span>
            </div>
          </div>
          {formData.compfax === "" ? (
            <div className="mt-2 md:mt-4 relative flex ">
              <span>
                {t("work")}: {formData.fields}
              </span>
            </div>
          ) : (
            <div className="mt-2 md:mt-4 relative flex ">
              <div className="w-1/2">
                <span>
                  {t("work")}: {formData.fields}
                </span>
              </div>

              <div className="w-1/2">
                <span>
                  {t("fax")}: {formData.compfax}
                </span>
              </div>
            </div>
          )}
          <div className="mt-2 md:mt-4 relative flex ">
            <span>
              {t("address")}: {formData.compaddress}
            </span>
          </div>
          <div className="mt-2 md:mt-4 relative flex ">
            <span>
              {t("desc")}: {formData.workdesc}
            </span>
          </div>
          <p
            className={
              " font-bold my-4 text-black dark:text-white text-md  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
            }
          >
            {t("cis")}
          </p>
          <div className="mt-2 md:mt-4 relative flex">
            <div className="w-1/2">
              <span>
                {t("fname")}: {formData.supfname}
              </span>
            </div>

            <div className="w-1/2">
              <span>
                {t("lname")}: {formData.suplname}
              </span>
            </div>
          </div>
          <div className="mt-2 md:mt-4 relative flex">
            <div className="w-1/2">
              <span>
                {t("email")}: {formData.supemail}
              </span>
            </div>

            <div className="w-1/2">
              <span>
                {t("pos")}: {formData.position}
              </span>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              className="bg-blue text-white px-3 py-1 mt-2 justify-start"
              onClick={onClose}
            >
              Back
            </button>
            <button
              className="bg-blue text-white px-3 py-1 mt-2 justify-end"
              onClick={onConfirm}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmationModal;
