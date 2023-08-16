import {Table} from "@/app/completedInternship/components/table";
import {HomeNav} from "@/app/components/homeNav";

export const metadata = {
  title: 'Completed Internships | I.M.S.',
}
export default function CompletedInternship () {
return(
    <>
        <HomeNav />
      <Table />
    </>
)
}