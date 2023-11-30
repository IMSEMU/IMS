import { Report } from "./components/formPage";

export const metadata = {
  title: "Report | I.M.S.",
};

const ReportSubmit = () => {
  return (
    <main className="bg-white dark:bg-dark_1 h-screen">
      <Report />
    </main>
  );
};

export default ReportSubmit;
