"use client";

import { InsForm } from "./insForm";
import AuthConnect from "@/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TopNav } from "../../internDashboard/components/topNav";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { MobileNav } from "../../globalComponents/mobileNav";

export const InsuranceForm = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [std, setStd] = useState([]);
  const [student, setStudent] = useState([]);
  const pathname = usePathname();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await AuthConnect.get("/token");
        console.log(response);
        setToken(response);
      } catch (error) {
        console.error("User not authenticated", error);
        router.push("/login");
      }
    };

    getToken();
  }, []);
  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await AuthConnect.get("/getstudent");
        setStd(response.data.user[0]);
        setStudent(response.data.student[0]);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    getStudent();
  }, []);
  useEffect(() => {
    const getCompanies = async () => {
      try {
        const response = await AuthConnect.get("/getcomp");
        setCompanies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    // Fetch initial logbook entries when the page loads
    getCompanies();
  }, []);
  if (!token) {
    return null; // Prevent rendering the dashboard until token is fetched
  }

  return (
    <main className="bg-white dark:bg-dark_1 h-screen">
      <div className={"flex flex-nowrap"}>
        <PcSideNav image={student.photo} />
        <div className={"h-full w-full"}>
          <TopNav image={student.photo} />
          <InsForm
            firstname={std.firstname}
            lastname={std.lastname}
            stdid={student.stdid}
            email={std.email}
            companies={companies}
          />
        </div>
        <MobileNav />
      </div>
    </main>
  );
};
