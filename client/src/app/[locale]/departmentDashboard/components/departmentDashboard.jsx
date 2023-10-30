import { MobileNav } from "../../globalComponents/mobileNav";
import { PcSideNav } from "../../globalComponents/pcSideNav";
import { Dashboard } from "./dashboard";

export const DepartmentDashboardPage = () => {
    return ( 
        <main className="flex ">
            <PcSideNav />
            <Dashboard />
            <MobileNav />
        </main>
     );
}
 
