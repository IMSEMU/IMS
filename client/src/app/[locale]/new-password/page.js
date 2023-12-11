import { Suspense } from "react";
import NewPassword from "./components/newPassword";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Change Password | I.M.S.",
};
export default function newPass() {
  return (
    <Suspense fallback={<Loading />}>
      <div className={" bg-white dark:bg-dark_2"}>
        <NewPassword />
      </div>
    </Suspense>
  );
}
