import { Suspense } from "react";
import { ApplicationForm } from "./components/formPage";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Internship Application Form | I.M.S.",
};

const Forms = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="bg-white dark:bg-dark_1 h-screen">
        <ApplicationForm />
      </main>
    </Suspense>
  );
};

export default Forms;
