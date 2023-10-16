import {TopNav} from "@/app/internDashboard/components/topNav";
import {Dashboard} from "@/app/internDashboard/components/dashboard";

export const Body = () => {
   return(
      <main className={'h-full w-full'}>
          <TopNav />
          <Dashboard />
      </main>
  )
}