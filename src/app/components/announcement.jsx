"use client"
import {useEffect, useState} from "react";
import {FaExclamationTriangle} from "react-icons/fa";
import {TfiAnnouncement} from "react-icons/tfi";
import {AnnouncementSkeleton} from "@/app/skeletonLoader";


export const Announcement = () => {

    const url = 'http://localhost:8000/announcement';
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

        // Fetch card data
  useEffect(() => {
    const axios = require('axios');

    axios.get(url)
      .then(response => {
        setCards(response.data);
        setLoading(false);

      })
      .catch(error => {
        console.error('Error fetching card data:', error);

      });
  }, [url]);

  // click handler for opening announcements
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };


  return(
      <>
          <main className={"mt-6 w-full max-w-[70.75rem] mx-auto"}>

              {/*section name*/}
              <div className={"flex justify-center"}>
                  <p className={"text-2xl inline-flex  text-center border-yellow border-x-8 px-2"}>News & Announcement</p>
              </div>

              {/*announcement section*/}
              <div className={" items-center justify-center mt-4 bg-background_shade_2 rounded gap-0 flex w-full"}>

                  {/*announcements*/}
                  <div className={"h-[32rem] overflow-y-auto w-fit cursor-pointer my-2"}>
                      {
                          cards && cards.map((message) => {

                              return(
                                 <div key={message.id} className={" w-[23rem] md:w-fit flex items-start justify-center"}>

                                      <div  onClick={() => handleCardClick(message)} className={"w-[25rem] flex justify-between items-center rounded my-2 mx-4 bg-white"}>

                                          <div className={"p-3"}>

                                              {/*announcement time*/}
                                              <em className={"rounded bg-yellow text-black m-1 px-1.5 py-1"}>{message.date}</em>

                                              {/*subject of announncement*/}
                                              <h1 className={"font-semibold text-lg py-1 m-1"}>{message.subject}</h1>

                                          </div>
                                          {/*important Announcement identifier*/}
                                          {message.important ? <FaExclamationTriangle className={"mr-3 text-2xl text-yellow cursor-pointer"}/> : ""}

                                      </div>

                                 </div>
                              )
                          })
                      }
                      {!cards && [1,2,3,4,5].map((n) => <AnnouncementSkeleton key={n}/>)}
                  </div>



                  {/*Announcement Display*/}
                  <div className={"relative hidden sm:block bg-white w-[40rem] m-4 rounded h-[30rem]"}>

                      {/* Display the contents of selected card */}
                      <div className={"w-full py-4 px-6 "}>

                          {
                              // checking if a card is selected or not and rendering content for each situation

                              selectedCard === null ?
                                  <div className={"text-3xl  text-background_shade_2 text-center font-semibold  "}> <TfiAnnouncement className={"inline-flex mb-2 "} /> <strong>Select an announcement</strong> </div>  :

                                  selectedCard && (

                            <div className={"relative"}>
                             <div className={" font-bold text-2xl text-center"}>
                                 <h2>{selectedCard.subject}</h2>
                             </div>

                             <div className={"absolute top-0 right-0"}>{selectedCard.important ? <FaExclamationTriangle className={"mr-3 text-2xl text-yellow cursor-pointer"}/> : ""}</div>

                              <p className={"p-3"}>{selectedCard.body}</p>

                            </div>


                      )}

                      </div>

                  </div>

              </div>

          </main>
      </>
  )
}