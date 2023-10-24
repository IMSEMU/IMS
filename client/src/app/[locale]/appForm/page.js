import { ApplicationForm } from "./components/formPage";

export const metadata = {
    title: 'Internship Application Form | I.M.S.',
  }
  
const Forms = () => {

    return ( 
        <main className="bg-white dark:bg-dark_1 h-screen">
            <ApplicationForm/>
        </main>
     );
}
 
export default Forms;