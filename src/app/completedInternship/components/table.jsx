"use client"
import {useEffect, useState} from "react";
import axios from "axios";
import {HiOutlineArrowNarrowLeft} from "react-icons/hi";
import {Loading} from "@/app/components/loading";
import Link from "next/link";

export const Table = () => {

  const url = "http://localhost:8000/completedInternships";
  const [tableContent, setTableContent] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching table data
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setTableContent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  }, []);

  return(
      <>

          <main className={" mt-0 w-full max-w-[70.75rem] mx-auto"}>

            {/* section name */}
            <div className={"flex w-full h-fit py-6 bg-white sticky top-[4.5rem] z-40"}>
              <div className={"flex items-center  w-full "}>

                {/*back to home button*/}
                <Link href={"/"} title={"Home page"} className={"cursor-pointer text-4xl mr-4 text-blue"}>
                  <HiOutlineArrowNarrowLeft/>
                </Link>

                <p className={"sticky top-[3rem] my-2 text-2xl inline-flex text-center border-yellow border-x-8 px-2"}>
                  Completed Internships
                </p>

              </div>
            </div>

            <table className={"w-full  rounded"}>
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>City</th>
                  <th>Country</th>
                  <th>Workfield</th>
                  <th>Year</th>
                </tr>
              </thead>

                <tbody className={"relative"}>
                  {
                    tableContent.map((table, index) => (
                    <tr key={index}>
                      <td>{table.companyName}</td>
                      <td>{table.city}</td>
                      <td>{table.country}</td>
                      <td>{table.workfield}</td>
                      <td>{table.year}</td>
                    </tr>
                  ))}
                </tbody>

            </table>
          </main>

      </>
  )
}