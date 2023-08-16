import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";


export const InternshipCards = ({ searchQuery }) => {
  const url = "http://localhost:8000/availableInternships";
  const [card, setCard] = useState([]);
  const [filteredCard, setFilteredCard] = useState([]);
  // const [loading, setLoading] = useState(true);

  // Fetching table data
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setCard(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
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
      <main className="mt-[12rem]">
        <div className="flex justify-center">
          <p className="text-2xl inline-flex text-center border-yellow border-x-8 px-2">
            Available Internship Positions
          </p>
        </div>

        <div className="max-w-[70.75rem] mx-auto bg-background_shade_2 rounded">
          <div className="h-[fit] min-h-[20rem] mt-6 py-3 rounded w-full flex gap-2 flex-wrap justify-center relative">
            { filteredCard.length === 0 ? (
              <div>
                <p>No data found</p>
              </div>
            ) : (
              filteredCard.map((cards, index) => (
                <div key={index}  className="bg-white w-[22rem] mx-1 my-1 rounded h-fit">
                  <div className="w-full place-content-start my-3 px-3">
                    {/*image*/}
                    <div className="rounded w-fit my-1">
                      <Image
                        className="rounded"
                        src="/logo.svg"
                        alt=""
                        width={50}
                        height={50}
                        priority
                      />
                    </div>

                    <div className="">
                      <p className="font-semibold text-xl truncate">{cards.position}</p>
                      <p>{cards.companyName}</p>
                      <p>{cards.location}</p>
                    </div>
                  </div>

                  <div className="flex justify-end px-2 pb-3 items-center">
                    <div className="bg-yellow p-1 gap-2 rounded inline-flex items-center">
                      <FaRegClock />
                      <p className="text-sm">{cards.postTime}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
};
