'use client'
import {PcSideNav} from "../../globalComponents/pcSideNav";
import {Body} from "@/app/internDashboard/components/body";
import {MobileNav} from "../../globalComponents/mobileNav";
import AuthConnect from "@/auth";
import { useRouter } from "next/navigation"; 
import { useEffect, useState } from "react";

export const InternDashboardPage = () => {
    const router = useRouter();
    const [token, setToken] = useState(null);
    
    useEffect(() => {
        const getToken = async () => {
          try {
            const response = await AuthConnect.get('/token');
            console.log(response);
            setToken(response);
          } catch (error) {
            console.error("User not authenticated", error);
            router.push('/login');
          }
        };
    
        getToken();
      }, []);
      if (!token) {
        return null; // Prevent rendering the dashboard until token is fetched
      }
    return(
        <main className={'p-0 m-0 bg-white dark:bg-dark_2'}>
            {/*Sidenav and body*/}
            <div className={'flex flex-nowrap'}>
               <PcSideNav />
               <Body />
               <MobileNav />
            </div>

        </main>
    )
}
