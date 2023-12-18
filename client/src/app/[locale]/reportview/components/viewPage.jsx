"use client";
import AuthConnect from "@/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TopNav } from "../../globalComponents/topNav";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { MobileNav } from "../../globalComponents/mobileNav";
import { ReportView } from "./reportView";
import jwtDecode from "jwt-decode";
import { ProtectedRoute } from "../../globalComponents/deptProtectedRoute";

export const ViewPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

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

  if (!user) {
    return null; // Prevent rendering the dashboard until token is fetched
  }

  return (
    <main className="bg-white dark:bg-dark_1 h-screen">
      <div className={"flex flex-nowrap"}>
        <PcSideNav user={user} />
        <div className={"h-full w-full"}>
          <TopNav user={user} />
          <ProtectedRoute>
            <ReportView />
          </ProtectedRoute>
        </div>
        <MobileNav />
      </div>
    </main>
  );
};
