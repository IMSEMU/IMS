"use client";
import { TopNav } from "../../internDashboard/components/topNav";
import { AddAdmin } from "./addAdmin";
import { DisplayAdmin } from "./displayAdmin";
import { useState } from "react";

export const AddAdminDashboard = () => {
  const [showAdd, setShowAdd] = useState(false);
  return (
    <div className="">
      <TopNav />
      <section className=" bg-white dark:bg-dark_1 flex items-center justify-center w-full pt-5">
        <div className="bg-white dark:bg-dark_2 p-3.5 flex rounded shadow-xl dark:border-none border border-background_shade_2 w-[90%] md:w-[70%] lg:w-[50rem] h-[10%] mb-20 md:mb-4 lg:mb-2 md:h-[32rem]">
          {/* LOgbook Add section */}
          <div className="hidden lg:block lg:w-1/2">
            <AddAdmin />
          </div>

          <div className=" w-full lg:w-1/2 bg-background_shade dark:bg-dark_3 rounded overflow-x-auto">
            <div className=" h-full hidden lg:block">
              <DisplayAdmin />
            </div>

            {/* mobile screen view */}

            <div className="lg:hidden">
              <div
                className={"w-full flex items-center justify-between my-3 px-3"}
              >
                <p
                  className={
                    " font-bold  text-black dark:text-white text-sm md:text-md lg:text-lg  inline-flex text-center  border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  Add Admin
                </p>
                <button
                  onClick={() => setShowAdd(!showAdd)}
                  className="px-2 py-1 bg-blue rounded text-white"
                >
                  {showAdd ? "Add user" : "Accounts"}
                </button>
              </div>

              {showAdd ? (
                <div className=" h-full overflow-x-auto">
                  <DisplayAdmin />
                </div>
              ) : (
                <AddAdmin />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
