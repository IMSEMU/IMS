"use client";
import { AddLogData } from "../../logbook/components/addLogData";
import { LogbookDisplay } from "./logbookDisplay";
import AuthConnect from "@/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNav } from "../../globalComponents/mobileNav";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { TopNav } from "../../globalComponents/topNav";
import { ProtectedRoute } from "../../globalComponents/stdProtectedRoute";
import jwtDecode from "jwt-decode";
import { EditLog } from "./editLog";
import { useTranslations } from "next-intl";
import Loading from "../../globalComponents/loading";

export const LogbookPage = () => {
  const t = useTranslations("logbook");
  const router = useRouter();
  const [logbookEntries, setLogbookEntries] = useState([]);
  const [hasNewLogEntry, setHasNewLogEntry] = useState(false);
  const [user, setUser] = useState(null);
  const [mobileLogAdd, setMobileLogAdd] = useState(true);
  const [student, setStudent] = useState(null);
  const [error, setError] = useState(null);
  const [edit, setEdit] = useState(null);

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
    const getStudent = async () => {
      try {
        const response = await AuthConnect.get("/getstudent");
        setStudent(response.data);
        console.log(response.data);
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
          console.log("new log data", response.data);
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

  const submitLogbook = async () => {
    try {
      const response = await AuthConnect.post("/submitlog", {});
      console.log(response);
      alert("Logbook Submitted");
      router.push("/internDashboard");
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        if (error.response.status === 400) {
          // Handle 400 Bad Request error
          setError(error.response.data.msg);
          console.log(error.response.data.msg);
        }
      }
    }
  };

  if (!student) {
    return <Loading />; // Prevent rendering the dashboard until token is fetched
  }
  if (!user) {
    return <Loading />; // Prevent rendering the dashboard until token is fetched
  }

  return (
    <main className={"p-0 m-0 bg-white dark:bg-dark_2"}>
      {/*Sidenav and body*/}
      <div className={"flex flex-nowrap"}>
        <PcSideNav user={user} />
        <div className={"h-full w-full"}>
          <TopNav user={user} />
          <ProtectedRoute>
            <section className=" bg-white dark:bg-dark_1 flex items-center justify-center w-full pt-5">
              <div className="relative bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 w-[90%] md:w-[70%] lg:w-[50rem] h-[10%] mb-20 md:mb-4 lg:mb-2 md:h-[32rem]">
                {/* LOgbook Add section */}
                <div className="hidden lg:block lg:w-1/2">
                  <div className=" flex items-center h-full">
                    {edit ? (
                      <EditLog
                        entry={edit}
                        startdate={student.startdate}
                        enddate={student.enddate}
                        duration={student.duration}
                        setEdit={setEdit}
                        setHasNewLogEntry={setHasNewLogEntry}
                        updateEntries={setLogbookEntries}
                        logbookEntries={logbookEntries}
                      />
                    ) : (
                      <AddLogData
                        updateLogbookEntries={updateLogbookEntries}
                        setHasNewLogEntry={setHasNewLogEntry}
                        startdate={student.startdate}
                        enddate={student.enddate}
                        duration={student.duration}
                      />
                    )}
                  </div>
                </div>

                {/* Logbook Display section */}
                <div className="w-full h-full lg:w-1/2">
                <div className=" w-full h-[90%] bg-background_shade dark:bg-dark_3 rounded overflow-x-auto">
                  <div className="hidden lg:block">
                    <LogbookDisplay
                      logbookEntries={logbookEntries}
                      setEdit={setEdit}
                      setHasNewLogEntry={setHasNewLogEntry}
                      updateEntries={setLogbookEntries}
                    />
                  </div>

                  {/* mobile screen view */}

                  <div className="lg:hidden">
                    <div
                      className={
                        "w-full flex items-center justify-between my-3 px-3"
                      }
                    >
                      <p
                        className={
                          " font-bold  text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                        }
                      >
                        {t("title")}
                      </p>
                      <button
                        onClick={() => setMobileLogAdd(!mobileLogAdd)}
                        className="px-2 py-1 bg-blue rounded text-white flex justify-between"
                      >
                        {mobileLogAdd
                          ? edit
                            ? t("edit")
                            : t("add")
                          : t("logbook")}
                      </button>
                    </div>

                    {mobileLogAdd ? (
                      <LogbookDisplay
                        logbookEntries={logbookEntries}
                        setEdit={setEdit}
                        setHasNewLogEntry={setHasNewLogEntry}
                        updateEntries={setLogbookEntries}
                        mobileLogAdd={mobileLogAdd}
                        setMobileLogAdd={setMobileLogAdd}
                      />
                    ) : edit ? (
                      <EditLog
                        entry={edit}
                        startdate={student.startdate}
                        enddate={student.enddate}
                        duration={student.duration}
                        setEdit={setEdit}
                        mobileLogAdd={mobileLogAdd}
                        setMobileLogAdd={setMobileLogAdd}
                        setHasNewLogEntry={setHasNewLogEntry}
                        updateEntries={setLogbookEntries}
                        logbookEntries={logbookEntries}
                      />
                    ) : (
                      <AddLogData
                        updateLogbookEntries={updateLogbookEntries}
                        setHasNewLogEntry={setHasNewLogEntry}
                        startdate={student.startdate}
                        enddate={student.enddate}
                        duration={student.duration}
                      />
                    )}
                  </div>

                </div>
                                                  {/* submit button */}
                                                  <div className="my-2 w-full flex justify-end">
                {logbookEntries.length == student.duration ? (
                  <button
                    className="bg-blue text-white py-2 px-4 rounded"
                    onClick={() => {
                      submitLogbook();
                    }}
                  >
                    {t("Submit")}
                  </button>
                ) : (
                  <button className="bg-background_shade text-white py-2 px-4 rounded">
                    {t("Submit")}
                  </button>
                )}
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
