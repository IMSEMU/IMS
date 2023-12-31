"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CompletedInternshipSkeleton } from "../skeletonLoader";
import { AnimatedButton } from "../globalComponents/animatedButton";
import { useTranslations } from "next-intl";
import AuthConnect from "@/auth";

export const CompletedInternships = () => {
  const t = useTranslations("Completed Internships");
  const [tableContent, setTableContent] = useState([]);

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
  return (
    <>
      <main
        className={" remove-highlight mt-6 w-full max-w-[70.75rem] mx-auto"}
      >
        {/* Section name */}
        <div className={"flex text-black dark:text-white justify-center"}>
          <p
            className={
              "text-sm md:text-md xl:text-xl 2xl:text-2xl inline-flex text-center border-yellow border-x-[0.4rem] md:border-x-8 px-2"
            }
          >
            {t("title")}
          </p>
        </div>

        {/*tables*/}
        <table
          className={
            " p-2 text-xs sm:text-sm md:text-md xl:text-xl w-full mt-4 z-0 table-fixed"
          }
        >
          <thead>
            <tr>
              <th className={"bg-blue text-white p-[1rem] border border-white"}>
                {t("Company Name")}
              </th>
              <th className={"bg-blue text-white p-[1rem] border border-white"}>
                {t("City")}
              </th>
              <th className={"bg-blue text-white p-[1rem] border border-white"}>
                {t("Country")}
              </th>
              <th className={"bg-blue text-white p-[1rem] border border-white"}>
                {t("Work Fields")}
              </th>
              <th className={"bg-blue text-white p-[1rem] border border-white"}>
                {t("Year")}
              </th>
            </tr>
          </thead>

          <tbody
            id={tableContent.length === 0 ? "" : "tbody"}
            className={"relative"}
          >
            {Array.isArray(tableContent) &&
              tableContent.slice(0, 4).map((table, index) => (
                <tr
                  className={
                    "odd:bg-yellow_2 even:text-black dark:odd:bg-background_shade_2 dark:even:text-white"
                  }
                  key={index}
                >
                  <td className={"text-center p-[0.875rem] truncate"}>
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
              ))}
            {tableContent.length === 0 &&
              [1, 2, 3, 4].map((n) => <CompletedInternshipSkeleton key={n} />)}
          </tbody>
        </table>

        <div className={"flex justify-center items-center m-4"}>
          {tableContent.length !== 0 ? (
            <Link href={"/completedInternship"} className={""}>
              <AnimatedButton />
            </Link>
          ) : (
            <div
              className={
                "bg-background_shade_2 h-10 w-28 skeleton-loader px-4 py-2 rounded"
              }
            ></div>
          )}
        </div>
      </main>
    </>
  );
};
