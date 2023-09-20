"use client"
import {useEffect, useState} from "react";
import Link from "next/link";
import {CompletedInternshipSkeleton} from "@/app/skeletonLoader";
import {getCompletedInternship} from "../../../../utils/dataFetching";
import {FaHome} from "react-icons/fa";

export const Table = () => {

  const [tableContent, setTableContent] = useState([]);
  const [inputData, setInputData] = useState("");
  const [filteredContent, setFilteredContent] = useState([]);


  // Fetching table data
useEffect(() => {
  const fetchData = async () => {
    const data = await getCompletedInternship();
    setTableContent(data);
  }

  fetchData();

},[]);

  useEffect(() => {
    const filteredData = tableContent.filter((table) =>
      table.companyName.toLowerCase().includes(inputData.toLowerCase()) ||
      table.country.toLowerCase().includes(inputData.toLowerCase()) ||
      table.city.toLowerCase().includes(inputData.toLowerCase()) ||
      table.workfield.toLowerCase().includes(inputData.toLowerCase())
    );
    setFilteredContent(filteredData);
  }, [inputData, tableContent]);

  return(
      <>

          <main className={" mt-0 w-full max-w-[70.75rem] mx-auto "}>

            {/* section name */}
            <div className={"flex flex-col md:flex-row w-full py-0.5 md:py-4 items-center  min-h-full dark:bg-dark_3  bg-white sticky top-[2.5rem] sm:top-[3rem] md:top-[3.5rem] lg:top-[4rem] z-40"}>
              <div className={"flex items-center  w-full"}>


                <p className={"mx-3 sticky top-[3rem] my-2 text-black dark:text-white text-sm md:text-md lg:text-lg xl:text-xl inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-8 px-2"}>
                  Completed Internships
                </p>

              </div>

              <div className={"my-1 md:my-0 mr-2 text-xs sm:text-sm md:text-md lg:text-lg  bg-background_shade_2 dark:text-white rounded"}>
                <input
                    autoFocus
                    placeholder={"Name , City , Country , Workfield"}
                    className={"m-1 py-0.5 outline-0 bg-white  text-blue placeholder:text-blue"}
                    value={inputData}
                    onChange={(e)=>{setInputData(e.target.value)}}
                />
              </div>

            </div>

            <div className={ "overflow-x-scroll"}>
              <table className={"text-start text-xs sm:text-sm md:text-md lg:text-lg w-full mt-4 rounded-full z-0 table-auto"}>
                <thead>
                  <tr>
                    <th className={" bg-blue text-white p-[1rem] border border-white"}>Company Name</th>
                    <th className={"bg-blue text-white p-[1rem] border border-white"}>City</th>
                    <th className={"bg-blue text-white p-[1rem] border border-white"}>Country</th>
                    <th className={"bg-blue text-white p-[1rem] border border-white"}>Workfield</th>
                    <th className={"bg-blue text-white p-[1rem] border border-white"}>Year</th>
                  </tr>
                </thead>
                <tbody className={"relative "}>
                {Array.isArray(filteredContent) && filteredContent.length > 0 ?
                  (filteredContent.map((table, index) => (
                      <tr key={index} className={'odd:bg-yellow_2 even:text-black dark:odd:bg-background_shade_2 dark:even:text-white '}>
                        <td className={"text-center p-[0.875rem]"}>{table.companyName}</td>
                        <td className={"text-center p-[0.875rem]"}>{table.city}</td>
                        <td className={"text-center p-[0.875rem]"}>{table.country}</td>
                        <td className={"text-center p-[0.875rem]"}>{table.workfield}</td>
                        <td className={"text-center p-[0.875rem]"}>{table.year}</td>
                      </tr>
                    ))
                  ) :
                    (filteredContent.length === 0 && inputData.length > 0 ?
                        <td colSpan="5"  className={" min-h-full text-center p-[0.875rem]"}><div className={'min-h-full'}>No such word</div></td> :
                        [1, 2, 3, 4, 5, 6, 7, 8].map((n) => <CompletedInternshipSkeleton key={n} />))
                }
                </tbody>

              </table>
            </div>
          </main>

      </>
  );
};

export async function getServerSideProps() {
  const completedInternships = await getCompletedInternship();
  return { props: { completedInternships } };
}