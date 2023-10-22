import { InternDashboardPage } from "./components/internDashboardPage";

export const metadata = {
    title: 'Dashboard | I.M.S.',
  }

const InternDashboard = () => {
    return(
        <main className={'p-0 m-0 bg-white dark:bg-dark_2'}>
           <InternDashboardPage/>
        </main>
    )
}
export default InternDashboard;