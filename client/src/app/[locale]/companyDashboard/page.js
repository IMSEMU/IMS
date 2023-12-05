import { Dashboard } from "../companyDashboard/components/dashboard";
import { MobileNav } from "../globalComponents/mobileNav";
import { PcSideNav } from "../globalComponents/pcSideNav";

export const metadata = {
    title: 'Organization Dashboard | I.M.S.',
  }
  
const Forms = () => {

    return ( 
        <main className="flex">
          <PcSideNav />
           <Dashboard />
           <MobileNav />
        </main>
     );
}
 
export default Forms;