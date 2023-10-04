import {Navbar} from "@/app/globalComponents/Navbar";
import {Jumbotron} from "@/app/components/jumbotron";
import {Announcement} from "@/app/components/announcement";
import {CompletedInternships} from "@/app/components/completedInternships";
import {InternshipPositions} from "@/app/components/internshipPositions";
import {HomeFooter} from "@/app/components/homeFooter";

export const metadata = {
  title: 'Home | I.M.S.',
}
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
  )
}
