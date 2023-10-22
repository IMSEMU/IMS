import { Navbar } from "../[locale]/globalComponents/Navbar";
import { Jumbotron } from "../[locale]/components/jumbotron";
import { Announcement } from "../[locale]/components/announcement";
import { CompletedInternships } from "../[locale]/components/completedInternships";
import { InternshipPositions } from "../[locale]/components/internshipPositions";
import { HomeFooter } from "../[locale]/components/homeFooter";

export const metadata = {
  title: "Home | I.M.S.",
};
export default function Home() {
  return (
    <main className={"bg-white dark:bg-dark_2"}>
      <Navbar />
      <Jumbotron />
      <Announcement />
      <CompletedInternships />
      <InternshipPositions />
      <HomeFooter />
    </main>
  );
}
