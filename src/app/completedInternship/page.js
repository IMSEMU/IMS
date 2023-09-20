import {Table} from "@/app/completedInternship/components/table";
import {Navbar} from "@/app/globalComponents/Navbar";

export const metadata = {
  title: 'Completed Internships | I.M.S.',
}
export default function CompletedInternship () {
return(
    <div className={'min-h-screen dark:bg-dark_2 bg-white'}>
        <div className={''}>
            <Navbar />
            <Table />
        </div>
    </div>
)
}