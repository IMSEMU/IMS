"use client"
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios";
import {InternshipCardsSkeleton} from "@/app/skeletonLoader";

export const InternshipPositions = () => {

  const url = "http://localhost:8000/availableInternships";
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);


  // Fetching table data
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setCard(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  }, []);

  return(
      <>
        <main className={"mt-6 w-full  max-w-[70.75rem] mx-auto"}>
            {/* section name */}
            <div className={"flex justify-center"}>
              <p className={"text-2xl inline-flex text-center border-yellow border-x-8 px-2"}>
                Available Internship Positions
              </p>
            </div>

            {/*card section*/}
            <div className={" bg-background_shade_2 "}>
                <div className={"h-[fit] mt-6 py-3 rounded  w-full flex gap-2 flex-wrap justify-center relative"}>
                    {/*cards*/}

                    {
                        card.slice(0,6).map((cards,index) => (

                    <div key={index} href={"/"} className={"bg-white w-[22rem] mx-1 my-1  rounded h-fit"}>

                        <div className={" w-full place-content-start my-3 px-3"}>
                            {/*image*/}
                            <div className={"rounded w-fit my-1"}>
                                <Image
                                    className={"rounded"}
                                    src={"/logo.svg"}
                                    alt={""}
                                    width={50}
                                    height={50}
                                    priority
                                />
                            </div>

                            <div className={"  "}>
                                <p className={"font-semibold text-xl truncate"}>{cards.position}</p>
                                <p>{cards.companyName}</p>
                                <p>{cards.location}</p>
                            </div>


                    </div>

                    <div className={"flex justify-end px-2 pb-3 items-center"}>
                        <div className={"bg-yellow p-1 gap-2 rounded inline-flex items-center"}>
                        <FaRegClock />
                        <p className={"text-sm"}>{cards.postTime}</p>
                        </div>
                    </div>

                    </div>
                    ))}
                    {card.length === 0 && [1,2,3,4,5,6].map((n) => <InternshipCardsSkeleton key={n} />)}
                </div>
            </div>

            <div className={"flex justify-center items-center  m-4"}>
                {
                 card.length !== 0 ?
                 <Link href={"/internshipPositions"} className={"bg-yellow px-4 py-2 rounded"}>Show more</Link> :
                 <div className={"bg-background_shade_2 h-10 w-28 skeleton-loader px-4 py-2 rounded"}></div>
                }
            </div>

        </main>
      </>
  )
}