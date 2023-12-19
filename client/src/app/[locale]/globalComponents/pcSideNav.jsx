"use client";
import Link from "next/link";
import Image from "next/image";
import { VscSignOut } from "react-icons/vsc";
import {
  HomeIcon,
  DashboardIcon,
  NotificationIcon,
  ChatIcon,
  LogbookIcon,
} from "../svg_Icons";
import { useRouter, usePathname } from "next/navigation";
import AuthConnect from "@/auth";
import { useTranslations } from "next-intl";
import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";

export const PcSideNav = ({ user }) => {
  const t = useTranslations("sidenav");
  const pathname = usePathname();
  let navlinks;

  if (pathname === "/internDashboard" || pathname === "/tr/internDashboard") {
    navlinks = [
      { name: t("home"), icons: <HomeIcon />, link: "/" },
      { name: t("chat"), icons: <ChatIcon />, link: "/discussionForum" },
    ];
  } else if (
    pathname === "/logbook" ||
    pathname === "/applicationForm" ||
    pathname === "/tr/logbook" ||
    pathname === "/tr/applicationForm" ||
    pathname === "/appForm" ||
    pathname === "/tr/appForm" ||
    pathname === "/insuranceForm" ||
    pathname === "/tr/insuranceForm" ||
    pathname === "/report" ||
    pathname === "/tr/report" ||
    pathname === "/bookmarks" ||
    pathname === "/tr/bookmarks"
  ) {
    navlinks = [
      { name: t("home"), icons: <HomeIcon />, link: "/" },
      {
        name: t("dashboard"),
        icons: <DashboardIcon />,
        link: "/internDashboard",
      },
      { name: t("chat"), icons: <ChatIcon />, link: "/discussionForum" },
    ];
  } else if (
    pathname === "/discussionForum" ||
    pathname === "/tr/discussionForum"
  ) {
    navlinks = [
      { name: t("home"), icons: <HomeIcon />, link: "/" },
      {
        name: t("dashboard"),
        icons: <DashboardIcon />,
        link: "/internDashboard",
      },
    ];
  }
  //other dashboards
  else if (
    pathname === "/departmentDashboard" ||
    pathname === "/tr/departmentDashboard" ||
    pathname === "/companyDashboard" ||
    pathname === "/tr/companyDashboard" ||
    pathname === "/adminDashboard" ||
    pathname === "/tr/adminDashboard"
  ) {
    navlinks = [{ name: t("home"), icons: <HomeIcon />, link: "/" }];
  } else if (
    //for department Dashboard
    pathname === "/iafview" ||
    pathname === "/tr/iafview" ||
    pathname === "/conformview" ||
    pathname === "/tr/conformview" ||
    pathname === "/sifview" ||
    pathname === "/tr/sifview" ||
    pathname === "/evalview" ||
    pathname === "/tr/evalview" ||
    pathname === "/reportview" ||
    pathname === "/tr/reportview"
  ) {
    navlinks = [
      { name: t("home"), icons: <HomeIcon />, link: "/" },
      {
        name: t("dashboard"),
        icons: <DashboardIcon />,
        link: "/departmentDashboard",
      },
    ];
  } //for company supervisor
  else if (
    pathname === "/confirmationForm" ||
    pathname === "/tr/confirmationForm" ||
    pathname === "/logview" ||
    pathname === "/tr/logview" ||
    pathname === "/companyEval" ||
    pathname === "/tr/companyEval"
  ) {
    navlinks = [
      { name: t("home"), icons: <HomeIcon />, link: "/" },
      {
        name: t("dashboard"),
        icons: <DashboardIcon />,
        link: "/companyDashboard",
      },
    ];
  }

  const router = useRouter();
  const [photo, setPhoto] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPhoto = async () => {
      try {
        const response = await AuthConnect.get("/getphoto");
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo:", error);
      } finally {
        setIsLoading(false); // Set isLoading to false when done
      }
    };

    getPhoto();
  }, []);
  const handleLogout = async () => {
    try {
      const response = await AuthConnect.delete("/logout");

      localStorage.setItem("isLoggedIn", "false");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");

      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  if (isLoading) {
    // Render a loading indicator or nothing while data is being fetched
    return null;
  }

  return (
    <main
      className={
        " bg-white dark:bg-dark_2 hidden sm:block z-50 h-screen w-[6rem] lg:w-[10rem] xl:w-[12rem]  py-2 sticky top-0 border-r border-background_shade_2"
      }
    >
      <div
        className={"flex justify-start items-center  gap-1 ml-6 cursor-pointer"}
      >
        <Link href={"/"}>
          <Image
            className={"w-[2.5rem] sm:w-[3rem] md:w-[3.5rem] lg:w-[4rem] "}
            src={"/logo.svg"}
            alt={"emu logo"}
            width={70}
            height={70}
            priority
          />
        </Link>
      </div>

      <div className={"py-6 px-4 w-[6rem] lg:w-[10rem] xl:w-[12rem] "}>
        {/*top navs*/}
        <div className={"py-2 flex flex-wrap justify-center gap-2"}>
          {/*navigations*/}

          {navlinks.map((navs, index) => (
            <Link
              href={navs.link}
              key={index}
              className={
                "my-1.5 w-full md:w-[10rem] hover:ml-4 ease-in-out duration-150 text-black dark:text-background_shade_2 border-yellow"
              }
            >
              <div
                className={
                  "flex justify-start items-center px-2 py-1 gap-2 select-none"
                }
              >
                <div>{navs.icons}</div>
                <span className={"hidden lg:block font-semibold text-md"}>
                  {navs.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/*bottom nav*/}
        <div className={" absolute bottom-3 left-0  w-full"}>
          <div
            className={
              " cursor-pointer w-fit mx-auto max-w-[10rem]  rounded bg-background_shade_2 dark:bg-dark_4 border-yellow text-black"
            }
          >
            <div
              className={
                "flex justify-center items-center p-2 lg:px-2.5 lg:py-2.5 w-fit lg:w-full gap-2 "
              }
            >
              <Image
                src={photo === "" || !photo ? "/avatar.png" : photo}
                alt={"Profile Picture"}
                height={1000}
                width={1000}
                priority
                className={
                  "w-[2rem] h-[2rem] rounded-full hidden lg:inline-block"
                }
              />
              <div
                className={"flex flex-wrap items-center truncate justify-start"}
              >
                <span
                  className={
                    "hidden lg:block font-semibold text-md l truncate w-full"
                  }
                >
                  {user.firstname} {user.lastname}
                </span>
                {user.userrole === 1 ? (
                  <span className={"hidden lg:block text-sm w-full"}>
                    {t("student")}
                  </span>
                ) : user.userrole === 2 ? (
                  <span className={"hidden lg:block text-sm w-full"}>
                    {t("DepartmentSupervisor")}
                  </span>
                ) : user.userrole === 3 ? (
                  <span className={"hidden lg:block text-sm w-full"}>
                    {t("CompanySupervisor")}
                  </span>
                ) : user.userrole === 4 ? (
                  <span className={"hidden lg:block text-sm w-full"}>
                    {t("Administrator")}
                  </span>
                ) : (
                  <span className={"hidden lg:block text-sm w-full"}></span>
                )}
              </div>
              <div
                className={
                  "text-3xl flex items-center justify-center lg:text-2xl"
                }
              >
                <button onClick={handleLogout}>
                  <VscSignOut />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
