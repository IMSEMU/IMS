import {HomeNav} from "@/app/components/homeNav";
import {AvailableInternship} from "@/app/internshipPositions/component/availableInternship";
import {HomeFooter} from "@/app/components/homeFooter";

export const metadata = {
  title: 'Available Internships | I.M.S.',
}
export default function InternshipPositions() {

  return (
    <main className={"bg-white dark:bg-dark_2 min-h-full"}>
        <div className={''}>
            <HomeNav />
            <AvailableInternship />
            <HomeFooter />
        </div>
    </main>
  )
}
