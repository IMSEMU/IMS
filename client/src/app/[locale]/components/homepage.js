"use client";
import { Navbar } from "../globalComponents/Navbar";
import { Jumbotron } from "./jumbotron";
import { Announcement } from "./announcement";
import { CompletedInternships } from "./completedInternships";
import { InternshipPositions } from "../internshipPositions/component/internshipPositions";
import { HomeFooter } from "./homeFooter";
import { LoggedInNavbar } from "../globalComponents/loggedinNavbar";
import { MobileNav } from "../globalComponents/mobileNav";

export default function HomePage() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("user"));
  const userrole = user?.userrole;

  return (
    <main className={"bg-white dark:bg-dark_2"}>
      {isLoggedIn ? <LoggedInNavbar userrole={userrole} /> : <Navbar />}

      <Jumbotron />
      <Announcement />
      <CompletedInternships />
      <InternshipPositions />
      <HomeFooter />
      <MobileNav />
    </main>
  );
}
