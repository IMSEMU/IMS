import { Suspense } from "react";
import { AdminDashboardPage } from "./components/adminDashboard";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Dashboard | I.M.S.",
};

const AdminDashboard = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <AdminDashboardPage />
      </main>
    </Suspense>
  );
};

export default AdminDashboard;
