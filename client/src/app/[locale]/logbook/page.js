import { Suspense } from "react";
import { LogbookPage } from "./components/logbookPage";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Logbook | I.M.S.",
};
const Logbook = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className=" min-w-screen min-h-screen dark:bg-dark_1">
        <LogbookPage />
      </main>
    </Suspense>
  );
};

export default Logbook;
