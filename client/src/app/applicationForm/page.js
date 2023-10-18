import { Navbar } from "../globalComponents/Navbar";
import CompanyInformation from "./components/companyInformation";
import CompanySupervisor from "./components/companySupervisorInfo";
import StudentInfo from "./components/studentsInfo";

export const metadata = {
    title: 'Internship Application Form | I.M.S.',
  }
  
const Forms = () => {

    return ( 
        <main className="bg-white dark:bg-dark_1 h-screen">
            <Navbar />
            <div className="my-1 flex justify-center items-center font-bold">
                <div className="border-x-[0.4rem] text-2xl border-yellow"><p className="px-2">Internship Application Form</p></div>
            </div>
            <StudentInfo />
            <CompanyInformation />
            <CompanySupervisor />
        </main>
     );
}
 
export default Forms;