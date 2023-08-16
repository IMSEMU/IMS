import Image from 'next/image'
import {HomeNav} from "@/app/components/homeNav";
import {Jumbotron} from "@/app/components/jumbotron";
import {Announcement} from "@/app/components/announcement";
import {CompletedInternships} from "@/app/components/completedInternships";
import {InternshipPositions} from "@/app/components/internshipPositions";

export const metadata = {
  title: 'Home | I.M.S.',
}
export default function Home() {
  return (
    <main className={"mx-"}>
        <HomeNav />
        <Jumbotron />
        <Announcement />
        <CompletedInternships />
        <InternshipPositions />
    </main>
  )
}
