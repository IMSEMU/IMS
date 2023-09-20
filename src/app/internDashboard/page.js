import {PcSideNav} from "@/app/internDashboard/components/pcSideNav";
import {Body} from "@/app/internDashboard/components/body";
import {TabletSideNav} from "@/app/internDashboard/components/tabletSideNav";
import {MobileNav} from "@/app/internDashboard/components/mobileNav";

export const metadata = {
  title: 'Dashboard | I.M.S.',
}
const InternDashboard = () => {
    return(
        <main className={'p-0 m-0 bg-white dark:bg-dark_2'}>


            {/*Sidenav and body*/}
            <div className={'flex flex-nowrap'}>
               <PcSideNav />
               <Body />
               <MobileNav />
            </div>

        </main>
    )
}
export default InternDashboard;