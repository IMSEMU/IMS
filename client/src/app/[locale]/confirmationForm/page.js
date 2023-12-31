import { Suspense } from "react";
import { ConfirmationForm } from "./components/formPage";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Internship Confirmation Form | I.M.S.",
};

const Form = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="bg-white dark:bg-dark_1 h-screen">
        <ConfirmationForm />
      </main>
    </Suspense>
  );
};

export default Form;
