import { Suspense } from "react";
import { InsuranceForm } from "./components/formPage";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Social Insurance Form | I.M.S.",
};

const Form = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="bg-white dark:bg-dark_1 h-screen">
        <InsuranceForm />
      </main>
    </Suspense>
  );
};

export default Form;
