"use client";
import { AddLogData } from "../../logbook/components/addLogData";
import { LogbookDisplay } from "./logbookDisplay";
import AuthConnect from "@/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNav } from "../../globalComponents/mobileNav";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { TopNav } from "../../internDashboard/components/topNav";
import { ProtectedRoute } from "../../globalComponents/stdProtectedRoute";
import jwtDecode from "jwt-decode";

export const LogbookPage = () => {
  const router = useRouter();
  const [logbookEntries, setLogbookEntries] = useState([]);
  const [hasNewLogEntry, setHasNewLogEntry] = useState(false);
  const [user, setUser] = useState(null);
  const [mobileLogAdd, setMobileLogAdd] = useState(true);

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await AuthConnect.get("/token");

        // Decode the token immediately after setting it
        try {
          const decoded = jwtDecode(response.data);
          setUser(decoded);
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      } catch (error) {
        console.error("User not authenticated", error);
        router.push("/login");
      }
    };

    getToken();
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

  if (!user) {
    return null; // Prevent rendering the dashboard until token is fetched
  }

  return (
    <main className={"p-0 m-0 bg-white dark:bg-dark_2"}>
      {/*Sidenav and body*/}
      <div className={"flex flex-nowrap"}>
        <PcSideNav />
        <div className={"h-full w-full"}>
          <TopNav />
          <ProtectedRoute>
          <section className=" bg-white dark:bg-dark_1 flex items-center justify-center w-full pt-5">
            <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 w-[90%] md:w-[70%] lg:w-[50rem] h-[10%] mb-20 md:mb-4 lg:mb-2 md:h-[32rem]">
              {/* LOgbook Add section */}
              <div className="hidden lg:block lg:w-1/2">
                <div className=" flex items-center h-full">
                  <AddLogData
                    updateLogbookEntries={updateLogbookEntries}
                    setHasNewLogEntry={setHasNewLogEntry}
                  />
                </div>
              </div>

              {/* Logbook Display section */}
              <div className=" w-full lg:w-1/2 bg-background_shade dark:bg-dark_3 rounded overflow-x-auto">
                <div className="hidden lg:block"><LogbookDisplay logbookEntries={logbookEntries} /></div>

{/* mobile screen view */}

<div className="lg:hidden">
<div className={"w-full flex items-center justify-between my-3 px-3"}>
        <p
          className={
            " font-bold  text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
          }
        >
          Daily Logbook
        </p>
        <button onClick={()=>setMobileLogAdd(!mobileLogAdd)} className="px-2 py-1 bg-blue rounded text-white">{mobileLogAdd ? "Add" : "Logbook"}</button>
      </div>

      {mobileLogAdd ?
        <LogbookDisplay logbookEntries={logbookEntries} /> : 
        <AddLogData
        updateLogbookEntries={updateLogbookEntries}
        setHasNewLogEntry={setHasNewLogEntry}
      />
      }
</div>

              </div>
            </div>
          </section>
          </ProtectedRoute>
        </div>
        <MobileNav />
      </div>
    </main>
  );
};
