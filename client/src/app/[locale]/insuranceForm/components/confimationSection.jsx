import React from "react";
import { useTranslations } from "next-intl";

const ConfirmationSection = ({
  submitToggle,
  formData,
  submitInsuranceForm,
}) => {
  const t = useTranslations("sif");

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

            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <span>
                  {t("idpass")}: {formData.idpassno}{" "}
                </span>
              </div>

              <div className="w-1/2">
                <span>
                  {t("ayear")}: {formData.ayear}
                </span>
              </div>
            </div>
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <span>
                  {t("dept")}: {formData.dept}{" "}
                </span>
              </div>

              <div className="w-1/2">
                <span>
                  {t("fac")}: {formData.faculty}
                </span>
              </div>
            </div>
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <span>
                  {t("fname")}: {formData.fname}{" "}
                </span>
              </div>

              <div className="w-1/2">
                <span>
                  {t("mname")}: {formData.mname}
                </span>
              </div>
            </div>
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <span>
                  {t("pob")}: {formData.pob}{" "}
                </span>
              </div>

              <div className="w-1/2">
                <span>
                  {t("dob")}:{" "}
                  {formData.dob ? formData.dob.toISOString().slice(0, 10) : ""}
                </span>
              </div>
            </div>
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <span>
                  {t("doi")}:{" "}
                  {formData.doi ? formData.doi.toISOString().slice(0, 10) : ""}{" "}
                </span>
              </div>

              <div className="w-1/2">
                <span>
                  {t("validity")}: {formData.validity}
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
              {t("subtitle")}
            </p>
          </div>
          <div>
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <span>
                  {t("sdate")}:{" "}
                  {formData.startdate
                    ? formData.startdate.toISOString().slice(0, 10)
                    : ""}
                </span>
              </div>
              <div className="w-1/2">
                <span>
                  {t("days")}: {formData.duration}
                </span>
              </div>
            </div>
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <span>
                {t("edate")}:{" "}
                {formData.enddate
                  ? formData.enddate.toISOString().slice(0, 10)
                  : ""}
              </span>
            </div>
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
                {t("orgemail")}: {formData.compemail}
              </span>
            </div>

            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <span>
                {t("website")}: {formData.website}
              </span>
            </div>

            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <span>
                {t("address")}: {formData.compaddress}
              </span>
            </div>

            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <span>
                {t("phone")}: {formData.compphone}
              </span>
            </div>
          </div>
          <div className={"pt-10"}>
            <p
              className={
                " font-bold my-4 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
              }
            >
              {t("sub")}
            </p>
          </div>

          <div>
            <div className="mt-2 md:mt-4 relative flex space-x-2">
              <div className="w-1/2">
                <span>
                  {t("name")}: {formData.supfname} {formData.suplname}
                </span>
              </div>
              <div className="w-1/2">
                <span>
                  {t("pos")}: {formData.position}
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
                  {t("sgk")}: {formData.sgk}
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
                onClick={submitInsuranceForm}
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
