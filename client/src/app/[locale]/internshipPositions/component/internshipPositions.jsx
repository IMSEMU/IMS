"use client";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { InternshipCardsSkeleton } from "../../skeletonLoader";
import { AnimatedButton } from "../../globalComponents/animatedButton";
import { useTranslations } from "next-intl";
import AuthConnect from "@/auth";
import Modal from "../../globalComponents/modal";

export const InternshipPositions = () => {
  const t = useTranslations("Available Internship Positions");
  const [cards, setCards] = useState([]);
  const [currentDate, setCurrentDate] = useState(Date());
  const [openIntPosition, setOpenIntPosition] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const [intPosDup, setIntPosDup] = useState(null);

  const openFullScreen = () => {
    setIntPosDup(openIntPosition);
    setOpenIntPosition(null);
    setFullScreen(true);
  };

  const closeFullScreen = () => {
    setFullScreen(false);
    setOpenIntPosition(intPosDup);
  };

  const ShowPosition = (position) => {
    setOpenIntPosition(position);
  };

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await AuthConnect.get("/getintpositions");
        setCards(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching available internships:", error);
      }
    };

    fetchPositions();
  }, []);

  return (
    <>
      <main className={" mt-6 w-full max-w-[70.75rem] mx-auto"}>
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

        {/* Card section */}
        <div className={"bg-background_shade_2 dark:bg-dark_3 rounded"}>
          <div
            className={
              "h-[fit] mt-6 py-3 rounded w-full flex gap-2 flex-wrap justify-center relative"
            }
          >
            {/* Cards */}
            {cards.slice(0, 6).map((card, index) => (
              <div
                key={index}
                className={
                  "bg-white dark:bg-dark_2 drop-shadow-md text-xs sm:text-sm md:text-md lg:text-lg text-black dark:text-white w-[22rem] mx-1.5 my-1 rounded h-fit hover:scale-110 transition-transform duration-300 ease-in-out"
                }
                onClick={() => ShowPosition(card)}
              >
                <div className={"w-full place-content-start my-3 px-3"}>
                  {/* Image */}
                  <div className={"w-fit my-1"}>
                    <Image
                      className={
                        "rounded-xl object-cover h-[3.5rem] w-[3.5rem] sm:h-[4rem] sm:w-[4rem] lg:h-[5rem] lg:w-[5rem]"
                      }
                      src={card.photo ? card.photo : "/dark-flower.jpeg"}
                      alt={""}
                      width={100}
                      height={100}
                      priority
                    />
                  </div>

                  <div className={"  "}>
                    <p
                      className={
                        "text-sm md:text-md lg:text-lg w-[18rem] md:w-full font-semibold truncate"
                      }
                    >
                      {card.compname}
                    </p>
                    <p>{card.position}</p>
                    <p>
                      {card.city}, {card.country}
                    </p>
                  </div>
                </div>

                <div className={"flex justify-end px-2 pb-3 items-center"}>
                  {card.applyby > currentDate ? (
                    <div
                      className={
                        "text-black bg-red p-1 gap-2 rounded inline-flex items-center"
                      }
                    >
                      <FaRegClock />
                      <p className={"text-xs sm:text-sm md:text-md"}>
                        {card.applyby.split("T")[0]}
                      </p>
                    </div>
                  ) : (
                    <div
                      className={
                        "text-black bg-yellow p-1 gap-2 rounded inline-flex items-center"
                      }
                    >
                      <FaRegClock />
                      <p className={"text-xs sm:text-sm md:text-md"}>
                        {card.applyby.split("T")[0]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {cards.length === 0 &&
              [1, 2, 3, 4, 5, 6].map((n) => (
                <InternshipCardsSkeleton key={n} />
              ))}
          </div>
        </div>

        <div className={"flex justify-center items-center m-4"}>
          {cards.length !== 0 ? (
            <Link href={"/internshipPositions"} className={""}>
              <AnimatedButton />
            </Link>
          ) : (
            <div
              className={
                "bg-background_shade_2 h-10 w-28 skeleton-loader px-4 py-2 rounded"
              }
            ></div>
          )}
        </div>
        {openIntPosition && (
          <Modal onClose={() => setOpenIntPosition(null)}>
            <div className="flex gap-3 justify-center py-2 items-center">
              <div className="flex flex-wrap gap-2 justify-center items-center">
                <div className="w-[90%] justify-center text-center">
                  {openIntPosition.photo && (
                    <Image
                      src={openIntPosition.photo}
                      width={1000}
                      height={1000}
                      alt=""
                      className=" mx-auto h-[10rem] w-[10rem] justify-center text-center"
                      onClick={openFullScreen}
                    />
                  )}
                </div>
                {/* Department input section */}
                <div className="w-[90%]">
                  <p className="rounded p-3 outline-none w-full  dark:border-none dark:bg-background_shade_2 text-dark_2">
                    Company Name: {openIntPosition.compname}
                  </p>
                </div>
                <div className="w-[90%]">
                  <p className="rounded p-3 outline-none w-full  dark:border-none dark:bg-background_shade_2 text-dark_2">
                    Position Available: {openIntPosition.position}
                  </p>
                </div>
                <div className="w-[44%]">
                  <p className="rounded p-3 outline-none w-full  dark:border-none dark:bg-background_shade_2 text-dark_2">
                    City: {openIntPosition.city}
                  </p>
                </div>
                <div className="w-[44%]">
                  <p className="rounded p-3 outline-none w-full  dark:border-none dark:bg-background_shade_2 text-dark_2">
                    Country: {openIntPosition.country}
                  </p>
                </div>

                {/*  description section */}
                <div className="w-[90%]">
                  <p className="rounded p-3 outline-none w-full  dark:border-none  dark:bg-background_shade_2 text-dark_2">
                    Description: {openIntPosition.desc}
                  </p>
                </div>

                <div className="w-[90%]">
                  <p className="rounded p-3 outline-none w-full  dark:border-none dark:bg-background_shade_2 text-dark_2">
                    Requirments: {openIntPosition.requirements}
                  </p>
                </div>
                <div className="w-[90%]">
                  <p className="rounded p-3 outline-none w-full  dark:border-none dark:bg-background_shade_2 text-dark_2">
                    Applications close on{" "}
                    {openIntPosition.applyby.split("T")[0]}
                  </p>
                </div>
                <div className="w-[90%]">
                  <p className="rounded p-3 outline-none w-full  dark:border-none dark:bg-background_shade_2 text-dark_2">
                    Contact: {openIntPosition.contact}
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        )}
        {fullScreen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center"
            onClick={closeFullScreen}
          >
            <div className="relative">
              <Image
                src={intPosDup.photo}
                width={500}
                height={500}
                alt=""
                className="mx-auto max-h-full max-w-full"
              />
              <button
                className="absolute top-7 right-2 text-white text-xl hover:text-red"
                onClick={closeFullScreen}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
