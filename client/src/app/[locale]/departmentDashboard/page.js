import { DepartmentDashboardPage } from "./components/departmentDashboard";

export const metadata = {
  title: "Dashboard | I.M.S.",
};

const SupervisorsDashboard = () => {
  return (
    <main>
      <DepartmentDashboardPage />
    </main>
  );
};

export default SupervisorsDashboard;
