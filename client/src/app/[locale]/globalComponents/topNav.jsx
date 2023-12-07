"use client";
import Link from "next/link";
import Image from "next/image";
import { GiPencil } from "react-icons/gi";
import { VscSignOut } from "react-icons/vsc";
import { RiSunFoggyFill } from "react-icons/ri";
import { DarkModeButton } from "./darkModeButton";
import { NotificationIcon } from "../svg_Icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthConnect from "@/auth";
import { LanguageToggle } from "./languageToggle";
import { HiAnnotation } from "react-icons/hi";
import { LuClock2 } from "react-icons/lu";
import { useTranslations } from "next-intl";
import jwtDecode from "jwt-decode";

export const TopNav = () => {
  const t = useTranslations("topnav");
  const router = useRouter();
  const [photo, setPhoto] = useState("");
  const [notifications, setNotifications] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("accessToken");
  let decodedToken, firstname, lastname, email;
  if (token) {
    decodedToken = jwtDecode(token);
    firstname = decodedToken.firstname;
    lastname = decodedToken.lastname;
    email = decodedToken.email;
  }

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

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await AuthConnect.get("/getnotifs");
        setNotifications(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching photo:", error);
      } finally {
        setIsLoading(false); // Set isLoading to false when done
      }
    };

    getNotifications();

    const intervalId = setInterval(() => {
      getNotifications();
    }, 2 * 60 * 1000); // 2 minutes in milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  const handleLogout = async () => {
    try {
      const response = await AuthConnect.delete("/logout");
      console.log(response);

      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  // const notification = [
  //   { title: "submit Logbook", date: "23/23/12" },
  //   { title: "Buy Logbook", date: "23/23/12" },
  //   { title: "submit Logbook", date: "23/23/12" },
  //   { title: "submit Logbook", date: "23/23/12" },
  //   { title: "submit Logbook", date: "23/23/12" },
  //   { title: "submit Logbook", date: "23/23/12" },
  //   { title: "submit Logbook", date: "23/23/12" },
  //   { title: "submit Logbook", date: "23/23/12" },
  //   { title: "submit Logbook", date: "23/23/12" },
  //   { title: "submit Logbook", date: "23/23/12" },
  //   { title: "submit Logbook", date: "23/23/12" },
  //   { title: "submit Logbook", date: "23/23/12" },
  //   { title: "submit Logbook", date: "23/23/12" },
  //   { title: "submit Logbook", date: "23/23/12" },
  // ];

  const [profileDrop, setProfileDrop] = useState(false);
  const [notificationDrop, setNotificationDrop] = useState(false);

  const profileDropToggle = () => {
    setProfileDrop(!profileDrop);
    notificationDrop === true ? setNotificationDrop(false) : notificationDrop;
  };

  const notificationDropToggle = () => {
    setNotificationDrop(!notificationDrop);
    profileDrop === true ? setProfileDrop(false) : profileDrop;
  };
  if (isLoading) {
    // Render a loading indicator or nothing while data is being fetched
    return null;
  }
  return (
    <main
      className={
        "remove-highlight border-b border-b-background_shade z-50 mx-0 bg-white dark:bg-dark_2 sticky w-full  top-0"
      }
    >
      <nav
        className={
          "sticky bg-white dark:bg-dark_2 top-0 z-50 flex justify-between sm:justify-end  w-full max-w-[83.75rem] pr-6 mx-auto py-2"
        }
      >
        <div
          className={
            "sm:hidden flex justify-start items-center  gap-1 ml-6 cursor-pointer"
          }
        >
          <Link href={"/"}>
            <Image
              className={"w-[3.5rem] lg:w-[4rem] "}
              src={"/logo.svg"}
              alt={"emu logo"}
              width={70}
              height={70}
              priority
            />
          </Link>
        </div>

        {/*left navgations*/}
        <div className="flex flex-wrap justify-center items-center gap-5">
          <LanguageToggle />
          {/* notification */}
          <div onClick={notificationDropToggle} className="">
            <NotificationIcon />
          </div>

          <div
            onClick={profileDropToggle}
            className={"flex items-baseline text-blue relative cursor-pointer"}
          >
            <Image
              src={photo === "" || !photo ? "/avatar.png" : photo}
              alt={"Profile Picture"}
              height={2000}
              width={2000}
              priority
              className={"w-[3rem] h-[3rem] rounded-full"}
            />
          </div>

          {/* Notification Dropdown */}

          {notificationDrop && (
            <div className=" from-top overflow-hidden absolute right-4 top-16 w-[20rem] h-fit max-h-[30rem] border dark:border-none rounded bg-white dark:bg-dark_3 text-black">
              {/* clear all notifications */}
              <div className=" py-3 px-2 flex justify-between">
                <div
                  className={
                    "items-center m-0.5 font-semibold text-black dark:text-white text-sm md:text-md inline-flex text-center border-yellow border-x-[0.4rem] md:border-x-[0.3rem] px-2"
                  }
                >
                  <p>{t("notif")}</p>
                </div>
              </div>

              {/* notifications */}
              <div className="max-h-[20rem]  overflow-y-scroll">
                {notifications.map((notification, index) => (
                  <div key={index} className="m-2">
                    <Link
                      href={""}
                      className="p-2 flex items-center justify-between gap-4 bg-background_shade_2 dark:bg-dark_4 rounded"
                    >
                      <div className="p-1.5 text-2xl text-yellow bg-dark_2 rounded">
                        <HiAnnotation />
                      </div>

                      <div className="">
                        <p className="font-medium">{notification.message}</p>
                      </div>

                      <div className=" w-fit">
                        <div className="flex bg-yellow rounded">
                          <div className="flex py-0.5 px-1 gap-0.5">
                            <LuClock2 />
                            <p className="text-xs font-medium ">
                              {notification.notifdate.slice(0, 10)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/*  profile  dropdown*/}

          {profileDrop && (
            <div
              className={
                "from-top  absolute right-4 top-16 w-[18rem] h-fit border dark:border-none rounded bg-white dark:bg-dark_3 text-black dark:text-white"
              }
            >
              {/*image and name*/}
              <div
                className={
                  "flex justify-start items-center p-3 gap-3 border-b border-dark_3 dark:border-white"
                }
              >
                <div
                  className={
                    "relative cursor-pointer rounded-full overflow-hidden w-[5rem]  flex items-center"
                  }
                >
                  <Image
                    src={photo === "" || !photo ? "/avatar.png" : photo}
                    alt={"Profile Picture"}
                    height={2000}
                    width={2000}
                    priority
                    className={"w-[3rem] h-[3rem] rounded-full"}
                  />
                </div>

                <div className={"flex truncate flex-wrap w-full"}>
                  <p
                    className={
                      "truncate text-sm sm:text-md md:text-lg font-semibold"
                    }
                  >
                    {firstname} {lastname}
                  </p>
                  <p
                    className={
                      "truncate text-sm sm:text-md text-blue dark:text-yellow cursor-pointer"
                    }
                  >
                    {email}
                  </p>
                </div>
              </div>

              {/*    options*/}
              <div className={"p-3"}>
                <div
                  className={
                    "flex justify-between items-center gap-2 capitalize py-1 my-1 cursor-pointer"
                  }
                >
                  <div className={"inline-flex gap-2"}>
                    <div className=" bg-background_shade dark:bg-white p-1.5 rounded-full">
                      <RiSunFoggyFill className={"text-2xl text-blue"} />
                    </div>
                    <p className={""}>{t("theme")}</p>
                  </div>

                  <span className={""}>
                    <DarkModeButton />
                  </span>
                </div>

                <div
                  onClick={handleLogout}
                  className={
                    "flex justify-start items-center gap-2 capitalize py-1 my-1 cursor-pointer"
                  }
                >
                  <div className=" bg-background_shade dark:bg-white p-1.5 rounded-full">
                    <VscSignOut className={"text-2xl text-blue"} />
                  </div>
                  <p className={""}>{t("logout")}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </main>
  );
};
