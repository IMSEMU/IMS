"use client";
import { BiPlus } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Empty } from "antd";
import AuthConnect from "@/auth";
import { useTranslations } from "next-intl";
import Loading from "../../globalComponents/loading";
import Modal from "../../globalComponents/modal";
import Image from "next/image";

export const Dashboard = () => {
  const t = useTranslations("adminDashboard");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [adminAdded, setAdminAdded] = useState(false);
  const [deptSupAdded, setDeptSupAdded] = useState(false);
  const [students, setStudents] = useState([]);
  const [deptsups, setDeptSups] = useState([]);
  const [assignStudent, setAssignStudent] = useState(null);
  const [deptsup, setDeptSup] = useState("");
  const [deptsupname, setDeptSupname] = useState("");
  const [isDeptDropdownOpen, setIsDeptDropdownOpen] = useState(false);
  const [assigned, setAssigned] = useState(false);
  const [loading, setLoading] = useState(false);
  // get students id
  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await AuthConnect.get("/getstdtoassign");
        console.log(response.data);
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    getStudents();
  }, []);
  // get deptSup
  useEffect(() => {
    const getDeptSups = async () => {
      try {
        const response = await AuthConnect.get("/getdeptsup");
        console.log(response.data);
        setDeptSups(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    getDeptSups();
  }, []);

  // add new admin
  const AddNewAdmin = async () => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/addadmin", {
        firstname: firstname,
        lastname: lastname,
        email: email,
      });
      if (response) {
        setLoading(false);
        setAdminAdded(true);
      }
    } catch (error) {
      if (error.response) {
        setLoading(false);
        setMsg(error.response.data.msg);
      }
      alert("Application Error");
    }
  };

  // add new departmemt supervisor
  const AddNewDeptSup = async () => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/adddeptsup", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        dept: dept,
      });
      if (response) {
        setLoading(false);
        setDeptSupAdded(true);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error");
    }
  };

  // assign student

  const AssignStudent = async () => {
    setLoading(true);
    try {
      const response = await AuthConnect.post("/assigndept", {
        stdid: assignStudent.student.stdid,
        deptsupid: deptsup,
      });
      if (response) {
        setLoading(false);
        setAssigned(true);
        setAssignStudent(null);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
      alert("Application Error");
    }
  };

  // toogle dept dropdown
  const toggleDeptDropdown = () => {
    setIsDeptDropdownOpen(!isDeptDropdownOpen);
  };
  // select dept sup function
  const handleSelectDeptSup = (deptsup, deptsupid) => {
    setDeptSupname(deptsup);
    setDeptSup(deptsupid);
    setIsDeptDropdownOpen(false);
  };
  // handle department change
  const handleDeptChange = (event) => {
    setDeptSupname(event.target.value);
    setIsDeptDropdownOpen(true);
  };

  if (loading) {
    return <Loading />;
  }

  //
  return (
    <main className="w-full h-fit">
      <div className="m-4 mb-20 md:mb-4">
        <div
          className={
            "text-md lg:text-xl xl:text-2xl py-1 md:py-2 w-full max-w-[1300px] xl:mx-auto mx-2 font-bold"
          }
        >
          <p>
            {t("welcome")} {user.firstname}
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="col-span-1">
            <div className="rounded row-span-1 h-fit">
              <p
                className={
                  " font-semibold m-3 text-black dark:text-white  text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
                }
              >
                {t("AddSupervisor")}
              </p>
              {/*               forms */}
              <div className="flex gap-3 justify-center py-2 items-center m-3 rounded drop-shadow-md">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {/* Department input section */}
                  <div className="w-[90%]">
                    <input
                      placeholder={t("FirstName")}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div className="w-[90%]">
                    <input
                      placeholder={t("LastName")}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="w-[90%]">
                    <input
                      placeholder={t("Email")}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-[90%]">
                    <input
                      placeholder={t("Department")}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setDept(e.target.value)}
                    />
                  </div>
                  <div className=" flex justify-end mx-4 w-full">
                    <button
                      className={
                        "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                      }
                      onClick={AddNewDeptSup}
                    >
                      <BiPlus className={"text-white text-xl"} />
                      <div>{t("add")}</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded row-span-1 h-fit">
              <p
                className={
                  " font-semibold m-3 text-black dark:text-white  text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
                }
              >
                {t("AddNewAdmin")}
              </p>
              <div className="flex gap-3 justify-center py-2 items-center m-3 rounded drop-shadow-md">
                <div className="flex flex-wrap gap-3 justify-center items-center">
                  {/* Department input section */}
                  <div className="w-[90%]">
                    <input
                      placeholder={t("FirstName")}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div className="w-[90%]">
                    <input
                      placeholder={t("LastName")}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="w-[90%]">
                    <input
                      placeholder={t("Email")}
                      type="text"
                      id=""
                      className="rounded p-3 outline-none w-full border border-dark_4 dark:border-none dark:bg-background_shade_2 text-dark_2 placeholder:text-dark_2"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className=" flex justify-end mx-4 w-full">
                    <button
                      className={
                        "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                      }
                      onClick={AddNewAdmin}
                    >
                      <BiPlus className={"text-white text-xl"} />
                      <div>{t("add")}</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-background_shade rounded col-span-1 h-[39rem]">
            <p
              className={
                " font-semibold m-3 text-black dark:text-white  text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
              }
            >
              Assign Students to Department Supervisors
            </p>
            <div className={"h-[37rem] overflow-y-auto"}>
              <div
                className={
                  "mx-auto max-w-[90%] my-2 rounded flex justify-center flex-wrap"
                }
              >
                {students.length === 0 ? (
                  <div className=" font-semibold text-lg text-center text-white">
                    <Empty />
                  </div>
                ) : (
                  students.map((student) => (
                    <div
                      key={student.internship.internshipid}
                      className="cursor-pointer mx-1 py-2 my-1 bg-white drop-shadow-md border-background_shade_2 hover:bg-blue hover:text-white border text-black dark:bg-dark_4 dark:text-black w-full flex items-center rounded"
                      onClick={() => setAssignStudent(student)}
                    >
                      <div className="ml-2  flex flex-wrap gap-1 w-fit">
                        <div className="w-[3rem] h-[3rem]">
                          <Image
                            height="480"
                            width="480"
                            src={
                              student.student.photo
                                ? student.student.photo
                                : "/avatar.png"
                            }
                            priority
                            className="w-[3rem] h-[3rem] m-1 rounded-full"
                          />
                        </div>
                      </div>

                      <div className={" justify-start items-center gap-1 pl-3"}>
                        <p className={"font-semibold justify-start"}>
                          {student.stduser.firstname} {student.stduser.lastname}
                        </p>

                        <span className={"text-sm lg:text-md"}>
                          {student.stduser.email}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {adminAdded && (
        <Modal onClose={() => setAdminAdded(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("NewAdminAdded")}</p>
            </div>
            <button
              onClick={() => setAdminAdded(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
      {deptSupAdded && (
        <Modal onClose={() => setDeptSupAdded(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("NewSupervisorAdded")}</p>
            </div>
            <button
              onClick={() => setDeptSupAdded(false)}
              className="bg-blue text-white px-3 py-1 mt-2"
            >
              {t("Close")}
            </button>
          </div>
        </Modal>
      )}
      {/*       conditional rendering */}
      {assignStudent && (
        <Modal onClose={() => setAssignStudent(null)}>
          <div className="flex gap-3 justify-center py-2 items-center">
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <div className="w-[90%] justify-center text-center">
                {assignStudent.student.photo && (
                  <Image
                    src={assignStudent.student.photo}
                    width={1000}
                    height={1000}
                    alt=""
                    className=" mx-auto h-[10rem] w-[10rem] justify-center text-center"
                  />
                )}
              </div>
              {/* Department input section */}
              <div className="w-[44%]">
                <p className="rounded p-3 outline-none w-full  dark:border-none dark:bg-background_shade_2 text-dark_2">
                  {t("Name")}: {assignStudent.stduser.firstname}{" "}
                  {assignStudent.stduser.lastname}
                </p>
              </div>
              <div className="w-[44%]">
                <p className="rounded p-3 outline-none w-full  dark:border-none dark:bg-background_shade_2 text-dark_2">
                  {t("E-posta")}: {assignStudent.stduser.email}
                </p>
              </div>
              <div className="w-[90%]">
                <p className="rounded p-3 outline-none w-full  dark:border-none dark:bg-background_shade_2 text-dark_2">
                  {t("Faculty")}: {assignStudent.student.faculty}
                </p>
              </div>
              <div className="w-[90%]">
                <p className="rounded p-3 outline-none w-full  dark:border-none dark:bg-background_shade_2 text-dark_2">
                  {t("Department")}: {assignStudent.student.dept}
                </p>
              </div>
              <div className="w-[44%]">
                <p className="rounded p-3 outline-none w-full  dark:border-none dark:bg-background_shade_2 text-dark_2">
                  {t("AssignSupervisor")}:
                </p>
              </div>
              <div className="relative w-[44%]">
                <div className=" flex border border-dark_4 dark:border-none dark:bg-background_shade_2 rounded">
                  <input
                    placeholder={t("DepartmentSupervisor")}
                    type="text"
                    value={deptsupname}
                    className="rounded p-3 outline-none w-10/12 text-dark_2 placeholder:text-dark_2"
                    onChange={handleDeptChange}
                  />
                  <button
                    type="button"
                    onClick={toggleDeptDropdown}
                    className={"mt-1 text-yellow"}
                  >
                    ▼
                  </button>
                </div>
                {isDeptDropdownOpen && (
                  <div className="absolute z-10 w-[15rem] mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul className="py-1">
                      {deptsups
                        .filter(
                          (deptsupp) =>
                            deptsupp.firstname
                              .toLowerCase()
                              .includes(deptsup.toLowerCase()) ||
                            deptsupp.lastname
                              .toLowerCase()
                              .includes(deptsup.toLowerCase()) ||
                            deptsupp.department
                              .toLowerCase()
                              .includes(deptsup.toLowerCase())
                        )
                        .map((deptsupp) => (
                          <li
                            key={deptsupp.supid} // Assuming value is unique
                            className="px-4 py-2 hover:bg-black/25 cursor-pointer"
                            onClick={() => {
                              const name =
                                deptsupp.firstname + " " + deptsupp.lastname;
                              handleSelectDeptSup(name, deptsupp.supid);
                            }}
                          >
                            {deptsupp.firstname} {deptsupp.lastname}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className=" flex justify-end mx-4 w-full">
                <button
                  className={
                    "px-2 py-1 bg-blue text-white rounded inline-flex items-center justify-center gap-1"
                  }
                  onClick={AssignStudent}
                >
                  <div>{t("Save")}</div>
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {assigned && (
        <Modal onClose={() => setAssigned(false)}>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">
              <p>{t("SupervisorAssigned")}</p>
            </div>
            <button
              onClick={() => setAssigned(false)}
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
