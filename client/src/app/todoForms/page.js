import { Navbar } from "../globalComponents/Navbar";
import CompanyInformation from "./components/companyInformation";
import CompanySupervisor from "./components/companySupervisorInfo";
import StudentInfo from "./components/studentsInfo";

export const metadata = {
    title: 'Logbook | I.M.S.',
  }
  
const Forms = () => {

    return ( 
        <main className="bg-white dark:bg-dark_1 h-screen">
            <Navbar />
            <div className="mt-4 flex justify-center items-center font-bold text-black dark:text-white">
                <div className="border-x-[0.4rem] text-xl border-yellow"><p className="px-2">Summer internship Form</p></div>
            </div>
            {/* <StudentInfo /> */}
            <CompanyInformation />
            {/* <CompanySupervisor /> */}
        </main>
     );
}
 
export default Forms;