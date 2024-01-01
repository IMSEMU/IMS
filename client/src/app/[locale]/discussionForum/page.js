import { Suspense } from "react";
import { DiscussionPage } from "./components/discussionPage";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Discussion Forum | I.M.S.",
};
export default function InternshipPositions() {
  return (
    <Suspense fallback={<Loading />}>
      <main className={"bg-white dark:bg-dark_2 min-h-full"}>
        <div className={""}>
          <DiscussionPage />
        </div>
      </main>
    </Suspense>
  );
}