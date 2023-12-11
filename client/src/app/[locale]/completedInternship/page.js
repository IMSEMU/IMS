import { Table } from "./components/table";
import { Navbar } from "../globalComponents/Navbar";
import { Suspense } from "react";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Completed Internships | I.M.S.",
};
export default function CompletedInternship() {
  return (
    <Suspense fallback={<Loading />}>
      <div className={"min-h-screen dark:bg-dark_2 bg-white"}>
        <div className={""}>
          <Navbar />
          <Table />
        </div>
      </div>
    </Suspense>
  );
}
