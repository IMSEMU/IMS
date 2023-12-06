"use client";
import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";
import { Empty } from "antd";
import Modal from "./modal";
import { BiX } from "react-icons/bi";

export const StudentInformation = ({ students, usage }) => {
  const [openStudent, setOpenStudent] = useState(false);
  const [stdInfoSearch, setStdInfoSearch] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const StudentDetails = (student) => {
    setOpenStudent(true);
    setSelectedStudent(student);
  };

  let filteredStudents;

  if (usage === "dept") {
    filteredStudents = students.filter((std) => {
      const studentFullName = `${std.stduser.firstname} ${std.stduser.lastname}`;
      const studentMatch =
        studentFullName.toLowerCase().includes(searchInput.toLowerCase()) ||
        std.student.stdid.toString().includes(searchInput);

      const companyMatch = std.internships.some((internship) => {
        const companyName = internship.company.name || "";
        return companyName.toLowerCase().includes(searchInput.toLowerCase());
      });

      return studentMatch || companyMatch;
    });
  } else {
    filteredStudents = students.filter((std) => {
      const studentFullName = `${std.stduser.firstname} ${std.stduser.lastname}`;
      const studentMatch =
        studentFullName.toLowerCase().includes(searchInput.toLowerCase()) ||
        std.student.stdid.toString().includes(searchInput);

      return studentMatch;
    });
  }

  return (
    <div>
      <div className={"bg-background_shade h-[19rem] rounded"}>
        {/*section Name and button*/}
        <div className="flex justify-between capitalize p-3 items-center relative">
          <p
            className={
              " font-semibold  text-black dark:text-white text-sm md:text-md xl:text-lg  inline-flex text-center  border-yellow border-x-[0.3rem] px-2"
            }
          >
            {"Students Information"}
          </p>

          <button
            onClick={() => {
              setStdInfoSearch(true);
            }}
            className="flex gap-1 items-center px-2.5 py-1.5 rounded bg-blue text-white "
          >
            <HiMagnifyingGlass className="text-lg" />
          </button>

          {/* search section */}
          {stdInfoSearch && (
            <div className=" from-top rounded  w-full h-full absolute items-center flex justify-center right-0 top-0 bg-background_shade_2">
              <div className="flex flex-nowrap w-[90%] justify-center items-center bg-white rounded m-0">
                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder={
                    usage === "dept"
                      ? "search by id, name, or company name"
                      : "search by id or name"
                  }
                  id=""
                  className="outline-none w-full text-center my-0.5 pl-2 placeholder:text-xs"
                  type="text"
                />
                <button
                  onClick={() => {
                    setStdInfoSearch(false);
                    setSearchInput("");
                  }}
                  className="bg-red text-white px-2 py-1 rounded m-1 "
                >
                  <BiX className="text-lg" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/*section container*/}
        <div className={"h-[15rem] overflow-y-auto"}>
          <div className={"flex justify-center flex-wrap items-center m-4"}>
            {filteredStudents.length === 0 ? (
              <div className=" font-semibold text-lg text-center text-white">
                <Empty />
              </div>
            ) : (
              filteredStudents.map((std) => (
                <div
                  key={std.student.stdid}
                  className="cursor-pointer mx-1 py-2 my-1 bg-white drop-shadow-md border-background_shade_2 hover:bg-blue hover:text-white border text-black dark:bg-dark_4 dark:text-black w-full flex items-center justify-between rounded"
                  onClick={() => StudentDetails(std)}
                >
                  {/* profile image */}
                  <div className="w-[3rem] h-[3rem]">
                    <Image
                      height="480"
                      width="480"
                      src={std.student.photo}
                      priority
                      className="w-[3rem] h-[3rem] m-1 rounded-full"
                    />
                  </div>
                  {/* name and std number */}
                  <div className="pl-3 flex flex-wrap justify-start items-center gap-0 rounded w-full truncate">
                    <p className="font-semibold truncate w-full">
                      {std.stduser.firstname} {std.stduser.lastname}
                    </p>
                    <p className="text-sm w-fit">{std.student.stdid}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {selectedStudent && usage === "dept" && (
        <Modal onClose={() => setSelectedStudent(null)}>
          <div className="flex flex-col justify-center items-center">
            <div className="w-full h-full rounded flex flex-col items-center justify-center">
              <div className="w-full text-center">
                <Image
                  src={
                    selectedStudent.student.photo
                      ? selectedStudent.student.photo
                      : "/avatar.png"
                  }
                  width={2000}
                  height={2000}
                  alt="student picture"
                  priority
                  className="mx-auto mt-3 rounded-full w-[10rem] h-[10rem]"
                />
                <p className="font-semibold text-lg w-full px-2 mt-3">
                  {selectedStudent.stduser.firstname}{" "}
                  {selectedStudent.stduser.lastname}
                </p>
                <p className="font-medium text-md text-blue w-full px-2">
                  {selectedStudent.stduser.email}
                </p>
              </div>

              <div className="w-full mx-3 mt-3">
                <div className="w-full flex">
                  <div className="w-1/2 text-sm">
                    Phone Number: {selectedStudent.student.phoneno}
                  </div>
                  <div className="w-1/2 text-sm">
                    Address: {selectedStudent.student.address}
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-1/2 text-sm">
                    Faculty: {selectedStudent.student.faculty}
                  </div>
                  <div className="w-1/2 text-sm">
                    Department: {selectedStudent.student.dept}
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-1/2 text-sm">
                    Academic Year: {selectedStudent.student.academicYear}
                  </div>
                </div>
              </div>
              <div className="w-full justify-center mx-3 mt-3">
                <div className="text-start font-semibold my-3">Internships</div>
                {selectedStudent.internships.map((internship, index) => (
                  <div
                    key={index}
                    className="border border-background_shade_2 rounded mb-3 p-2"
                  >
                    <div className="text-start font-semibold">
                      Company Details
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/2 text-sm">
                        Name: {internship.company.name}
                      </div>

                      <div className="w-1/2 text-sm">
                        Address: {internship.company.address}
                      </div>
                    </div>

                    <div className="w-full flex">
                      <div className="w-1/2 text-sm">
                        City: {internship.company.city}
                      </div>

                      <div className="w-1/2 text-sm">
                        Country: {internship.company.country}
                      </div>
                    </div>

                    <div className="w-full flex">
                      <div className="w-1/2 text-sm">
                        Phone number: {internship.company.phoneno}
                      </div>

                      <div className="w-1/2 text-sm">
                        Email: {internship.company.email}
                      </div>
                    </div>

                    <div className="w-full flex">
                      <div className="w-1/2 text-sm">
                        Website: {internship.company.website}
                      </div>

                      <div className="w-1/2 text-sm">
                        Working Fields: {internship.company.fields}
                      </div>
                    </div>

                    <div className="w-full flex">
                      <div className="w-1/2 text-sm">
                        Fax: {internship.company.fax}
                      </div>
                    </div>

                    <div className="text-start font-semibold">
                      Supervisor Details
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/2 text-sm">
                        Name: {internship.compsup.firstname}{" "}
                        {internship.compsup.lastname}
                      </div>

                      <div className="w-1/2 text-sm">
                        Position: {internship.compsup.position}
                      </div>
                    </div>

                    <div className="w-full flex">
                      <div className=" text-sm">
                        Email: {internship.compsup.email}
                      </div>
                    </div>

                    <div className="text-start font-semibold">
                      Internship Details
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/2 text-sm">
                        Duration: {internship.internshipdtl.workingDays}
                      </div>

                      <div className="w-1/2 text-sm">
                        Grade: {internship.internshipdtl.overallresult}
                      </div>
                    </div>

                    <div className="w-full flex">
                      <div className="w-1/2 text-sm">
                        Start Date:{" "}
                        {internship.internshipdtl.startDate.split("T")[0]}
                      </div>

                      <div className="w-1/2 text-sm">
                        End Date:{" "}
                        {internship.internshipdtl.endDate.split("T")[0]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
      {selectedStudent && usage === "comp" && (
        <Modal onClose={() => setSelectedStudent(null)}>
          <div className="flex flex-col justify-center items-center">
            <div className="w-full h-full rounded flex flex-col items-center justify-center">
              <div className="w-full text-center">
                <Image
                  src={
                    selectedStudent.student.photo
                      ? selectedStudent.student.photo
                      : "/avatar.png"
                  }
                  width={2000}
                  height={2000}
                  alt="student picture"
                  priority
                  className="mx-auto mt-3 rounded-full w-[10rem] h-[10rem]"
                />
                <p className="font-semibold text-lg w-full px-2 mt-3">
                  {selectedStudent.stduser.firstname}{" "}
                  {selectedStudent.stduser.lastname}
                </p>
                <p className="font-medium text-md text-blue w-full px-2">
                  {selectedStudent.stduser.email}
                </p>
              </div>

              <div className="w-full mx-3 mt-3">
                <div className="w-full flex">
                  <div className="w-1/2 text-sm">
                    Phone Number: {selectedStudent.student.phoneno}
                  </div>
                  <div className="w-1/2 text-sm">
                    Address: {selectedStudent.student.address}
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-1/2 text-sm">
                    Faculty: {selectedStudent.student.faculty}
                  </div>
                  <div className="w-1/2 text-sm">
                    Department: {selectedStudent.student.dept}
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-1/2 text-sm">
                    Academic Year: {selectedStudent.student.academicYear}
                  </div>
                </div>
              </div>
              <div className="w-full justify-center mx-3 mt-3">
                <div className="text-start font-semibold my-3">Internships</div>
                {selectedStudent.internships.map((internship, index) => (
                  <div
                    key={index}
                    className="border border-background_shade_2 rounded mb-3 p-2"
                  >
                    <div className="text-start font-semibold">
                      Coordinator Details
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/2 text-sm">
                        Name: {internship.deptsup.firstname}{" "}
                        {internship.deptsup.lastname}
                      </div>

                      <div className="w-1/2 text-sm">
                        Email: {internship.deptsup.email}
                      </div>
                    </div>

                    <div className="text-start font-semibold">
                      Internship Details
                    </div>
                    <div className="w-full flex">
                      <div className="w-1/2 text-sm">
                        Duration: {internship.internshipdtl.workingDays}
                      </div>

                      <div className="w-1/2 text-sm">
                        Grade: {internship.internshipdtl.overallresult}
                      </div>
                    </div>

                    <div className="w-full flex">
                      <div className="w-1/2 text-sm">
                        Start Date:{" "}
                        {internship.internshipdtl.startDate
                          ? internship.internshipdtl.startDate.split("T")[0]
                          : ""}
                      </div>

                      <div className="w-1/2 text-sm">
                        End Date:{" "}
                        {internship.internshipdtl.endDate
                          ? internship.internshipdtl.endDate.split("T")[0]
                          : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
