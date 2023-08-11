"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export const CompletedInternships = () => {
  const url = "http://localhost:8000/completedInternships";
  const [tableContent, setTableContent] = useState([]);

  // Fetching table data
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setTableContent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  }, []);

  return (
    <>
      <main className={"mt-6 w-full max-w-[70.75rem] mx-auto"}>
        {/* section name */}
        <div className={"flex justify-center"}>
          <p className={"text-2xl inline-flex text-center border-yellow border-x-8 px-2"}>
            Completed Internships
          </p>
        </div>

        <table className={"w-full mt-4 rounded"}>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>City</th>
              <th>Country</th>
              <th>Workfield</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {tableContent.slice(0, 5).map((table, index) => (
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
  );
};
