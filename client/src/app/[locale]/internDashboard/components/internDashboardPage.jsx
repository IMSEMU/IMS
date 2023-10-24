"use client";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { MobileNav } from "../../globalComponents/mobileNav";
import { TopNav } from "../../internDashboard/components/topNav";
import { Dashboard } from "../../internDashboard/components/dashboard";
import AuthConnect from "@/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const InternDashboardPage = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [student, setStudent] = useState([]);
  const [std, setStd] = useState([]);
  const pathname = usePathname();

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
        setStudent(response.data.student[0]);
        setStd(response.data.user[0]);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    getStudent();
  }, []);
  if (!token) {
    return null; // Prevent rendering the dashboard until token is fetched
  }
  return (
    <main className={"p-0 m-0 bg-white dark:bg-dark_2"}>
      {/*Sidenav and body*/}
      <div className={"flex flex-nowrap"}>
        <PcSideNav
          page={pathname}
          firstname={std.firstname}
          lastname={std.lastname}
        />
        <div className={"h-full w-full"}>
          <TopNav
            firstname={std.firstname}
            lastname={std.lastname}
            email={std.email}
          />
          <Dashboard
            firstname={std.firstname}
            filled_iaf={student.filled_iaf}
            isConfirmed={student.isConfirmed}
            filledSocial={student.filledSocial}
            logComplete={student.logComplete}
          />
        </div>
        <MobileNav />
      </div>
    </main>
  );
};
