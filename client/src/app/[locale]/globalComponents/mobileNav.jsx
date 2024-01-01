"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  DashboardIcon,
  NotificationIcon,
  ChatIcon,
  LogbookIcon,
} from "../svg_Icons";

export const MobileNav = () => {
  let pathname = usePathname();
  console.log(pathname);
  let path = "";
// conditions
  if (pathname === "/internDashboard") {
    path = "/internDashboard";
  }else if (pathname === "/departmentDashboard") {
    path = "/departmentDashboard";
  }else if (pathname === "/companyDashboard") {
    path = "/companyDashboard";
  }
   else if (pathname === "/adminDashboard") {
    pathname === "/companyDashboard"
  }
  console.log(pathname);

  return (
    <main
      className={
        "absolute bottom-0 flex justify-center items-center sm:hidden w-full z-50 "
      }
    >
      <div
        className={
          "fixed bottom-2 dark:bg-dark_2 bg-white border-background_shade_2 dark:border-dark_3 border shadow-2xl shadow-background_shade_2 dark:shadow-none rounded-xl max-w-[19rem] mx-auto py-0.5"
        }
      >
        <div
          className={"flex justify-center items-center my-0.5  py-0.5 gap-2"}
        >
          <div className={" px-3 text-my_dark"}>
            <Link title={"Home"} href={"/"}>
              <div
                className={`${
                  pathname === "/" && "border-b-2 mb-3 border-yellow"
                } inline-flex justify-center py-2 items-center gap-2 `}
              >
                <HomeIcon />
              </div>
            </Link>
          </div>

          <div className={" px-3 text-my_dark"}>
            <Link title={""} href={""}>
              <div
                className={`${
                  path === "/internDashboard" &&
                  "border-b-2 mb-3 border-yellow"
                } inline-flex justify-center py-2 items-center gap-2 `}
              >
                <DashboardIcon />
              </div>
            </Link>
          </div>

          <div className={" px-3 text-my_dark"}>
            <Link title={""} href={"/internDashboard"}>
              <div
                className={`${
                  pathname === "/notification" &&
                  "border-b-2 mb-3 border-yellow"
                } inline-flex justify-center py-2 items-center gap-2 `}
              >
                <NotificationIcon />
              </div>
            </Link>
          </div>

          <div className={" px-3 text-my_dark"}>
            <Link title={""} href={"/internDashboard"}>
              <div
                className={`${
                  pathname === "/chat" && "border-b-2 mb-3 border-yellow"
                } inline-flex justify-center py-2 items-center gap-2 `}
              >
                <ChatIcon />
              </div>
            </Link>
          </div>

          <div className={" px-3 text-my_dark"}>
            <Link title={""} href={"/internDashboard"}>
              <div
                className={`${
                  pathname === "/Logbook" && "border-b-2 mb-3 border-yellow"
                } inline-flex justify-center py-2 items-center gap-2 `}
              >
                <LogbookIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
