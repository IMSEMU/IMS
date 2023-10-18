import { MobileNav } from "../globalComponents/mobileNav";
import { PcSideNav } from "../globalComponents/pcSideNav";
import { LogbookPage } from "./components/logbookPage";

export const metadata = {
  title: 'Logbook | I.M.S.',
}
const Logbook = () => {
  return(
      <main className="flex flex-nowrap min-w-screen">
        <PcSideNav />
         <LogbookPage />
         <MobileNav />
      </main>
  )
}

export default Logbook;