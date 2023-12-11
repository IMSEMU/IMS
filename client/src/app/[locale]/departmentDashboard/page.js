import { Suspense } from "react";
import { DepartmentDashboardPage } from "./components/departmentDashboard";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Dashboard | I.M.S.",
};

const SupervisorsDashboard = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <DepartmentDashboardPage />
      </main>
    </Suspense>
  );
};

export default SupervisorsDashboard;
