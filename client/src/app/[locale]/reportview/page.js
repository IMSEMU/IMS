import { Suspense } from "react";
import { ViewPage } from "./components/viewPage";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Internship Confirmation Form | I.M.S.",
};

const Form = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="bg-white dark:bg-dark_1 h-screen">
        <ViewPage />
      </main>
    </Suspense>
  );
};

export default Form;
