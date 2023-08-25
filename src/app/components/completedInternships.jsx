"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CompletedInternshipSkeleton } from "@/app/skeletonLoader";
import {getCompletedInternship} from "../../../utils/dataFetching";

export const CompletedInternships = () => {
  const [tableContent, setTableContent] = useState([]);

  // Fetching table data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCompletedInternship();
      setTableContent(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <main className={" remove-highlight mt-6 w-full max-w-[70.75rem] mx-auto"}>
        {/* Section name */}
        <div className={"flex justify-center"}>
          <p className={"text-sm md:text-md xl:text-xl 2xl:text-2xl inline-flex text-center border-yellow border-x-[0.4rem] md:border-x-8 px-2"}>
            Completed Internships
          </p>
        </div>

        <table className={"text-xs sm:text-sm md:text-md xl:text-xl w-full mt-4 rounded-full z-0 table-fixed"}>
          <thead>
            <tr>
              <th className={"bg-blue text-white p-[1rem] border border-white"}>Company Name</th>
              <th className={"bg-blue text-white p-[1rem] border border-white"}>City</th>
              <th className={"bg-blue text-white p-[1rem] border border-white"}>Country</th>
              <th className={"bg-blue text-white p-[1rem] border border-white"}>Workfield</th>
              <th className={"bg-blue text-white p-[1rem] border border-white"}>Year</th>
            </tr>
          </thead>
          <tbody id={tableContent.length === 0 ? "" : "tbody"} className={"relative"}>
            {Array.isArray(tableContent) &&
              tableContent.slice(0, 4).map((table, index) => (
                <tr key={index}>
                  <td className={"text-center p-[0.875rem] truncate"}>{table.companyName}</td>
                  <td className={"text-center p-[0.875rem]"}>{table.city}</td>
                  <td className={"text-center p-[0.875rem]"}>{table.country}</td>
                  <td className={"text-center p-[0.875rem]"}>{table.workfield}</td>
                  <td className={"text-center p-[0.875rem]"}>{table.year}</td>
                </tr>
              ))}
            {tableContent.length === 0 &&
              [1, 2, 3, 4].map((n) => <CompletedInternshipSkeleton key={n} />)}
          </tbody>
        </table>
        <div className={"flex justify-center items-center m-4"}>
          {tableContent.length !== 0 ? (
            <Link href={"/completedInternship"} className={"text-sm md:text-md lg:text-lg  bg-blue text-white px-4 py-2 rounded"}>
              Show more
            </Link>
          ) : (
            <div className={"bg-background_shade_2 h-10 w-28 skeleton-loader px-4 py-2 rounded"}></div>
          )}
        </div>
      </main>
    </>
  );
};
