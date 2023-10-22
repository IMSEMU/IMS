"use client";
import { AddLogData } from "../../logbook/components/addLogData";
import { LogbookDisplay } from "./logbookDisplay";
import AuthConnect from "@/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNav } from "../../globalComponents/mobileNav";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { TopNav } from "../../internDashboard/components/topNav";
import { usePathname } from "next/navigation";

export const LogbookPage = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [std, setStd] = useState([]);
  const [logbookEntries, setLogbookEntries] = useState([]);
  const pathname = usePathname();
  const [hasNewLogEntry, setHasNewLogEntry] = useState(false);

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
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    getStudent();
  }, []);

  useEffect(() => {
    const fetchLogbookEntries = async () => {
      try {
        const response = await AuthConnect.get("/viewlog");
        setLogbookEntries(response.data);
      } catch (error) {
        console.error("Error fetching logbook entries:", error);
      }
    };

    // Fetch initial logbook entries when the page loads
    fetchLogbookEntries();
  }, []);

  // Update logbook entries when a new entry is added
  useEffect(() => {
    if (hasNewLogEntry) {
      const fetchLogbookEntries = async () => {
        try {
          const response = await AuthConnect.get("/viewlog");
          setLogbookEntries(response.data);
        } catch (error) {
          console.error("Error fetching logbook entries:", error);
        }
      };

      fetchLogbookEntries();
      // Reset the hasNewLogEntry flag
      setHasNewLogEntry(false);
    }
  }, [hasNewLogEntry]);

  const updateLogbookEntries = (newLogEntry) => {
    setLogbookEntries((prevEntries) => [...prevEntries, newLogEntry]);
  };

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
          <section className=" bg-white dark:bg-dark_1 flex items-center justify-center w-full pt-5">
            <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 w-[25rem] lg:w-[50rem] h-[32rem]">
              {/* LOgbook Add section */}
              <div className=" lg:w-1/2">
                <div className=" flex items-center h-full">
                  <AddLogData
                    updateLogbookEntries={updateLogbookEntries}
                    setHasNewLogEntry={setHasNewLogEntry}
                  />
                </div>
              </div>

              {/* Logbook Display section */}
              <div className="hidden lg:block w-1/2 bg-background_shade dark:bg-dark_3 rounded">
                <LogbookDisplay logbookEntries={logbookEntries} />
              </div>
            </div>
          </section>
        </div>
        <MobileNav />
      </div>
    </main>
  );
};
