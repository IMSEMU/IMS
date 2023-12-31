"use client";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { MobileNav } from "../../globalComponents/mobileNav";
import { TopNav } from "../../globalComponents/topNav";
import { Dashboard } from "../../internDashboard/components/dashboard";
import AuthConnect from "@/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { ProtectedRoute } from "../../globalComponents/stdProtectedRoute";

export const InternDashboardPage = () => {
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
    <main className={"p-0 m-0 bg-white dark:bg-dark_1"}>
      {/*Sidenav and body*/}
      <div className={"flex flex-nowrap"}>
        <PcSideNav user={user} />
        <div className={"h-full w-full"}>
          <TopNav user={user} />
          <ProtectedRoute>
            <Dashboard user={user} />
          </ProtectedRoute>
        </div>

        <MobileNav />
      </div>
    </main>
  );
};
