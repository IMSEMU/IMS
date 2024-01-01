import { Suspense } from "react";
import { Report } from "./components/formPage";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Report | I.M.S.",
};

const ReportSubmit = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="bg-white dark:bg-dark_1 h-screen">
        <Report />
      </main>
    </Suspense>
  );
};

export default ReportSubmit;
