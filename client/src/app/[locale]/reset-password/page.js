import { Suspense } from "react";
import ResetPassword from "../reset-password/components/resetPassword";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Reset Password | I.M.S.",
};
export default function resetPass() {
  return (
    <Suspense fallback={<Loading />}>
      <div className={" bg-white dark:bg-dark_2"}>
        <ResetPassword />
      </div>
    </Suspense>
  );
}
