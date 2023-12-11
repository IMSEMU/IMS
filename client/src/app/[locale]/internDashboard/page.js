import { Suspense } from "react";
import { InternDashboardPage } from "./components/internDashboardPage";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Dashboard | I.M.S.",
};

const InternDashboard = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className={"p-0 m-0 bg-white dark:bg-dark_2"}>
        <InternDashboardPage />
      </main>
    </Suspense>
  );
};
export default InternDashboard;
