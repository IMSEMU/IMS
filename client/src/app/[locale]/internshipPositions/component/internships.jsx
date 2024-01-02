"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import AuthConnect from "@/auth";
import { InternshipCardsSkeleton } from "../../skeletonLoader";
import { Empty } from "antd";
import Modal from "../../globalComponents/modal";
import { Navbar } from "../../globalComponents/Navbar";
import { LoggedInNavbar } from "../../globalComponents/loggedinNavbar";
import { useTranslations } from "next-intl";

export const InternshipCards = () => {
  const t = useTranslations("Available Internship Positions");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("user"));
  const userrole = user?.userrole;

  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openIntPosition, setOpenIntPosition] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const [intPosDup, setIntPosDup] = useState(null);

  const currentDate = new Date();

  const openFullScreen = () => {
    setIntPosDup(openIntPosition);
    setOpenIntPosition(null);
    setFullScreen(true);
  };

  const closeFullScreen = () => {
    setFullScreen(false);
    setOpenIntPosition(intPosDup);
  };

  // Fetching card data
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await AuthConnect.get("/getintpositions");
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching available internships:", error);
      }
    };

    fetchPositions();
  }, []);

  const filteredData = cards.filter(
    (card) =>
      card.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.compname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.requirements.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ShowPosition = (position) => {
    setOpenIntPosition(position);
  };

  return (
    <>
      <main>
        {isLoggedIn ? <LoggedInNavbar userrole={userrole} /> : <Navbar />}
        <div>
          <div className={" z-0 h-fit w-full relative inline-block"}>
            <Image
              className={
                "w-full h-[15rem] sm:h-[20rem] md:h-[25rem] xl:h-[32rem] object-cover "
              }
              src={"/school of computing and technology.jpg"}
              alt={""}
              width={2000}
              height={2000}
              priority
            />

            <div
              className={
                "items-center justify-center -mt-[8rem] md:-mt-[14rem] z-30 flex"
              }
            >
              <div
                className={
                  "text-sm md:text-md lg:text-lg dark:bg-dark_2 bg-white rounded "
                }
              >
                <input
                  autoFocus
                  className={
                    "my-2 md:my-4 mx-3 px-2 w-[55vw] md:w-[40vw] outline-0 dark:bg-dark_2 bg-white dark:text-white text-black placeholder:text-black dark:placeholder:text-white"
                  }
                  placeholder={t("Search")}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          {/* Section name */}
          <div className={"flex justify-center mt-[8rem] md:mt-[14rem]"}>
            <p
              className={
                "text-black dark:text-white text-sm md:text-md xl:text-xl 2xl:text-2xl inline-flex text-center border-yellow border-x-[0.4rem] md:border-x-8 px-2"
              }
            >
               {t("title")}
            </p>
          </div>

          <div className="max-w-[70.75rem] mx-auto bg-background_shade_2 dark:bg-dark_3 rounded">
            <div className="h-[fit] min-h-[20rem] my-6 py-3 rounded w-full flex gap-2 flex-wrap justify-center relative">
              {/* Cards */}
              {Array.isArray(filteredData) && filteredData.length > 0 ? (
                filteredData.map((card, index) => (
                  <div
                    key={index}
                    className={
                      "bg-white dark:bg-dark_2 drop-shadow-md text-xs sm:text-sm md:text-md lg:text-lg text-black dark:text-white w-[22rem] mx-1.5 my-1 rounded h-fit hover:-translate-y-3 transition-transform duration-300 ease-in-out"
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
                      {card.applyby < currentDate.toISOString() ? (
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
                ))
              ) : filteredData.length === 0 && searchQuery.length > 0 ? (
                <div className=" font-semibold text-lg text-center text-white">
                  <Empty />
                </div>
              ) : (
                [1, 2, 3, 4, 5, 6].map((n) => (
                  <InternshipCardsSkeleton key={n} />
                ))
              )}
            </div>
          </div>
          {openIntPosition && (
            <Modal onClose={() => setOpenIntPosition(null)}>
            <div className="flex gap-3 justify-center py-2 items-center w-full">
              <div className="flex flex-wrap gap-2 justify-center items-center w-full  text-sm md:text-md">
                <div className="w-full justify-center text-center">
                  {openIntPosition.photo && (
                    <Image
                      src={openIntPosition.photo}
                      width={1000}
                      height={1000}
                      alt=""
                      className=" mx-auto h-[10rem] rounded w-[10rem] justify-center text-center"
                      onClick={openFullScreen}
                    />
                  )}
                </div>
                {/* Department input section */}
                <div className="w-[90%]">
                  <p className="rounded p-2 outline-none w-full  border border-dark_3  break-words   text-sm md:text-md font-medium text-dark_1 dark:text-white">
                  {t("CompanyName")} {openIntPosition.compname}
                  </p>
                </div>
                <div className="w-[90%]">
                  <p className="rounded p-3 outline-none w-full  border-dark_3 border text-sm md:text-md font-medium text-dark_1 dark:text-white">
                  {t("PositionAvailable")}: {openIntPosition.position}
                  </p>
                </div>
                <div className="w-[44%]">
                  <p className="rounded p-3 outline-none w-full border-dark_3 border  text-sm md:text-md font-medium text-dark_1 dark:text-white">
                  {t("City")}: {openIntPosition.city}
                  </p>
                </div>
                <div className="w-[44%]">
                  <p className="rounded p-3 outline-none w-full  border-dark_3 border  text-sm md:text-md font-medium text-dark_1 dark:text-white">
                  {t("Country")}: {openIntPosition.country}
                  </p>
                </div>

                {/*  description section */}
                <div className="w-[90%]">
                  <p className="rounded p-3 outline-none w-full border-dark_3  border break-words  text-sm md:text-md font-medium text-dark_1 dark:text-white">
                  {t("Description")}: {openIntPosition.desc}
                  </p>
                </div>

                <div className="w-[90%]">
                  <p className="rounded p-3 outline-none w-full border-dark_3 border break-words  text-sm md:text-md font-medium text-dark_1 dark:text-white">
                  {t("Requirments")}: {openIntPosition.requirements}
                  </p>
                </div>
                <div className="w-[90%]">
                  <p className="rounded p-3 outline-none w-full border-dark_3 border  text-sm md:text-md font-medium text-dark_1 dark:text-white">
                  {t("ACloseOn")}{" : "}
                    {openIntPosition.applyby.split("T")[0]}
                  </p>
                </div>
                <div className="w-[90%]">
                  <p className="rounded p-3 outline-none w-full border-dark_3 border  text-sm md:text-md font-medium text-dark_1 dark:text-white">
                  {t("Contact")}: {openIntPosition.contact}
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
                  className="absolute top-7 right-2 rounded text-white text-xl hover:text-red"
                  onClick={closeFullScreen}
                >
                  {t("Close")}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
