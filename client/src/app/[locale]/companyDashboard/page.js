import { Dashboard } from "../companyDashboard/components/dashboard";
import { MobileNav } from "../globalComponents/mobileNav";

export const metadata = {
    title: 'Organization Dashboard | I.M.S.',
  }
  
const Forms = () => {

    return ( 
        <main className="">
           <Dashboard />
           <MobileNav />
        </main>
     );
}
 
export default Forms;