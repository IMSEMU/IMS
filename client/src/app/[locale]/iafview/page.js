import Loading from "../globalComponents/loading";
import { ViewPage } from "./components/viewPage";
import { Suspense } from "react";

export const metadata = {
  title: "Internship Application Form | I.M.S.",
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
