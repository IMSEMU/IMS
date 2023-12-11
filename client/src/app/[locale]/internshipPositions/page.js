import { Navbar } from "../globalComponents/Navbar";
import { HomeFooter } from "../components/homeFooter";
import { InternshipCards } from "./component/internships";
import { Suspense } from "react";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Available Internships | I.M.S.",
};
export default function InternshipPositions() {
  return (
    <Suspense fallback={<Loading />}>
      <main className={"bg-white dark:bg-dark_2 min-h-full"}>
        <div className={""}>
          <Navbar />
          <InternshipCards />
          <HomeFooter />
        </div>
      </main>
    </Suspense>
  );
}
