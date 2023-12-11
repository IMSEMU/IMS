import { Suspense } from "react";
import LoginSection from "../login/components/loginSection";
import Loading from "../globalComponents/loading";

export const metadata = {
  title: "Login | I.M.S.",
};
export default function Login() {
  return (
    <div className={" bg-white dark:bg-dark_2"}>
      <Suspense fallback={<Loading />}>
        <LoginSection />
      </Suspense>
    </div>
  );
}
