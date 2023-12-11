import { Suspense } from "react";
import { CompanyDashboardPage } from "./components/companyDashboardPage";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Organization Dashboard | I.M.S.",
};

const Forms = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="">
        <CompanyDashboardPage />
      </main>
    </Suspense>
  );
};

export default Forms;
