"use client";
import { useEffect, useState } from "react";
import { CompletedInternshipSkeleton } from "../../skeletonLoader";
import { useTranslations } from "next-intl";
import AuthConnect from "@/auth";
import { Empty } from "antd";

export const Table = () => {
  const t = useTranslations("Completed Internships");
  const [tableContent, setTableContent] = useState([]);
  const [inputData, setInputData] = useState("");

  // Fetching table data
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await AuthConnect.get("/getcompletedint");
        setTableContent(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchCompanies();
  }, []);

  const filteredData = tableContent.filter(
    (table) =>
      table.company.name.toLowerCase().includes(inputData.toLowerCase()) ||
      table.company.country.toLowerCase().includes(inputData.toLowerCase()) ||
      table.company.city.toLowerCase().includes(inputData.toLowerCase()) ||
      table.company.fields.toLowerCase().includes(inputData.toLowerCase())
  );

  return (
    <>
      <main className={" mt-0 w-full max-w-[70.75rem] mx-auto "}>
        {/* section name */}
        <div
          className={
            "flex flex-col md:flex-row w-full py-0.5 md:py-4 items-center  min-h-full dark:bg-dark_3  bg-white sticky top-[2.5rem] sm:top-[3rem] md:top-[3.5rem] lg:top-[4rem] z-40"
          }
        >
          <div className={"flex items-center  w-full"}>
            <p
              className={
                "mx-3 sticky top-[3rem] my-2 text-black dark:text-white text-sm md:text-md lg:text-lg xl:text-xl inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-8 px-2"
              }
            >
              {t("title")}
            </p>
          </div>

          <div
            className={
              "w-[100vh] my-1 md:my-0 mr-2 p-1 text-xs sm:text-sm md:text-md lg:text-lg  bg-background_shade_2 dark:text-white rounded justify-center text-center"
            }
          >
            <input
              autoFocus
              placeholder={"Search by Name, City, Country or Work Field"}
              className={
                "m-1 py-0.5 px-2 outline-0 bg-white  text-blue placeholder:text-blue w-[95%]"
              }
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
          </div>
        </div>

        <div className={"overflow-x-scroll"}>
          <table
            className={
              "text-start text-xs sm:text-sm md:text-md lg:text-lg w-full mt-4 rounded-full z-0 table-auto"
            }
          >
            <thead>
              <tr>
                <th
                  className={" bg-blue text-white p-[1rem] border border-white"}
                >
                  {t("Company Name")}
                </th>
                <th
                  className={"bg-blue text-white p-[1rem] border border-white"}
                >
                  {t("City")}
                </th>
                <th
                  className={"bg-blue text-white p-[1rem] border border-white"}
                >
                  {t("Country")}
                </th>
                <th
                  className={"bg-blue text-white p-[1rem] border border-white"}
                >
                  {t("Work Fields")}
                </th>
                <th
                  className={"bg-blue text-white p-[1rem] border border-white"}
                >
                  {t("Year")}
                </th>
              </tr>
            </thead>
            <tbody className={"relative "}>
              {filteredData.length > 0 ? (
                filteredData.map((table, index) => (
                  <tr
                    key={index}
                    className={
                      "odd:bg-yellow_2 even:text-black dark:odd:bg-background_shade_2 dark:even:text-white "
                    }
                  >
                    <td className={"text-center p-[0.875rem]"}>
                      {table.company.name}
                    </td>
                    <td className={"text-center p-[0.875rem]"}>
                      {table.company.city}
                    </td>
                    <td className={"text-center p-[0.875rem]"}>
                      {table.company.country}
                    </td>
                    <td className={"text-center p-[0.875rem]"}>
                      {table.company.fields}
                    </td>
                    <td className={"text-center p-[0.875rem]"}>
                      {table.year.split("-")[0]}
                    </td>
                  </tr>
                ))
              ) : filteredData.length === 0 && inputData.length > 0 ? (
                <td
                  colSpan="5"
                  className={" min-h-full text-center p-[0.875rem]"}
                >
                  <div className={"min-h-full"}>
                    <div className=" font-semibold text-lg text-center text-white">
                      <Empty />
                    </div>
                  </div>
                </td>
              ) : (
                [1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <CompletedInternshipSkeleton key={n} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};
