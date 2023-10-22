"use client";
import React, { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { AnnouncementSkeleton } from "../skeletonLoader";
import { getAnnouncements } from "../../../../utils/dataFetching";
import { useTranslations } from "next-intl";

export const Announcement = () => {
  const t = useTranslations("Announcement");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [select, setSelect] = useState(false);
  const [close, setClose] = useState(false);

  // Fetch card data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnnouncements();
      setCards(data);
    };
    fetchData();
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
              "text-sm md:text-md xl:text-xl 2xl:text-2xl inline-flex text-center border-yellow border-x-[0.4rem] md:border-x-8 px-2"
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
              cards.map((message) => {
                return (
                  <div
                    key={message.id}
                    className={
                      "text-[0.9rem] sm:text-sm w-full sm:w-full flex items-start justify-center"
                    }
                  >
                    <div
                      onClick={() => {
                        handleCardClick(message);
                        setClose(true);
                      }}
                      className={
                        "w-full md:w-[23rem] flex justify-between items-center rounded my-1.5 mx-1.5 bg-white dark:bg-dark_2"
                      }
                    >
                      <div className={"text-xs sm:text-sm md:text-md p-3"}>
                        {/* Announcement time */}
                        <em
                          className={
                            "rounded bg-yellow text-black m-1 px-1.5 py-1"
                          }
                        >
                          {message.date}
                        </em>

                        {/* Subject of announcement */}
                        <h1
                          className={
                            "text-black dark:text-white text-sm md:text-md lg:text-lg xl:text-xl font-semibold py-1 m-1"
                          }
                        >
                          {message.subject}
                        </h1>
                      </div>

                      {/* Important Announcement identifier */}
                      {/* {message.important ? <FaExclamationTriangle className={"mr-3 text-md xl:text-xl 2xl:text-2xl text-[red] cursor-pointer"}/> : ""} */}
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
              "text-xs sm:text-sm md:text-md xl:text-xl overflow-y-auto relative hidden md:block bg-white dark:bg-background_shade_2 md:w-1/2 m-2 rounded sm:h-[31.5rem]"
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
                  <strong className="">Click to view announcement</strong>
                </div>
              ) : (
                selectedCard && (
                  <div className={"relative"}>
                    <div
                      className={
                        "sticky top-0 p-3 bg-white dark:bg-background_shade_2"
                      }
                    >
                      <div className={"font-bold text-center"}>
                        <h2>{selectedCard.subject}</h2>
                      </div>
                    </div>
                    <p className={"p-3"}>{selectedCard.body}</p>
                  </div>
                )
              )}
            </div>
          </div>
          {/*open in mobile view */}
          <div
            className={
              close
                ? "z-[60] bg-[rgba(0,0,0,0.85)] text-black dark:text-white top-0 md:hidden flex items-center fixed min-h-screen min-w-screen"
                : "hidden"
            }
          >
            <div className={"flex items-center"}>
              <div
                className={
                  "w-[85%] from-bottom  rounded h-[25rem]  mx-auto p-4 bg-white dark:bg-dark_2"
                }
              >
                {/* close modal */}
                <div
                  onClick={() => {
                    setClose(false);
                  }}
                  className={"flex justify-end items-center p-2"}
                >
                  xx
                </div>
                {selectedCard && (
                  <div className={" z-50"}>
                    <div className={" p-3 "}>
                      <div className={"font-bold text-center"}>
                        <h2>{selectedCard.subject}</h2>
                      </div>
                    </div>
                    <div className="overflow-y-auto">
                      <p className={"p-3"}>{selectedCard.body}</p>
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
