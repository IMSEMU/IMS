"use client"
import {Jumbotron} from "@/app/internshipPositions/component/jumbotron";
import {InternshipCards} from "@/app/internshipPositions/component/internships";
import {useState} from "react";

export const AvailableInternship = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
  };


  return(
      <>
        <main>
            <Jumbotron onSearch={handleSearch}/>
            <InternshipCards searchQuery={searchQuery}/>
        </main>
      </>
  )
}