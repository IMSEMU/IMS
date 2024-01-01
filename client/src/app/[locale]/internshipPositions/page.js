import { HomeFooter } from "../components/homeFooter";
import { InternshipCards } from "./component/internships";
import { Suspense } from "react";
import Loading from "../globalComponents/loading";
import { MobileNav } from "../globalComponents/mobileNav";

export const metadata = {
  title: "Available Internships | I.M.S.",
};
export default function InternshipPositions() {
  return (
    <Suspense fallback={<Loading />}>
      <main className={"bg-white dark:bg-dark_2 min-h-full"}>
        <div className={""}>
          <InternshipCards />
          <HomeFooter />
        </div>
        <MobileNav />
      </main>
    </Suspense>
  );
}
