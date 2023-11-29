import { CompanyEval } from "./components/formPage";

export const metadata = {
  title: "Company Internship Supervisor Evaluation| I.M.S.",
};

const Evaluation = () => {
  return (
    <main className="bg-white dark:bg-dark_1 h-screen">
      <CompanyEval />
    </main>
  );
};

export default Evaluation;
