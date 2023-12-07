"use client";
import { Jumbotron } from "../component/jumbotron";
import { InternshipCards } from "../component/internships";
import { useState } from "react";

export const AvailableInternship = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <main>
        <Jumbotron onSearch={handleSearch} />
        <InternshipCards searchQuery={searchQuery} />
      </main>
    </>
  );
};
