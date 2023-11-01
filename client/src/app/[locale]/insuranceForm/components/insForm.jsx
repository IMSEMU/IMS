import { useState, useEffect, useRef } from "react";
import jwtDecode from "jwt-decode";
import { useTranslations } from "next-intl";
import AuthConnect from "@/auth";
import { DateInput } from "../../globalComponents/dateInput";
import { useReactToPrint } from "react-to-print";
import { PrintInsurance } from "../../globalComponents/printInsurance";

export const InsForm = () => {
  const t = useTranslations("sif");
  const [student, setStudent] = useState([]);
  const [idpassno, setID] = useState("");
  const [dept, setDept] = useState("");
  const [faculty, setFaculty] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [signDate, setSignDate] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [issueDate, setIssueDate] = useState(null);
  const [company, setCompany] = useState(null);

  const token = localStorage.getItem("accessToken");
  let decodedToken, firstname, lastname, email;
  if (token) {
    decodedToken = jwtDecode(token);
    firstname = decodedToken.firstname;
    lastname = decodedToken.lastname;
    email = decodedToken.email;
  }
  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await AuthConnect.get("/getstudent");
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    getStudent();
  }, []);
  useEffect(() => {
    const getCompany = async () => {
      try {
        const response = await AuthConnect.get("/getcomp");
        setCompany(response.data);
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    };
    getCompany();
  }, []);

  const componentRef = useRef();
  const handlePrinting = useReactToPrint({
    content: () => componentRef.current,
  });
  if (!company) {
    return null;
  }

  return (
    <main>
      <div className="my-1 flex justify-center items-center font-bold pt-5">
        <div className="invisible absolute">
          <PrintInsurance props={t("title")} ref={componentRef} />
        </div>
        <div className=" my-2 border-x-[0.4rem] text-2xl border-yellow dark:text-white">
          <p className="px-2 ">{t("title")}</p>
        </div>
      </div>
      <section className="p-2 bg-white dark:bg-dark_1 flex items-center justify-center px-4 sm:px-12 md:px-20">
        <div className="bg-white dark:bg-dark_2 p-3.5  rounded shadow-xl dark:border-none border border-background_shade_2 w-[40rem] lg:w-[50rem] h-fit pb-10">
          <div className=" justify-start">
            <p
              className={
                " font-bold my-6 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
              }
            >
              {t("stdinfo")}
            </p>
          </div>
          <form>
            <div className="mx-4 lg:mx-16">
              <div className="   mt-2 relative  md:mt-1  lg:flex  lg:space-x-5   ">
                <div className=" max-lg:md:mx-12 lg:w-1/2">
                  <span>
                    {t("name")}: {firstname} {lastname}{" "}
                  </span>
                </div>
                <div className=" max-lg:md:mx-12 lg:w-1/2">
                  <span>
                    {t("stdid")}: {student.stdid}{" "}
                  </span>
                </div>
              </div>
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <span>
                    {t("email")}: {email}{" "}
                  </span>
                </div>

                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <span>
                    {t("phone")}: {student.phoneno}{" "}
                  </span>
                </div>
              </div>
              <div className="mt-2 md:mt-4 relative flex space-x-5">
                <span>
                  {t("address")}: {student.address}
                </span>
              </div>
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("idpass")}
                    className="input w-full  text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                  />
                </div>
                <div className=" max-lg:md:mx-12 lg:w-1/2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("ayear")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("dept")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                  />
                </div>

                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("fac")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("fname")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                  />
                </div>

                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("mname")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("pob")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                  />
                </div>

                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <DateInput
                    placeholder={t("dob")}
                    onDateChange={(date) => setBirthDate(date)}
                  />
                </div>
              </div>

              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <DateInput
                    placeholder={t("doi")}
                    onDateChange={(date) => setIssueDate(date)}
                  />
                </div>
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("validity")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5"></div>
            </div>
            <p
              className={
                "  font-bold mt-8 my-2 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
              }
            >
              {t("subtitle")}
            </p>
            <div className="mx-4 lg:mx-16 space-y-2 ">
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <DateInput
                    placeholder={t("sdate")}
                    onDateChange={(date) => setStartDate(date)}
                  />
                </div>

                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <DateInput
                    placeholder={t("edate")}
                    onDateChange={(date) => setEndDate(date)}
                  />
                </div>
              </div>

              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("days")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                  />
                </div>

                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <span>
                    {t("compname")}: {company.compname}
                  </span>
                </div>
              </div>
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <span>
                    {t("work")}: {company.fields}
                  </span>
                </div>

                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <span>
                    {t("website")}: {company.website}
                  </span>
                </div>
              </div>
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <span>
                    {t("phone")}: {company.phoneno}
                  </span>
                </div>

                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <span>
                    {t("orgemail")}: {company.email}
                  </span>
                </div>
              </div>
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div>
                  <span>
                    {t("address")}: {company.address}
                  </span>
                </div>
              </div>
            </div>
            <p
              className={
                "   font-bold my-6 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
              }
            >
              {t("sub")}
            </p>
            <div className="mx-4 lg:mx-16 space-y-2 ">
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <span>
                    {t("name")}: {company.firstname} {company.lastname}{" "}
                  </span>
                </div>

                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <span>
                    {t("pos")}: {company.position}
                  </span>
                </div>
              </div>
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <span>
                    {t("email")}: {company.supemail}
                  </span>
                </div>
              </div>
              <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <input
                    type={"text"}
                    name=""
                    id=""
                    placeholder={t("sgk")}
                    className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                  />
                </div>
                <div className="max-lg:md:mx-12 lg:w-1/2">
                  <DateInput
                    placeholder={t("date")}
                    onDateChange={(date) => setSignDate(date)}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-end text-white pt-10">
              <button
                onClick={() => handlePrinting()}
                type="button"
                className="bg-blue py-2 px-3.5 rounded "
              >
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
