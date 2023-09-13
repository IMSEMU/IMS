import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import {getAvailableInternship} from "../../../../utils/dataFetching";
import { InternshipCardsSkeleton} from "@/app/skeletonLoader";


export const InternshipCards = ({ searchQuery }) => {
  const [card, setCard] = useState([]);
  const [filteredCard, setFilteredCard] = useState([]);


  // Fetching card data
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAvailableInternship();
      setCard(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Filter the data based on search query
    const filteredData = card.filter((item) =>
      item.position.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCard(filteredData);
    console.log(filteredData);
  }, [searchQuery, card]);

  return (
    <>
      <main className="mt-[7rem] md:mt-[12rem]">

        {/* Section name */}
        <div className={"flex justify-center"}>
          <p className={"text-sm md:text-md xl:text-xl 2xl:text-2xl inline-flex text-center border-yellow border-x-[0.4rem] md:border-x-8 px-2"}>
            Available Internship Positions
          </p>
        </div>

        <div className="max-w-[70.75rem] mx-auto bg-background_shade_2 dark:bg-dark_3 rounded">
          <div className="h-[fit] min-h-[20rem] my-6 py-3 rounded w-full flex gap-2 flex-wrap justify-center relative">

            {/* Cards */}
            {Array.isArray(filteredCard) && filteredCard.length > 0 ?
              filteredCard.map((cards, index) => (
              <div key={index} className={"bg-white dark:bg-dark_2 text-xs sm:text-sm md:text-md lg:text-lg text-black dark:text-white w-[22rem] mx-1.5 my-1 rounded h-fit"}>
                <div className={"w-full place-content-start my-3 px-3"}>

                  {/* Image */}
                  <div className={"w-fit my-1"}>
                    <Image
                      className={"rounded-xl object-cover h-[3.5rem] w-[3.5rem] sm:h-[4rem] sm:w-[4rem] lg:h-[5rem] lg:w-[5rem]"}
                      src={"/dark-flower.jpeg"}
                      alt={""}
                      width={100}
                      height={100}
                      priority
                    />
                  </div>

                  <div className={"  "}>

                    <p className={"text-sm md:text-md lg:text-lg w-[18rem] md:w-full font-semibold truncate"}>{cards.position}</p>
                    <p>{cards.companyName}</p>
                    <p>{cards.location}</p>

                  </div>

                </div>

                <div className={"flex justify-end px-2 pb-3 items-center"}>

                  <div className={"text-black bg-yellow p-1 gap-2 rounded inline-flex items-center"}>
                    <FaRegClock />
                    <p className={"text-xs sm:text-sm md:text-md"}>{cards.postTime}</p>
                  </div>

                </div>

              </div>
            )) :
                (filteredCard.length === 0 && searchQuery.length > 0 ?
                    <div className={"text-center p-[0.875rem]"}>No such word</div> :
                    [1, 2, 3, 4, 5, 6].map((n) => <InternshipCardsSkeleton key={n} />))
            }

          </div>
        </div>
      </main>
    </>
  );
};
