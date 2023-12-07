"use client";

import { ReportSubmit } from "./reportSubmit";
import AuthConnect from "@/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TopNav } from "../../globalComponents/topNav";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { MobileNav } from "../../globalComponents/mobileNav";
import { ProtectedRoute } from "../../globalComponents/stdProtectedRoute";
import jwtDecode from "jwt-decode";

export const Report = () => {
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
        <PcSideNav />
        <div className={"h-full w-full"}>
          <TopNav />
          <ProtectedRoute>
            <ReportSubmit />
          </ProtectedRoute>
        </div>

        <MobileNav />
      </div>
    </main>
  );
};
