import { useState, useEffect, useRef } from "react";
import jwtDecode from "jwt-decode";
import { useTranslations } from "next-intl";
import AuthConnect from "@/auth";
import { DateInput } from "../../globalComponents/dateInput";
import { useReactToPrint } from "react-to-print";
import { PrintInsurance } from "../../globalComponents/printInsurance";
import Modal from "../../globalComponents/modal";
import ConfirmationSection from "./confimationSection";
import { useRouter } from "next/navigation";

export const InsForm = ({ user }) => {
  const t = useTranslations("sif");
  const router = useRouter();
  const [student, setStudent] = useState([]);
  const [idpassno, setID] = useState("");
  const [ayear, setAYear] = useState("");
  const [dept, setDept] = useState("");
  const [faculty, setFaculty] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [pob, setPOB] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [issueDate, setIssueDate] = useState(null);
  const [validity, setValidity] = useState("");
  const [sgk, setSGK] = useState("");
  const [company, setCompany] = useState(null);
  const [form, setForm] = useState(true);
  const [hasValidationError, setHasValidationError] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    stdfname: "",
    stdlname: "",
    stdemail: "",
    stdphoneno: "",
    stdaddress: "",
    idpassno: "",
    ayear: "",
    dept: "",
    faculty: "",
    fname: "",
    mname: "",
    pob: "",
    dob: null,
    doi: null,
    validity: "",
    startdate: "",
    duration: "",
    enddate: "",
    companyname: "",
    fields: "",
    website: "",
    compemail: "",
    compaddress: "",
    compphone: "",
    supfname: "",
    suplname: "",
    supemail: "",
    position: "",
    sgk: "",
  });

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
  const submitToggle = () => {
    setForm(!form);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      idpassno === "" ||
      ayear === "" ||
      dept === "" ||
      faculty === "" ||
      fname === "" ||
      mname === "" ||
      pob === "" ||
      birthDate === null ||
      issueDate === null ||
      validity === "" ||
      sgk === ""
    ) {
      setHasValidationError(true);
      return;
    }

    setFormData({
      stdid: student.stdid,
      stdfname: user.firstname,
      stdlname: user.lastname,
      stdemail: user.email,
      stdphoneno: student.phoneno,
      stdaddress: student.address,
      idpassno: idpassno,
      ayear: ayear,
      dept: dept,
      faculty: faculty,
      fname: fname,
      mname: mname,
      pob: pob,
      dob: birthDate.toISOString().slice(0, 10),
      doi: issueDate.toISOString().slice(0, 10),
      validity: validity,
      startdate: student.startdate,
      duration: student.duration,
      enddate: student.enddate,
      companyname: company.compname,
      fields: company.fields,
      website: company.website,
      compemail: company.email,
      compaddress: company.address,
      compphone: company.phoneno,
      supfname: company.firstname,
      suplname: company.lastname,
      supemail: company.supemail,
      position: company.position,
      sgk: sgk,
    });
    submitToggle();
  };

  const submitInsuranceForm = async (e) => {
    try {
      const response = await AuthConnect.post("/submitins", {
        idpassno: idpassno,
        ayear: ayear,
        dept: dept,
        faculty: faculty,
        fname: fname,
        mname: mname,
        pob: pob,
        birthDate: birthDate,
        issueDate: issueDate,
        validity: validity,
        sgk: sgk,
      });
      console.log(response); // Log the response
      if (response) {
        handlePrinting(); // Printing is called after a successful response
        router.push("/internDashboard");
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        alert("Application Error"); // You can add a generic error message here
      }
    }
  };
  if (!company || !student) {
    return null;
  }

  return (
    <main>
      <div className="my-1 flex justify-center items-center font-bold pt-5">
        <div className="invisible absolute">
          <PrintInsurance formData={formData} ref={componentRef} />
        </div>
        <div className=" my-2 border-x-[0.4rem] text-2xl border-yellow dark:text-white">
          <p className="px-2 ">{t("title")}</p>
        </div>
      </div>
      <section className="p-2 bg-white dark:bg-dark_1 flex items-center justify-center px-4 sm:px-12 md:px-20">
        {form ? (
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
                      {t("name")}: {user.firstname} {user.lastname}{" "}
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
                      {t("email")}: {user.email}{" "}
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
                      value={idpassno}
                      onChange={(e) => setID(e.target.value)}
                      className="input w-full  text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                  <div className=" max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder={t("ayear")}
                      value={ayear}
                      onChange={(e) => setAYear(e.target.value)}
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
                      value={dept}
                      onChange={(e) => setDept(e.target.value)}
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder={t("fac")}
                      value={faculty}
                      onChange={(e) => setFaculty(e.target.value)}
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
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder={t("mname")}
                      value={mname}
                      onChange={(e) => setMname(e.target.value)}
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
                      value={pob}
                      onChange={(e) => setPOB(e.target.value)}
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <DateInput
                      placeholder={t("dob")}
                      onDateChange={(date) => setBirthDate(date)}
                      value={birthDate}
                    />
                  </div>
                </div>

                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <DateInput
                      placeholder={t("doi")}
                      onDateChange={(date) => setIssueDate(date)}
                      value={issueDate}
                    />
                  </div>
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder={t("validity")}
                      value={validity}
                      onChange={(e) => setValidity(e.target.value)}
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
                    {t("sdate")}: {student.startdate.split("T")[0]}
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    {t("edate")}: {student.enddate.split("T")[0]}
                  </div>
                </div>

                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    {t("days")}: {student.duration}
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

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder={t("sgk")}
                      value={sgk}
                      onChange={(e) => setSGK(e.target.value)}
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-end text-white pt-10">
                <button
                  onClick={handleFormSubmit}
                  type="button"
                  className="bg-blue py-2 px-3.5 rounded "
                >
                  {t("submit")}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <ConfirmationSection
            submitToggle={submitToggle}
            formData={formData}
            submitInsuranceForm={submitInsuranceForm}
          />
        )}
      </section>
      {hasValidationError && (
        <Modal onClose={() => setHasValidationError(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("fillAllFields")}.</p>
            </div>
            <button
              onClick={() => setHasValidationError(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};
