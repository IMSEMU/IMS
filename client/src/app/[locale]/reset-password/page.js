import ResetPassword from "../reset-password/components/resetPassword";

export const metadata = {
  title: "Reset Password | I.M.S.",
};
export default function resetPass() {
  return (
    <div className={" bg-white dark:bg-dark_2"}>
      <ResetPassword />
    </div>
  );
}
