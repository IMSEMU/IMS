import React from "react";
import { useTranslations } from "next-intl";

const ConfirmationSection = ({ submitToggle, formData, submitApplication }) => {
  const t = useTranslations("iaf");

  return (
    <main>
      <div className="from-left bg-white dark:bg-dark_2 p-5 rounded shadow-xl dark:border-none border border-background_shade_2 w-[40rem] lg:w-[40rem] h-fit pb-10">
        <div className="w-full">
          <h2
            className={
              " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center px-2"
            }
          >
            {t("submitform")}
          </h2>
        </div>
        <div className=" w-full">
          <p
            className={
              " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
            }
          >
            {t("stdinfo")}
          </p>
          <div>
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <span>
                  {t("name")}: {formData.fname} {formData.lname}
                </span>
              </div>

              <div className="w-1/2">
                <span>
                  {t("stdid")}: {formData.stdid}{" "}
                </span>
              </div>
            </div>

            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <span>
                  {t("email")}: {formData.email}{" "}
                </span>
              </div>

              <div className="w-1/2">
                <span>
                  {t("phone")}: {formData.stdphoneno}
                </span>
              </div>
            </div>

            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <span>
                {t("address")}: {formData.stdaddress}
              </span>
            </div>
          </div>
          <div className={"pt-10"}>
            <p
              className={
                " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
              }
            >
              {t("compinfo")}
            </p>
          </div>
          <div>
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <span>
                {t("compname")}: {formData.companyname}
              </span>
            </div>
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <span>
                {t("work")}: {formData.fields}
              </span>
            </div>

            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <span>
                {t("website")}: {formData.website}
              </span>
            </div>

            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <span>
                {t("orgemail")}: {formData.compemail}
              </span>
            </div>

            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <span>
                {t("address")}: {formData.compaddress}
              </span>
            </div>

            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <span>
                  {t("city")}: {formData.compcity}
                </span>
              </div>
              <div className="w-1/2">
                <span>
                  {t("country")}: {formData.country}
                </span>
              </div>
            </div>

            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <span>
                  {t("phone")}: {formData.compphone}
                </span>
              </div>
              <div className="w-1/2">
                <span>
                  {t("fax")}: {formData.compfax}
                </span>
              </div>
            </div>

            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-full">
                <span>
                  {t("desc")}: {formData.workdesc}
                </span>
              </div>
            </div>
          </div>
          <div className={"pt-10"}>
            <p
              className={
                " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
              }
            >
              {t("cis")}
            </p>
          </div>

          <div>
            <div className="mt-2 md:mt-4 relative flex space-x-2">
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

            <div className="mt-2 md:mt-4 relative flex space-x-2">
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
                onClick={submitToggle}
              >
                Back
              </button>
              <button
                className="bg-blue text-white px-3 py-1 mt-2 justify-end"
                onClick={submitApplication}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ConfirmationSection;
