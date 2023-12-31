"use client";
import React, { useEffect, useState } from "react";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { AnnouncementSkeleton } from "../skeletonLoader";
import AuthConnect from "@/auth";
import { useTranslations } from "next-intl";

export const Announcement = () => {
  const t = useTranslations("Announcement");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [select, setSelect] = useState(false);
  const [close, setClose] = useState(false);

  // Fetch card data
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await AuthConnect.get("/getannouncements");
        setCards(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  // Click handler for opening announcements
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setSelect(true);
  };

  return (
    <>
      <main className={"remove-highlight mt-6 w-full max-w-[70.75rem] mx-auto"}>
        {/* Section name */}
        <div className={"flex text-black dark:text-white justify-center"}>
          <p
            className={
              "text-sm md:text-md xl:text-xl 2xl:text-2xl inline-flex font-semibold text-center border-yellow border-x-[0.4rem] md:border-x-8 px-2"
            }
          >
            {t("title")}
          </p>
        </div>

        {/* Announcement section */}
        <div
          className={
            "text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl items-center justify-center mt-4 bg-background_shade_2 dark:bg-dark_3 rounded gap-2 flex w-full"
          }
        >
          {/* Announcements */}
          <div
            className={
              "h-[30rem] sm:h-[32rem] overflow-y-auto w-full max-w-[80%] sm:max-w-[70%] sm:w-[70%] md:max-w-full md:w-[40%] cursor-pointer my-2 xl:m-4"
            }
          >
            {cards &&
              cards.map((announcement) => {
                return (
                  <div
                    key={announcement.announcementid}
                    className={
                      "text-[0.9rem] sm:text-sm w-full sm:w-full flex items-start justify-center"
                    }
                  >
                    <div
                      onClick={() => {
                        handleCardClick(announcement);
                        setClose(true);
                      }}
                      className={
                        "w-[90%]  hover:border-l-8 hover:border-l-yellow duration-300 border-[transparent] flex justify-between items-center rounded mb-2 mx-1.5 drop-shadow-lg bg-white dark:bg-dark_2"
                      }
                    >
                      <div className={"text-xs sm:text-sm md:text-md p-2 w-full"}>
                        {/* Announcement time */}
                        <em
                          className={
                            "rounded bg-yellow font-semibold text-black  px-1.5 py-1"
                          }
                        >
                          {announcement.updatedAt.split("T")[0]}
                        </em>

                        {/* Subject of announcement */}
                        <h1
                          className={
                            "text-black w-full] truncate capitalize dark:text-white text-sm md:text-md xl:text-lg font-semibold my-1.5 "
                          }
                        >
                          {announcement.title}
                        </h1>
                      </div>
                    </div>
                  </div>
                );
              })}
            {cards.length <= 0 &&
              [1, 2, 3, 4, 5].map((n) => <AnnouncementSkeleton key={n} />)}
          </div>

          {/* Announcement Display */}
          <div
            className={
              "text-xs w-full sm:text-sm md:text-md xl:text-xl overflow-y-auto relative hidden md:block bg-white dark:bg-background_shade_2 md:w-1/2 m-2 rounded sm:h-[31.5rem]"
            }
          >
            {/* Display the contents of selected card */}
            <div className={"w-full py-4 px-6 "}>
              {select === false ? (
                <div
                  className={
                    "text-xl md:text-xl my-2 text-dark_4 items-center min-w-full justify-center hidden md:flex gap-2 text-center font-semibold "
                  }
                >
                  <TfiAnnouncement className={" mb-2 text-2xl "} />
                  <strong className="">{t("viewAnn")}</strong>
                </div>
              ) : (
                selectedCard && (
                  <div className={"relative w-full"}>
                    <div
                      className={
                        "sticky top-0 p-3 bg-white dark:bg-background_shade_2"
                      }
                    >
                      <div className={"font-bold text-center w-full"}>
                        <h2 className="w-[80%]">{selectedCard.title}</h2>
                      </div>
                    </div>
                    <div className={"p-3 -w-full flex h-fit"}>
                      <p className="w-full break-words h-fit font-medium">
                      {selectedCard.content}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          {/*open in mobile view */}
          <div
                            onClick={() => {
                              setClose(false);
                            }}
            className={
              close
                ? "z-[60] bg-[rgba(0,0,0,0.85)] text-black dark:text-white top-0 left-0 md:hidden flex items-center fixed min-h-screen w-screen"
                : "hidden"
            }
          >
            <div className={"flex justify-center items-center w-full"}>
              <div
                className={
                  "min-w-[80%] w-full from-bottom  rounded h-[25rem] mx-auto  p-2 bg-white dark:bg-dark_2"
                }
              >
                {/* close modal */}
                <div
                  onClick={() => {
                    setClose(false);
                  }}
                  className={"flex justify-end items-center p-2"}
                >
                  <FaTimes className="text-xl dark:text-yellow" />
                </div>
                {selectedCard && (
                  <div className={"w-full z-50"}>
                    <div className={" p-3 "}>
                      <div className={"min-w-[90%] capitalize truncate text-lg font-bold text-center dark:text-yellow"}>
                        <h2>{selectedCard.title}</h2>
                      </div>
                    </div>
                    <div className="overflow-y-auto min-w-[90%] dark:text-white">
                      <div className={"p-3 w-full font-medium break-words"}>{selectedCard.content}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
