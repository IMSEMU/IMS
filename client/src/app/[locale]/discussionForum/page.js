import { Suspense } from "react";
import { DiscussionPage } from "./components/discussionPage";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Discussion Forum | I.M.S.",
};
export default function InternshipPositions() {
  return (
    <Suspense fallback={<Loading />}>
      <main className={"bg-white dark:bg-dark_1 min-w-screen min-h-screen"}>
        <div className={""}>
          <DiscussionPage />
        </div>
      </main>
    </Suspense>
  );
}
