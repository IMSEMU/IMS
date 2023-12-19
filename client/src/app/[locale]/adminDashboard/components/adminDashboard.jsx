"use client";
// Importing necessary components and libraries
import { MobileNav } from "../../globalComponents/mobileNav";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { Dashboard } from "./dashboard";
import { TopNav } from "../../globalComponents/topNav";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AuthConnect from "@/auth";  // Assuming this is a custom authentication module
import jwtDecode from "jwt-decode";
import { ProtectedRoute } from "../../globalComponents/adminProtectedRoute";

// Functional component for the Admin Dashboard page
export const AdminDashboardPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Fetching and decoding the user token on component mount
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
        router.push("/login");  // Redirecting to login page if authentication fails
      }
    };

    getToken();
  }, []);

  // If user is not available, prevent rendering the dashboard until token is fetched
  if (!user) {
    return null;
  }

  // Render the main content of the Admin Dashboard page
  return (
    <main className={"p-0 m-0 bg-white dark:bg-dark_2"}>
      {/* Sidenav and body */}
      <div className={"flex flex-nowrap"}>
        {/* PC Side Navigation with user information */}
        <PcSideNav user={user} />

        {/* Main content area */}
        <div className={"h-full w-full"}>
          {/* Top navigation bar with user information */}
          <TopNav user={user} />

          {/* Protected route for rendering the Dashboard component */}
          <ProtectedRoute>
            <Dashboard user={user} />
          </ProtectedRoute>
        </div>

        {/* Mobile navigation component */}
        <MobileNav />
      </div>
    </main>
  );
};
