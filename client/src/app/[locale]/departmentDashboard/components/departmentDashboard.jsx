"use client";
import { ProtectedRoute } from "../../globalComponents/deptProtectedRoute";
import { MobileNav } from "../../globalComponents/mobileNav";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { Dashboard } from "./dashboard";
import { TopNav } from "../../globalComponents/topNav";

export const DepartmentDashboardPage = () => {
  return (
    <main className={"p-0 m-0 bg-white dark:bg-dark_2"}>
      {/*Sidenav and body*/}
      <div className={"flex flex-nowrap"}>
        <PcSideNav />
        <div className={"h-full w-full"}>
          <TopNav />
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        </div>

        <MobileNav />
      </div>
    </main>
  );
};
