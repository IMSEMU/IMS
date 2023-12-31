import { Suspense } from "react";
import { BookmarksPage } from "./components/bookmarks";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Discussion Forum | I.M.S.",
};
export default function Bookmarks() {
  return (
    <Suspense fallback={<Loading />}>
      <main className={"bg-white dark:bg-dark_1 min-h-screen"}>
        <div className={""}>
          <BookmarksPage />
        </div>
      </main>
    </Suspense>
  );
}
