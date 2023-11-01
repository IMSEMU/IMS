import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useTranslations } from "next-intl";
import AuthConnect from "@/auth";
import { DateInput } from "../../globalComponents/dateInput";

export const InsForm = () => {
  const t = useTranslations("iaf");
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
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    };

    // Fetch initial logbook entries when the page loads
    getCompany();
  }, []);
  if (!company) {
    return null;
  }

  return (
    <main>
      <div className="my-1 flex justify-center items-center font-bold pt-5">
        <div className=" my-2 border-x-[0.4rem] text-2xl border-yellow dark:text-white">
          <p className="px-2 ">Social Insurance Form</p>
        </div>
      </div>
      <section className="p-2 bg-white dark:bg-dark_1 flex items-center justify-center px-4 sm:px-12 md:px-20">
        <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 w-[40rem] lg:w-[50rem] h-fit pb-10">
          <div className=" w-full">
            <div className=" justify-start">
              <p
                className={
                  " font-bold my-6 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                }
              >
                Student Registration information
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
              </div>
              <div className="mx-4 lg:mx-16">
                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="ID/Passport Number*"
                      className="input w-full  text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                  <div className=" max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="Academic year"
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
                      placeholder="Department/Program"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="Faculty/School"
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
                      placeholder="Father's name*"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="Mother's name*"
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
                      placeholder="Place of birth*"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="ID/Passport Number*"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <DateInput
                      placeholder="Date of Birth"
                      onDateChange={(date) => setBirthDate(date)}
                    />
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <DateInput
                      placeholder="Date of Issue"
                      onDateChange={(date) => setIssueDate(date)}
                    />
                  </div>
                </div>
                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="The period of validity*"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <p
                className={
                  "  font-bold mt-8 my-2 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                }
              >
                Information about the Place of the internship
              </p>
              <div className="mx-4 lg:mx-16 space-y-2 ">
                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <DateInput
                      placeholder="Start Date of Internship"
                      onDateChange={(date) => setStartDate(date)}
                    />
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <DateInput
                      placeholder="End Date"
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
                      placeholder="Duration(Working days)"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <span>Company Name: {company.compname}</span>
                  </div>
                </div>
                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <span>Working fields: {company.fields}</span>
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <span>Website: {company.website}</span>
                  </div>
                </div>
                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <span>Phone Number: {company.phoneno}</span>
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <span>Email: {company.email}</span>
                  </div>
                </div>
                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div>
                    <span>Company Address: {company.address}</span>
                  </div>
                </div>

                <div className="flex justify-start  ">
                  <p
                    className={
                      "   font-bold my-6 text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                    }
                  >
                    Employer or authority
                  </p>
                </div>

                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <span>
                      {t("name")}: {company.firstname} {company.lastname}{" "}
                    </span>
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <span>Position: {company.position}</span>
                  </div>
                </div>
                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <span>Email: {company.supemail}</span>
                  </div>

                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <input
                      type={"text"}
                      name=""
                      id=""
                      placeholder="Employer S.G.K number*"
                      className="input w-full text-dark_2 dark:text-yellow placeholder:text-dark_2 dark:placeholder:text-yellow bg-white dark:bg-dark_2 px-4 py-2.5 border-b-dark_2 dark:border-b-yellow  border-x-0 border-t-0 mt-1 border-2  focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mt-2 relative  md:mt-1  lg:flex  lg:space-x-5">
                  <div className="max-lg:md:mx-12 lg:w-1/2">
                    <DateInput
                      placeholder="Date"
                      onDateChange={(date) => setSignDate(date)}
                    />
                  </div>
                </div>

                <div className="w-full flex items-center justify-end text-white pt-10">
                  <button
                    type="submit"
                    className="bg-blue py-2 px-3.5 rounded "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
