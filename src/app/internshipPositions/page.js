import {HomeNav} from "@/app/components/homeNav";
import {AvailableInternship} from "@/app/internshipPositions/component/availableInternship";

export const metadata = {
  title: 'Available Internships | I.M.S.',
}
export default function InternshipPositions() {

  return (
    <main className={""}>
        <HomeNav />
        <AvailableInternship />
    </main>
  )
}
