'use client'
import { ProtectedRoute } from "../../globalComponents/deptProtectedRoute";
import { MobileNav } from "../../globalComponents/mobileNav";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { TopNav } from "../../internDashboard/components/topNav";
import { AddAnnouncement } from "./addAnnouncement";
import { DisplayAnnouncement } from "./displayAnnouncement";
import { useState } from "react";

export const AnnouncementPage = () => {

  const [mobileLogAdd, setMobileLogAdd] = useState(true);
  return (
    <main className={"p-0 m-0 bg-white dark:bg-dark_2"}>
      {/*Sidenav and body*/}
      <div className={"flex flex-nowrap"}>
        {/* <PcSideNav /> */}
        <div className={"h-full w-full"}>
          <TopNav />
          <ProtectedRoute>
            <section className=" bg-white dark:bg-dark_1 flex items-center justify-center w-full pt-5">
              <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 w-[90%] md:w-[70%] lg:w-[50rem] h-[10%] mb-20 md:mb-4 lg:mb-2 md:h-[32rem]">
                {/*  Add section */}
                <div className="hidden lg:block lg:w-1/2">
                  <div className=" flex items-center h-full">
                    <AddAnnouncement />
                  </div>
                </div>

                {/*  Display section */}
                <div className=" w-full lg:w-1/2 bg-background_shade dark:bg-dark_3 rounded overflow-x-auto">
                  <div className="hidden lg:block">
                    <DisplayAnnouncement />
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
                        Daily Logbook
                      </p>
                      <button
                        onClick={() => setMobileLogAdd(!mobileLogAdd)}
                        className="px-2 py-1 bg-blue rounded text-white"
                      >
                        {mobileLogAdd ? "Add" : "Logbook"}
                      </button>
                    </div>

                    {mobileLogAdd ? (
                      <DisplayAnnouncement />
                    ) : (
                      <AddAnnouncement />
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
