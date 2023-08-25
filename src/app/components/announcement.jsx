"use client"
import React, { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { AnnouncementSkeleton } from "@/app/skeletonLoader";
import {HomeNav} from "@/app/components/homeNav";
import {getAnnouncements} from "../../../utils/dataFetching";

export const Announcement = () => {
  const [cards, setCards] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  // Fetch card data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnnouncements();
      setCards(data);
    }
    fetchData();
  }, []);

  // Click handler for opening announcements
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <>
      <main className={"remove-highlight mt-6 w-full max-w-[70.75rem] mx-auto"}>
        {/* Section name */}
        <div className={"flex justify-center"}>
          <p className={"text-sm md:text-md xl:text-xl 2xl:text-2xl inline-flex text-center border-yellow border-x-[0.4rem] md:border-x-8 px-2"}>
            News & Announcement
          </p>
        </div>

        {/* Announcement section */}
        <div className={"text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl items-center justify-center mt-4 bg-background_shade_2 rounded gap-0 flex w-full"}>
          {/* Announcements */}
          <div className={"h-[30rem] sm:h-[32rem] overflow-y-auto w-fit cursor-pointer my-2 xl:m-4"}>
            {cards && cards.map((message) => {
              return (
                <div key={message.id} className={"text-[0.9rem] sm:text-sm w-[100vw] sm:w-full flex items-start justify-center"}>
                  <div onClick={() => handleCardClick(message)} className={"w-[23rem] flex justify-between items-center rounded my-1.5 mx-1.5 bg-white"}>
                    <div className={"text-xs sm:text-sm md:text-md p-3"}>
                      {/* Announcement time */}
                      <em className={"rounded bg-yellow text-black m-1 px-1.5 py-1"}>{message.date}</em>
                      {/* Subject of announcement */}
                      <h1 className={"text-sm md:text-md lg:text-lg xl:text-xl font-semibold py-1 m-1"}>{message.subject}</h1>
                    </div>
                    {/* Important Announcement identifier */}
                    {message.important ? <FaExclamationTriangle className={"mr-3 text-md xl:text-xl 2xl:text-2xl text-yellow cursor-pointer"}/> : ""}
                  </div>
                </div>
              );
            })}
            {!cards && [1, 2, 3, 4, 5].map((n) => <AnnouncementSkeleton key={n} />)}
          </div>


          {/* Announcement Display */}
          <div className={"text-xs sm:text-sm md:text-md xl:text-xl overflow-y-scroll relative hidden sm:block bg-white md:w-[40rem] m-2 rounded sm:h-[31.5rem]"}>
            {/* Display the contents of selected card */}
            <div className={"w-full py-4 px-6 "}>
              {selectedCard === null ?
                <div className={"text-xl md:text-2xl text-background_shade_2 text-center font-semibold "}>
                  <TfiAnnouncement className={"inline-flex mb-2 "} />
                  <strong>Select an announcement</strong>
                </div>
                :
                selectedCard && (
                  <div className={"relative"}>
                    <div className={"sticky top-0 p-3 bg-white"}>
                      <div className={"font-bold text-center"}>
                        <h2>{selectedCard.subject}</h2>
                      </div>
                      <div className={"absolute top-0 right-0"}>
                        {selectedCard.important ?
                          <FaExclamationTriangle className={"text-md xl:text-xl 2xl:text-2xl mr-3 mt-4 text-yellow cursor-pointer"}/> : ""}
                      </div>
                    </div>
                    <p className={"p-3"}>{selectedCard.body}</p>
                  </div>
                )}
            </div>
          </div>
                                {/*open in mobile view */}
            <div className={"z-[99]  top-0 hidden bg-white fixed h-[100%] w-[100vw]"}>
                <HomeNav className={"mt-2"} />
                <div className={"flex items-center"}>
                <div className={"w-full h-[20rem] mx-auto py-4 px-6 border"}>
                  <div className={""}>XX</div>
              {
                selectedCard && (
                  <div className={"relative"}>
                    <div className={"sticky top-0 p-3 bg-white"}>
                      <div className={"font-bold text-center"}>
                        <h2>{selectedCard.subject}</h2>
                      </div>
                      <div className={"absolute top-0 right-0"}>
                        {selectedCard.important ?
                          <FaExclamationTriangle className={"text-md xl:text-xl 2xl:text-2xl mr-3 mt-4 text-yellow cursor-pointer"}/> : ""}
                      </div>
                    </div>
                    <p className={"p-3"}>{selectedCard.body}</p>
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
