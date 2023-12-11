import Loading from "../globalComponents/loading";
import { CompanyEval } from "./components/formPage";
import { Suspense } from "react";

export const metadata = {
  title: "Company Internship Supervisor Evaluation| I.M.S.",
};

const Evaluation = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="bg-white dark:bg-dark_1 h-screen">
        <CompanyEval />
      </main>
    </Suspense>
  );
};

export default Evaluation;
