import {Navbar} from "@/app/globalComponents/Navbar";
import {AvailableInternship} from "@/app/internshipPositions/component/availableInternship";
import {HomeFooter} from "@/app/components/homeFooter";

export const metadata = {
  title: 'Available Internships | I.M.S.',
}
export default function InternshipPositions() {

  return (
    <main className={"bg-white dark:bg-dark_2 min-h-full"}>
        <div className={''}>
            <Navbar />
            <AvailableInternship />
            <HomeFooter />
        </div>
    </main>
  )
}
